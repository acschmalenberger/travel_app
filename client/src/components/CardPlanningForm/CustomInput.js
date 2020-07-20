import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";



export default function CustomInput(props) {
    
    return (
        <div className="form-group">
            <input className="form-control" 
            name={props.name}
            type={props.type || "text"}
            value={props.value}
            onChange={props.handleInputChange}
            placeholder={props.name}
            data-objectname={props.objectName}
    
            />
        </div>
    );

}

CustomInput.propTypes = {
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool
};
