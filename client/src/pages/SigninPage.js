import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Signin from "../components/auth/Signin.js";
import Signup from '../components/user/Signup.js';
import Button from "../components/Button";
import API from "../utils/API";
import "./PageStyle.css"
import { makeStyles } from "@material-ui/core/styles";



function SigninPage() {
    const [isSignup, setIsSignup]= useState(false)

    return (
        <div className="signinContainer">
            <div>

                {isSignup ? 
                <div>
                    <Signup /> 
                    <Button
                        style={{ justify: "center" }}
                        onClick= {()=>setIsSignup(false)}
                    >Sign in</Button>
                </div>:
                
                <div>
                    <Signin />
                    <Button
                        style={{ justify: "center" }}
                        onClick= {()=>setIsSignup(true)}
                    >Sign up</Button>
                </div>    
                }
                
            </div>
        </div>
    )
}

export default SigninPage;