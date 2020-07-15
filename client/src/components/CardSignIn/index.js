import React from "react";
 // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import Button from "../Button/index.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import CustomInput from "../CustomInput/index.js";
import styles from "./style.js";

const useStyles = makeStyles(styles);

export default function CardSignin() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader>
                        <h2 className={classes.cardTitle} >Welcome!</h2>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    labelText="Username"
                                    id="username"
                                    // need to hand props to id
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>    
                            <GridItem xs={12} sm={12} md={3}>
                            <CustomInput
                                labelText="Password"
                                id="password"
                                // need to hand props to id
                                formControlProps={{
                                fullWidth: true
                                }}
                            />
                            </GridItem>             
                        </GridContainer>
                        </CardBody>
                        <CardFooter stats>
                            <Button>Sign In</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
