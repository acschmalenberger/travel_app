
import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
// import CardPlanning from "../CardPlanning";
import CardIndv from "../CardIndv";
import CardBudget from "../CardBudget";
import CardItinerary from "../CardItinerary";




function UserInput() {
    return (
        <div>
            {/* <CardPlanning /> */}
            <CardBudget />
            <CardItinerary />
            <CardIndv />


        </div>
    );
}

export default UserInput;