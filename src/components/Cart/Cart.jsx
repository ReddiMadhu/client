import { Box, Button, Grid, Typography,styled } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import axios from "axios";



const Container =styled(Grid)(({theme})=>({
padding:'30px 135px',
[theme.breakpoints.down('md')]:{
    padding:'15px 0'
}
}))

const Header=styled(Box)`
padding :15px 24px;
background:#fff
`
const ButtonWrapper=styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 /10%);
border-top:1px solid #f0f0ff0;`

const StyledButton=styled(Button)`
display:flex;
height:51px;
margin-left:auto;
background:#fb641b;
color:#fff;
width:250px`


const LeftComponent=styled(Grid)(({theme})=>({
paddingRight:'15px',
[theme.breakpoints.down('sm')]:{
    marginBottom:15
}
}))



const Cart =()=>{
    const {cartItems}=useSelector(state=>state.cart);
    let price=0;
        cartItems.map(item=>{
            price+=item.price.cost;
        });
    const buyNow=async()=>{
        try {
            const orderUrl = "http://localhost:8000/orders";
            const { data } = await axios.post(orderUrl, { amount: price });
            console.log(data);
            initPayment(data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const initPayment = (data) => {
        const options = {
            key: "rzp_test_dQqxUGF8mQrSWg",
            amount: data.amount,
            currency: data.currency,
            description: "Test Transaction",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = "http://localhost:8000/verify";
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    return(
        <>
            {
                cartItems.length ?
                <Container container>
                    <LeftComponent item lg={9} md={9}sm={12} xs={12}>
                    <Header>
                        <Typography>MY CART ({cartItems.length})</Typography>
                    </Header>
                    {
                        cartItems.map(item=>(
                            <CartItem item={item}/>
                        ))
                    }
                    <ButtonWrapper>
                        <StyledButton variant="contained" onClick={()=>buyNow()}>PlaceOrder</StyledButton>
                    </ButtonWrapper>
                    </LeftComponent>
                    <Grid item  lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems}></TotalView>
                    </Grid>
                </Container>:<EmptyCart/>
            }
        </>
    )
}

export default Cart;