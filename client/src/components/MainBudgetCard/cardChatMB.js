import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';

function CardChartMB () {
        
    const [chartData, setChartData] = useState({})
    const [dataObj, setDataObj] = useState({
        labels: ["Total ", "Current Expense", "Remaining Budget", "Turkey"],
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