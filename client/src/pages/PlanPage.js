import React, { useEffect, useState } from "react";
// import { Col, Row, Container } from "../../components/Grid";
import CardPlanningTabs from "../components/CardPlanningTabs"
import CardBudget from "../components/CardBudget"
import CardPlanningForm from "../components/CardPlanningForm"
import GridContainer from "../components/Grid2/GridContainer.js";
import GridItem from "../components/Grid2/GridItem.js";
import API from "../utils/API";
import { set } from "mongoose";
// import { ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HotelIcon from '@material-ui/icons/Hotel';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

function Dashboard() {

        const [cards, setCards] = useState({})

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
        loadCards()
    }, [])

    function loadCards() {
        // API.getCards()
        // .then(res =>
        //     setCards(res.data)
        // )
        // .catch(err => console.log(err));
    };

    function deleteCard(id) {
        // API.deleteCard(id)
        // .then(res => loadCards())
        // .catch(err => console.log(err));
    }

    function handleChange(e) {
        const { name, value } = e.target;
        const objectName = e.target.getAttribute("data-objectname");
            switch (objectName) {
                case "transportObject":
                    return setTransportObject({...transportObject, [name]: value})
                case "budgetObject":
                    return setBudgetObject({...budgetObject, [name]: value})
                case "refreshObject":
                    return setRefreshObject({...refreshObject, [name]: value})
                case "activitesObject":
                    return setActivitiesObject({...activitesObject, [name]: value})
                case "lodgingObject":
                    return setLodgingObject({...lodgingObject, [name]: value})
                    default: return console.log(objectName);
            };

            };

        function handleFormSubmit(event) {
            event.preventDefault();
            let cardSubmitObj= event.target.getAttribute("data-objectname")
            console.log(cards, cardSubmitObj)
            if (cardSubmitObj) {
                API.saveCard(cards)
                // .then(() => setCards({
                //   Budget: "",
                //   Date: "",
                //   Address: "",
                //   Time: "",
                //   Notes: ""
                // }))
                // .then(() => loadCards())
                .catch(err => console.log(err));
            }
        };

    return (
        <div>

            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
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
            </GridContainer>



            <GridContainer>
                <GridItem xs={12} sm={12} md={9}>
                    <CardPlanningTabs
                    headerColor="primary"
                    tabs={[
                        {
                        tabName: "Transportation",
                        tabIcon: AirplanemodeActiveIcon,
                        tabContent: (
                            <CardPlanningForm
                            id = "transportation"
                            name={transportObject}
                            handleInputChange={handleChange}
                            value={transportObject}
                            overallBudget={budgetObject}
                            objectName={"transportObject"}
                            info={setTransportObject}
                            handleFormSubmit={handleFormSubmit} 
                            />
                        )
                        },
                        {
                        tabName: "Lodging",
                        tabIcon: HotelIcon,
                        tabContent: (
                            <CardPlanningForm
                            id = "lodging"
                            name={lodgingObject}
                            handleInputChange={handleChange}
                            value={lodgingObject}
                            overallBudget={budgetObject}
                            objectName={"lodgingObject"}
                            info={setLodgingObject}
                            handleFormSubmit={handleFormSubmit} 
                            />
                        )
                        },
                        {
                        tabName: "Food & Drink",
                        tabIcon: RestaurantIcon,
                        tabContent: (
                            <CardPlanningForm
                            id = {"refreshment"}
                            name={refreshObject}
                            handleInputChange={handleChange}
                            value={refreshObject}
                            overallBudget={budgetObject}
                            objectName={"refreshObject"}
                            info={setRefreshObject}
                            handleFormSubmit={handleFormSubmit} 
                            />
                        )
                        },
                        {
                        tabName: "Activities",
                        tabIcon: PhotoCameraIcon ,
                        tabContent: (
                            <CardPlanningForm
                            id = "activities"
                            name={activitesObject}
                        handleInputChange={handleChange}
                        value={activitesObject}
                        overallBudget={budgetObject}
                        objectName={"activitesObject"}
                        info={setActivitiesObject}
                        handleFormSubmit={handleFormSubmit} 
                        />
                        )
                        }
                    ]}
                    />
                </GridItem>
            </GridContainer>

        </div>
    
    );
}
export default Dashboard;
