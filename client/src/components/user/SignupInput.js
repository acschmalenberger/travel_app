import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "./SignupInputStyle.js";

const useStyles = makeStyles(styles);

export default function SignupInput(props) {

  //console.log(props)
    return (
        <div className="form-group">
        <input className="form-control" 
            name={props.name}
            value={props.value}
            onChange={(event)=>props.handleInputChange(props.name, event.target.value)}
            placeholder={props.name}
            data-objectname={props.objectName}

        />
        </div>
    );
}