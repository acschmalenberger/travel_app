import React, { useEffect, useState } from "react";

import GetStarted from "../components/GetStartedCard"

import GridContainer from "../components/Grid2/GridContainer.js";
import API from "../utils/API";
import { set } from "mongoose";
// import { ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";


function StartPage() {

        const [cards, setCards] = useState({})

        const [budgetObject, setBudgetObject] = useState({
        Name: "Value",
        overallBudget: "",
        spentBudget: "",
        destination: "",
        startDate: "",
        endDate:""
        })

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
                    return setBudgetObject({...budgetObject, [name]: value})
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
            <GetStarted            
            name={budgetObject}
            handleInputChange={handleChange}
            objectName={"budgetObject"}
            value={budgetObject} 
            info={setBudgetObject}
            handleFormSubmit={handleFormSubmit} 
            />
        </GridContainer>

        </div>
    
    );
}
export default StartPage;
