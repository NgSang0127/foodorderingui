import {api, API_URL} from "../../component/config/api";
import {
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_EVENTS_FAILURE,
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_RESTAURANT_FAILURE,
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    DELETE_EVENTS_FAILURE,
    DELETE_EVENTS_REQUEST,
    DELETE_EVENTS_SUCCESS,
    DELETE_RESTAURANT_FAILURE,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    GET_ALL_EVENTS_FAILURE,
    GET_ALL_EVENTS_REQUEST,
    GET_ALL_EVENTS_SUCCESS,
    GET_ALL_RESTAURANTS_FAILURE,
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILURE,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_BY_USER_ID_FAILURE,
    GET_RESTAURANT_BY_USER_ID_REQUEST,
    GET_RESTAURANT_BY_USER_ID_SUCCESS,
    GET_RESTAURANT_CATEGORY_FAILURE,
    GET_RESTAURANT_CATEGORY_REQUEST,
    GET_RESTAURANT_CATEGORY_SUCCESS,
    GET_RESTAURANTS_EVENTS_FAILURE,
    GET_RESTAURANTS_EVENTS_REQUEST,
    GET_RESTAURANTS_EVENTS_SUCCESS,
    UPDATE_RESTAURANT_FAILURE,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_STATUS_FAILURE,
    UPDATE_RESTAURANT_STATUS_REQUEST,
    UPDATE_RESTAURANT_STATUS_SUCCESS,
    UPDATE_RESTAURANT_SUCCESS
} from "./ActionType";

export const getAllRestaurantsAction=(token) =>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_RESTAURANTS_REQUEST});
        try{
            const {data}=await api.get("/api/restaurants",{
                headers:{
                    Authorization:`Bearer ${token}`
                },
            });
            console.log("All restaurant ",data);
            dispatch({type:GET_ALL_RESTAURANTS_SUCCESS,payload:data});
        }catch(err){
            console.log("Catch error: ",err);
            dispatch({type:GET_ALL_RESTAURANTS_FAILURE,payload:err});
        }
    }
};

export const getRestaurantById =(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTAURANT_BY_ID_REQUEST});
        try {
            const {data}=await api.get(`/api/restaurants/${reqData.restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                }
            });
            dispatch({type:GET_RESTAURANT_BY_ID_SUCCESS,payload:data});
        }catch (err) {
            console.error("Catch error",err);
            dispatch({type:GET_RESTAURANT_BY_ID_FAILURE,payload:err});
        }
    }
}

export const getRestaurantByUserId=(jwt)=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTAURANT_BY_USER_ID_REQUEST});
        try{
            const {data}=await api.get(`/api/admin/restaurants/user`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("Get restaurant by user id",data);
            dispatch({type:GET_RESTAURANT_BY_USER_ID_SUCCESS,payload:data});
        }catch(err){
            console.log("Catch error",err);
            dispatch({type:GET_RESTAURANT_BY_USER_ID_FAILURE,payload:err})
        }
    }
};

export const createRestaurant=(reqData)=>{
    console.log("Token-------------",reqData.token);
    return async (dispatch)=>{
        dispatch({type:CREATE_RESTAURANT_REQUEST});
        try{
            const {data}=await api.post(`/api/admin/restaurants`,reqData.data,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`
                }
            });
            dispatch({type:CREATE_RESTAURANT_SUCCESS,payload:data});
            console.log("Created restaurant ",data);
        }catch(err){
            console.log("Catch error",err);
            dispatch({type:CREATE_RESTAURANT_FAILURE,payload:err});
        }
    }
};

export const updateRestaurant=({restaurantId,restaurantData,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_RESTAURANT_REQUEST});
        try {
            const {data}=await api.put(`/api/admin/restaurants/${restaurantId}`,restaurantData,
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                });
            dispatch({type:UPDATE_RESTAURANT_SUCCESS,payload:data});
            console.log("Update successful with restaurant Id",restaurantId);
        }catch(err){
            dispatch({type:UPDATE_RESTAURANT_FAILURE,payload:err});
        }
    }
};

