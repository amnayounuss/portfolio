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
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Qui magna quis sunt commodo consequat commodo dolore quis voluptate est eu cillum.",
    stack: [
      { name: 'Html 5' },
      { name: 'Html' },
      { name: 'Html' }
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "backend",
    title: "project 2",
    description: "Qui magna quis sunt commodo consequat commodo dolore quis voluptate est eu cillum.",
    stack: [
      { name: 'Html 5' },
      { name: 'Html' },
      { name: 'Html' }
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description: "Qui magna quis sunt commodo consequat commodo dolore quis voluptate est eu cillum.",
    stack: [
      { name: 'Html 5' },
      { name: 'Html' },
      { name: 'Html' }
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: ""
  }
];

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {projects.map((project, index) => (
            <div key={index} className="w-full xl:w-1/3 flex flex-col gap-4">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 cursor-pointer" onClick={() => openModal(project.image)}>
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt=''
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-4xl leading-none font-extrabold text-white text-outline">
                  {project.num}
                </div>
                <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-lg text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
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
                  <Link href={project.github}>
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
