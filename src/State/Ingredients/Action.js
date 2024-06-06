import {
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_SUCCESS,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENTS, UPDATE_STOCK
} from "./ActionType";
import {api} from "../../component/config/api";


export const getIngredientsOfRestaurant=({id,jwt})=>{
    return async (dispatch)=>{
        try{
            const {data}=await api.get(`/api/admin/ingredients/restaurant/${id}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            console.log("Get all ingredients",data);
        }catch(e){
            console.log("Catch error",e);
        }
    }
};

export const createIngredient=({data,jwt})=>{
    return async (dispatch)=>{
        try{
            const response=await api.post(`/api/admin/ingredients`,data,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            console.log("Create ingredient",response.data);
            dispatch({type:CREATE_INGREDIENT_SUCCESS,payload:response.data});
        }catch(e){
            console.log("Catch error",e);
        }
    }
};

export const createIngredientCategory=({data,jwt})=>{
    console.log("data",data, "jwt",jwt);
    return async (dispatch)=>{
        try{

        const response=await api.post(`/api/admin/ingredients/category`,data,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
        console.log("Created category ingredient",response.data);
        dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});
        }catch (e) {
            console.log("Catch error",e);

        }
    }

};

export const getIngredientCategory=({id,jwt})=>{
    return async (dispatch)=>{
        try{
        const response= await api.get(`/api/admin/ingredients/restaurant/${id}/category`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            }
        });
        console.log("Get Ingredients category",response.data);
        dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS,payload:response.data});

        }catch (e) {
            console.log("Catch error",e);

        }
    }
};

export const updateStockOfIngredient=({id,jwt})=>{
    return async (dispatch)=>{
        try {
            const {data}=await api.put(`/api/admin/ingredients/${id}/stoke`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            dispatch({type:UPDATE_STOCK,payload:data});
            console.log("Update ingredient stock",data);
        }catch (e) {
            console.log("Catch error",e);
        }
    }
}
