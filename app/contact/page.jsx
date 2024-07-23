"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import EmailJS

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "amnayounus999@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Karachi, Pakistan"
  }
];

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    message: false
  });

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstname && formData.lastname && formData.email && isValidPhoneNumber(formData.phone) && formData.message) {
      emailjs.send('service_b3fxnrt', 'template_z59vojk', formData, 'FJZMX8rzDNHVuPS9Q')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          toggleMessage(); 
        }, (error) => {
          console.log('FAILED...', error);
        });
    } else {
      const errors = {};
      Object.keys(formData).forEach(key => {
        if (!formData[key]) {
          errors[key] = true;
        } else {
          errors[key] = false;
        }
      });
      if (!isValidPhoneNumber(formData.phone)) {
        errors.phone = true;
      }
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: false
    });
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^[0-9\-\+\(\) ]+$/;
    return phoneRegex.test(phone);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-2 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="John"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className={formErrors.firstname ? 'border-2 border-red-500' : ''}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Smith"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className={formErrors.lastname ? 'border-2 border-red-500' : ''}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={formErrors.email ? 'border-2 border-red-500' : ''}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9\-\+\(\) ]+"
                  title="Please enter a valid phone number"
                  className={formErrors.phone ? 'border-2 border-red-500' : ''}
                />
              </div>
              <Textarea
                className={`h-[200px] ${formErrors.message ? 'border-2 border-red-500' : ''}`}
                name="message"
                placeholder="Need support for your design projects? Fill out this form to discuss and submit your project. Let's create something amazing together!"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button type="submit" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex flex-col items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-48">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="rounded-full w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <p className="text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-50 z-50">
          <div className="bg-primary border-4 border-accent p-6 rounded-lg shadow-lg">
            <p className="text-xl">Your form has been submitted!</p>
            <Button onClick={toggleMessage} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Contact;
