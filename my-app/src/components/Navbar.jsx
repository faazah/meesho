import { AiOutlineMobile, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const goToHome = () =>{
        navigate(`/`);
    }
    const goToCart= () =>{
        navigate(`/cart`);
    }
    const goToSignup = () =>{
        navigate(`/signup`);
    }
    return <>
    <div className="header">
        <div id="container1">
            <h1 onClick={goToHome} style={{cursor:"pointer"}}>meesho</h1>
                <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" />
                <p className="main-menu"><AiOutlineMobile /> Download App
                    <div className="pre-menu1">
                        <h4>Download Form</h4>
                        <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" /><br />
                        <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" />
                    </div>
                </p>
                <p>Become a Supplier</p>
                <p className="main-menu"> <FaUserAlt /><br /> Profile
                    <div className="pre-menu1">
                        <h4>Hello User</h4>
                        <p style={{fontSize:"12px"}}>To access your Meesho Account</p>
                        <button onClick={goToSignup}>Sign Up</button>
                    </div>
                </p>
                <p onClick={goToCart} style={{cursor:"pointer"}}> <AiOutlineShoppingCart /><br />Cart</p>
        </div>
        <hr />
        <div id="container1_1" className="menu-bar">
            <Link to="/products" style={{ textDecoration: "none", marginTop: "1%" }}>Women Ethnic</Link>
            <p>Women Western</p>
            <p>Jwellery & Accessories</p>
            <p>Men</p>
            <p>Beauty & Health</p>
            <p>Bags & Footwear</p>
            <p>Home & Kitchen</p>
            <p>Kids</p>
            <p>Electronics</p>
        </div>
        <hr />
    </div>
    </>
}



