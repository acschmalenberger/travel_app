import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PrivateRoutes from './components/auth/PrivateRoute';
import Signin from './components/auth/Signin';
import Profile from './components/user/Profile';
import Signup from './components/user/Signup';
import UserInput from './components/UserInput/UserInput';
import StartPage from "./pages/StartPage";
import PlanPage from "./pages/PlanPage";
import ItineraryPage from "./pages/ItineraryPage"

class Routes extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}
                    <PrivateRoutes path="/user/edit/:userId" />
                    <PrivateRoutes path="/UserInput" component={UserInput} />
                    <PrivateRoutes path= "/Plan" component ={PlanPage} />
                    <PrivateRoutes path= "/Start" component ={StartPage} />
                    <PrivateRoutes path= "/Itinerary" component ={ItineraryPage} />
                    <Route path="/user/:userId" component={Profile} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/" component={Signin} />
                </Switch>
            </div>
        );
    }
}

export default Routes;