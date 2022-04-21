import { useEffect, useState } from "react";
import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { Pagination } from '@mui/material';
import { Navbar } from "./Navbar";

export const Products = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        getData(page);
    }, [page])
    const getData = (page = 1) => {
        fetch(`http://localhost:3001/products?_page=${page}&_limit=8`).then((res) => res.json()).then((d) => {
            setData(d);
        });
    }
    const handleChange = (e, val) => {
        setPage(val);
    }
    return (<>
        <Navbar/>
    <div className="heading">
        <h2 style={{marginLeft : "7%"}}>Women Ethnic Wear</h2>
        <p><b>Showing 1-8</b> out of 46 Products</p>
    </div>
    <div className="container">
        {data.map((e, i) => {
            return (<>
            <div className="dataDiv" key={i}>
                <div className="imgDiv" style={{backgroundImage : `url(${e.image_url})`, backgroundSize:"cover"}}>
                </div>
                <div>
                <p>{e.name}</p>
                <div className="priceDiv">
                    <h2>₹{e.price}</h2>
                    <p>₹{e.strikedoffprice}</p>
                    <p id="discount">{Math.floor(((+e.strikedoffprice-(+e.price))/+e.strikedoffprice)*100)}% off</p>
                </div>
                <p id="staticDiscount">₹50 discount on 1st order</p>
                <p id="free">Free Delivery</p>
                </div>
                <div className="ratingDiv">
                    <div style={i%2===0?{backgroundColor : "white"} : {backgroundColor : "teal"}}>
                        <p style={i%2===0?{color : "#5585f8"} : {color : "white"}}>{(Math.random() * (5-1)+1).toFixed(1)}</p>
                        <AiFillStar style = {i%2===0?{color : "#5585f8", marginTop : "8%"} : {color : "white",marginTop : "8%"}}/>
                    </div>
                    <p>{Math.floor(Math.random() * (50-1)+1)} Reviews</p>
                </div>
            </div>
            </>)
        })}
        <div className="pageDiv">
        <Pagination page={page} count={5} defaultPage={1} siblingCount={0} size="large" onChange={handleChange}/>
        </div>
    </div>
    </>)
}