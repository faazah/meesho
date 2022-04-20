import { AiOutlineMobile,AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () =>{
    return <>
        <div id="container1">
            <h1>meesho</h1>
            <input type="text" placeholder="Try Saree, Kurti or Search by Product Code"/>
            <p className="main-menu"><AiOutlineMobile/> Download App
                <div className="pre-menu1">
                    <h4>Download Form</h4>
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big.png"/><br/>
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big.png"/>
                </div>
            </p>
            <p>Become a Supplier</p>
            <p className="main-menu"> <FaUserAlt/><br/> Profile
                <div className="pre-menu1">
                    <h4>Hello User</h4>
                    <p>To access your Meesho Account</p>
                    <button>Sign Up</button>
                    <hr/>
                    <h4>My Orders</h4>
                </div>
            </p>
            <p> <AiOutlineShoppingCart/><br/>Cart</p>
        </div>
        <hr/>
        <div id="container1_1" className="menu-bar">
            <p>Women Ethnic</p>
            <p>Women Western</p>
            <p>Jwellery & Accessories</p>
            <p>Men</p>
            <p>Beauty & Health</p>
            <p>Bags & Footwear</p>
            <p>Home & Kitchen</p>
            <p>Kids</p>
            <p>Electronics</p>
        </div>
        <hr/>
    </>
}



