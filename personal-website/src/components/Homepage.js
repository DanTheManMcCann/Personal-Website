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
            <>
            <div class="bg-green-500 md:bg-red-500 lg:bg-green-500">
            <div>blah blah</div>
            <ButtonTrigger handleClick={this.handleClick}></ButtonTrigger>
            <ButtonTrigger handleClick={this.props.onClick}></ButtonTrigger>
            </div>
            <div class="bg-green-100 mx-10 flex bg-white h-40 items-center justify-evenly">
               <div class="bg-purple-400 text-white w-40 rounded-lg" style={{boxShadow: '-30px -16px teal',}}>
                    <h1>This is header</h1>
                    <p>This is the body of this area and hopefully it works</p>
               </div>
               <div class="bg-purple-400 text-white w-40" style={{boxShadow: '-30px -16px teal',}}>
                    <h1>This is header</h1>
                    <p>This is the body of this area and hopefully it works</p>
               </div>
               <div class="bg-purple-400 text-white w-40" style={{boxShadow: '-30px -16px teal',}}>
                    <h1>This is header</h1>
                    <p>This is the body of this area and hopefully it works</p>
               </div>
            </div>
            </>
            
        );
    }
}

export default HomePage;

