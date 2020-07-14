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
      transportName: "Transporation",
      travelDates: "",
      transportBudget: 0,
      transportDate: "",
      transportAddress: "",
      transportTime: "",
      transportNotes: ""
    })
    const [refreshObject, setRefreshObject] = useState({
      refreshName: "Refreshment",
      refreshBudget: 0,
      refreshDate: "",
      refreshAddress: "",
      refreshTime: "",
      refreshNotes: ""
    })
    const [activitesObject, setActivitiesObject] = useState({
      activitesName: "Activites",
      activitesBudget: 0,
      activitesDate: "",
      activitesAddress: "",
      activitesTime: "",
      activitesNotes: ""
    })
    const [lodgingObject, setLodgingObject] = useState({
      lodgingName: "Lodging",
      lodgingBudget: 0,
      lodgingDates: "",
      lodgingAddress: "",
      lodgingTime: "",
      lodgingNotes: ""
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

      function handleBudgetChange(event) {
        const { name, value } = event.target;
        setCardObject({...budgetObject, [name]: value})
      };
      function handleTransportChange(event) {
        const { name, value } = event.target;
        setCardObject({...transportObject, [name]: value})
      };
      function handleRefreshChange(event) {
        const { name, value } = event.target;
        setCardObject({...refreshObject, [name]: value})
      };
      function handleActivitiesChange(event) {
        const { name, value } = event.target;
        setCardObject({...activitesObject, [name]: value})
      };
      function handleLodgingChange(event) {
        const { name, value } = event.target;
        setCardObject({...lodgingObject, [name]: value})
      };

      function handleFormSubmit(event) {
        event.preventDefault();
        if (cardObject.title && cardObject.otherText) {
          API.saveCard({
            label: cardObject.label,
            otherText: cardObject.otherText,
            cost: cardObject.cost,
            notes: cardObject.notes
          })
            .then(() => setCardObject({
              label: "",
              otherText: "",
              cost: 0,
              notes: ""
            }))
            .then(() => loadCards())
            .catch(err => console.log(err));
        }
      };

return (

    <Container fluid>
        <Row>
        <Col size="md-4">
            <Jumbotron>
              <h1>Value</h1>
            </Jumbotron>
              <MainBudgetCard 
              name="budgetName"
              handleInputChange={handleBudgetChange}
              value={budgetObject}
              info={setBudgetObject}
              />    
            </Col>
            
            <Col size="md-4">
            <Jumbotron>
              <h1>Travel</h1>
            </Jumbotron>
              <DashboardCard 
              name="transportName"
              handleInputChange={handleTransportChange}
              value={transportObject}
              info={setTransportObject} />
            </Col>

            <Col size="md-4">
            <Jumbotron>
              <h1>Refreshment</h1>
            </Jumbotron>
              <DashboardCard 
              name="refreshName"
              handleInputChange={handleRefreshChange}
              value={refreshObject}
              info={setRefreshObject} />
            </Col>

            <Col size="md-4">
            <Jumbotron>
              <h1>Activities</h1>
            </Jumbotron>
              <DashboardCard 
              name="activitiesName"
              handleInputChange={handleActivitiesChange}
              value={activitesObject}
              info={setActivitiesObject} />
            </Col>

            <Col size="md-4">
            <Jumbotron>
              <h1>Lodging</h1>
            </Jumbotron>
              <DashboardCard 
              name="lodgingName"
              handleInputChange={handleLodgingChange}
              value={lodgingObject}
              info={setLodgingObject} />
            </Col>
            
        </Row>
    </Container>

    );
}
export default Dashboard;
