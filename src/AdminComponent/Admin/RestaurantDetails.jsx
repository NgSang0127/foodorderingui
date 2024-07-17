import React from 'react';
import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import {useDispatch, useSelector} from "react-redux";
import {updateRestaurantStatus} from "../../State/Restaurant/Action";

const RestaurantDetails = () => {
    const {restaurant}=useSelector(store=>store);
    const dispatch=useDispatch();
    console.log("Restaurant Details",restaurant);
    const handleRestaurantStatus = () => {
        dispatch(updateRestaurantStatus({
            restaurantId:restaurant.userRestaurant.id,
            jwt:localStorage.getItem('jwt'),
        }))
    }

    return (
        <div className="lg:px-20 px-5 pb-10">
            <div className="py-5 flex justify-center items-center gap-5">
                <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">{restaurant.userRestaurant?.name}</h1>
                <Button
                    color={restaurant.userRestaurant.open ? "error" : "primary"}
                    className="py-[1rem] px-[2rem]"
                    variant="contained"
                    onClick={handleRestaurantStatus}
                    size="large"
                >
                    {restaurant.userRestaurant.open ? "Close" : "Open"}
                </Button>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title={<span className="text-gray-400">Restaurant</span>} />
                        <CardContent>
                            <div className="space-y-4 text-gray-200">
                                <div className="flex">
                                    <p className="w-48">Owner</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>{restaurant.userRestaurant?.owner.fullName}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">Restaurant Name</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>{restaurant.userRestaurant?.name}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">Cuisine Type</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>{restaurant.userRestaurant?.cuisineType}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">Opening Hour</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>{restaurant.userRestaurant?.openingHours}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">Status</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>
                                        {restaurant.userRestaurant?.open ? <span className="px-5 py-2 rounded-full bg-green-500 text-gray-950">Open</span>
                                            : <span className="px-5 py-2 rounded-full bg-red-400 text-gray-950">Close</span>}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Card>
                        <CardHeader title={<span className="text-gray-400">Address</span>} />
                        <CardContent>
                            <div className="space-y-4 text-gray-200">
                                <div className="flex">
                                    <p className="w-48">Country</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>India
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">City</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>Bangkok
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">Postal Code</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>Jackie Ng
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">Street Address</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>Jackie Ng
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Card>
                        <CardHeader title={<span className="text-gray-400">Contact</span>} />
                        <CardContent>
                            <div className="space-y-4 text-gray-200">
                                <div className="flex">
                                    <p className="w-48">Email</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>{restaurant.userRestaurant?.contactInformation?.email}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">Phone</p>
                                    <p className="text-gray-400">
                                        <span className="pr-5">-</span>{restaurant.userRestaurant?.contactInformation?.phone}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="w-48">Social</p>
                                    <div className="text-gray-400 flex items-center space-x-3">
                                        <span>-</span>
                                        <a href={restaurant.userRestaurant?.contactInformation?.instagram}>
                                            <InstagramIcon sx={{ fontSize: "3rem" }} />
                                        </a>
                                        <a href={restaurant.userRestaurant?.contactInformation?.facebook}>
                                            <FacebookIcon sx={{ fontSize: "3rem" }} />
                                        </a>
                                        <a href={restaurant.userRestaurant?.contactInformation?.twitter}>
                                            <XIcon sx={{ fontSize: "3rem" }} />
                                        </a>
                                        <a href={restaurant.userRestaurant?.contactInformation?.tiktok}>
                                            <FontAwesomeIcon icon={faTiktok} style={{ fontSize: "2.75rem" }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default RestaurantDetails;
