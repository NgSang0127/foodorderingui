import React, {useState} from 'react';
import {Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from "./MenuCard";

const categories = [
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"
];
const foodTypes = [
    {
        label: "All",
        value: "all"
    },
    {
        label: "Vegetarian only",
        value: "vegetarian"
    },
    {
        label: "Non-vegetarian",
        value: "non-vegetarian"
    },
    {
        label: "Seasonal",
        value: "seasonal"

    }
];
const menu=[1,1,1,1,1,1];

const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all");
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name);
    }
    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-400 py-2 mt-10">Home/india/indian fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className="w-full h-[40vh] object-cover"
                                src="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/byzevpwi/59abc0a9-2aa1-4aa7-b1b0-4f4462f21a34.png"
                                alt=""/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className="w-full h-[40vh] object-cover"
                                src="https://www.mustdobrisbane.com/sites/default/files/styles/mdb_article_full/public/images/Patina-St-Lucia-Copyright-Must-do-Brisbane.com-pty-ltd-Nov-20210K5A0112.jpg?itok=Wl80u7G0"
                                alt=""/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img
                                className="w-full h-[40vh] object-cover"
                                src="https://cdn.vox-cdn.com/thumbor/qVw98okiGmZ4-v2EypqK7ObXMKc=/0x0:6240x4160/1200x900/filters:focal(2621x1581:3619x2579):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62582192/IMG_2025.280.jpg"
                                alt=""/>
                        </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                    <p className=" text-gray-500 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sssssssssssssssssssssssssssssssssssssssssssss.
                    </p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex items-center gap-3">
                            <LocationOnIcon/>
                            <span>
                                Mumbai, Marharstra
                            </span>
                        </p>
                        <p className="text-gray-500 flex items-center gap-3">
                            <CalendarTodayIcon/>
                            <span>
                                Mon-Sun :9:00 AM - 9:00 PM (Today)
                            </span>
                        </p>

                    </div>
                </div>
            </section>
            <Divider/>
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter ">
                    <div className="box space-y-5  lg:sticky top-28 p-5 shadow-md">
                        <div>
                            <Typography variant="h5" sx={{paddingBottom: "1rem"}}>
                                Food Type
                            </Typography>
                            <FormControl className="py-10 space-y-5 " component={"fieldset"}>
                                <RadioGroup name="food_type" value={foodType} onChange={handleFilter}>
                                    {
                                        foodTypes.map((item) => (
                                            <FormControlLabel key={item.value} value={item.value} control={<Radio/>}
                                                              label={item.label}/>

                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant="h5" sx={{paddingBottom: "1rem"}}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-y-5 " component={"fieldset"}>
                                <RadioGroup name="food_type" value={foodType} onChange={handleFilter}>
                                    {
                                        categories.map((item) => (
                                            <FormControlLabel key={item} value={item} control={<Radio/>}
                                                              label={item}/>

                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {
                        menu.map((item)=>(
                            <MenuCard/>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetails;

