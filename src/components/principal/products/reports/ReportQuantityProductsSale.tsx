import React , {useState , useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';





export const QuantityProductsSale = ()=>{
    const [chartData , setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels : ["Produto1","Produto2","Produto3","Produto4"],
            datasets : [
                {
                    label : "Produtos",
                    data : [10,20,30,40],
                    backgroundColor : [
                        "blue",
                        "darkslategray",
                        "lightblue",
                        'cyan'
                    ],
                    hoverBackgroundColor : "gray",
                    borderWidth : 1,
                    hoverBorderWidth : 4,
                    weight : 1
                },
            ]
        })
    }


    useEffect(() => {
        chart()
    }, [])



    return (
        <div style={{width : "35%" , height : "35%"}}>
            <Doughnut
                data={chartData}
            />
        </div>
    )
}