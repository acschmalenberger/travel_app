import React, { useEffect, useState } from "react";
import CardPlanningTabs from "../components/CardPlanningTabs";
import CardBudget from "../components/CardBudget";
import Button from "../components/Button";
import CardPlanningForm from "../components/CardPlanningForm";
import GridContainer from "../components/Grid2/GridContainer.js";
import GridItem from "../components/Grid2/GridItem.js";
import API from "../utils/API";
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HotelIcon from '@material-ui/icons/Hotel';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import axios from "axios";

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
        // console.log("findOne", "Test data");
        // axios.get("/submit/111").then((data) => {
        //     console.log("findOne", data);
        // }).catch((err) => {
        //     console.log("findOne", err);
        // })

        // Tis should come from the props in the Trips Page.
        const id = "5f145b2a970b66142c8b0400";
        API.findOne(id)
            .then(res => {
                console.log("findOne", res.data);
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
    

    // function loadBudgetData(id){
    //     console.log(id, "PlanPage")
    //     API.findOne(id)
    //     .then(res =>
    //         setCards(res.data)
    //     )
    // };

    function componentWillMount() {
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
    };

    function handleChange(e) {
        const { name, value } = e.target;
        const objectName = e.target.getAttribute("data-objectname");
        const id = "5f145b2a970b66142c8b0400";
        setCards({ ...cards, [name]: value, type: objectName, tripId: id });
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

            console.log("CARD: ", cards);

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
                    // loadBudgetData={loadBudgetData}
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
                                    id = "transportation"
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
                                    id = "lodging"
                                    name={lodgingObject}
                                    handleInputChange={handleChange}
                                    value={lodgingObject}
                                    overallBudget={budgetObject}
                                    objectName={"lodgingObject"}
                                    info={setLodgingObject}
                                   onSubmit={handleFormSubmit} 
                                />
                                 {/* <Button 
                                 onSubmit={handleFormSubmit}
                                 type= {"submit"}
                                 >
                                    Submit
                                </Button> */}
                            </div>
                        )
                        },
                        {
                        tabName: "Food & Drink",
                        tabIcon: RestaurantIcon,
                        tabContent: (
                            <div> 
                                <CardPlanningForm
                                    id = {"refreshment"}
                                    name={refreshObject}
                                    handleInputChange={handleChange}
                                    value={refreshObject}
                                    overallBudget={budgetObject}
                                    objectName={"refreshObject"}
                                    info={setRefreshObject}
                                    onSubmit={handleFormSubmit} 
                                />
                                 {/* <Button 
                                 onSubmit={handleFormSubmit}
                                 type= {"submit"}
                                 >
                                    Submit
                                </Button> */}
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
                                 {/* <Button 
                                 onSubmit={handleFormSubmit}
                                 type= {"submit"}
                                 >
                                    Submit
                                </Button> */}
                            </div>
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
