import {
  SiCplusplus,
  SiCss3,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiNeovim,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiRust,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiZig,
} from "react-icons/si";
import { IconType } from "react-icons";
import { FaHtml5, FaJava } from "react-icons/fa";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Apple Store",
    description: "Apple Store",
    technologies: [SiHtml5, SiCss3, SiPython, SiTailwindcss, SiFramer],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.framer.com/motion/",
    ],
    github: "https://github.com/mirzhano/AirPods",
    demo: "https://www.seekvisualartist.com/",
    image: "/work1.jpg",
    available: true,
  },
  {
    id: 1,
    name: "EFC-education",
    description:
      'Проект "EFC-education for children"- зачисление детей в учебные учреждения',
    technologies: [FaJava, SiHtml5, SiCss3],
    techNames: ["Java", "HTML", "Css", "Js"],
    techLinks: ["#", "#", "#"],
    github: "https://github.com/nuIIpointerexception/codewars",
    demo: "#",
    image: "/work2.png",
    available: true,
  },
  {
    id: 2,
    name: "Spirit 8",
    description: "Employing Sass for professional project styling boosts efficiency and readability. Features like variables and mixins streamline development, making code more modular. This hands-on experience enhances front-end skills and promotes scalable coding practices.",
    technologies: [SiHtml5, SiCss3, SiSass],
    techNames: ["Html", "Css", "Sass"],
    techLinks: ["https://www.ziglang.org/"],
    github: "https://github.com/mirzhano/Spirit2",
    demo: "#",
    image: "/snow.jpg",
    available: false,
  },
];
