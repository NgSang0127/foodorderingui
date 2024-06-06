import {api} from "../../component/config/api";


export const findCart=(token)=>{
    return async(dispatch)=>{
        dispatch({type:FIND_CART_REQUEST});
        try {
            const {data}=await api.get(`/api/cart/`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            dispatch({type:FIND_CART_SUCCESS,payload:data});
            console.log()
        }catch (e){
            dispatch({type:FIND_CART_FAILURE,payload:e});
        }
    }

};

export const getAllCartItems=(reqData)=>{
    return async(dispatch)=>{
        dispatch({type:GET_ALL_CART_ITEMS_REQUEST});
        try{
            const {data}=await api.get(`/api/carts/${reqData.cartId}/items`,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`,
                }
            });
            dispatch({type:GET_ALL_CART_ITEMS_SUCCESS,payload:data});

        }catch (e) {
            dispatch({type:GET_ALL_CART_ITEMS_FAILURE,payload:e});
        }
    }
};

export const addItemToCart=(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:ADD_ITEM_TO_CART_REQUEST});
        try {
            const {data}=await api.put(`/api/cart/add`,reqData.cartItem,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`
                }
            });
            console.log("Add item to cart",data);
            dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data});
        }catch (e){
            console.log("Catch error");
            dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:e});
        }
    }
};

export const updateCartItem=(reqData)=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_CART_ITEM_REQUEST});
        try{
            const {data}=await api.put(`/api/cart-item/update`,reqData.data,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                }
            });
            console.log("Update cartItem",data);
            dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data});
        }catch (e) {
            console.log("Catch error",e);
            dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:e.message});
        }
    }
};

export const removeCartItem=({cartItemId,jwt}) =>{
    return async (dispatch)=>{
        dispatch({type:REMOVE_CART_ITEM_REQUEST});
        try{
            const {data}=await api.delete(`/api/cart-item/${cartItemId}/remove`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            console.log("Remove cart item",data);
            dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:cartItemId});
        }catch (e) {
            console.log("Catch error",e);
            dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:e.message});
        }
    }
};

export const clearCartAction=()=>{
    return async (dispatch)=>{
        dispatch({type:CLEAR_CART_REQUEST});
        try{
            const {data}=await api.put(`/api/cart/clear`,{},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('jwt')}`
                }
            });
            dispatch({type:CLEAR_CART_SUCCESS,payload:data});
            console.log("Clear cart",data);
        }catch(e){
            console.log("Catch error",e);
            dispatch({type:CLEAR_CART_FAILURE,payload:e.message});
        }
    }
}

