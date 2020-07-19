import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Signin from "../components/auth/Signin.js";
import Signup from '../components/user/Signup.js';
import Button from "../components/Button";
import API from "../utils/API";
import "./SigninPageStyle.css"
import { makeStyles } from "@material-ui/core/styles";



function SigninPage() {
    const [isSignup, setIsSignup]= useState(false)

    return (
        <div className="container">
            {isSignup ? 
            <div>
                <Signup /> 
                <Button
                    onClick= {()=>setIsSignup(false)}
                >Sign in</Button>
            </div>:
            
            <div>
                <Signin />
                <Button
                    onClick= {()=>setIsSignup(true)}
                >Sign up</Button>
            </div>
            }
        </div>
    )
}

export default SigninPage;