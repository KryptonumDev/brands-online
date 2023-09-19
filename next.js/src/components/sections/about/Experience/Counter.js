'use client'
import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const Counter = ({ to, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });

  const [ number, setNumber ] = useState(to);

  useEffect(() => {
    if(isInView) {
      const controls = animate(0, Number(to), {
        duration: 3,
        onUpdate(value) {
          setNumber(value.toFixed(0).toString().padStart(2, "0"));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <p {...props} ref={ref}>{number}</p>;
}

export default Counter;