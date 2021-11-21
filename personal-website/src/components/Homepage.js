import React from "react";
import ButtonTrigger from "./ButtonTrigger";


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        console.log("test 100");
    }

    render(){
        return( 
            <div class="bg-green-500 md:bg-red-500 lg:bg-green-500">
            <div>blah blah</div>
            <ButtonTrigger handleClick={this.handleClick}></ButtonTrigger>
            <ButtonTrigger handleClick={this.props.onClick}></ButtonTrigger>
            <div class="container flex mx-auto bg-white h-40 items-center justify-items-center">
               <div class="bg-purple-400 text-white w-40" style={{boxShadow: '60px -16px teal',}}>
                    <h1>This is header</h1>
                    <p>This is the body of this area and hopefully it works</p>
               </div>
            </div>
            </div>
        );
    }
}

export default HomePage;

