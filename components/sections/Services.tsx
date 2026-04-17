"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    num: '01',
    title: 'Web Architectures',
    description: 'Developing heavy-duty, scalable web systems using modern frameworks. Precision-engineered for performance and longevity.',
  },
  {
    num: '02',
    title: 'Digital Ecosystems',
    description: 'Bespoke WordPress solutions and headless CMS architectures. Bridging the gap between content and high-craft code.',
  },
  {
    num: '03',
    title: 'Visual Strategy',
    description: 'Transforming brand narratives into digital reality through data-driven campaigns and aesthetic optimization.',
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 xl:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="flex flex-col gap-16">

          <div className="flex flex-col gap-8 max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Expertise</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="h1"
            >
              Specialized <span className="text-outline italic">Capabilities</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-10 group hover:bg-white/[0.04] transition-all duration-700 relative overflow-hidden rounded-[2.5rem] border border-white/5 hover:border-accent/20 h-full"
              >
                <div className="flex flex-col gap-10 h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-6xl font-black text-white/[0.05] group-hover:text-accent/10 transition-all duration-700">
                      {service.num}
                    </span>
                    <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-accent border-white/5 group-hover:border-accent transition-all duration-700">
                      <FiArrowRight className="text-xl text-white group-hover:-rotate-45 transition-all duration-700" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-700">
                      {service.title}
                    </h3>
                    <p className="text-white/30 group-hover:text-white/60 transition-colors duration-700 font-body leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Corner Gradient Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
