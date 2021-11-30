import gsap from "gsap";
import React, { useRef, useEffect, useState, useMemo } from "react";

function TextAnimation(props) {
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);
  const [ref1, ref2, ref3, ref4, ref5, ref6] = [useRef(0), useRef(0), useRef(0), useRef(0), useRef(0), useRef(0) ]; //rewrite this to be cleaer if possible
  
  const [play, setPlay] = useState(true);

  useEffect(() => { //pattern - first ref vis, move all refs(ref1) up, make first ref invis while simalteaneously making second ref vis.
    //REF 2
    timeline.to(ref2.current, { //ref 2 vis
      opacity:1,
    })
    .to(ref1.current, { //REF 1
      y:"-=1.5em",
    }, ">+=2") //start this animation 2 seconds later
    .to(ref2.current, {//ref2 invis
      opacity:0,
    },"<") //runs parallel to other animation
    
    //REF 3
    .to(ref3.current, {  //ref3 vis
      opacity:1,
    }, "<") 
    .to(ref1.current, { //REF 1
      y:"-=1.5em",
    }, ">+=2") 
    .to(ref3.current, {//ref3 invis
      opacity:0,
    },"<")

    //REF 4
    .to(ref4.current, {//ref4 vis
          opacity:1,
        }, "<") 
    .to(ref1.current, { //REF 1
      y:"-=1.5em",
    }, ">+=2") 
    .to(ref4.current, {//ref4 invis
      opacity:0,
    },"<")

    //REF 5
    .to(ref5.current, {//ref5 vis
          opacity:1,
        }, "<") 
    
    .to(ref6.current, {
      opacity:0,
    }, ">+=2")


  }, []);

  useEffect(() => {
    if (props.end){
      timeline.progress(1);
    }else{
      timeline.progress(0);
    }
    timeline.timeScale(props.timescale).play();

    console.log(props.timescale);
    // if (play) {
    //   timeline.play();
    // } else {
    //   timeline.reverse();
    // }
    // console.log(play);
  }, [props.end]);

  return (
    <div className="inline-flex mr-2">
      <div className="text-white text-lg font-bold" ref={ref6}> I'm </div>
      <div ref={ref1} className="text-lg text-white font-bold z-10 center-text ml-2">
        <p ref={ref2} className="opacity-0">A Student</p>
        <p ref={ref3} className="opacity-0">An Engineer</p>
        <p ref={ref4} className="opacity-0">A Designer</p>
        <p ref={ref5} className="opacity-0 z-10" style={{zIndex: props.hide?'0':'b'}}>Daniel McCann-Sayles</p>
      </div>
    </div>
  );
}

export default TextAnimation;
