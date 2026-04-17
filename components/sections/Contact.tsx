"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';

const info = [
  { icon: <FiMail />, title: "Inquiries", description: "amnayounus999@gmail.com" },
  { icon: <FiMapPin />, title: "Base", description: "Karachi, Pakistan" }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstname, email, message } = formData;

    if (firstname.trim() && email.trim() && message.trim()) {
      emailjs.send('service_b3fxnrt', 'template_z59vojk', formData, 'FJZMX8rzDNHVuPS9Q')
        .then(() => {
          toast.success('Sequence completed: Connection established.');
          setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
        }, (error) => {
          toast.error('Sequence failure: Signal lost.');
        });
    } else {
      toast.warning('Parameters missing: Please define identity and request.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 xl:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>

      <div className="container mx-auto px-4 xl:px-8 relative z-10">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-40 items-start">

          <div className="xl:w-1/2 flex flex-col gap-12 xl:gap-16 xl:max-w-[500px]">
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Availability</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h1 lowercase break-words"
              >
                Initiate <br />
                <span className="text-outline italic">Connection</span>
              </motion.h2>
            </div>

            <div className="flex flex-col gap-8 xl:gap-10">
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 xl:gap-8 group"
                >
                  <div className="w-16 h-16 xl:w-20 xl:h-20 glass rounded-2xl xl:rounded-3xl flex items-center justify-center text-2xl xl:text-3xl text-white/20 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-700">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/60">{item.title}</span>
                    <span className="text-xl xl:text-2xl font-light text-white/80">{item.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full xl:w-1/2 glass p-6 sm:p-10 xl:p-16 rounded-[2rem] xl:rounded-[3rem] relative overflow-hidden group/form"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10 group-hover/form:bg-accent/10 transition-colors duration-1000"></div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-10 xl:gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-12">
                <div className="flex flex-col gap-4">
                  <label htmlFor="firstname" className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Name</label>
                  <input
                    type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleInputChange} required
                    className="bg-transparent border-b border-white/5 py-3 xl:py-4 focus:border-accent outline-none transition-all duration-700 font-body text-lg xl:text-xl placeholder:text-white/20"
                    placeholder="E.g. Alexander"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Frequency</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="bg-transparent border-b border-white/5 py-3 xl:py-4 focus:border-accent outline-none transition-all duration-700 font-body text-lg xl:text-xl placeholder:text-white/20"
                    placeholder="name@nexus.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Conceptual Request</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleInputChange} required
                  className="bg-transparent border-b border-white/5 py-3 xl:py-4 focus:border-accent outline-none transition-all duration-700 font-body text-lg xl:text-xl h-32 xl:h-40 resize-none placeholder:text-white/20"
                  placeholder="Describe the architecture of your vision..."
                />
              </div>

              <button type="submit" className="btn-editorial group flex items-center justify-between w-full h-16 xl:h-20 rounded-xl xl:rounded-2xl">
                Transmit Parameters
                <div className="w-8 h-8 xl:w-10 xl:h-10 glass rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-700">
                  <FiArrowRight className="text-lg xl:text-xl group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-700" />
                </div>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      <ToastContainer toastClassName={() => "glass border-white/10 text-white font-body p-4 rounded-xl"} />
    </section>
  );
};

export default Contact;
