import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./style.css";
import CardChart from "./cardChat";

function DashboardCard (props) {
//console.log(props.name.name)

if(props.name) return (
    <div className="card-deck">
        <div className="card">
            <CardChart 
            value={props.value.Budget} 
            info={props.info}
            handleInputChange={props.handleInputChange}
            name={"Budget"}
            objectName={props.objectName}
            overallBudget={props.overallBudget}
            />
            {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
            <p className="card-text">Optional Line of Text</p>
        </div>
        <form data-objectname= {props.objectName}
        onSubmit={props.handleFormSubmit}
        >
        <Input
        value={props.value.Budget} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={"Budget"}
        objectName={props.objectName}
        />
        <Input 
        value={props.value.Date} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={"Date"}
        objectName={props.objectName}
        />
        <Input 
        value={props.value.Address} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={"Address"}
        objectName={props.objectName}
        />
        <Input 
        value={props.value.Time} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={"Time"}
        objectName={props.objectName}
        />
        <TextArea 
        value={props.value.Notes} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={"Notes"}
        objectName={props.objectName}
        />
        <FormBtn type={"submit"}> 
        Submit
            </FormBtn>
        </form>
        <div className="card-footer">
            <small className="text-muted">Card Footer/Last updated 3 mins ago</small>
        </div>
        
        </div>
    </div>
    );
else {return null}
}

export default DashboardCard;