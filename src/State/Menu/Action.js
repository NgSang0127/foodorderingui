import {api} from "../../component/config/api";
import {
    CREATE_MENU_ITEM_FAILURE,
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS
} from "./ActionType";

//localhost:8080/api/admin/ingredients/food/16
export const createMenuItem = ({menu, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.post(`/api/admin/food`, menu, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("Created menu", data);
            dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload: data});
        } catch (err) {
            console.log("Catch error", err);
            dispatch({type: CREATE_MENU_ITEM_FAILURE, payload: err});
        }
    }
};

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try {
            const {data} = await api.get(`/api/food/restaurant/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                },
                params: {
                    vegetarian: reqData.vegetarian,
                    seasonal: reqData.seasonal,
                    nonVeg: reqData.nonVeg,
                    food_Category: reqData.foodCategory
                }
            });
            console.log("Menu item by restaurants", data);
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data});
        } catch (err) {
            console.log("Catch error", err);
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: err});
        }
    };
};


export const searchMenuItem=({keyword,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try{
        const {data}=await api.get(`/api/food/search?name=${keyword}`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        console.log("data-------",data);
        dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});

        }catch(err){
            console.log("Catch error",err);
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:err});
        }
    };
}

// export const getAllIngredientsOfMenuItem=(reqData)=>{
//     return async (dispatch)=>{
//         dispatch({type:GET_ALL_IN})
//         try {
//
//         }catch (err){
//
//         }
//     }
// }
export const updateMenuItemsAvailability=({foodId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try{
            const {data}=await api.put(`/api/admin/food/${foodId}`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            console.log("Update menu items availability ",data);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data});
        }catch(err){
            console.log("Catch error",err);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,payload:err});
        }
    }
};

export const deleteFoodAction=({foodId,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try{
            const {data}=await api.delete(`/api/admin/food/${foodId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            console.log("Delete food",data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:foodId});

        }catch(err){
            console.log("Catch error",err);
            dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:err});
        }
    }
};
