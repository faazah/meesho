// import {pic1} from "../images/pic1.jpg";
import "./Home.css";
import { Navbar } from "./Navbar";

export const Home = () =>{
    return(
        <>
            <Navbar/>
            <div id="imgDiv1">
                <img className="img1" src="../../images/pic1.jpg"/>
                <h1>Top Categories to choose from</h1>
                <img className="img1" src="../../images/pic2.jpg"/>
                <img className="img1" src="../../images/pic3.jpg"/>
                <img className="img1" src="../../images/pic4.jpg"/>
                <img className="img1" src="../../images/pic5.jpg"/>
            </div>
        </>
    )
}