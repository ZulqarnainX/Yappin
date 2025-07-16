"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotateWords({ text = "Rotate", words = ["Word 1", "Word 2", "Word 3"] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-5xl text-sky-600 sm:text-6xl lg:text-7xl font-extrabold tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center justify-center mx-auto gap-1.5">
      <span className="text-gray-900">{text}</span>{" "}
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="text-[#3f4ef3]"
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

