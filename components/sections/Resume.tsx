"use client";

import React from 'react';
import { motion } from 'framer-motion';

const experience = {
  title: "Professional Record",
  items: [
    {
      company: "Crystallite Pakistan Pvt Ltd.",
      position: "Frontend Engineering Intern",
      duration: "2023 — 2024"
    },
    {
      company: "Team 360",
      position: "Lead WordPress Architect",
      duration: "2023"
    },
    {
      company: "Independent Consultant",
      position: "Full Stack Developer",
      duration: "2023 — Present"
    }
  ]
};

const Resume = () => {
  return (
    <section id="resume" className="py-12 xl:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="flex flex-col gap-16 sm:gap-24">

          {/* Section Heading */}
          <div className="flex flex-col gap-6 items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Career Architecture</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h1 text-center"
            >
              Professional <span className="text-outline italic">Journey</span>
            </motion.h2>
          </div>

          {/* Experience Tree Container */}
          <div className="relative max-w-[1000px] mx-auto w-full">

            {/* Main Timeline Axis with Glow Background */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
            </div>

            {/* Soft Ambient Timeline Glow */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[40px] md:w-[100px] -translate-x-1/2 bg-accent/2 blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col gap-12 sm:gap-20">
              {experience.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 50 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* High-Fidelity Milestone Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                    <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                      {/* Outer Pulse Ring */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-accent/30"
                      />
                      {/* Inner Core */}
                      <div className="absolute inset-1 rounded-full bg-accent border-[3px] border-primary shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                    </div>
                  </div>

                  {/* Horizontal Connector Line (Desktop Only) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[10%] h-[1px] bg-gradient-to-r ${index % 2 === 0 ? 'right-1/2 from-accent/40 to-transparent' : 'left-1/2 from-accent/40 to-transparent'}`}></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[42%] flex flex-col ${index % 2 === 0 ? 'md:items-start text-left ml-12 md:ml-0' : 'md:items-end text-left md:text-right ml-12 md:ml-0'}`}>
                    <div className="glass group relative p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] hover:bg-white/[0.04] transition-all duration-1000 w-full border border-white/5 hover:border-accent/30 overflow-hidden">

                      {/* Decorative Background Accent */}
                      <div className={`absolute top-0 w-2 h-full bg-accent/20 transition-all duration-700 ${index % 2 === 0 ? 'left-0 group-hover:w-4' : 'right-0 group-hover:w-4'}`} />

                      <div className="relative z-10">
                        <span className="text-accent text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] mb-4 block opacity-60 group-hover:opacity-100 transition-opacity duration-700">{item.duration}</span>
                        <h4 className="text-xl sm:text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-700 leading-tight">{item.position}</h4>
                        <div className="flex items-center gap-3 opacity-40 group-hover:opacity-80 transition-opacity duration-1000">
                          <div className="w-6 h-[1px] bg-white" />
                          <p className="text-white font-body italic text-base sm:text-xl">{item.company}</p>
                        </div>
                      </div>

                      {/* Corner Glow (Hover) */}
                      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-accent/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;

