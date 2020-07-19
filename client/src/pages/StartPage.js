import React, { useEffect, useState } from "react";
import GetStarted from "../components/GetStartedCard"
import GridContainer from "../components/Grid2/GridContainer.js";
import API from "../utils/API";
import "./StartPageStyle.css"
// import { ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";


function StartPage() {

<<<<<<< HEAD
    const [cards, setCards] = useState({})

    const [budgetObject, setBudgetObject] = useState({
=======
        const [budgetObject, setBudgetObject] = useState({
>>>>>>> a2ec97164456089652ba6dbba52209e808289028
        Name: "Value",
        overallBudget: "",
        spentBudget: "",
        destination: "",
        startDate: "",
        endDate: ""
    })

<<<<<<< HEAD
    useEffect(() => {
        loadCards()
    }, [])

    function loadCards() {
        API.getCards()
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
            case "budgetObject":
                return setBudgetObject({ ...budgetObject, [name]: value })
        };

    };

    function handleFormSubmit(event) {
        event.preventDefault();
        let cardSubmitObj = event.target.getAttribute("data-objectname")
        console.log(cards, cardSubmitObj)

    };

    function createCard() {
        console.log(budgetObject);
        API.saveCard(budgetObject);
    }

    return (
        <div>

            <GridContainer>
                <GetStarted
                    name={budgetObject}
                    handleInputChange={handleChange}
                    objectName={"budgetObject"}
                    value={budgetObject}
                    info={setBudgetObject}
                    execute={createCard}
                    handleFormSubmit={handleFormSubmit}
                />
            </GridContainer>

=======
        function handleChange(e) {
            const { name, value } = e.target;
            const objectName = e.target.getAttribute("data-objectname");
                switch (objectName) {
                    case "budgetObject":
                    return setBudgetObject({...budgetObject, [name]: value})
                };

                };

        function handleTrip(event) {
            event.preventDefault();
                API.createTrip(budgetObject)
                    .then(() => setBudgetObject({}))
                    .then(document.location.href = '/Plan')
                    .catch(err => console.log(err));
            }
 
    return ( 
        <div className="startContainer">
            <div>

            <GridContainer>
                <GetStarted            
                name={budgetObject}
                handleInputChange={handleChange}
                objectName={"budgetObject"}
                value={budgetObject} 
                info={setBudgetObject}
                handleTrip={handleTrip}
                />
            </GridContainer>

            </div>
>>>>>>> a2ec97164456089652ba6dbba52209e808289028
        </div>

    );
}
export default StartPage;
