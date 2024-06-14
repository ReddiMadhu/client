
import { Dialog ,Box, TextField, Typography, Button,styled} from "@mui/material";
import { authenticateSignup,authenticateLogin } from "../../service/api";
import { useState,useContext } from "react";
import { DataContext } from "../../context/DataProvider";


const Component=styled(Box)`
height:70vh;
width:90vh
`
const Image=styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
)  center 85% no-repeat;
height:82.5%;
width:40%;
padding :45px 35px;
& >p,&>h5{
    color:#FFFFFF;
    font-weight:600
}
`
const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex :1;
& > div,& > button ,& >p{
    margin-top :20px;
}`

const LoginButton=styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:2px`

const RequestOtp=styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%)`

const Text=styled(Typography)`
font-size:12px;
color:#878787`

const CreateAccount=styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-Weight:600;
cursor:pointer;`
const accountIntitialvalues={
    login:{
        view:'login',
        heading:'login',
        subHeading:"Get acess to your Orders"
    },
    signup:{
        view:'signup',
        heading:"Looks like oyur new here",
        subHeading:"signup here"

    }
}
const SignupIntitialValues={
    firstname:"",
    lastname:'',
    username:'',
    phonenumber:'',
    email:'',
    password:'',

}
const loginIntialValues={
    username:'',
    password:''
}

const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600`
const LoginDialog=({open,setOpen})=>{


    const [error,setError]=useState(false);

    const[account,toggleAccount]=useState(accountIntitialvalues.login);
    const [signup,setSignup]=useState(SignupIntitialValues);

    const{setAccount}=useContext(DataContext);

    const [login,setLogin]=useState(loginIntialValues);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountIntitialvalues.login);
        setError(false);
    }
    const toggleSignup=()=>{
        toggleAccount(accountIntitialvalues.signup)
    }
    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }
    const signupUser=async()=>{
        let response =await authenticateSignup(signup);
        if(!response)return ;
        handleClose();
        setAccount(signup.firstname);
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const loginUser=async()=>{
        let response=await authenticateLogin(login);
        console.log(response);
        if(response.status===200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
    }
    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Box style={{display:'flex',height:'100%'}}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:20}}> {account.subHeading}</Typography>
                    </Image>
                {
                    account.view==='login'?
                            <Wrapper>
                                <TextField variant="standard" onChange={(e)=>onValueChange(e)} name='username' label="Enter username"/>
                               
                                {error && <Error>please enter valid username or password</Error>}
                                
                                <TextField variant="standard"onChange={(e)=>onValueChange(e)} name='password' label="Enter password"/>
                                <Text> By Continuing ,you agree to filpkart terms and policy</Text>
                                <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                                <Typography style={{textAlign:'center'}}>or</Typography>
                                <RequestOtp>Request OTP</RequestOtp>
                                <CreateAccount onClick={()=>toggleSignup()}>New to filpkart ? create an account</CreateAccount>
                            </Wrapper>
                        :
                        <Wrapper>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='firstname' label="Enter FirstName"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='lastname' label="Enter LastName"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='phonenumber' label="Enter mobile number"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='email' label="Enter email"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter username"/>
                        <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter password"/>
                        <LoginButton onClick={()=>signupUser()}>Login</LoginButton>
                        </Wrapper>
                }
                </Box>

            </Component>
        </Dialog>
    )
}

export default LoginDialog;