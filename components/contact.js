"use client";
import React, { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} className="mx-[20px]">
      <div className="block lg:flex justify-between gap-[20px]">
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            class="w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            class="w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="message" style={styles.label}>
          Your Message
        </label>
        <textarea
          class="h-full min-h-[100px] w-full resize-none border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all focus:outline-0 disabled:resize-none disabled:border-0"
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <Button
        icon={false}
        text="Send"
        className="h-[35px] flex items-center justify-center absolute bottom-[55px] right-[20px] text-black bg-white hover:bg-gray-200 w-[100px] text-[16px] rounded-full"
      />
    </form>
  );
};

const styles = {
  form: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: "50px 30px",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  inputGroup: {
    marginBottom: "20px",
    flex: 1,
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "90%",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid #fff",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "16px",
  },
  textarea: {
    width: "95%",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid #fff",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "16px",
    minHeight: "100px",
    resize: "vertical",
  },
};

export default ContactForm;
