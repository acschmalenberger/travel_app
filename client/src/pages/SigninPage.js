import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Signin from "../components/auth/Signin.js";
import Signup from '../components/user/Signup.js';
import Button from "../components/Button";
import GridContainer from "../components/Grid2/GridContainer.js";
import GridItem from "../components/Grid2/GridItem.js";
import API from "../utils/API";
import { Route, Switch } from 'react-router-dom';

function SigninPage() {
    const [isSignup, setIsSignup]= useState(false)

    return (
        <div>
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