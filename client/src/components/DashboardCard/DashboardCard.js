import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./style.css";
import CardChart from "./cardChat";
// import DeleteBtn from "../DeleteBtn"

function DashboardCard (props) {
console.log(props)

if(props.name) return (
    <div className="card-deck">
        <div className="card">
            <CardChart />
            {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <form>
        <Input
        value={props.value} 
        info={props.info}
        handleInputChange={props.handleInputChange}
        name={props.name} />
        {/* <Input /> */}
        {/* <TextArea /> */}
        <FormBtn />
        </form>
        {/* <DeleteBtn /> */}
        <div className="card-footer">
            <small className="text-muted">Card Footer/Last updated 3 mins ago</small>
        </div>
        
        </div>
    </div>
    );
else {return null}
}

export default DashboardCard;