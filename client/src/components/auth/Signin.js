import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import SigninInput from "./SigninInput.js"
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
// import { withStyles } from '@material-ui/core/styles';
import Button from "../Button/index.js";
import auth from './auth-helper';
import { Redirect } from 'react-router-dom';
import { signin } from '../../utils/api-auth.js';
import SigninStyle from "./SigninStyle.js";

const useStyles = makeStyles(SigninStyle)
    

class Signin extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    };

    clickSubmit = () => {
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined
        };

        signin(user).then(data => {
            if (data.error) {
                this.setState({ error: data.error });
            } else {
                auth.authenticate(data, () => {
                    this.setState({ redirectToReferrer: true });
                });
            }
        });
    };

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    };

    render() {
        const { classes } = this.props;

        const { from } = this.props.location && this.props.location.state || {
            from: {
                pathname: '/Start'
            }
        };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={9} md={6}>
                        <Card>
                            <CardHeader>
                                <h2 >Sign In</h2>
                            </CardHeader>
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <p>Email</p>
                                    <SigninInput
                                        name="email"
                                        id="email"
                                        type="email"
                                        label="Email"
                                        value={this.state.email}
                                        handleInputChange={this.handleChange}
                                        margin="normal"
                                    />
                                </GridItem>    
                                <GridItem xs={12} sm={12} md={12}>
                                    <p>Password</p>
                                    <SigninInput
                                        name="password"
                                        id="password"
                                        type="password"
                                        label="Password"
                                        value={this.state.password}
                                        handleInputChange={this.handleChange}
                                        margin="normal"
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
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
                            <CardFooter >
                                <Button
                                onClick={this.clickSubmit}
                                className= "submit"
                                >Sign In</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
           
           
        //    <Card className={classes.card}>
        //         <CardContent>
        //             <Typography type="headline" component="h2" className={classes.title}>
        //                 Sign In
		// 			</Typography>
        //             <TextField
        //                 id="email"
        //                 type="email"
        //                 label="Email"
        //                 className={classes.textField}
        //                 value={this.state.email}
        //                 onChange={this.handleChange('email')}
        //                 margin="normal"
        //             />
        //             <br />
        //             <TextField
        //                 id="password"
        //                 type="password"
        //                 label="Password"
        //                 className={classes.textField}
        //                 value={this.state.password}
        //                 onChange={this.handleChange('password')}
        //                 margin="normal"
        //             />
        //             <br />{' '}
        //             {this.state.error && (
        //                 <Typography component="p" color="error">
        //                     <Icon color="error" className={classes.error}>
        //                         error
		// 					</Icon>
        //                     {this.state.error}
        //                 </Typography>
        //             )}
        //         </CardContent>
        //         <CardActions>
        //             <Button
        //                 color="primary"
        //                 variant="raised"
        //                 onClick={this.clickSubmit}
        //                 className={classes.submit}
        //             >
        //                 Submit
		// 			</Button>
        //         </CardActions>
        //     </Card >
        );
    }
}

export default Signin;