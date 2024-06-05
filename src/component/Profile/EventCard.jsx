import React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
    return (
        <div>
            <Card sx={{width: 345}}>
                <CardMedia
                    sx={{height: 345}}
                    image="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
                <CardContent>
                    <Typography variant="h5" component={"div"}>
                        VietNam Fast Food
                    </Typography>
                    <Typography variant="body2">
                        50% off on your first order
                    </Typography>
                    <div className="py-2 space-y-2">
                        <p>{"mumbai"}</p>
                        <p className="text-sm text-blue-500">June 2,2024 12:00 AM</p>
                        <p className="text-sm text-red-500">June 3,2024 12:00 AM</p>
                    </div>
                </CardContent>
                {   true &&
                    <CardActions>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </CardActions>
                }
            </Card>
        </div>
    );
};

export default EventCard;
