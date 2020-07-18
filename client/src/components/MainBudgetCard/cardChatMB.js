import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';

function CardChartMB (props) {
    console.log(props.loadBudgetData, "This is the data grab from the DB")
    //const [chartData, setChartData] = useState({})
    const [data, setDataObj] = useState([0,0,0,0,0])
    
    useEffect(()=>{
        const oAbudget = parseInt(props.value.overallBudget);
        const tbudget = parseInt(props.valueTransporation.Budget);
        const rbudget = parseInt(props.valueRefreshment.Budget);
        const abudget = parseInt(props.valueActivities.Budget);
        const lbudget = parseInt(props.valueLodging.Budget);
        setDataObj(
                    [oAbudget, tbudget, lbudget, rbudget, abudget]
                )
    },
        [
            props.value.overallBudget,
            props.valueTransporation.Budget, 
            props.valueRefreshment.Budget, 
            props.valueActivities.Budget, 
            props.valueLodging.Budget
        ]
    )

        return(
            <div className="chartMB">
                <Doughnut
                        data={{labels: ["Total Budget", "Travel", "Refreshments", "Activities", "Lodging"],
                        datasets: [{
                            label: "Budget",
                            data,
                            backgroundColor: [
                                "rgba(231, 131, 75, 1)",
                                "rgba(239, 174, 132, 1)",
                                "rgba(70, 170, 146, 1)",
                                "rgba(34, 173, 215, 1)",
                                "rgba(17, 55, 76, 1)"

                
                            ],
                            borderColor:[
                                "rgb(231, 131, 75)",
                                "rgb(239, 174, 132)",
                                "rgb(70, 170, 146)",
                                "rgb(34, 173, 215)",
                                "rgb(17, 55, 76)"
                
                            ],
                        }]
                    }}
                        options={{ maintainAspectRatio: false }}
                        />
            </div>
        )
    

}
export default CardChartMB;