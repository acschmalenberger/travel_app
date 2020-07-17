// import React, { useEffect, useState } from "react";
// // import { Col, Row, Container } from "../../components/Grid";
// import CardPlanningTabs from "../../components/CardPlanningTabs"
// import DeleteBtn from "../../components/DeleteBtn";
// import DashboardCard from "../../components/DashboardCard"
// import DashboardCardBody from "../../components/DashboardCard/DashboardCard.js"
// import CardBudget from "../../components/CardBudget"
// import GetStarted from "../../components/GetStartedCard"
// import CardPlanningForm from "../../components/CardPlanningForm"
// import GridContainer from "../../components/Grid2/GridContainer.js";
// import GridItem from "../../components/Grid2/GridItem.js";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { set } from "mongoose";
// // import { ListItem } from "../../components/List";
// // import { Input, TextArea, FormBtn } from "../../components/Form";
// import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
// import RestaurantIcon from '@material-ui/icons/Restaurant';
// import HotelIcon from '@material-ui/icons/Hotel';
// import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
// import MainBudgetCard from "../../components/MainBudgetCard";
// import { tripDetails, createTrip } from "../../utils/controller/cardsController";

// function Dashboard() {

//   const [cards, setCards] = useState({})

//   const [budgetObject, setBudgetObject] = useState({
//     Name: "Value",
//     overallBudget: "",
//     spentBudget: "",
//     destintion: "",
//     startDate: "",
//     endDate: ""
//   })
//   const [transportObject, setTransportObject] = useState({
//     Name: "Transportation",
//     Budget: "",
//     Date: "",
//     Address: "",
//     Time: "",
//     Notes: ""
//   })
//   const [refreshObject, setRefreshObject] = useState({
//     Name: "Refreshment",
//     Budget: "",
//     Date: "",
//     Address: "",
//     Time: "",
//     Notes: ""
//   })
//   const [activitesObject, setActivitiesObject] = useState({
//     Name: "Activites",
//     Budget: "",
//     Date: "",
//     Address: "",
//     Time: "",
//     Notes: ""
//   })
//   const [lodgingObject, setLodgingObject] = useState({
//     Name: "Lodging",
//     Budget: "",
//     Dates: "",
//     Address: "",
//     Time: "",
//     Notes: ""
//   })

//   useEffect(() => {
//     loadCards()
//   }, [])

//   function loadCards() {
//     console.log("This is the load card Fx")
//     API.getCards()
//       .then(res =>
//         setCards(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   function deleteCard(id) {
//     API.deleteCard(id)
//       .then(res => loadCards())
//       .catch(err => console.log(err));
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     const objectName = e.target.getAttribute("data-objectname");
//     switch (objectName) {
//       case "transportObject":
//         return setTransportObject({ ...transportObject, [name]: value })
//       case "budgetObject":
//         return setBudgetObject({ ...budgetObject, [name]: value })
//       case "refreshObject":
//         return setRefreshObject({ ...refreshObject, [name]: value })
//       case "activitesObject":
//         return setActivitiesObject({ ...activitesObject, [name]: value })
//       case "lodgingObject":
//         return setLodgingObject({ ...lodgingObject, [name]: value })
//       default: return console.log(objectName);
//     };

//   };

//   function handleTrip(event) {
//     event.preventDefault();
//     let tripSubmitObj = event.target.getElementById("createTrip");
//     if (tripSubmitObj) {
//       API.createTrip(budgetObject, "budgetObject")
//         .then(() => setBudgetObject({}))
//         .catch(err => console.log(err));
//     }
//   }

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     let cardSubmitObj = event.target.getAttribute("data-objectname")
//     //console.log(cards, cardSubmitObj)
//     if (cardSubmitObj) {
//       switch (cardSubmitObj) {
//         case "transportObject":
//           return API.saveCard(transportObject, "TransCard")
//             .then(() => setTransportObject({}))
//             .catch(err => console.log(err));
//         case "budgetObject":
//           return API.saveCard(budgetObject, "budgetObject")
//             .then(() => setBudgetObject({}))
//             .catch(err => console.log(err));
//         case "refreshObject":
//           return API.saveCard(refreshObject, "refreshObject")
//             .then(() => setRefreshObject({}))
//             .catch(err => console.log(err));
//         case "activitesObject":
//           return API.saveCard(activitesObject, "activitesObject")
//             .then(() => setActivitiesObject({}))
//             .catch(err => console.log(err));
//         case "lodgingObject":
//           return API.saveCard(lodgingObject, "lodgingObject")
//             .then(() => setLodgingObject({}))
//             .catch(err => console.log(err));
//         default: return console.log("Error");
//         //   .then(() => loadCards())
//       }
//     }
//   };

//   return (
//     <div>

//       <Container fluid>
//         <Row>
//           <Col size="md-4">
//             <Jumbotron>
//               <h1>Value</h1>
//             </Jumbotron>
//             <MainBudgetCard
//               name={budgetObject}
//               handleInputChange={handleChange}
//               objectName={"budgetObject"}
//               value={budgetObject}
//               valueTransporation={transportObject}
//               valueRefreshment={refreshObject}
//               valueActivities={activitesObject}
//               valueLodging={lodgingObject}
//               info={setBudgetObject}
//               handleFormSubmit={handleFormSubmit}
//               handleTrip={handleTrip}
//             />
//           </Col>

//           <Col size="md-4">
//             <Jumbotron>
//               <h1>Travel</h1>
//             </Jumbotron>
//             <DashboardCard
//               name={transportObject}
//               handleInputChange={handleChange}
//               value={transportObject}
//               overallBudget={budgetObject}
//               objectName={"transportObject"}
//               info={setTransportObject}
//               handleFormSubmit={handleFormSubmit}
//             />
//           </Col>

//           <Col size="md-4">
//             <Jumbotron>
//               <h1>Refreshment</h1>
//             </Jumbotron>
//             <DashboardCard
//               name={refreshObject}
//               handleInputChange={handleChange}
//               value={refreshObject}
//               overallBudget={budgetObject}
//               objectName={"refreshObject"}
//               info={setTransportObject}
//               handleFormSubmit={handleFormSubmit}
//             />
//           </Col>

//           <Col size="md-4">
//             <Jumbotron>
//               <h1>Activities</h1>
//             </Jumbotron>
//             <DashboardCard
//               name={activitesObject}
//               handleInputChange={handleChange}
//               value={activitesObject}
//               overallBudget={budgetObject}
//               objectName={"activitesObject"}
//               info={setTransportObject}
//               handleFormSubmit={handleFormSubmit}
//             />
//           </Col>

//           <Col size="md-4">
//             <Jumbotron>
//               <h1>Lodging</h1>
//             </Jumbotron>
//             <DashboardCard
//               name={lodgingObject}
//               handleInputChange={handleChange}
//               value={lodgingObject}
//               overallBudget={budgetObject}
//               objectName={"lodgingObject"}
//               info={setTransportObject}
//               handleFormSubmit={handleFormSubmit}
//             />
//           </GridItem>
//       </GridContainer>

//     </div>

//   );
// }
// export default Dashboard;
