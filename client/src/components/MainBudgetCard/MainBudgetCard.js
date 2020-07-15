import React from "react";
import { Input, TextArea, FormBtn } from "../Form";
import CardChartMB from "./cardChatMB.js";
import CardChart from "../DashboardCard/cardChat.js";
import "./style.css"

function MainBudgetCard (props) {

return(
    <div className="card-deck">
        <div className="card">
            <CardChartMB />
            {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
            <p className="card-text">This is the main budget card</p>
        </div>
        <Input 
        value={props.value} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={props.name}
        />
        <Input 
        value={props.value} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={props.name}
        />
        <TextArea 
        value={props.value} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={props.name}/>
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