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