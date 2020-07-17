import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "./CustomInputStyle.js";

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
    // const classes = useStyles();
    // const {
    //     formControlProps,
    //     labelText,
    //     id,
    //     labelProps,
    //     inputProps,
    //     error,
    //     success
    // } = props;

    // const labelClasses = classNames({
    //     [" " + classes.labelRootError]: error,
    //     [" " + classes.labelRootSuccess]: success && !error
    // });
    // const underlineClasses = classNames({
    //     [classes.underlineError]: error,
    //     [classes.underlineSuccess]: success && !error,
    //     [classes.underline]: true
    // });
    // const marginTop = classNames({
    //     [classes.marginTop]: labelText === undefined
    // });
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

CustomInput.propTypes = {
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    error: PropTypes.bool,
    success: PropTypes.bool
};
