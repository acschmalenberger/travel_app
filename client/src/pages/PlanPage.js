import React, { useEffect, useState } from "react";
import CardPlanningTabs from "../components/CardPlanningTabs";
import CardBudget from "../components/CardBudget";
import CardPlanningForm from "../components/CardPlanningForm";
import GridContainer from "../components/Grid2/GridContainer.js";
import GridItem from "../components/Grid2/GridItem.js";
import API from "../utils/API";
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HotelIcon from '@material-ui/icons/Hotel';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import "./PageStyle.css";



function Dashboard() {

    const [cards, setCards] = useState({})

    const [user, setUser] = useState(
        JSON.parse(sessionStorage.getItem("jwt")).user

    )

    const [budgetObject, setBudgetObject] = useState({
        Name: "Value",
        overallBudget: "",
        spentBudget: "",
        destination: "",
        startDate: "",
        endDate: ""
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
        const [activitesObject, setActivitesObject] = useState({
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
        componentDidMount()
    }, []);

    function componentDidMount() {
        //This should come from the props in the Trips Page.
        API.findOne(user.email)
            .then(res => {
                // this.setState({ setBudgetObject: res.data[0] })
                setBudgetObject(res.data);
                setTransportObject(res.data.transporation);
                setLodgingObject(res.data.lodging);
                setActivitesObject(res.data.activities);
                setRefreshObject(res.data.refreshment);
            })
        .catch(err => {
            console.log("findOne", err)
        });
    };
    

    function loadBudgetData(id){
        API.findOne(id)
        .then(res =>
            setCards(res.data)
        )
    };


    function handleChange(e) {
        const { name, value } = e.target;
        const objectName = e.target.getAttribute("data-objectname");
        setCards({ ...cards, [name]: value, type: objectName, tripId: user.email });
            switch (objectName) {
                case "transportObject":
                    return setTransportObject({...transportObject, [name]: value})
                case "budgetObject":
                    return setBudgetObject({...budgetObject, [name]: value})
                case "refreshObject":
                    return setRefreshObject({...refreshObject, [name]: value})
                case "activitesObject":
                    return setActivitesObject({...activitesObject, [name]: value})
                case "lodgingObject":
                    return setLodgingObject({...lodgingObject, [name]: value})
                    default: return console.log(objectName);
            };
    
        };

        function handleFormSubmit(event) {
            event.preventDefault();
            let cardSubmitObj= event.target.getAttribute("objectname");       


            if (cardSubmitObj) {

                API.saveCard(cards)
                .then (function(data){
                    componentDidMount()
                })
                .then(function(){
                    console.log(cards);
                })
            
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="planContainer">
            <div>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={9} lg={9}>
                    <CardBudget
                        name={budgetObject}
                        handleInputChange={handleChange}
                        loadBudgetData={loadBudgetData}
                        objectName={"budgetObject"}
                        value={budgetObject}
                        valueTransporation={transportObject}
                        valueRefreshment={refreshObject}
                        valueActivities={activitesObject}
                        valueLodging={lodgingObject}
                        info={setBudgetObject}
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
                                    <div>
                                        <CardPlanningForm
                                        cards={cards}
                                            id="transportation"
                                            name={transportObject}
                                            handleInputChange={handleChange}
                                            value={transportObject}
                                            overallBudget={budgetObject}
                                            objectName={"transportObject"}
                                            info={setTransportObject}
                                            onSubmit={handleFormSubmit}
                                        />
                                    </div>
                                )
                            },
                            {
                                tabName: "Lodging",
                                tabIcon: HotelIcon,
                                tabContent: (
                                    <div>
                                        <CardPlanningForm
                                            id="lodging"
                                            name={lodgingObject}
                                            handleInputChange={handleChange}
                                            value={lodgingObject}
                                            overallBudget={budgetObject}
                                            objectName={"lodgingObject"}
                                            info={setLodgingObject}
                                            onSubmit={handleFormSubmit}
                                        />
                                    </div>
                                )
                            },
                            {
                                tabName: "Food & Drink",
                                tabIcon: RestaurantIcon,
                                tabContent: (
                                    <div>
                                        <CardPlanningForm
                                            id={"refreshment"}
                                            name={refreshObject}
                                            handleInputChange={handleChange}
                                            value={refreshObject}
                                            overallBudget={budgetObject}
                                            objectName={"refreshObject"}
                                            info={setRefreshObject}
                                            onSubmit={handleFormSubmit}
                                        />
                            </div>
                        )
                        },
                        {
                        tabName: "Activities",
                        tabIcon: PhotoCameraIcon ,
                        tabContent: (
                            <div> 
                                <CardPlanningForm
                                    id = "activities"
                                    name={activitesObject}
                                    handleInputChange={handleChange}
                                    value={activitesObject}
                                    overallBudget={budgetObject}
                                    objectName={"activitesObject"}
                                    info={setActivitesObject}
                                    onSubmit={handleFormSubmit} 
                                />
                                    </div>
                                )
                            }
                        ]}
                    />
                </GridItem>
            </GridContainer>

            </div>
        </div>

    );
}
export default Dashboard;