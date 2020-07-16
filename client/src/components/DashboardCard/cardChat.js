import React, { useEffect, useState } from "react";
import { Bar} from 'react-chartjs-2';

<<<<<<< HEAD
function CardChart (props) {
    //const [chartData, setChartData] = useState({})
    const [data, setDataObj] = useState([0,0,0])
        console.log(props.overallBudget.overallBudget)

        useEffect(()=>{
            const oAbudget = parseInt(props.overallBudget.overallBudget);
            const expenses = parseInt(props.value);
            const diff = (oAbudget - expenses)
            console.log(diff);
            setDataObj(
                        [oAbudget, expenses, diff]
                    )
        },
            [
                props.overallBudget.overallBudget,
                props.value,
                ((props.overallBudget.overallBudget - props.value))
            ]
        )

        return(
=======
class CardChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Total Budget", "Current Expense", "Remaining Budget"],
                datasets: [{
                    label: "Budget",
                    data: [
                        1000,
                        500,
                        200
                    ],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)"
                    ],
                    borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)"
                    ],
                }]
            }
        };
    }

    render() {
        return (
>>>>>>> a61719f5677edb2ad5e95f11f031959031944493
            <div className="chart">
                <Bar
                    data={{labels: ["Total Budget $" + props.overallBudget.overallBudget, "Expenses $" + props.value, "Delta $"+ (props.overallBudget.overallBudget - props.value)],
                    datasets: [{
                        label: "Budget",
                        data,
                        backgroundColor: [
                            "rgba(231, 131, 75, 1)",
                            "rgba(70, 170, 146, 1)",
                            "rgba(0, 0, 12, 0.6)"

                        ],
                        borderColor:[
                            "rgb(231, 131, 75)",
                            "rgb(70, 170, 146)",
                            "rgba(0, 0, 12, 0.6)"
                        ]
                    }]
                }}
                    options={{ 
                        title: {display:true,
                        maintainAspectRatio: true,
                        text: "Expenses",
                        fontSize:15
                        },
                        legend:{
                            display: true,
                            position: "right"
                        }
                    }}
                    />
        </div>
    )
}  

export default CardChart;