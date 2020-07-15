import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./style.css";
import CardChart from "./cardChat"

function DashboardCard() {

    return (
        <div class="card-deck">
            <div class="card">
                <CardChart />
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

export default DashboardCard;