import React, {useEffect} from 'react';
import AdminSideBar from "./AdminSideBar";
import {Route, Routes} from "react-router-dom";
import DashBoard from "../Dashboard/Dashboard";
import Orders from "../Order/Orders";
import Menu from "../Menu/Menu";
import FoodCategory from "../FoodCategory/FoodCategory";
import Ingredients from "../Ingredients/Ingredients";
import Events from "../../AdminComponent/Event/Events";
import RestaurantDetails from "./RestaurantDetails";
import CreateMenuForm from "../Menu/CreateMenuForm";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantById, getRestaurantsCategory} from "../../State/Restaurant/Action";
import {getMenuItemsByRestaurantId} from "../../State/Menu/Action";
import {fetchRestaurantsOrder} from "../../State/Restaurant Order/Action";

const Admin = () => {
    const {restaurant}=useSelector(store=>store);
    const dispatch=useDispatch();
    const jwt=localStorage.getItem('jwt');
    const handleClose=()=>{

    }
    useEffect(()=>{
        dispatch(getRestaurantsCategory({jwt,restaurantId:restaurant.userRestaurant.id}));
        dispatch(fetchRestaurantsOrder({restaurantId:restaurant.userRestaurant.id,jwt}))

    },[]);
    return (
        <div>
            <div className="lg:flex justify-between">
                <div>
                    <AdminSideBar handleClose={handleClose}/>
                </div>
                <div className="lg:w-[80%]">
                    <Routes>
                        <Route path="/" element={<DashBoard/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                        <Route path="/menu" element={<Menu/>}/>
                        <Route path="/category" element={<FoodCategory/>}/>
                        <Route path="/ingredients" element={<Ingredients/>}/>
                        <Route path="/event" element={<Events/>}/>
                        <Route path="/details" element={<RestaurantDetails/>}/>
                        <Route path="/add-menu" element={<CreateMenuForm/>}/>


                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Admin;
