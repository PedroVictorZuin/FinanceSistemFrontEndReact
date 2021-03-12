import React , {useState , useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';





export const QuantityProductsSale = (props : any)=>{
    const [chartData , setChartData] = useState({})


    const quantidadeDeProdutos = props.products


    console.log('LISTADEQUANTIDADE')
    console.log(quantidadeDeProdutos)


    let labelProdutos = [];
    let quantidade = [];


    if(quantidadeDeProdutos[1] != undefined)
    {
        for(var i = 0; i < quantidadeDeProdutos[1].length ; i++)
        {
            labelProdutos.push("Produto : " + quantidadeDeProdutos[1][i].idproduct)
            quantidade.push(quantidadeDeProdutos[1][i].quantidade)
        }
        console.log(labelProdutos)
        console.log(quantidade)

    }
    const chart = () => {
        setChartData({
            labels : labelProdutos,
            datasets : [
                {
                    label : "Produtos",
                    data : quantidade,
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

    if(chartData.labels != undefined )
    {
        if(chartData. != 0)
        {
            return (
                <div style={{width : "35%" , height : "35%"}}>
                    <Doughnut
                        data={chartData}
                    />
                </div>
            )
        }
        else {
            return(<h4>Carregando ...</h4>)
        }
    }
    else {
        return(<h4>Carregando ...</h4>)
    }
}