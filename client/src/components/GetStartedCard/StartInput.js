import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "./StartInputStyles.js";

const useStyles = makeStyles(styles);

export default function StartInput(props) {

  //console.log(props)
    return (
        <div className="form-group">
        <input className="form-control" 
            name={props.name}
            type={props.type || "text"}
            value={props.value}
            onChange={props.handleInputChange}
            placeholder={props.labelText}
            data-objectname={props.objectName}
        />
        </div>
    );
}