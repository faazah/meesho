import { STORE_DATA,IS_LOADING,IS_ERROR } from "./actionType"



const initialState = {
    isLoading : false,
    isError : false,
    data : []
}

export const reducer = (state= initialState,action)=>{
 switch(action.type){

    case IS_LOADING:
        return {...state, isLoading:true }
      

    case IS_ERROR:
        return {...state, isLoading:false, isError:true }


    case STORE_DATA:
       return {...state, isLoading:false, data: action.payload}

    default:
          return {...state};
   }
 
}