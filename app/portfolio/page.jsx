"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide, SwipeSlide } from "swiper/react"
import { useState } from 'react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import Image from 'next/image';


// const projects = [
//   {
//     num: "01",
//     catogory: "frontend",
//     title: "project 1",
//     description: "Qui magna quis sunt commodo consequat commodo dolore quis voluptate est eu cillum.",
//     stack: [
//       { name: 'Html 5' },
//       { name: 'Html' },
//       { name: 'Html' }
//     ],
//     image: "/assets/work/thumb1.png",
//     live: "",
//     github: ""
//   },
//   {
//     num: "01",
//     catogory: "frontend",
//     title: "project 1",
//     description: "Qui magna quis sunt commodo consequat commodo dolore quis voluptate est eu cillum.",
//     stack: [
//       { name: 'Html 5' },
//       { name: 'Html' },
//       { name: 'Html' }
//     ],
//     image: "/assets/work/thumb2.png",
//     live: "",
//     github: ""
//   },
//   {
//     num: "01",
//     catogory: "frontend",
//     title: "project 1",
//     description: "Qui magna quis sunt commodo consequat commodo dolore quis voluptate est eu cillum.",
//     stack: [
//       { name: 'Html 5' },
//       { name: 'Html' },
//       { name: 'Html' }
//     ],
//     image: "/assets/work/thumb3.png",
//     live: "",
//     github: ""
//   }


// ]


const Portfolio = () => {
  // const [project, setProject] = useState(projects[0]);
  // const handleSlideChange = (swiper) => {
  //   const currentIndex = swiper.activeIndex;
  //   setProject(project[currentIndex]);
  // }

  return (
    <div>me</div>
    // <motion.section
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    // >

    //   <div className="container mx-auto">
    //     <div className="flex flex-col xl:flex-row xl:gap-[30px]">
    //       <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-between order-2 xl:order-none">
    //         <div className="flex flex-col gap-[30px] h-[50%]">
    //           <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
    //             {projects.num}
    //           </div>
    //           <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{projects.catogory}Project
    //           </h2>
    //           <p className="text-white/60">{projects.description}</p>
    //           <ul className="flex gap-4">
    //             {projects.stack.map((item, index) => {
    //               return (
    //                 <li key={index} className="text-xl text-accent">
    //                   {item.name}
    //                   {index !== projects.stack.length - 1 && ","}
    //                 </li>
    //               )
    //             })}
    //           </ul>
    //           <div className="border border-white/20"></div>
    //           <div className="flex itemsc gap-4">
    //             <Link href={projects.live}>
    //               <TooltipProvider delayDuration={100}>
    //                 <Tooltip>
    //                   <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
    //                     <BsArrowUpRight className="text-white text3xl group-hover:text-accent" />
    //                   </TooltipTrigger>
    //                   <TooltipContent>
    //                     <p>Live Project</p>
    //                   </TooltipContent>
    //                 </Tooltip>
    //               </TooltipProvider>
    //             </Link>

    //             <Link href={projects.github}>
    //               <TooltipProvider delayDuration={100}>
    //                 <Tooltip>
    //                   <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
    //                     <BsGithub className="text-white text3xl group-hover:text-accent" />
    //                   </TooltipTrigger>
    //                   <TooltipContent>
    //                     <p>Github repository</p>
    //                   </TooltipContent>
    //                 </Tooltip>
    //               </TooltipProvider>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full xl:w-[50%]">
    //         <Swiper
    //           spaceBetween={30}
    //           slidesPerView={1}
    //           className="xl:h-[250px] mb-12"
    //           onSlideChange={handleSlideChange}
    //         >
    //           {projects.map((project, index) => {
    //             return (
    //               <SwiperSlide key={index} className="w-full">
    //                 <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div>
    //               </SwiperSlide>
    //             )
    //           })}
    //         </Swiper>
    //       </div>
    //     </div>
    //   </div>


    // </motion.section>
  )
}

export default Portfolio