export const deleteRestaurant=({restaurantId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:DELETE_RESTAURANT_REQUEST});
        try{
            const {data}=await api.delete(`/api/admin/restaurants/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            })
            dispatch({type:DELETE_RESTAURANT_SUCCESS,payload:restaurantId});
            console.log("Delete successful with restaurant id",restaurantId);
        }catch(err){
            console.log("Catch error",err);
            dispatch({type:DELETE_RESTAURANT_FAILURE,payload:err});
        }
    }
};

export const updateRestaurantStatus=({restaurantId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_RESTAURANT_STATUS_REQUEST});
        try{
            const {data}=await api.put(`/api/admin/restaurants/${restaurantId}/status`,
                {},
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`
                    }
                });
            dispatch({type:UPDATE_RESTAURANT_STATUS_SUCCESS,payload:data});
            console.log("Update status successful with restaurant id",restaurantId);
        }catch(err){
            console.log("Catch error",err);
            dispatch({type:UPDATE_RESTAURANT_STATUS_FAILURE,payload:err});
        }
    }
};

export const createEventAction=({reqData,jwt,restaurantId})=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_EVENTS_REQUEST});
        try{
            const {data}=await api.post(`/api/admin/events/restaurants/${restaurantId}`,
                reqData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
                });
            console.log("Create events",reqData);
            dispatch({type:CREATE_EVENTS_SUCCESS,payload:data});

        }catch (err){
            console.log("Catch error",err);
            dispatch({type:CREATE_EVENTS_FAILURE,payload:err});
        }
    }
};

export const getAllEvents=({jwt})=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_EVENTS_REQUEST});
        try {
            const {data}=await api.get(`/api/events`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            dispatch({type:GET_ALL_EVENTS_SUCCESS,payload:data});
            console.log("Get all events",data);
        }catch (e) {
            console.log("Catch error",e);
            dispatch({type:GET_ALL_EVENTS_FAILURE,payload:e});
        }
    }
};

export const deleteEventAction=({eventId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:DELETE_EVENTS_REQUEST});
        try{
            const {data}=await api.delete((`/api/admin/events/${eventId}`),{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            console.log("Delete events",data);
            dispatch({type:DELETE_EVENTS_SUCCESS,payload:eventId});

        }catch (e){
            console.log("Catch error",e);
            dispatch({type:DELETE_EVENTS_FAILURE,payload:e});
        }
    }
};

export const getRestaurantEvents=({restaurantId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTAURANTS_EVENTS_REQUEST});
        try {
            const {data}=await api.get(`/api/admin/events/restaurants/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            console.log("Get restaurants event",data);
            dispatch({type:GET_RESTAURANTS_EVENTS_SUCCESS,payload:data});

        }catch(e){
            console.log("Catch error",e);
            dispatch({type:GET_RESTAURANTS_EVENTS_FAILURE,payload:e});
        }
    }
};

export const createCategoryAction=({reqData,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_CATEGORY_REQUEST});
        try {
            const {data}=await api.post(`/api/admin/category`,reqData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            console.log("Create category",data);
            dispatch({type:CREATE_CATEGORY_SUCCESS,payload:data});
        }catch(e) {
            console.log("Catch error",e);
            dispatch({type:CREATE_CATEGORY_FAILURE,payload:e});
        }
    }
};

export const getRestaurantsCategory=({jwt,restaurantId})=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTAURANT_CATEGORY_REQUEST});
        try {
            const {data}=await api.get(`/api/category/restaurant/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            console.log("Get restaurant category",data);
            dispatch({type:GET_RESTAURANT_CATEGORY_SUCCESS,payload:data});
        }catch (e){
            console.log("Catch error",e);
            dispatch({type:GET_RESTAURANT_CATEGORY_FAILURE,payload:e});
        }
    }
}




