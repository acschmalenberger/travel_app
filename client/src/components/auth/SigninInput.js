import React from "react";
import { makeStyles } from "@material-ui/core/styles";


export default function SigninInput(props) {

    //console.log(props)
    return (
        <div className="form-group">
            <input className="form-control"
                name={props.name}
                value={props.value}
                onChange={(event) => props.handleInputChange(props.name, event.target.value)}
                placeholder={props.name}
                data-objectname={props.objectName}

            />
        </div>
    );
}