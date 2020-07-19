import React from "react";
// import PropTypes from "prop-types";
// import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import FormControl from "@material-ui/core/FormControl";
// import GridContainer from "../Grid2/GridContainer.js";
import GridItem from "../Grid2/GridItem.js";
import CustomInput from "./CustomInput.js";
import Tab from "@material-ui/core/Tab";
import CardBody from "../Card/CardBody.js";
import CardChart from "../DashboardCard/cardChat.js";
import Button from "../Button";

// core components
//import CardPlanningFormStyles from "./style.js";


//const useStyles = makeStyles(CardPlanningFormStyles);

function CardPlanningForm(props) {
    // const classes = useStyles();
    console.log("VALUE[]", props.value);
    let expenses = 0;
    if (props.value && props.value.length > 0) {
        console.log("VALUE[]", props.value.length);
        props.value.forEach((item) => {
                expenses += parseInt(item.Budget);
        });
    }

    return (
        <CardBody>
                <form 
                    objectName={props.objectName}
                    onSubmit={props.onSubmit}
                    >
                <GridItem xs={12} sm={12} md={12}>
                    <CardChart
                        value={expenses} 
                        info={props.info}
                        handleInputChange={props.handleInputChange}
                        name={"Budget"}
                        objectName={props.objectName}
                        overallBudget={props.overallBudget}
                    />
                </GridItem>
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
                    <GridItem xs={12} sm={12} md={12}>
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
                            rows: 5
                            }}
                        />
                    </GridItem>
                    <Button 
                        type= {"submit"}
                        onSubmit={props.onSubmit}
                        > 
                            Submit Trans
                    </Button>  
                </form>

            <Tab>
                <form
                    objectName={props.objectName}
                    onSubmit={props.onSubmit}
                    >
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
                            rows: 5
                            }}
                        />
                    </GridItem>
                    <Button 
                        type= {"submit"}
                        // onSubmit={props.onSubmit}
                        > 
                            Submit
                    </Button> 
                </form>
            </Tab>
            <Tab>
                <form 
                    objectName={props.objectName}
                    onSubmit={props.onSubmit}
                    >
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
                            rows: 5
                            }}
                        />
                    </GridItem>
                    <Button 
                        type= {"submit"}
                        // onSubmit={props.onSubmit}
                        > 
                            Submit
                    </Button> 
                </form>
            </Tab>
            <Tab>
                <form
                objectName={props.objectName}
                onSubmit={props.onSubmit}

                >
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
                            rows: 5
                            }}
                        />
                    </GridItem>
                    <Button 
                        type= {"submit"}
                        // onSubmit={props.onSubmit}
                        > 
                            Submit Active
                    </Button> 
                </form>
            </Tab>
        </CardBody>
        
    );
}
export default CardPlanningForm;