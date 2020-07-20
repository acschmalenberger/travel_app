import React from "react";
// import ChartistGraph from "react-chartist";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import Button from "../Button";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardIcon from "../Card/CardIcon.js";
import CardChartMB from "./BudgetChart.js";
// import CustomInput from "../CustomInput"

// import CardChart from "../DashboardCard/cardChat.js";

import styles from "./style.js";

const useStyles = makeStyles(styles);

export default function CardBudget(props) {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                    <Card chart>
                        <CardHeader >
                            <CardIcon color="primary">
                                <AttachMoneyIcon  style={{fill: "white", fontSize: 40}}/>
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
                                loadBudgetData={props.loadBudgetData}
                                handleInputChange={props.handleInputChange}
                                handleFormSubmit={props.handleFormSubmit}
                                name={props.name}
                            />
                        </CardBody>

                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
