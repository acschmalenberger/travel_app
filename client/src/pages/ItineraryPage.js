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

    const [cards, setCards] = useState([])
    
    const [itinerary, setItinerary] = useState([])

    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("jwt")).user
    )

    useEffect(() => {
        findAll()
    }, [])

    useEffect(() => {
    }, [itinerary])

    function findAll() {
      API.findAll(user.email)
      .then((data) => {
       setItinerary([...itinerary, ...data.data])
        
    })};

  


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
                        itinerary={itinerary}
                        />
                    </GridItem>
                </GridContainer>

            </div>
        </div>
    
    );
}
export default Dashboard;