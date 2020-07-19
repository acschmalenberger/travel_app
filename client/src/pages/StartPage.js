import React, { useEffect, useState } from "react";
import GetStarted from "../components/GetStartedCard"
import GridContainer from "../components/Grid2/GridContainer.js";
import API from "../utils/API";
import "./StartPageStyle.css"
// import { ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";


function StartPage() {

        const [budgetObject, setBudgetObject] = useState({
        Name: "Value",
        overallBudget: "",
        spentBudget: "",
        destination: "",
        startDate: "",
        endDate:""
        })

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
        </div>
    
    );
}
export default StartPage;
