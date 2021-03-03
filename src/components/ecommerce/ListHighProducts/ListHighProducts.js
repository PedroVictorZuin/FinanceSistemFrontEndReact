import React from 'react';


export default class ListHighProducts extends React.Component{

    constructor(props){
        super(props);
    
        this.state= {
            product : {

            }
        }
    }


    render(){
        return(
            <div className="d-flex p-2 col-example">I'm a flexbox container!</div>
        )
    }


}