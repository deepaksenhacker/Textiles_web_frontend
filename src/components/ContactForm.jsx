import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    requestCall: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', form);
    alert('Thank you for contacting us!');
    // You can integrate an API or send the data to your backend here
  };

  return (
    <div className=" p-2 flex flex-col items-center">
      <h1 className="flex items-center gap-4  text-xl font-bold mb-2 mt-2 text-center"><MdPhone/> Contact Us</h1>

      <div className="bg-neutral-100 p-2 rounded-xl shadow-lg w-full max-w-xl">
      
      

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="block font-medium mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
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
              value={form.email}
              onChange={handleChange}
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
              value={form.whatsapp}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-b-orange-500 p-2 rounded bg-transparent outline-none "
              placeholder="Enter WhatsApp number"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="requestCall"
              checked={form.requestCall}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Request a Callback</label>
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
