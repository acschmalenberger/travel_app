import React from "react";
// import ChartistGraph from "react-chartist";
 // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
// import Button from "../Button/Button.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
// import CardFooter from "../Card/CardFooter.js";
import CardIcon from "../Card/CardIcon.js";

import CardChart from "../DashboardCard/cardChat.js";

import styles from "../Styles/CardBudgetStyle.js";

const useStyles = makeStyles(styles);

export default function CardBudget() {
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
                            <CardChart />
                                {/* // options={emailsSubscriptionChart.options}
                                // responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                // listener={emailsSubscriptionChart.animation} */}
                        </CardBody>
                        {/* <CardFooter chart>      
                            <div className={classes.stats}>
                            </div>
                        </CardFooter> */}
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

