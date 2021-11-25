
import React from "react";
import qBank from "../assets/questions";



class GuessingGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionBank: qBank,
            scoreArray: Array(10), //Initialized as empty, will take a score
            currentQuestion:0,
            score:0,
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.prevQuestion = this.prevQuestion.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
    }

    nextQuestion(){
        if (this.state.currentQuestion < 9)
            this.setState({currentQuestion: this.state.currentQuestion+1});
        console.log(this.state.scoreArray);
        this.setState({scoreArray: this.state.scoreArray.splice(this.state.currentQuestion, 1, 1)}); //testfor correct or false
        console.log(this.state.scoreArray);
    }

    prevQuestion(){
        if (this.state.currentQuestion > 0)
            this.setState({currentQuestion: this.state.currentQuestion-1});
    }

    calculateScore(){
        let counter=0;
        for (let elem of this.state.scoreArray){
            if (elem ==1){
                counter++;
            }
        }
        console.log(counter);
        this.setState({score: counter});
        console.log(this.state.scoreArray);
    }

    render(){
    return (
        <div>
        <div>Question {this.state.currentQuestion + 1} / {this.state.questionBank.length}</div>
        <div>{this.state.questionBank[this.state.currentQuestion].question}</div>
        <div>{this.state.questionBank[this.state.currentQuestion].answers}</div>
        <button onClick= {this.prevQuestion}> Previous </button>
        <button onClick = {this.nextQuestion}> Next</button>
        <div>Score: {this.state.score}</div>
        <button onClick={this.calculateScore}> Calculate</button>
        </div>
    );
    }
}

export default GuessingGame;