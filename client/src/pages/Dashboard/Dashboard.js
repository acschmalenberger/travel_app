import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import DashboardCard from "../../components/DashboardCard"

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

      function loadBooks() {
        API.getCardInfo()
          .then(res => 
            setBooks(res.data)
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
            label: formObject.label,
            otherText: formObject.otherText,
            cost: formObject.cost,
            notes: formObject.notes
          })
            .then(() => setFormObject({
              label: "",
              otherText: "",
              cost: 0,
              notes: ""
            }))
            .then(() => loadBooks())
            .catch(err => console.log(err));
        }
      };

return (

    <Container fluid>
        <Row>
            <Col size="md-6">
                <DashboardCard />
                <DeleteBtn />
            </Col>
        </Row>
    </Container>

    );
}
export default Dashboard;
