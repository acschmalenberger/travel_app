import React from "react";
// import ChartistGraph from "react-chartist";
 // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Input from '@material-ui/core/Input'

import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import Button from "../Button";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardIcon from "../Card/CardIcon.js";
import CardChartMB from "../MainBudgetCard/cardChatMB.js";
import CustomInput from "../CustomInput"

// import CardChart from "../DashboardCard/cardChat.js";

import styles from "./style.js";

const useStyles = makeStyles(styles);

export default function CardBudget(props) {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card chart>
                        <CardHeader >
                            <CardIcon color="warning">
                                <AttachMoneyIcon />
                            </CardIcon>
                            <h2 className={classes.cardTitle} >Budget</h2>
                        </CardHeader>
                        <CardBody>
                            <CardChartMB 
                            value={props.value}
                            valueTransporation={props.valueTransporation}
                            valueRefreshment={props.valueRefreshment}
                            valueActivities={props.valueActivities}
                            valueLodging={props.valueLodging} 
                            info={props.info}
                            handleInputChange={props.handleInputChange}
                            name={props.name}
                            />
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div >
                            <p>This is the main budget card</p>
                        </div>
                        <Input 
                        value={props.value.overallBudget} 
                        info={props.info}
                        handleInputChange={props.handleInputChange}
                        name={"overallBudget"}
                        objectName={props.objectName}
                        />
                        <Input 
                        value={props.value.spentBudget} 
                        info={props.info}
                        handleInputChange={props.handleInputChange}
                        name={"spentBudget"}
                        objectName={props.objectName}
                        />
                        < Input
                            labelText=""
                            id="notes"
                            //need to hand props to id
                            formControlProps={{
                            fullWidth: true
                            }}
                            inputProps={{
                            multiline: true,
                            rows: 3
                            }}
                        value={props.value.destintion} 
                        info={props.info}
                        handleInputChange={props.handleInputChange}
                        name={"destintion"}
                        objectName={props.objectName}
                        />
                        <Button type={"submit"}> 
                            Submit
                        </Button>
        

                        </CardBody>

                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

