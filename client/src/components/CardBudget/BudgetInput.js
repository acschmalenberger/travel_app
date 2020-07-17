import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "./BudgetInputStyle.js";

const useStyles = makeStyles(styles);

export default function BudgetInput(props) {

  //console.log(props)
    return (
        <div className="form-group">
        <input className="form-control" 
            name={props.name}
            value={props.value}
            onChange={props.handleInputChange}
            placeholder={props.name}
            data-objectname={props.objectName}

        />
        </div>
    );
}