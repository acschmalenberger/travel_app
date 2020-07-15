import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';

class CardChart extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Total " + props.name, "Current Expense", "Remaining Budget", "Turkey"],
                datasets: [{
                    label: "Budget",
                    data: [
                        1000,
                        500,
                        200,
                        1000
                    ],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(255, 205, 86, 0.2)"

                    ],
                    borderColor:[
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(255, 205, 86)"

                    ],
                }]
            }
        };
    }

    render () {
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}
export default CardChart;