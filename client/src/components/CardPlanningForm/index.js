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


    return (
        <CardBody>
                <form 
                    objectName={props.objectName}
                    onSubmit={props.onSubmit}
                    >
                <GridItem xs={12} sm={12} md={12} lg={12}>
                    <CardChart
                        value={props.value.Budget} 
                        info={props.info}
                        handleInputChange={props.handleInputChange}
                        name={"Budget"}
                        objectName={props.objectName}
                        overallBudget={props.overallBudget}
                    />
                </GridItem>
                <br></br>
                <br></br>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                        labelText="Dates"
                        value={props.value.Date} 
                        info={props.info}
                        handleInputChange={props.handleInputChange}
                        name={"Date"}
                        type= "date"
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
                            type= "time"
                            objectName={props.objectName}
                            formControlProps={{
                            fullWidth: true
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
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
                    <GridItem xs={12} sm={12} md={12}>
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
                            rows: 1
                            }}
                        />
                    </GridItem>
                    <Button 
                        type= {"submit"}
                        onSubmit={props.onSubmit}
                        > 
                            Plan It!
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
                            type= "date"
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
                            type= "time"
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
                            type= "date"
                            bjectName={props.objectName}
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
                            type= "time"
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
                            type= "date"
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
                            type= "time"
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