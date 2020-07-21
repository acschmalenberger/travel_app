import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import SignupInput from "./SignupInput.js"
import Button from "../Button/index.js";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
// import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';

import { registerUser } from '../../utils/api-user.js';
import SignupStyle from "./SignupStyle.js";
import { cardTitle } from '../Styles/material-dashboard-react.js';

const useStyles = makeStyles(SignupStyle)

// const styles = theme => ({
//     card: {
//         maxWidth: 600,
//         margin: 'auto',
//         textAlign: 'center',
//         marginTop: theme.spacing.unit * 5,
//         paddingBottom: theme.spacing.unit * 2
//     },
//     error: {
//         verticalAlign: 'middle'
//     },
//     title: {
//         marginTop: theme.spacing.unit * 2,
//         color: theme.palette.openTitle
//     },
//     textField: {
//         marginLeft: theme.spacing.unit,
//         marginRight: theme.spacing.unit,
//         width: 300
//     },
//     submit: {
//         margin: 'auto',
//         marginBottom: theme.spacing.unit * 2
//     }
// });

class Signup extends Component {

    state = {
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    };

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    };

    clickSubmit = () => {
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        };
        registerUser(user).then(data => {
            window.location.href = "/signin"
            if (data.error) {
                this.setState({ error: data.error });
                
            } else {
                this.setState({ error: '', open: true });
            }
            
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
            <GridContainer>
                <GridItem xs={12} sm={9} md={6}>
                    <Card>
                        <CardHeader>
                            <h2 >Sign Up</h2>
                        </CardHeader>
                        <CardBody>
                        <GridContainer>
                            <GridItem xs={9} sm={9} md={9}>
                                <p>Name</p>
                                <SignupInput
                                    name="name"
                                    id="name"
                                    label="Name"
                                    value={this.state.name}
                                    handleInputChange={this.handleChange}
                                    margin="normal"
                                />
                            </GridItem>
                            <GridItem xs={8} sm={8} md={8}>
                                <p>Email</p>
                                <SignupInput
                                    name="email"
                                    id="email"
                                    type="email"
                                    label="Email"
                                    value={this.state.email}
                                    handleInputChange={this.handleChange}
                                    margin="normal"
                                />
                            </GridItem>    
                            <GridItem xs={9} sm={9} md={9}>
                                <p>Password</p>
                                <SignupInput
                                    name="password"
                                    id="password"
                                    type="password"
                                    label="Password"
                                    value={this.state.password}
                                    handleInputChange={this.handleChange}
                                    margin="normal"
                                />
                            </GridItem>
                            <GridItem xs={9} sm={9} md={9}>
                                {this.state.error && (
                                <Typography component="p" color="error">
                                    <Icon color="error" className={classes.error}>
                                        error
                                    </Icon>
                                    {this.state.error}
                                </Typography>
                                )} 
                            </GridItem>            
                        </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button
                            onClick={this.clickSubmit}
                            type={"submit"}
                            >Sign Up</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
    }
}

export default Signup;
            // <div>
            //     <Card className={classes.card}>
            //         <CardContent>
            //             <Typography
            //                 type="headline"
            //                 component="h2"
            //                 className={classes.title}
            //             >
            //                 Sign Up
			// 			</Typography>
                        // <TextField
                        //     id="name"
                        //     label="Name"
                        //     className={classes.textField}
                        //     value={this.state.name}
                        //     onChange={this.handleChange('name')}
                        //     margin="normal"
                        // />
                        // <br />
                        // <TextField
                        //     id="email"
                        //     type="email"
                        //     label="Email"
                        //     className={classes.textField}
                        //     value={this.state.email}
                        //     onChange={this.handleChange('email')}
                        //     margin="normal"
                        // />
                        // <br />
                        // <TextField
                        //     id="password"
                        //     type="password"
                        //     label="Password"
                        //     className={classes.textField}
                        //     value={this.state.password}
                        //     onChange={this.handleChange('password')}
                        //     margin="normal"
                        // />
                    //     <br />{' '}
                    //     {this.state.error && (
                    //         <Typography component="p" color="error">
                    //             <Icon color="error" className={classes.error}>
                    //                 error
					// 			</Icon>
                    //             {this.state.error}
                    //         </Typography>
                    //     )}
                    // </CardContent>
        //             <CardActions>
        //                 <Button
        //                     color="primary"
        //                     variant="raised"
        //                     onClick={this.clickSubmit}
        //                     className={classes.submit}
        //                 >
        //                     Submit
		// 				</Button>
        //             </CardActions>
        //         </Card>
        //         <Dialog open={this.state.open} disableBackdropClick={true}>
        //             <DialogTitle>New Account</DialogTitle>
        //             <DialogContent>
        //                 <DialogContentText>
        //                     New account successfully created.
		// 				</DialogContentText>
        //             </DialogContent>
        //             <DialogActions>
        //                 <Link to="/signin">
        //                     <Button color="primary" autoFocus="autoFocus" variant="raised">
        //                         Sign In
		// 					</Button>
        //                 </Link>
        //             </DialogActions>
        //         </Dialog>
        //     </div>
        // );
