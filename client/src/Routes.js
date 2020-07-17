import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PrivateRoutes from './components/auth/PrivateRoute';
import Signin from './components/auth/Signin';
import Profile from './components/user/Profile';
import Signup from './components/user/Signup';
import Dashboard from './pages/Dashboard';
import UserInput from './components/UserInput/UserInput';

class Routes extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <PrivateRoutes path="/user/edit/:userId" />
                    <PrivateRoutes path="/Dashboard" component={Dashboard} />
                    <Route path="/user/:userId" component={Profile} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </div>
        );
    }
}

export default Routes;