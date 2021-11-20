import React from "react";
import ButtonTrigger from "./ButtonTrigger";



class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick;
    }

    handleClick(){
        console.log("test 100");
    }

    render(){
        return( 
            <>
            <div>blah blah</div>
            <ButtonTrigger handleClick={this.handleClick}></ButtonTrigger>
            <ButtonTrigger handleClick={this.props.onClick}></ButtonTrigger>
            </>
        );
    }
}

export default HomePage;

