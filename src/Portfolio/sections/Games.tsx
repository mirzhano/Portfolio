import React from "react";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import { Link } from "react-router-dom";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords from "../animations/AnimatedWords";
export const Games = () => {
  return (
    <motion.section
      className="relative lg:max-w-[1212.8px]  z-10 flex-col  w-full  justify-center overflow-hidden py-16  md:py-20 lg:pt-0 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <AnimatedWords
        title={"Games"}
        style="mb-10 text-left text-[40px] font-bold tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
      />
      <div className="flex gap-4 justify-around mt-10 flex-wrap md:flex-nowrap">
        <div className="flex flex-col items-center">
          <img
            className="h-[400px] w-[300px] object-cover"
            src="/games/g4.jpg"
            alt=""
          />
          <Link className="text-[35px] uppercase " to={"/games"}>
            Store
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-[400px] w-[300px] object-cover"
            src="/games/g1.jpg"
            alt=""
          />
          <Link className="text-[35px] uppercase " to={"/3072"}>
            3072
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-[400px] w-[300px] object-cover"
            src="/games/g3.jpg"
            alt=""
          />
          <Link className="text-[35px] uppercase " to={"/board"}>
            Tic tac toe
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-[400px] w-[300px] object-cover"
            src="/games/g2.jpg"
            alt=""
          />
          <Link className="text-[35px] uppercase " to={"/memory"}>
            Memory
          </Link>
        </div>
      </div>
    </motion.section>
  );
};
