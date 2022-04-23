import { AiOutlineMobile, } from "react-icons/ai";
import "./Nav.css";


export const Nav = () =>{
    return (
        <>
            <div className="nav">
                <div>
                    <h1>meesho</h1>
                </div>
                <div className="nav1">
                    <div style={{marginTop:"15px"}}>
                        <p className="main-menu"><AiOutlineMobile /> Download App
                            <div className="pre-menu1">
                                <h4>Download Form</h4>
                                <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" /><br />
                                <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" />
                            </div>
                        </p>
                    </div>
                    <div style={{marginTop:"15px"}}>
                        <p>Become a Supplier</p>
                    </div>
                </div>
            </div>
        </>
    )
}