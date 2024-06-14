import {styled,Box} from '@mui/material'
import { useEffect } from 'react';
import NavBar from "./NavBar";
import Banner from "./Banner";
import MidSlide from './MidSlide';
import Slide from "./Slide";
import { getProducts } from '../../redux/actions/productAction.js';
import { useDispatch,useSelector } from 'react-redux';
import MidSection from './MidSection';




const Component=styled(Box)`
padding: 10px;
background:#F2F2F2`



const Home=()=>{

    const dispatch=useDispatch();
    const{products}=useSelector(state => state.getProducts)
    console.log(products);
    useEffect(
        ()=>{
            dispatch(getProducts());
        },[dispatch]
    )
    return(
        <>
        <NavBar/>
        <Component>
        <Banner/>
        <MidSlide products={products} title="Deal of the day" timer={true}/>
        <MidSection></MidSection>

        <Slide products={products}title="Discount for u"timer={false}/ >
        <Slide products={products}title="suggested items"timer={false}/>
        <Slide products={products}title="Top selection" timer={false}/>
        
        <Slide products={products}title="Recommending for u" timer={false}/>
        <Slide products={products}title="Trending offers" timer={false}/>
        <Slide products={products}title="Top deals on accessories" timer={false}/>
        <Slide products={products}title="kids Wear" timer={false}/>
        

        </Component>
        </>
    );
}
export default Home;