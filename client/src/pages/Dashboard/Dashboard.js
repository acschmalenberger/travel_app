import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import DashboardCard from "../../components/DashboardCard"
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import MainBudgetCard from "../../components/MainBudgetCard";
// import { ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

function Dashboard () {

    const [cards, setCards] = useState([])
    const [cardObject, setCardObject] = useState({
      overallBudget: 0,
      spentBudget: 0,
      destintion: "TEST",
      transportName: "Travel",
      travelDates: "",
      transportBudget: 0,
      transportDate: "",
      transportAddress: "",
      transportTime: "",
      transportNotes: "",
      refreshBudget: 0,
      refreshDate: "",
      refreshAddress: "",
      refreshTime: "",
      refreshNotes: "",
      activitesBudget: 0,
      activitesDate: "",
      activitesAddress: "",
      activitesTime: "",
      activitesNotes: "",
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
            //setCards(res.data)
            console.log(res.data)

        
    
          )
          .catch(err => console.log(err));
      };

      function deleteCard(id) {
        API.deleteCard(id)
          .then(res => loadCards())
          .catch(err => console.log(err));
      }

      function handleInputChange(event) {
        const { name, value } = event.target;
        setCardObject({...cardObject, [name]: value})
      };

      function handleFormSubmit(event) {
        event.preventDefault();
        if (cardObject.title && cardObject.otherText) {
          API.saveBook({
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
        {/* <Col size="md-4">
            <Jumbotron>
              <h1>Value</h1>
            </Jumbotron>
              <MainBudgetCard>
                <DeleteBtn />
              </MainBudgetCard>    
            </Col> */}
            
            <Col size="md-4">
            <Jumbotron>
              <h1>Travel</h1>
            </Jumbotron>
              <DashboardCard 
              name="transportName"
              handleInputChange={handleInputChange}
              value={cardObject}
              info={setCardObject} />
            </Col>

            
        </Row>
    </Container>

    );
}
export default Dashboard;
