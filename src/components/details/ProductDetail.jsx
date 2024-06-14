import { Box, Table, TableBody, TableCell, TableRow, Typography ,styled} from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText =styled(Box)`
font-size:14px;
vertical-align:baseline;
&>p{
    font-size:14px;
    margin-top:10px
}`

const StyledBadge=styled(Badge)`
margin-right:10px;
color:#00cc00;
font-size:15px;
`
const CloumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;

&>td{
    font-size:14px;
    margin-top:10px;
    border:none;
}`
const ProductDetail=({product})=>{
    const date =new Date(new Date().getTime()+(5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    
    return(
        <>
        <Typography>Available offers</Typography>
        <SmallText>
            <Typography><StyledBadge/>Get extra 20% off upto 50 rupee on 1 items(s) T&C</Typography>
            <Typography><StyledBadge/>Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><StyledBadge/>Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or moreT&C</Typography>
            <Typography><StyledBadge/>Partner OfferPurchase now & get 1 surprise cashback coupon in Future</Typography>
            <Typography><StyledBadge/>Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <CloumnText>
                    <TableCell style={{color:'#878787'}}>
                        Delivery
                    </TableCell>
                    <TableCell style={{fontWeight:600}}>
                        Deliver by {date.toDateString()} | 40₹
                    </TableCell>
                </CloumnText>
                <CloumnText>
                    <TableCell style={{color:'#878787'}}>
                        Warranty
                    </TableCell>
                    <TableCell>
                        No  Warranty
                    </TableCell>
                </CloumnText>
                <CloumnText>
                    <TableCell style={{color:'#878787'}}>
                        Seller
                    </TableCell>
                    <TableCell >
                        <Box component='span' style={{color:'#28740'}}> SuperComNet</Box>
                        <Typography>GST invoice Available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost} </Typography>
                    </TableCell>
                </CloumnText>
                <CloumnText>
                    <TableCell colSpan={2}>
                        <img src={adURL} style={{width:390}}/>
                    </TableCell>
                    
                </CloumnText>
                <CloumnText>
                    <TableCell style={{color:'#878787'}}>
                        Description
                    </TableCell>
                    <TableCell>{product.description}</TableCell>
                </CloumnText>
            </TableBody>
        </Table>
        </>
    );
}
export default ProductDetail;