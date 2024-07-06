"use client";
import React from 'react'

import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMaterialui } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const about = {
  title: "About me",
  description: " Lorem cupidatat aliquip velit commodo eiusmod deserunt velit deserunt esse sit est. ",
  info: [
    {
      fieldName: "Name",
      fieldValus: "Luke Coleman"
    },
    {
      fieldName: "Phone",
      fieldValus: "Luke Coleman"
    },
    {
      fieldName: "Experience",
      fieldValus: "Luke Coleman"
    },
    {
      fieldName: "Insta",
      fieldValus: "Luke Coleman"
    },
    {
      fieldName: "Nationality",
      fieldValus: "Luke Coleman"
    },
    {
      fieldName: "Email",
      fieldValus: "Luke Coleman"
    },
    {
      fieldName: "Freelance",
      fieldValus: "Luke Coleman"
    },
    {
      fieldName: "Languages",
      fieldValus: "English"
    }
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Cillum proident consectetur eu reprehenderit nulla non eiusmod magna occaecat eiusmod dolore.",
  items: [
    {
      company: "XYZ",
      position: "Frontend Developer",
      duration: "2020-2024"
    },
    {
      company: "XYZ",
      position: "Frontend Developer",
      duration: "2020-2024"
    },
    {
      company: "XYZ",
      position: "Frontend Developer",
      duration: "2020-2024"
    }
  ]
}


const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Cillum proident consectetur eu reprehenderit nulla non eiusmod magna occaecat eiusmod dolore.",
  items: [
    {
      institution: "MAJU",
      degree: "Software Engineer",
      duration: "2020-2024"
    },
    {
      institution: "MAJU",
      degree: "Software Engineer",
      duration: "2020-2024"
    },
    {
      institution: "MAJU",
      degree: "Software Engineer",
      duration: "2020-2024"
    }
  ]
}

const skills = {
  title: "My SKills",
  description: "Lorem proident incididunt aliqua consectetur dolor exercitation sit mollit anim voluptate.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    }
  ]
}



const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      </motion.div>
  )
}

export default Resume