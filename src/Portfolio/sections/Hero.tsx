import { motion } from "framer-motion";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import { Heading } from "@chakra-ui/react";
import AnimatedBody from "../animations/AnimatedBody";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center  pointer-events-none`}
                >
                    <AnimatedBody delay={4.5} text="OKENOVA MIRZHAN" className="text-[40px] md:text-[80px] "  />
                    <AnimatedBody delay={5} text="Welcome to my portfolio" className="text-[30px] uppercase md:text-[20px] "  />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;