"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useMemo } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Vehicles Audit",
    description: "Enterprise-grade vehicle auditing interface. Engineered with Bootstrap and jQuery for maximum stability and performance.",
    stack: ["Html 5", "Bootstrap", "Jquery"],
    image: "/assets/work/vehicles-audit.jpg",
    live: "https://vehiclesaudit.com/",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Desi Dhaba",
    description: "A premium culinary platform built with Next.js, Hygraph, and PayPal. Features robust authentication via Clerk.",
    stack: ["Next.js", "GraphQL", "Tailwind.css"],
    image: "/assets/work/desi-dhaba.jpg",
    live: "https://desi-dhaba.vercel.app/",
    github: "https://github.com/amnayounuss/desi_dhaba",
  },
  {
    num: "03",
    category: "wordpress",
    title: "Icon Sourcing",
    description: "A professional global sourcing and procurement platform designed for transparency and efficiency in supply chain.",
    stack: ["WordPress", "Elementor", "Custom CSS"],
    image: "/assets/work/icon-sourcing.jpg",
    live: "https://iconsourcing.com/",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Flikr Innovation",
    description: "Innovation-driven landing experience showcasing digital products and creative solutions.",
    stack: ["Next.js", "Framer Motion", "Tailwind.css"],
    image: "/assets/work/flikrinnovation.jpg",
    live: "https://flikrinnovation.com/",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "eCube",
    description: "Sleek agency showcase with a focus on motion and modern aesthetics. Built with React and TailwindCSS.",
    stack: ["React.js", "Tailwind.css", "Framer Motion"],
    image: "/assets/work/ecube.jpg",
    live: "https://ecube1.netlify.app/",
    github: "https://github.com/amnayounuss/ERP",
  },
  {
    num: "06",
    category: "wordpress",
    title: "EngePapa",
    description: "Custom WooCommerce ecosystem for professional services. High-conversion design with integrated WhatsApp logic.",
    stack: ["WordPress", "Elementor", "WooCommerce"],
    image: "/assets/work/engepapa.jpg",
    live: "https://engepapa.net/",
    github: "",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all projects") return projects;
    return projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory]);

  const categories = ["all projects", "fullstack", "frontend", "wordpress"];

  return (
    <section id="portfolio" className="py-12 xl:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-4 xl:px-8 relative z-10">

        <div className="flex flex-col gap-16 mb-24 items-center xl:items-start">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Gallery</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h1 lowercase text-center xl:text-left"
            >
              Digital <span className="text-outline italic">Artifacts</span>
            </motion.h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center xl:justify-start glass p-1 sm:p-2 rounded-[1.2rem] sm:rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-700 ${activeCategory === cat
                  ? "bg-accent text-white shadow-2xl shadow-accent/40"
                  : "text-white/30 hover:text-white hover:bg-white/5"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group flex flex-col h-full hover:bg-white/[0.05] transition-all duration-1000"
              >
                {/* Image Section */}
                <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden p-3 sm:p-4">
                  <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1]"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-all duration-1000"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-10 flex flex-col flex-1 gap-6 sm:gap-8">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex justify-between items-start">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-accent transition-colors duration-700 leading-tight">
                        {project.title}
                      </h2>
                      <span className="text-[10px] uppercase tracking-widest text-white/20 font-mono mt-1 sm:mt-2">{project.num}</span>
                    </div>
                    <p className="text-white/30 font-body leading-relaxed text-base sm:text-lg line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-2 mt-auto">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-accent/60 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] px-2 sm:px-3 py-1 glass rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-white/5 w-full"></div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    <Link href={project.live} target="_blank" className="relative group/link">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-14 h-14 rounded-full glass flex justify-center items-center group/btn hover:bg-accent transition-all duration-700">
                            <BsArrowUpRight className="text-white text-2xl group-hover/btn:rotate-45 transition-transform duration-700" />
                          </TooltipTrigger>
                          <TooltipContent className="bg-accent text-white border-none font-bold rounded-lg px-4 py-2 shadow-xl">
                            <p className="uppercase tracking-widest text-xs">Launch Interface</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-14 h-14 rounded-full glass flex justify-center items-center group/btn hover:bg-accent transition-all duration-700">
                              <BsGithub className="text-white text-2xl group-hover/btn:scale-110 transition-transform duration-700" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-accent text-white border-none font-bold rounded-lg px-4 py-2 shadow-xl">
                              <p className="uppercase tracking-widest text-xs">Binary Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
