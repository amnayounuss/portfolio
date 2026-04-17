"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";
import Socials from '../Socials';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-center pt-20">

      {/* Noise & Grain Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-50"></div>

      {/* Background Atmosphere */}
      <div className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] bg-accent/10 blur-[150px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-[30vw] h-[30vw] bg-accent/5 blur-[120px] rounded-full animate-float"></div>

      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-0 items-center">

          {/* Text Content */}
          <div className="xl:col-span-7 flex flex-col items-start gap-10 max-w-[800px] z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 py-2 glass rounded-full flex items-center gap-4 group cursor-default border border-white/5"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                Available for New Arbitrage
              </span>
            </motion.div>

            <div className="flex flex-col w-full">
              <h1 className="text-[12vw] xl:text-[7.5rem] leading-[0.9] font-bold flex flex-col tracking-[-0.04em]">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  Defining
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-outline py-2"
                >
                  The Future
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-accent italic translate-x-[0.2em]"
                >
                  Of Code.
                </motion.span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-10"
            >
              <p className="max-w-[600px] text-white/40 text-xl xl:text-2xl font-light leading-relaxed font-body">
                Amna Younus — <span className="text-white">Experience Architect</span>.
                Bridging the architectural divide between technical stability and high-fidelity aesthetics.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-10">
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-accent text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-primary transition-all duration-700 shadow-[0_0_30px_rgba(168,85,247,0.4)] group flex items-center gap-6"
                >
                  View Artifacts
                  <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-700" />
                </button>

                <Socials
                  containerStyles="flex gap-8"
                  iconStyles="text-2xl text-white/20 hover:text-accent transition-all duration-700 hover:-translate-y-2"
                />
              </div>
            </motion.div>
          </div>

          {/* Premium Image Composition */}
          <div className="xl:col-span-5 flex justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[500px] aspect-[4/5]"
            >
              {/* Shard 1 (Background Glow) */}
              <div className="absolute inset-0 bg-accent/20 blur-[100px] -z-10 animate-pulse"></div>

              {/* Shard 2 (Glass Layer) */}
              <div className="absolute inset-0 border border-white/5 translate-x-6 translate-y-6 rounded-[3rem] glass -z-10"></div>

              {/* Main Image Shard */}
              <div className="w-full h-full glass rounded-[3rem] p-4 relative group shadow-2xl border border-white/10">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <Image
                    src="/premium_architect_hero.png"
                    alt="Experience Architect"
                    fill
                    priority
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badges - Moved OUTSIDE overflow-hidden and adjusted */}
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 -left-12 glass px-6 py-3 rounded-2xl border border-accent/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] z-30"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Tech Architect</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-16 -right-12 glass px-6 py-3 rounded-2xl border border-white/10 shadow-xl z-30"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Creative Dev</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {[
            { label: "Successful Artifacts", value: "24+" },
            { label: "Architecture Experience", value: "2.5Y" },
            { label: "Technical Proficiencies", value: "12" },
            { label: "Visual Sophistication", value: "A++" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-white leading-none">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
