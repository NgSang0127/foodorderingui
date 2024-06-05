import React from 'react';
import {Button, Card} from "@mui/material";

const OrderCard = () => {
    return (
        <Card className="flex justify-between items-center p-5">
            <div className="flex items-center space-x-5">
                <img className="h-16 w-16" src="https://cdn-i.vtcnews.vn/resize/th/upload/2023/04/21/7-quan-pho-ngon-nuc-tieng-duoc-long-nguoi-sanh-an-trong-khu-pho-co-ha-noi-1-1632824891-23553249.jpg" alt=""/>
                <div>
                    <p>Pho</p>
                    <p>30.000 VND</p>

                </div>
            </div>
            <div>
                <Button className="cursor-not-allowed">
                    Completed
                </Button>
            </div>
        </Card>
    );
};

export default OrderCard;
