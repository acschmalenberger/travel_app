import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import DashboardCard from "../../components/DashboardCard"
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

function Dashboard () {

    const [cards, setCards] = useState([])
    const [cardObject, setCardObject] = useState({
      label: "",
      otherText: "",
      cost: 0,
      notes: ""
    })

    useEffect(() => {
        loadCards()
      }, [])

      function loadCards() {
        API.getCards
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
            <Col size="md-4">
            <Jumbotron>
              <h1>Travel</h1>
            </Jumbotron>
                <DashboardCard />
                <DeleteBtn />
            </Col>
            <Col size="md-4">
            <Jumbotron>
              <h1>Lodging</h1>
            </Jumbotron>
            <DashboardCard />
                <DeleteBtn />
            </Col>
            <Col size="md-4">
            <Jumbotron>
              <h1>Attractions</h1>
            </Jumbotron>
            <DashboardCard />
                <DeleteBtn />
            </Col> 
            <Col size="md-4">
            <Jumbotron>
              <h1>Dining</h1>
            </Jumbotron>
            <DashboardCard />
                <DeleteBtn />
            </Col>
            <Col size="md-4">
            <Jumbotron>
              <h1>Other Item</h1>
            </Jumbotron>
            <DashboardCard />
                <DeleteBtn />
            </Col>
            <Col size="md-4">
            <Jumbotron>
              <h1>Main Budget</h1>
            </Jumbotron>
            <DashboardCard />
                <DeleteBtn />
            </Col>
            
        </Row>
    </Container>

    );
}
export default Dashboard;
