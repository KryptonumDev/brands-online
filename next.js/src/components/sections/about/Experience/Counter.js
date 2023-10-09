'use client'
import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const Counter = ({ children, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });

  // Use regular expressions to extract beforeNumber and afterNumber
  const match = children.match(/(.*?)(\d+)(.*)/);

  // Extract the parts
  const beforeNumber = match[1];
  const numericPart = match[2];
  const afterNumber = match[3];

  const initialNumber = parseInt(numericPart, 10);

  const [number, setNumber] = useState(initialNumber);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, Number(initialNumber), {
        duration: 3,
        onUpdate(value) {
          setNumber(value.toFixed(0));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, initialNumber, numericPart.length]);

  return (
    <p {...props} ref={ref}>
      {beforeNumber}
      <span>{number}</span>
      {afterNumber}
    </p>
  );
};

export default Counter;
