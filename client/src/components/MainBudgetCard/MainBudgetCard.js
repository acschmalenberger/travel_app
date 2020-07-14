import React from "react";
import { Input, TextArea, FormBtn } from "../Form";
import "./style.css"

function MainBudgetCard () {

return(
    <div className="card-deck">
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is the main budget card</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Card Footer/Last updated 3 mins ago</small>
        </div>
        <TextArea />
        <Input />
        <FormBtn />
        </div>
    </div>
    );

}

export default MainBudgetCard;