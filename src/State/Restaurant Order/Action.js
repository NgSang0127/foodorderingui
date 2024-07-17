import {
    GET_RESTAURANTS_ORDER_FAILURE,
    GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS
} from "./ActionType";
import {api} from "../../component/config/api";


export const updateOrdersStatus=({orderId,orderStatus,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_ORDER_STATUS_REQUEST});

        try{
            const {data}=await api.put(`/api/admin/order/${orderId}/${orderStatus}`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`
                },
            });
            const updatedOrder=data;
            console.log("Updated order",updatedOrder);
            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS,payload:updatedOrder});

        }catch(e){
            console.log("Catch error",e);
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE,e});
        }
    }

};

export const fetchRestaurantsOrder=({restaurantId,orderStatus,jwt})=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTAURANTS_ORDER_REQUEST});
        try{
            const {data}=await api.get(`/api/admin/order/restaurant/${restaurantId}`,{
                params:{order_status:orderStatus},
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            const orders=data;
            console.log("Restaurant order-------",orders);
            dispatch({type:GET_RESTAURANTS_ORDER_SUCCESS,payload:orders});
        }catch (e){
            console.log("Catch error",e);
            dispatch({type:GET_RESTAURANTS_ORDER_FAILURE,e});
        }
    }
};