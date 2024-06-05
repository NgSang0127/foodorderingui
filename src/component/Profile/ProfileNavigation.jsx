import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import {Divider, Drawer, useMediaQuery} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {logout} from "../State/Authentication/Action";
import {useDispatch} from "react-redux";


const menu = [
    {
        title: "Orders",
        icon: <ShoppingBagIcon/>
    },
    {
        title: "Favorites",
        icon: <FavoriteIcon/>
    },
    {
        title: "Address",
        icon: <HomeIcon/>
    },
    {
        title: "Payments",
        icon: <PaymentIcon/>
    },
    {
        title: "Notifications",
        icon: <NotificationsActiveIcon/>
    },
    {
        title: "Events",
        icon: <EventIcon/>
    },
    {
        title: "Logout",
        icon: <LogoutIcon/>
    }
];
const ProfileNavigation = ({open, handleClose}) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const navigate=useNavigate();
    const dispatch =useDispatch();
    const handleNavigate=(item)=>{
        if(item.title==="Logout"){
            dispatch(logout())
            navigate("/")
        }else
        navigate(`/my-profile/${item.title.toLowerCase()}`);
    }

    return (
        <div>
            <Drawer variant={isSmallScreen ? "temporary" : "permanent"}
                    open={isSmallScreen ? open :true} onClose={handleClose}
                    anchor="left"
                    sx={{zIndex: -1,position: "sticky"}}>
                <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-9 pt-16">
                    {
                        menu.map((item, index) => (
                            <>
                                <div
                                    onClick={()=>handleNavigate(item)}
                                    className="px-5 flex item-center space-x-5 cursor-pointer">
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {
                                    index !== menu.length - 1 && <Divider/>
                                }
                            </>
                        ))
                    }
                </div>
            </Drawer>
        </div>
    );
};

export default ProfileNavigation;
