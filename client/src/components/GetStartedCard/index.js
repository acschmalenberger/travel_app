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
                                labelText="Destination"
                                value={props.value.destination} 
                                info={props.info}
                                handleInputChange={props.handleInputChange}
                                name={"destination"}
                                objectName={props.objectName}
                            />
                            </GridItem> 
                            <GridItem xs={12} sm={12} md={12}>
                            <p>When will you be traveling?</p>
                            <StartInput
                                labelText="From"
                                value={props.value.startDate} 
                                info={props.info}
                                handleInputChange={props.handleInputChange}
                                name={"startDate"}
                                objectName={props.objectName}
                                />
                            <StartInput
                                labelText="To"
                                value={props.value.endDate} 
                                info={props.info}
                                handleInputChange={props.handleInputChange}
                                name={"endDate"}
                                objectName={props.objectName}

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