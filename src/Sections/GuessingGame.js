
import React from "react";
import qBank from "../assets/questions";

const emptyarr = ['','','','','','','','','','',]; //hacked together - otherwise array behaves weirdly

class GuessingGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionBank: qBank,
            scoreArray: emptyarr, //Initialized as empty, will take a score
            currentQuestion:0,
            score:0,
            selectedAnswer: emptyarr,
            quizFinished:0,
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.prevQuestion = this.prevQuestion.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
        this.handleChoice = this.handleChoice.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    nextQuestion(){
        console.log(this.state.scoreArray);
        if (this.state.selectedAnswer[this.state.currentQuestion] =='') //make sure user selected answer
            return;
        if (this.state.currentQuestion > 8) //if it's last question next shouldn't work.
            return;
        this.setState((state)=>{
            const scoreArray = state.scoreArray.map((item, j) =>{
                if (j===state.currentQuestion){
                    if (state.questionBank[state.currentQuestion].correct == state.selectedAnswer[state.currentQuestion])
                        return 1; //here I want to see if they got it right
                    else   
                        return 0;
                }else{
                    console.log("test2");
                    return item;
                }
                });
                console.log(scoreArray)
                return {scoreArray: scoreArray};
            });
         //testfor correct or false
        console.log(this.state.scoreArray);
        //increment count here
        this.setState({currentQuestion: this.state.currentQuestion+1});
    }

    prevQuestion(){
        if (this.state.currentQuestion > 0)
            this.setState({currentQuestion: this.state.currentQuestion-1});
    }

    calculateScore(){ //going into this function they have to be on the last question
        if (this.state.selectedAnswer[9]== '')
            return;

        //at this point we know they answered something
        

        let counter=0;
        for (let elem of this.state.scoreArray){
            if (elem ==1){
                counter++;
            }
        }
        //can use simple logic to test to see if their last element is right
        if (this.state.selectedAnswer[9] == this.state.questionBank[9].correct)
            counter++; //increment counter - they got last one right
        
        console.log(counter);
        this.setState({score: counter, quizFinished:1});
        console.log(this.state.scoreArray);
    }

    handleChoice(event){

        console.log(event.target.getAttribute("value")); //have to use get attribute instead of just target.value here.
        this.setState((state)=>{
            const selectedAnswer = state.selectedAnswer.map((item, j) =>{
                if (j===state.currentQuestion){
                    return event.target.getAttribute("value");
                }else{
                    return item;
                }
                });
                return {selectedAnswer: selectedAnswer};
            });
            console.log(this.state.selectedAnswer)

    }

    resetGame(){
        this.setState(//just copy and paste original state
           {
                questionBank: qBank,
                scoreArray: emptyarr, //Initialized as empty, will take a score
                currentQuestion:0,
                score:0,
                selectedAnswer: emptyarr,
                quizFinished:0,
            }
        )
    }

    render(){
        const map1 = this.state.questionBank[this.state.currentQuestion].answers.map((item,j)=>{
            return <button key={item} value={item} onClick={this.handleChoice} className={item==this.state.selectedAnswer[this.state.currentQuestion]?'m-2 border-green-500 border-2 p-2 rounded-md cursor-pointer':' m-2 border-red-500 border-2 p-2 rounded-md cursor-pointer'}> {item} </button>
        });

            
    return (

        
        <div>
        <h1 className="text-center m-4 font-size-lg font-bold">About Me</h1>
        <p className="m-4 text-center"> About Me sections are normally boring, so I made mine an interactive quiz</p>
        {!this.state.quizFinished
            ?<div className="mx-auto w-10/12 sm:w-1/2 my-10 bg-gray-200 rounded-lg shadow-xl p-4">
            <div>Question {this.state.currentQuestion + 1} / {this.state.questionBank.length}</div>
            <div>{this.state.questionBank[this.state.currentQuestion].question}</div>
            <div className="flex flex-row justify-start flex-nowrap">{map1}</div>
            <div className="inline-flex">
                <button onClick= {this.prevQuestion} className={ (this.state.currentQuestion == 0)? "bg-yellow-300 hover:bg-yellow-500 text-yellow 700 font-bold py-2 px-4 rounded-l opacity-50 cursor-not-allowed":"bg-yellow-300 hover:bg-yellow-500 text-yellow 700 font-bold py-2 px-4 rounded-l"}> Previous </button>
                <button onClick = {this.nextQuestion} className={(this.state.selectedAnswer[this.state.currentQuestion] == '' || this.state.currentQuestion==9)?"bg-yellow-300 hover:bg-yellow-500 text-yellow 700 font-bold py-2 px-4 rounded-r opacity-50 cursor-not-allowed":"bg-yellow-300 hover:bg-yellow-500 text-yellow 700 font-bold py-2 px-4 rounded-r"}> Next</button>
            </div>
          
            {this.state.currentQuestion==9 && <button onClick={this.calculateScore}> Calculate</button>}
            </div>
            : <>
            <div> Your Score: {this.state.score}</div>
            <button onClick={this.resetGame}>Play Again</button>
            </>
            
            }
        </div>

    );
    }
}

export default GuessingGame;