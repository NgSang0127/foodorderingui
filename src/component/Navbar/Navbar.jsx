import React from 'react';
import {Avatar, Badge, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {blue} from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"

export function Navbar(props) {
  return (
      <div
          className='px-5 z-50 py-[.8rem] bg-[#0C134F] lg:px-20 flex justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li className='logo font-semibold text-gray-300 text-2xl'>
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
            <Avatar sx={{bgcolor: "white", color: blue.A400}}>
              S
            </Avatar>
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

