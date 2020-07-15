import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';

function CardChartMB (props) {
    
    const tbudget = parseInt(props.valueTransporation.Budget);
    // const rbudget = parseInt(props.valueRefreshment.Budget);
    // const abudget = parseInt(props.valueActivities.Budget);
    // const lbudget = parseInt(props.valueLodging.Budget);

    //console.log(props.valueRefreshment.Budget);

    const [chartData, setChartData] = useState({})
    const [dataObj, setDataObj] = useState({
        labels: ["Total " + props.name.Name, "Current Expense", "Remaining Budget", "Turkey"],
        datasets: [{
            label: "Budget",
            data: [
                {tbudget},
                500,
                200,
                1000
            ],
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
    })
    
        return(
            <div className="chartMB">
                <Doughnut
                        data={dataObj}
                        options={{ maintainAspectRatio: false }}
                        />
            </div>
        )
    

}
export default CardChartMB;