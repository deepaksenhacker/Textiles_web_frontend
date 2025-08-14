import React, { useRef, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

const ContactForm = () => {
 
const formRef= useRef()
 
const sendEmail = (e) => {
  e.preventDefault();

  const formData = new FormData(formRef.current);
  formData.append('service_id', 'service_b7zmajg');
  formData.append('template_id', 'template_x027718');
  formData.append('user_id', 'RJRjFhZtmP-faMvO0');

  fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
    method: "POST",
    body: formData,
  })
    .then(() => {
      alert("Your mail is sent!");
    })
    .catch((error) => {
      alert("Oops... " + JSON.stringify(error));
    });
};


  return (
    <div className=" p-2 flex flex-col items-center">
      <h1 className="flex items-center gap-4  text-xl font-bold mb-2 mt-2 text-center"><MdPhone/> Contact Us</h1>

      <div className="bg-neutral-100 p-2 rounded-xl shadow-lg w-full max-w-xl">
      
      

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4 ">
          <div>
            <label className="block font-medium mb-1">Full Name *</label>
            <input
              type="text"
              name="customername"
             
              required
              className="w-full border-b-2 border-b-orange-500 p-2 rounded bg-transparent outline-none "
              placeholder="Enter your full name"
            />


          </div>

          <div>
            <label className="block font-medium mb-1">Email ID *</label>
            <input
              type="email"
              name="email"
             
              required
              className="w-full border-b-2 border-b-orange-500 p-2 rounded bg-transparent outline-none "
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">WhatsApp Number *</label>
            <input
              type="tel"
              name="whatsapp"
              required
              className="w-full border-b-2 border-b-orange-500 p-2 rounded bg-transparent outline-none "
              placeholder="Enter WhatsApp number"
            />
          </div>

         

          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Send Form 
          </button>
        </form>

        {/* Social Links */}
        
      </div>
    </div>
  );
};

export default ContactForm;
