import React from "react";
import ButtonTrigger from "./ButtonTrigger";

class HomePage extends React.Component{
    
    
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.testref=React.createRef();
        this.state = {yPos: 0}
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        this.setState({yPos:window.scrollY});
        console.log(this.state.yPos);
    }

    handleClick(){
        console.log("test 100");
        let node = this.testref.current
        console.log(this.state.yPos);
    }

    render(){
        return( 
            <>
            <div className="flex h-screen bg-gradient-to-r from-green-400 to-blue-500 items-center justify-evenly">
                <p className="sticky top-0 text-white font-bold z-50">Hi I'm Daniel</p>
            </div>
            <div className="bg-green-500 md:bg-red-500 lg:bg-green-500">
            <div>blah blah</div>
            <ButtonTrigger handleClick={this.handleClick}></ButtonTrigger>
            <ButtonTrigger handleClick={this.props.onClick}></ButtonTrigger>
            </div>
            <div ref = {this.testref} className="bg-green-100 mx-10 flex flex-wrap bg-white h-auto items-center justify-evenly">
               <div className="bg-purple-400 text-white w-40 rounded-lg my-10 mx-5" style={{boxShadow: '-1vw -1vw teal',}}>
                    <h1>This is header</h1>
                    <p>This is the body of this area and hopefully it works</p>
               </div>
               <div className="bg-purple-400 text-white w-40" style={{boxShadow: '-30px -16px teal',}}>
                    <h1>This is header</h1>
                    <p>This is the body of this area and hopefully it works</p>
               </div>
               <div className="bg-purple-400 text-white w-40" style={{boxShadow: '-30px -16px teal',}}>
                    <h1>This is header</h1>
                    <p>This is the body of this area and hopefully it works</p>
               </div>
            </div>
            </>
            
        );
    }
}

export default HomePage;

