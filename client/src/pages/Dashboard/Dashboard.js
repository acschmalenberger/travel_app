import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import DashboardCard from "../../components/DashboardCard"
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import MainBudgetCard from "../../components/MainBudgetCard";
import { set } from "mongoose";
// import { ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

function Dashboard () {

    const [cards, setCards] = useState([])



    const [budgetObject, setBudgetObject] = useState({
      budgetName: "Value",
      overallBudget: 0,
      spentBudget: 0,
      destintion: ""
    })
    const [transportObject, setTransportObject] = useState({
      Name: "Transportation",
      Budget: 0,
      Date: "",
      Address: "",
      Time: "",
      Notes: ""
    })
    const [refreshObject, setRefreshObject] = useState({
      Name: "Refreshment",
      Budget: 0,
      Date: "",
      Address: "",
      Time: "",
      Notes: ""
    })
    const [activitesObject, setActivitiesObject] = useState({
      Name: "Activites",
      Budget: 0,
      Date: "",
      Address: "",
      Time: "",
      Notes: ""
    })
    const [lodgingObject, setLodgingObject] = useState({
      Name: "Lodging",
      Budget: 0,
      Dates: "",
      Address: "",
      Time: "",
      Notes: ""
        })

    useEffect(() => {
        loadCards()
      }, [])

      function loadCards() {
        API.getCardInfo()
          .then(res => 
            setCards(res.data)    
          )
          .catch(err => console.log(err));
      };

      function deleteCard(id) {
        API.deleteCard(id)
          .then(res => loadCards())
          .catch(err => console.log(err));
      }

      function handleChange(e) {
        const { name, value } = e.target;
        const objectName = e.target.getAttribute("data-objectname");
          switch (objectName) {
            case "transportObject":
              return setTransportObject({...transportObject, [name]: value})
          }
          switch (objectName) {
            case "budgetObject":
              return setBudgetObject({...budgetObject, [name]: value})
          }
          switch (objectName) {
            case "refreshObject":
              return setRefreshObject({...refreshObject, [name]: value})
          }
          switch (objectName) {
            case "activitesObject":
              return setActivitiesObject({...activitesObject, [name]: value})
          }
          switch (objectName) {
            case "lodgingObject":
              return setLodgingObject({...lodgingObject, [name]: value})
            default: return console.log(objectName);
          };
            };

      function handleFormSubmit(event) {
        event.preventDefault();
        let cardObject= event.target.getAttribute("data-objectname")
        console.log(cardObject)
        // if (cardObject) {
        //   API.saveCard({
        //     label: cardObject.label,
        //     otherText: cardObject.otherText,
        //     cost: cardObject.cost,
        //     notes: cardObject.notes
        //   })
        //     .then(() => setCardObject({
        //       label: "",
        //       otherText: "",
        //       cost: 0,
        //       notes: ""
        //     }))
        //     .then(() => loadCards())
        //     .catch(err => console.log(err));
        // }
      };

return (

    <Container fluid>
        <Row>
        {/* <Col size="md-4">
            <Jumbotron>
              <h1>Value</h1>
            </Jumbotron>
              <MainBudgetCard 
              name="budgetName"
              handleInputChange={handleBudgetChange}
              value={budgetObject}
              info={setBudgetObject}
              />    
            </Col> */}
            
            <Col size="md-4">
            <Jumbotron>
              <h1>Travel</h1>
            </Jumbotron>
              <DashboardCard 
              name={transportObject}
              handleInputChange={handleChange}
              value={transportObject}
              objectName={"transportObject"}
              info={setTransportObject}
              handleFormSubmit={handleFormSubmit} 
              />
            </Col>

            <Col size="md-4">
            <Jumbotron>
              <h1>Refreshment</h1>
            </Jumbotron>
              <DashboardCard 
              name={transportObject}
              handleInputChange={handleChange}
              value={transportObject}
              objectName={"refreshObject"}
              info={setTransportObject}
              handleFormSubmit={handleFormSubmit} 
              />
            </Col>

            <Col size="md-4">
            <Jumbotron>
              <h1>Activities</h1>
            </Jumbotron>
              <DashboardCard 
              name={transportObject}
              handleInputChange={handleChange}
              value={transportObject}
              objectName={"activitesObject"}
              info={setTransportObject}
              handleFormSubmit={handleFormSubmit} 
              />
            </Col>

            <Col size="md-4">
            <Jumbotron>
              <h1>Lodging</h1>
            </Jumbotron>
              <DashboardCard 
              name={transportObject}
              handleInputChange={handleChange}
              value={transportObject}
              objectName={"lodgingObject"}
              info={setTransportObject}
              handleFormSubmit={handleFormSubmit} 
              />
            </Col>
            
        </Row>
    </Container>

    );
}
export default Dashboard;
