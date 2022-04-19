import { AiOutlineMobile,AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () =>{
    return <>
        <div id="container1">
            <h1>meesho</h1>
            <input type="text" placeholder="Try Saree, Kurti or Search by Product Code"/>
            <p><AiOutlineMobile/> Download App</p>
            <p>Become a Supplier</p>
            <p> <FaUserAlt/><br/> Profile</p>
            <p> <AiOutlineShoppingCart/><br/>Cart</p>
        </div>
        <hr/>
        <div id="container1_1">
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



