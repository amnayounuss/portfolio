"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';

const projects = [
  {
    "category": "frontend",
    "title": "Vehicles Audit",
    "description": "Vehicles Audit is a frontend project utilizing Bootstrap for UI design. It includes jQuery for interactivity, SweetAlert2 for alerts, Select2 for enhanced select boxes, and AOS for animations. Built with HTML, CSS, and JavaScript.",
    "stack": [
      { "name": "HTML" },
      { "name": "CSS" },
      { "name": "JavaScript" },
      { "name": "Bootstrap" },
      { "name": "jQuery" },
      { "name": "SweetAlert2" },
      { "name": "Select2" },
      { "name": "AOS" }
    ],
    "image": "/assets/work/vehicles-audit.png",
    "live": "https://vehiclesaudit.com/",
    "github": ""
  },
  {
    "category": "frontend",
    "title": "eCube",
    "description": "eCube is a React.js-based agency website styled with TailwindCSS. It showcases a modern design and responsive layout, providing an engaging user experience with its clean aesthetics.",
    "stack": [
      { "name": "React.js" },
      { "name": "TailwindCSS" }
    ],
    "image": "/assets/work/ecube.png",
    "live": "https://ecube1.netlify.app/",
    "github": ""
  },
  {
    "category": "WordPress",
    "title": "EngePapa",
    "description": "EngePapa is an e-commerce site built with the Astra theme and custom Elementor design. It features WhatsApp integration and utilizes the WooCommerce plugin for efficient online shopping.",
    "stack": [
      { "name": "Elementor" },
      { "name": "WhatsApp Integration" },
      { "name": "WooCommerce" }
    ],
    "image": "/assets/work/engepapa.png",
    "live": "https://engepapa.net/",
    "github": ""
  },
  {
    "category": "WordPress",
    "title": "Icon Sourcing",
    "description": "Icon Sourcing is an e-commerce website designed with the OceanWP theme and Elementor. It includes WhatsApp integration for quick communication and uses WooCommerce for online sales and Contact Form 7 for inquiries.",
    "stack": [
      { "name": "WordPress" },
      { "name": "OceanWP Theme" },
      { "name": "Elementor" },
      { "name": "WhatsApp Integration" },
      { "name": "Contact Form 7" },
      { "name": "WooCommerce" }
    ],
    "image": "/assets/work/icon-sourcing.png",
    "live": "https://iconsourcing.com/",
    "github": ""
  },
  {
    "category": "fullstack",
    "title": "Desi Dhaba",
    "description": "Desi Dhaba is a full-stack project featuring a Next.js frontend and Clerk for user authentication. It uses Hygraph for headless CMS with GraphQL APIs, integrates PayPal for payments, and has a UI designed with Radix UI, Shadcn, and TailwindCSS.",
    "stack": [
      { "name": "Next.js" },
      { "name": "Clerk" },
      { "name": "Hygraph" },
      { "name": "GraphQL" },
      { "name": "PayPal API" },
      { "name": "Radix UI" },
      { "name": "Shadcn" },
      { "name": "TailwindCSS" }
    ],
    "image": "/assets/work/desi-dhaba.png",
    "live": "https://desi-dhaba.vercel.app/?category=all",
    "github": ""
  },
  {
    "category": "fullstack",
    "title": "FlikrInnovation",
    "description": "FlikrInnovation is a digital agency website built with React.js and styled using Bootstrap. It includes animations with Animate.css and features live chat with Tawk and newsletter integration through EmailJs.",
    "stack": [
      { "name": "React.js" },
      { "name": "Bootstrap" },
      { "name": "Animate.css" },
      { "name": "Tawk" },
      { "name": "EmailJs" }
    ],
    "image": "/assets/work/flikrinnovation.png",
    "live": "https://flikrinnovation.com/#/",
    "github": ""
  }
];

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  const sortedProjects = projects.sort((a, b) => {
    const order = ['fullstack', 'frontend', 'WordPress'];
    return order.indexOf(a.category) - order.indexOf(b.category);
  });

  const filteredProjects = activeTab === 'all'
    ? sortedProjects
    : sortedProjects.filter(project => project.category === activeTab);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab('fullstack')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'fullstack' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Fullstack
          </button>
          <button
            onClick={() => setActiveTab('frontend')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'frontend' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab('WordPress')}
            className={`px-4 py-2 rounded-lg ${activeTab === 'WordPress' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            WordPress
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="relative group flex flex-col overflow-hidden rounded-lg bg-[#27272c]">
              <div className="relative w-full h-[300px] overflow-hidden">
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                <div className="relative w-full h-full transition-transform duration-500 transform group-hover:scale-110">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt={project.title}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 p-6 overflow-auto">
                <h2 className="text-2xl font-bold leading-none text-white capitalize">
                  {project.title}
                </h2>
                <p className="text-white/60 text-sm">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-sm text-accent whitespace-nowrap">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative w-full max-w-4xl h-full max-h-[80vh]">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <Image
            src={selectedImage}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
            alt="Full Screen Image"
          />
        </div>
      </Modal>
    </motion.section>
  );
}

export default Portfolio;
