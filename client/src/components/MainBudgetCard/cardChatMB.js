import React, { useEffect, useState, useDebugValue } from "react";
import { Doughnut } from 'react-chartjs-2';

function CardChartMB (props) {

    const [chartData, setChartData] = useState({})
    const [data, setDataObj] = useState([0,0,0,0])
        
    
    useEffect(()=>{
        const tbudget = parseInt(props.valueTransporation.Budget);
        const rbudget = parseInt(props.valueRefreshment.Budget);
        const abudget = parseInt(props.valueActivities.Budget);
        const lbudget = parseInt(props.valueLodging.Budget);
        setDataObj(
                    [tbudget, lbudget, rbudget, abudget]
                )
    },
        [
            props.valueTransporation.Budget, 
            props.valueRefreshment.Budget, 
            props.valueActivities.Budget, 
            props.valueLodging.Budget
        ]
    )

        return(
            <div className="chartMB">
                <Doughnut
                        data={{labels: ["Total " + props.name.Name, "Current Expense", "Remaining Budget", "Turkey"],
                        datasets: [{
                            label: "Budget",
                            data,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                                "rgba(255, 205, 86, 0.2)",
                                "rgba(255, 99, 132, 0.2)"
                
                            ],
                            borderColor:[
                                "rgb(255, 99, 132)",
                                "rgb(255, 159, 64)",
                                "rgb(255, 205, 86)",
                                "rgb(255, 205, 86)"
                
                            ],
                        }]
                    }}
                        options={{ maintainAspectRatio: false }}
                        />
            </div>
        )
    

}
export default CardChartMB;