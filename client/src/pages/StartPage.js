import React, { useEffect, useState } from "react";
import GetStarted from "../components/GetStartedCard"
import GridContainer from "../components/Grid2/GridContainer.js";
import API from "../utils/API";
import "./PageStyle.css"
import jwt from "express-jwt";
import auth from "../components/auth/auth-helper.js"
import {withRouter} from "react-router-dom"
// import { ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";


function StartPage(props) {

    const [tripObject, setTripObject] = useState({
        Name: "MyTrips",
        overallBudget: "",
        spentBudget: "",
        destination: "",
        startDate: "",
        userEmail: "",
        endDate: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        const objectName = e.target.getAttribute("data-objectname");
        switch (objectName) {
            case "tripObject":
                return setTripObject({ ...tripObject, [name]: value })
        };

    };

    function handleTrip(event) {
        event.preventDefault();
        const trip = { ...tripObject }
        trip.userEmail = JSON.parse(sessionStorage.getItem("jwt")).user.email;
        API.trip(trip)
            .then((res) => {
                setTripObject({})
                props.history.push("/Plan")
            })


            .catch(err => console.log(err));
    }

    return (
        <div className="startContainer">
            <div>

                <GridContainer>
                    <GetStarted
                        name={tripObject}
                        handleInputChange={handleChange}
                        objectName={"tripObject"}
                        value={tripObject}
                        info={setTripObject}
                        handleTrip={handleTrip}
                    />
                </GridContainer>

            </div>
        </div>

    );
}
export default withRouter (StartPage);
