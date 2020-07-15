import React from "react";

 // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
// import RestaurantIcon from '@material-ui/icons/Restaurant';
import HotelIcon from '@material-ui/icons/Hotel';
// import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// import AddCircleIcon from '@material-ui/icons/AddCircle';



 // core components
import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import Button from "../Button/Button.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import CardIcon from "../Card/CardIcon.js";
import styles from "../Styles/CardIndvStyles"

const useStyles = makeStyles(styles);

export default function CardIndv() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader>
                        <CardIcon color="warning">
                            <HotelIcon />
                            {/* //will need to render card icons accringly */}
                        </CardIcon>
                        <h2 className={classes.cardTitle}>Lodging</h2>
                        </CardHeader>
                        <CardBody>
                            <p>Name: </p>
                            <p>Date: </p>
                            <p>Time: </p>
                            <p>Locatiom: </p>
                            <p>Notes: </p>
                        </CardBody>
                        <CardFooter stats>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
