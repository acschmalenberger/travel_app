import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';

function CardChart (props) {
    const [chartData, setChartData] = useState({})
    const [data, setDataObj] = useState([0,0])
        console.log(props.overallBudget.overallBudget)

        useEffect(()=>{
            const oAbudget = parseInt(props.overallBudget.overallBudget);
            const expenses = parseInt(props.value);
            setDataObj(
                        [oAbudget, expenses]
                    )
        },
            [
                props.overallBudget.overallBudget,
                props.value
            ]
        )

        return(
            <div className="chart">
                <Bar
                    data={{labels: ["Total Budget", "Expenses"],
                    datasets: [{
                        label: "Budget",
                        data,
                        backgroundColor: [
                            "rgba(231, 131, 75, 1)",
                            "rgba(70, 170, 146, 1)"

                        ],
                        borderColor:[
                            "rgb(231, 131, 75)",
                            "rgb(70, 170, 146)"
                        ],
                    }]
                }}
                    options={{ maintainAspectRatio: false }}
                    />
        </div>
    )
}  

export default CardChart;