import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_zgmgf6t", // Replace with your EmailJS service ID
        "template_sk7jfhp", // Replace with your EmailJS template ID
        formData,
        "sBlwT0PMZLc1gfpCa" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", number: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <form
        className="bg-black p-8 rounded-lg shadow-2xl w-full max-w-lg"
        onSubmit={handleSubmit}
        data-aos="flip-left"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
          Contact Us
        </h2>

        <div className="mb-4">
          
          <input
            type="text"
            name="name"
            id="name"
            data-aos="fade-up"
            placeholder="Name"
            className="w-full bg-black text-gray-200 p-3 border-b-2 border-red-500 rounded-sm focus:outline-none focus:border-b-2 focus:border-red-800"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="number"
            id="number"
            data-aos="fade-up"
            placeholder="Phone Number"
            className="w-full p-3 bg-black text-gray-200 border-b-2 border-red-500 rounded-sm focus:outline-none focus:border-b-2 focus:border-red-800"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            id="email"
            data-aos="fade-up"
            placeholder="Email"
            className="w-full p-3 border-b-2 bg-black text-gray-200 border-red-500 rounded-sm focus:outline-none focus:border-b-2 focus:border-red-800"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            id="message"
            data-aos="fade-up"
            placeholder="Message"
            className="w-full p-3 border-b-2 bg-black text-gray-200 border-red-500 rounded-sm focus:outline-none focus:border-b-2 focus:border-red-800"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          data-aos="fade-up"
          className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
