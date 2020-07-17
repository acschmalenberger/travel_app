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
import StartInput from "./StartInput.js";
import GetStartedStyle from "./style.js";

const useStyles = makeStyles(GetStartedStyle);

export default function GetStarted (props) {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader>
                        <h2 className={classes.cardTitle} >Welcome!</h2>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={9}>
                                <p>What is your starting budget?</p>
                                <StartInput
                                    labelText="Budget"
                                    value={props.value.overallBudget} 
                                    info={props.info}
                                    handleInputChange={props.handleInputChange}
                                    name={"overallBudget"}
                                    objectName={props.objectName}
                                />
                            </GridItem>    
                            <GridItem xs={12} sm={12} md={12}>
                            <p>Where would you like to go? </p>
                            <StartInput
                                labelText="destination"
                                name={"Destination"}
                            />
                            </GridItem> 
                            <GridItem xs={12} sm={12} md={12}>
                            <p>When will you be traveling?</p>
                            <p>From</p>
                            <StartInput
                                labelText="From"
                                id="startTripDate"

                            /><p>To</p>
                            <StartInput
                                labelText="To"
                                id="endTripDate"

                            /> 
                            </GridItem>                     
                        </GridContainer>
                        </CardBody>
                        <CardFooter stats>
                            <Button>Start Planning!</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}