import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Nav} from "./Nav"


export const Signup = () =>{
    const [input, setInput] = useState("")
    const navigate = useNavigate();
    const goToHome = () =>{
        if(input.length===4)
            navigate(`/`);
        else
            alert("Please enter 4 digit OTP");
    }
    return(
        <>
            <Nav/>
            <div id="sign">
                <div>
                    <img src="https://images.meesho.com/images/marketing/1648820929975.jpeg"/>
                </div>
                <br/>
                <br/>
                <div>
                    <h3>Sign Up to view your profile</h3>
                </div>
                <div>
                    <input type="number" placeholder="Enter your 10 digit Mobile Number"/><br/>
                    <input placeholder="Enter the 4 digit OTP" onChange={(e) => setInput(e.target.value)}/>
                </div>
                <div onClick={goToHome}>
                    <button>Sign Up</button>
                </div>
            
            </div>
        </>
    )
}