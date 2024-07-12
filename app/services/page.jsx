"use client";
import React from 'react';
import { BsArrowDownRight, BsGear } from "react-icons/bs";
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Commodo amet dolore voluptate ea nostrud anim. Aliqua anim exercitation ea labore magna sint elit.',
    href: ''
  },
  {
    title: 'Web Development',
    description: 'Commodo amet dolore voluptate ea nostrud anim. Aliqua anim exercitation ea labore magna sint elit.',
    href: ''
  },
  {
    title: 'Web Development',
    description: 'Commodo amet dolore voluptate ea nostrud anim. Aliqua anim exercitation ea labore magna sint elit.',
    href: ''
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div 
                key={index} 
                className="flex-1 flex flex-col justify-center gap-6 group bg-[#27272c] p-6 rounded-lg transition-all duration-500 hover:bg-accent"
              >
                <div className="flex justify-center mb-4">
                  <BsGear className="text-6xl text-white transition-all duration-500 group-hover:text-primary" />
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 text-center group-hover:text-primary">
                  {service.title}
                </h2>
                <p className="text-white/60 group-hover:text-primary">{service.description}</p>
                <div className="flex justify-end ">
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white transition-all duration-500 flex justify-center items-center group-hover:bg-primary hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl group-hover:text-white " />
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
