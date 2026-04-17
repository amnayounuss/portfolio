"use client";

import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaWordpress } from "react-icons/fa";
import { SiNextdotjs as Nx, SiTypescript as Ts, SiTailwindcss as Tw, SiShadcnui as Sc, SiReact as Ri } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { motion, useReducedMotion } from 'framer-motion';

const skillsData = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3 />, name: "CSS3", color: "#1572B6" },
  { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <Ts />, name: "TypeScript", color: "#3178C6" },
  { icon: <Ri />, name: "React.js", color: "#61DAFB" },
  { icon: <Nx />, name: "Next.js", color: "#FFFFFF" },
  { icon: <Tw />, name: "TailwindCSS", color: "#06B6D4" },
  { icon: <Sc />, name: "Shadcn/UI", color: "#FFFFFF" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <FaWordpress />, name: "WordPress", color: "#21759B" }
];

const Skills: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-12 xl:py-16 relative overflow-hidden bg-primary/20">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="flex flex-col gap-12 items-center text-center">
          <div className="flex flex-col gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Capabilities</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="h1 text-center"
            >
              Technical <span className="text-outline italic">Stack</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full relative overflow-hidden group/marquee py-10"
          >
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 w-10 sm:w-40 h-full bg-gradient-to-r from-primary to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-10 sm:w-40 h-full bg-gradient-to-l from-primary to-transparent z-10"></div>

            <motion.div
              className="flex gap-6 sm:gap-12 w-max"
              animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...skillsData, ...skillsData].map((skill, index) => (
                <div key={index} className="w-[100px] sm:w-[150px] shrink-0">
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger className="w-full aspect-square glass rounded-2xl sm:rounded-3xl flex items-center justify-center group hover:bg-white/[0.03] hover:border-white/20 transition-all duration-700">
                        <div
                          className="text-3xl sm:text-5xl group-hover:scale-110 transition-all duration-700 opacity-70 group-hover:opacity-100"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-accent text-white border-none font-bold rounded-lg px-4 py-2 shadow-xl">
                        <p className="uppercase tracking-widest text-[10px] sm:text-xs">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
