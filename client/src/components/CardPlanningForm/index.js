import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import GridContainer from "../Grid2/GridContainer.js";
import GridItem from "../Grid2/GridItem.js";
import CustomInput from "../CustomInput/index.js";


// core components
import CardPlanningFormStyles from "./style.js";

const useStyles = makeStyles(CardPlanningFormStyles);

export default function CardPlanningForm(props) {
    const classes = useStyles();
    // const [checked, setChecked] = React.useState([...props.checkedIndexes]);
    // const handleToggle = value => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];
    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else 
    //         newChecked.splice(currentIndex, 1);
    //     }
    //     setChecked(newChecked);

    // const { tasksIndexes, tasks, rtlActive } = props;

    return (
        <div>
            <form id ="transportation">
                <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                    labelText="Dates"
                    value={props.value.Date} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Date"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                    labelText="Budget"
                    value={props.value.Budget} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Budget"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Address"
                    value={props.value.Address} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Address"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Time"
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Time"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                    labelText="Notes"
                    value={props.value.Notes} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Notes"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    multiline: true,
                    rows: 4
                    }}
                    />
                </GridItem>
            </form>
            <form id ="lodging">
                <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                    labelText="Dates"
                    value={props.value.Date} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Date"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                    labelText="Budget"
                    value={props.value.Budget} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Budget"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Address"
                    value={props.value.Address} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Address"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Time"
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Time"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                    labelText="Notes"
                    value={props.value.Notes} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Notes"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    multiline: true,
                    rows: 4
                    }}
                    />
                </GridItem>
            </form>
            <form id ="refreshment">
                <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                    labelText="Dates"
                    value={props.value.Date} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Date"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                    labelText="Budget"
                    value={props.value.Budget} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Budget"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Address"
                    value={props.value.Address} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Address"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Time"
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Time"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                    labelText="Notes"
                    value={props.value.Notes} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Notes"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    multiline: true,
                    rows: 4
                    }}
                    />
                </GridItem>
            </form>
            <form id ="activities">
                <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                    labelText="Dates"
                    value={props.value.Date} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Date"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                    labelText="Budget"
                    value={props.value.Budget} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Budget"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Address"
                    value={props.value.Address} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Address"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                    labelText="Time"
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Time"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                    labelText="Notes"
                    value={props.value.Notes} 
                    info={props.info}
                    handleInputChange={props.handleInputChange}
                    name={"Notes"}
                    objectName={props.objectName}
                    formControlProps={{
                    fullWidth: true
                    }}
                    inputProps={{
                    multiline: true,
                    rows: 4
                    }}
                    />
                </GridItem>
            </form>
        </div>
        
    );
}
