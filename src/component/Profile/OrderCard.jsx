import React from 'react';
import {Button, Card} from "@mui/material";

const OrderCard = ({order,status}) => {
    return (
        <Card className="flex justify-between items-center p-5">
            <div className="flex items-center space-x-5">
                <img className="h-16 w-16" src={order.food.images[0]} alt=""/>
                <div>
                    <p>{order.food.name}</p>
                    <p>{order.totalPrice}$</p>

                </div>
            </div>
            <div>
                <Button className="cursor-not-allowed">
                    {status}
                </Button>
            </div>
        </Card>
    );
};

export default OrderCard;
