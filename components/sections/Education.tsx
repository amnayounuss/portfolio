"use client";

import React from 'react';
import { motion } from 'framer-motion';

const education = {
  title: "Academic Foundation",
  items: [
    {
      institution: "Muhammad Ali Jinnah University",
      degree: "B.S. Software Engineering",
      duration: "2017 — 2022"
    }
  ]
};

const Education = () => {
  return (
    <section id="education" className="py-10 bg-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none"></div>

      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="flex flex-col gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[800px] glass p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden group border border-white/5 hover:border-accent/20 transition-all duration-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-2">Education</span>
                <h3 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-accent transition-colors duration-700">
                  {education.items[0].institution}
                </h3>
                <p className="text-white/40 font-body text-lg sm:text-xl italic">
                  {education.items[0].degree}
                </p>
              </div>
              <div className="glass px-6 py-2 rounded-full border border-white/10 text-white/60 font-bold tracking-widest text-xs">
                {education.items[0].duration}
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-all duration-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
