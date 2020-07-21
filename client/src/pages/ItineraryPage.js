import React, { useEffect, useState } from "react";
// import { Col, Row, Container } from "../../components/Grid";

import CardBudget from "../components/CardBudget"
import CardItinerary from "../components/CardItinerary"
import GridContainer from "../components/Grid2/GridContainer.js";
import GridItem from "../components/Grid2/GridItem.js";
import API from "../utils/API";
import { set } from "mongoose";
import "./PageStyle.css"
// import { ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
// import RestaurantIcon from '@material-ui/icons/Restaurant';
// import HotelIcon from '@material-ui/icons/Hotel';
// import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// import MainBudgetCard from "../../components/MainBudgetCard";

function Dashboard() {

    const [cards, setCards] = useState({})
    
    const [itinerary, setItinerary] = useState(null)

    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("jwt")).user
    )

    const [budgetObject, setBudgetObject] = useState({
        Name: "Value",
        overallBudget: "",
        spentBudget: "",
        destination: "",
        startDate: "",
        endDate:""
    })
    const [transportObject, setTransportObject] = useState({
        Name: "Transportation",
        Budget: "",
        Date: "",
        Address: "",
        Time: "",
        Notes: ""
    })
    const [refreshObject, setRefreshObject] = useState({
        Name: "Refreshment",
        Budget: "",
        Date: "",
        Address: "",
        Time: "",
        Notes: ""
    })
    const [activitesObject, setActivitiesObject] = useState({
        Name: "Activites",
        Budget: "",
        Date: "",
        Address: "",
        Time: "",
        Notes: ""
    })
    const [lodgingObject, setLodgingObject] = useState({
        Name: "Lodging",
        Budget: "",
        Dates: "",
        Address: "",
        Time: "",
        Notes: ""
        })

    useEffect(() => {
        findAll()
    }, [])

    function findAll() {
      API.findAll(user.email)
      .then((data) => {
        setItinerary(data.data)
        setTimeout( ()=> { 
        console.log(itinerary, "Itinerary")
    })
        console.log(data.data, "data.data")
    })};

    function deleteTrip(id) {
        // API.deleteCard(id)
        // .then(res => loadCards())
        // .catch(err => console.log(err));
    }


    return (
        <div className="itineraryContainer">
            <div>

                {/* <GridContainer>
                    <GridItem xs={12} sm={12} md={9} lg={9}>
                    <CardBudget
                        name={budgetObject}
                        handleInputChange={handleChange}
                        objectName={"budgetObject"}
                        value={budgetObject}
                        valueTransporation={transportObject}
                        valueRefreshment={refreshObject}
                        valueActivities={activitesObject}
                        valueLodging={lodgingObject}
                        info={setBudgetObject}
                        handleFormSubmit={handleFormSubmit} 
                        />
                    </ GridItem>      
                </GridContainer> */}

                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} lg={9}>
                        <CardItinerary 
                        findAll={findAll}
                        />
                    </GridItem>
                </GridContainer>

            </div>
        </div>
    
    );
}
export default Dashboard;