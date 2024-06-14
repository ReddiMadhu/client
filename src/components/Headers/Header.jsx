import {AppBar,Box,Toolbar,Typography,styled,IconButton,Drawer,List,ListItem} from '@mui/material';
import CustomButton from './CustomButton';
import Search from './Search';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from '@mui/icons-material';
const StyledHeader=styled(AppBar)`background:#2874f0;
height:55px`

const Component=styled(Link)`margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`

const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;`

const PlusIamge=styled("img")({
    width:10,
    height:10,
    marginLeft:4
})

const CustomButtonWrapper=styled(Box)(({theme})=>({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}))
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
const Header=()=>{
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButton/>
                </ListItem>
            </List>
        </Box>
    );

    const handleOpen = () => {
        setOpen(true);
    }
    return(
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
            <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
            </MenuButton>
            <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to="/">
                    <img src={logoURL} alt="logo"style={{width:75}}/>
                    <Box style={{display:'flex'}}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusIamge src={subURL} alt="sub-logo"/>
                    </Box>
                </Component>
                <Search></Search>
                <CustomButtonWrapper>
                <CustomButton></CustomButton>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    );
}
export default Header;