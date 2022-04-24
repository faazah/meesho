import { useEffect, useState } from "react";
import "./Cart.css";
import { Nav } from "./Nav";

export const Cart = () =>{
    const [cartData, setCartData] = useState([]);

    useEffect(() =>{
        getCartData();
    },[])
    const getCartData = () =>{
        fetch("http://localhost:3001/cart")
        .then((res) => res.json())
        .then((data) => setCartData(data));
    }

    const deleteItem = (id) =>{
        fetch(`http://localhost:3001/cart/${id}`, {
        method: "DELETE",
        }).then(() => console.log("deleted"))

        const updated = cartData.filter((e) => e.id !== id);
        setCartData(updated);
    }

    const totalAmount = cartData.reduce((price,item) => price + item.price,0);

    return(
        <>
            <Nav/>
            <div className="container1">
                <div>
                    {cartData.map((item,i) =>{
                        return (
                            <div className="container1_1">
                                <div>
                                    <img src={item.image_url} height="120px" width="120px" />
                                </div>
                                <div>
                                    <h5>{item.name}</h5>
                                    <p>Size: Free Size</p>
                                    <h4>₹{item.price}</h4>
                                </div>
                                <div onClick={() => deleteItem(item.id)}>
                                    <h2>DELETE</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="container2">
                    <div><h3>Price Details</h3></div>
                    <div className="container2_1">
                        <div><h4>Product Charges</h4></div>
                        <div><h4>₹{totalAmount}</h4></div>
                    </div>
                    <div className="container2_1">
                        <div><h4>Delivery Charges</h4></div>
                        <div><h4>₹0</h4></div>
                    </div>
                    <div className="container2_1">
                        <div><h4>COD Charges</h4></div>
                        <div><h4>₹0</h4></div>
                    </div>
                    <hr/>
                    <div className="container2_1">
                        <div><h4>Order Total</h4></div>
                        <div><h4>₹{totalAmount}</h4></div>
                    </div>
                    <div>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
    
}