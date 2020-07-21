import React, { useState, useEffect } from "react";
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
import CustomTable from "../Table/index.js"


import styles from "./style.js";

const useStyles = makeStyles(styles);


export default function CardItinerary(props) {
    const classes = useStyles();
    console.log(props.itinerary, "ARR PAGE")
    const itineraryArray = props.itinerary;
    
    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        props.itinerary.forEach((card, key) => {
            console.log("CARD", card)
            Object.keys(card).forEach(property => {
                if (Array.isArray(card[property])) {
                    card[property].forEach(value => {
                        const current = [
                            value.Date,
                            value.Time,
                            property,
                            value.Notes,
                            value.Budget
                        ];
                        console.log(current)
                        setTableData (d => [... d, current])

                    })
                }

            })
        })
        console.log("UseEffect", tableData)
    }, [props.itinerary]);

    
    // {this.state.data.map(item => {
    //     return (<Row image={item.image} name={item.name} phone={item.phone} email={item.email} dob={item.dob} />)
    // })}
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                <Card>
                    <CardHeader>
                        <CardIcon color="warning">
                            <EventAvailableIcon style={{fill: "white", fontSize: 40}}/>
                        </CardIcon>
                        <h2 className={classes.cardTitle}>Itinerary</h2>
                        </CardHeader>
                        <CardBody>
                            <CustomTable
                                tableHeaderColor="warning"
                                tableHead={["Date", "Time", "Category", "Notes", "Price"]}
                                tableData={tableData}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}