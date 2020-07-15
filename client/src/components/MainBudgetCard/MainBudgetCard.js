import React from "react";
import { Input, TextArea, FormBtn } from "../Form";
import CardChartMB from "./cardChatMB.js";
import "./style.css"

function MainBudgetCard (props) {

return(
    <div className="card-deck">
        <div className="card">
            <CardChartMB 
            value={props.value}
            valueTransporation={props.valueTransporation}
            valueRefreshment={props.valueRefreshment}
            valueActivities={props.valueActivities}
            valueLodging={props.valueLodging} 
            info={props.info}
            handleInputChange={props.handleInputChange}
            name={props.name}
            />
            {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
            <p className="card-text">This is the main budget card</p>
        </div>
        <Input 
        value={props.value.overallBudget} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={"overallBudget"}
        objectName={props.objectName}
        />
        <Input 
        value={props.value.spentBudget} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={"spentBudget"}
        objectName={props.objectName}
        />
        <TextArea 
        value={props.value.destintion} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={"destintion"}
        objectName={props.objectName}
        />
        <FormBtn type={"submit"}> 
         Submit
        </FormBtn>

        <div className="card-footer">
            <small className="text-muted">Card Footer/Last updated 3 mins ago</small>
        </div>
        </div>
    </div>
    );

}

export default MainBudgetCard;