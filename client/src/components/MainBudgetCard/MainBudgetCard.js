import React from "react";
import { Input, TextArea, FormBtn } from "../Form";
import "./style.css"

function MainBudgetCard () {

return(
    <div class="card-deck">
        <div class="card">
            <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is the main budget card</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Card Footer/Last updated 3 mins ago</small>
        </div>
        <TextArea />
        <Input />
        <FormBtn />
        </div>
    </div>
    );

}

export default MainBudgetCard;