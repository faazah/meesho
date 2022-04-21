import { STORE_DATA,IS_LOADING ,IS_ERROR} from "./actionType"

export const storeData = (payload) =>({
    type: STORE_DATA,
    payload
})


export const handleLoading = () =>({
    type: IS_LOADING,

})

export const handleError = () =>({
    type: IS_ERROR,

})

export const getData = () =>(dispatch) =>{
    dispatch(handleLoading());
    fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .then((response) => dispatch(storeData(response)))
    .catch((err) => dispatch(handleError()));
}