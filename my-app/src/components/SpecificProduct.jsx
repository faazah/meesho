import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import "./SpecificProduct.css";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export const SpecificProduct = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        getData();
    },[]);
    const getData = () => {
        fetch(`https://fez-dbjson.herokuapp.com/products?id=${id}`).then((res) => res.json()).then((d) => {
            setProduct(d);
        });
    }
    const goToCart = () =>{
        fetch("http://localhost:3001/cart",{
            method: "POST",
            body: JSON.stringify(product[0]),
            headers: {
                "content-type": "application/json"
            }
        }).then((res) =>res.json()).then((data) =>{console.log(data)})
        navigate(`/cart`);
    }
    return (<> 
        <Navbar/>
        {product.length > 0 ? 
    <div className="container1">
        <div id="div1">
            <img src={product[0].image_url} height="50px" width="47px" />
        </div>
        <div id="div2">
            <div>
                <img src={product[0].image_url} style={{height:"90%"}} alt="" />
            </div>
            <button id="addTocartBtn" onClick={goToCart}>
                <BsCart3/> <b>Add To Cart</b>
            </button>
        </div>
        <div id="div3">
            <p style={{marginLeft:"4%", color:"#999999"}}>Sensational kanjivaram Silk Sarees Vol 11</p>
            <div className="priceDiv">
                    <h2>₹{product[0].price}</h2>
                    <p>₹{product[0].strikedoffprice}</p>
                    <p id="discount">{Math.floor(((+product[0].strikedoffprice-(+product[0].price))/+product[0].strikedoffprice)*100)}% off</p>
            </div>
            <div className="ratingDiv2">
                <div>
                    <p>3.8</p>
                    <AiFillStar style={{color:"white", marginTop : "5%"}}/>
                </div>
                <p>{Math.floor(Math.random() * (50-1)+1)} Ratings, {Math.floor(Math.random() * (50-1)+1)} Reviews</p>
            </div>
            <p id="staticDiscount2">₹50 discount on 1st order</p>
            <p id="free2">Free Delivery</p>
           
        </div>
    </div>
   : "Loading..."}</>)
}