import React from "react";
// import ChartistGraph from "react-chartist";
 // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardIcon from "../Card/CardIcon.js";
import CustomTable from "../Table/Table.js"


import styles from "../Styles/CardItineraryStyle.js";

const useStyles = makeStyles(styles);

export default function CardItinerary() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                <Card>
                    <CardHeader>
                        <CardIcon color="warning">
                            <EventAvailableIcon />
                        </CardIcon>
                        <h2 className={classes.cardTitle}>Itinerary</h2>
                        </CardHeader>
                        <CardBody>
                        <CustomTable
                            tableHeaderColor="warning"
                            tableHead={["Date", "Time", "Category", "Name", "Price"]}
                            tableData={[
                            ["12/1", "10:00 am", "Transportation", "Delta Flight", "$400"],
                            ["12/1", "3:00 pm", "Lodging", "Marriott Downtown","$350"],
                            ["12/2", "10:00 am", "Activities", "Spa Appointment", "$150"],
                            ["12/3", "7:30 pm", "Food and Beverage", "Steakhouse", "$125"]
                            ]}
                    />
                    </CardBody>
                </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}