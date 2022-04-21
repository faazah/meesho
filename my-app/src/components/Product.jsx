import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, handleError, handleLoading, storeData } from "../redux/action";

export const Product = () =>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getData());
    },[]);

    const loading = useSelector((state)=> state.isLoading)
    const productdata = useSelector((state)=> state.data)
    const error  = useSelector((state)=>state.isError)
    console.log(productdata)

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1> Something went wrong</h1>
    } 
    return(
        <>
            <h3>Here comes the data</h3>
        </>
    )
}