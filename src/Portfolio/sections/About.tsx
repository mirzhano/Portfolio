import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      className="flex lg:max-w-[1212.8px] py-20 flex-wrap md:flex-nowrap  justify-center"
      id="about"
    >
      <div className="mx-auto flex flex-col items-center justify-center ">
        <AnimatedTitle
          text={"CREATING STUNNING VISUALS SINCE 2022."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="My passion lies in creating software that is both beautiful and functional. I’ve been designing for over 1.5 years and recently started getting into programming." />

            <AnimatedBody
              delay={0.1}
              text="Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
            />
           
            <AnimatedBody
              delay={0.2}
              text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
            /> 
            <AnimatedBody
              delay={0.2}
              text="Date of birth: March 4, 2004
             "
            /> <AnimatedBody
              delay={0.2}
              text=" Hobbies: Music, singing, dancing and reading
             
             "
            /><AnimatedBody
              delay={0.2}
              text="  Education: secondary school named after A. Alybakov, INAI.
             
             "
            />
          </div>
        </div>
      </div>
      <div className="flex align-center">
        <div
          style={{
            border: "5px solid #8A2BE2",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            height: "100%",
            maxHeight: "500px",
            marginTop: "4rem",
          }}
        >
          <img src="/m2.jpg" className="md:max-w-[500px] md:w-max w-[300px] " alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
