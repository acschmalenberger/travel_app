import React, { useEffect, useState } from "react";
import { Bar} from 'react-chartjs-2';

function CardChart (props) {
    // console.log("chart props");
    // console.log(props);
    //const [chartData, setChartData] = useState({})
    const [data, setDataObj] = useState([0,0,0])
        //console.log(props.overallBudget.overallBudget)

        useEffect(()=>{
            const oAbudget = parseInt(props.overallBudget.overallBudget);
            const expenses = parseInt(props.value);
            const diff = (oAbudget - expenses)
            setDataObj(
                        [oAbudget, expenses, diff]
                    )
        },
            [
                props.overallBudget.overallBudget,
                props.value,
                //((props.overallBudget.overallBudget - props.value))
            ]
        )

        console.log("VALUE", props.value);

        return(
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