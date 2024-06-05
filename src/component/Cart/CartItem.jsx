import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Chip, IconButton} from "@mui/material";


const CartItem = () => {
    return (
        <div className="px-5">
            <div className="lg:flex items-center lg:space-x-5">
                <div>
                    <img className="w-[7rem] h-[5rem] object-cover"
                         src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/2/23/FNK_Indian-Fried-Chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1677264108617.jpeg"
                         alt=""/>
                </div>
                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <div className="space-y-1 lg:space-y-3 w-full">
                            <p>Chicken Fried</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-1">
                                    <IconButton>
                                        <RemoveCircleOutlineIcon/>
                                    </IconButton>
                                    <div className="w-5 h-5 text-xs flex items-center">
                                        {5}
                                    </div>
                                    <IconButton>
                                        <AddCircleOutlineIcon/>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <p>150.000 VND</p>
            </div>
            <div className="pt-3 space-x-2">
                {[1,1,1,].map((item)=> <Chip label={"bread"}/> )}
            </div>
        </div>
    );
};

export default CartItem;