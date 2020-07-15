import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';

// core components
import GridItem from "../Grid2/GridItem.js";
import GridContainer from "../Grid2/GridContainer.js";
import CustomInput from "../Form2/CustomInput.js";
import Button from "../Button/Button.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Lets Plan Your Trip!</h4>
                            <p className={classes.cardCategoryWhite}>Something?</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">What would you like to Plan</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                        // value={age}
                                        // onChange={handleChange}
                                        >
                                            <MenuItem >Lets Get Started</MenuItem>
                                            <MenuItem >Transportation</MenuItem>
                                            <MenuItem>Lodging</MenuItem>
                                            <MenuItem>Food and Beverage</MenuItem>
                                            <MenuItem>Activities</MenuItem>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                                {/* will need conditional logic between general information and everything else input
                        everything else code is below the code for general info will be very similar */}
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Dates"
                                        id="dates"
                                        // need to hand props to id
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Budget"
                                        id="budget"
                                        // need to hand props to id
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Address"
                                        id="address"
                                        // need to hand props to id
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Time"
                                        id="time"
                                        //need to hand props to id
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <InputLabel style={{ color: "#AAAAAA" }}>Notes</InputLabel>
                                    <CustomInput
                                        labelText=""
                                        id="notes"
                                        //need to hand props to id
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 5
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Update Trip</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
