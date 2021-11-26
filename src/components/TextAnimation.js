import gsap from "gsap";
import React, { useRef, useEffect, useState, useMemo } from "react";

function TextAnimation() {
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);
  const ref1 = useRef(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    timeline.from(ref1.current, {
      y: 100,
      x: 100,
    });
  }, []);

  useEffect(() => {
    if (play) {
      timeline.play();
    } else {
      timeline.reverse();
    }
    console.log(play);
  }, [play]);

  return (
    <>
      <button onClick={() => setPlay(true)}> forward</button>
      <button onClick={() => setPlay(false)}> reverse</button>
      <p ref={ref1} className="text-white font-bold z-0">
        Hi I'm Daniel
      </p>
    </>
  );
}

export default TextAnimation;
