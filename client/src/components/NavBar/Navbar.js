import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import auth from '../auth/auth-helper';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Travl from "../images/TRAVL.png";


const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: '#F44336' };
    else return { color: '#ffffff' };
};
const Menu = withRouter(({ history }) => (
    <div>
    <AppBar className= "navbar" position="static" style={{ backgroundColor: "#11374c", height: "150x" }}>
        <img  src={Travl} alt="travl"/>
        <Toolbar style={{ paddingTop: "10px" }}>
            <Typography type="title" >
                Home
			</Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, '/')}>
                    <Home />
                </IconButton>
            </Link>
            {!auth.isAuthenticated() && (
                <span>
                    <Link to="/signup">
                        <Button style={isActive(history, '/signup')}>Sign up</Button>
                    </Link>
                    <Link to="/signin">
                        <Button style={isActive(history, '/signin')}>Sign In</Button>
                    </Link>
                </span>
            )}
            {auth.isAuthenticated() && (
                <span>
                    <Link to={'/UserInput'}>
                        <Button Button
                            style={isActive(
                                history,
                                '/user/' + auth.isAuthenticated().user._id
                            )}
                        >
                            My Trip
						</Button>
                    </Link>
                    <Link to={'/Dashboard'}>
                        <Button Button
                            style={isActive(
                                history,
                                '/user/' + auth.isAuthenticated().user._id
                            )}
                        >My Dashboard
						</Button>
                    </Link>
                    <Button
                        color="inherit"
                        onClick={() => {
                            auth.signout(() => history.push('/'));
                        }}
                    >
                        Sign out
					</Button>
                </span>

            )}
        </Toolbar>
    </AppBar >
    </div>
));

export default Menu;