import React from 'react';
import {Avatar, Badge, Box, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {blue} from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import {Person} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export function Navbar(props) {
    const {auth}=useSelector(store=>store);
    const navigate=useNavigate();
    const handleAvatar=()=>{
        if(auth.user?.role === "ROLE_CUSTOMER"){
            navigate("/my-profile")
        }else{
            navigate("/admin/restaurant")
        }
    }
    return (
        <div
            className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#0C134F] lg:px-20 flex justify-between'>
            <div className='flex items-center space-x-4'>
                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <li
                        onClick={()=>navigate("/")}
                        className='logo font-semibold text-gray-300 text-2xl'>
                        Jakie Nguyen
                    </li>
                </div>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{fontSize: "1.5rem"}}/>
                    </IconButton>
                </div>
                <div className=''>
                    {
                        auth.user
                            ?
                            <Avatar
                                onClick={handleAvatar}
                                sx={{bgcolor: "white", color: blue.A400}}>{auth.user?.fullName[0].toUpperCase()}</Avatar>
                            :
                            <IconButton onClick={()=>navigate("/account/login")}>
                                <Person/>
                            </IconButton>
                    }
                </div>
                <div className=''>
                    <IconButton>
                        <Badge color="secondary" badgeContent={3}>
                            <ShoppingCartIcon sx={{fontSize: "1.5rem"}}>
                            </ShoppingCartIcon>
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

