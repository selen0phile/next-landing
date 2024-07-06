"use client"
import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.row}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="message" style={styles.label}>
          Your Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
          required
        />
      </div>
      <button type="submit" style={styles.button}>
        Send
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
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
  button: {
    width: "130px",
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    alignSelf: "flex-end",
    color: "#000",
fontFamily: "SF UI Display",
fontSize: "20px",
fontStyle: "normal",
fontWeight: "500",
lineHeight: "normal",
  },
};

export default ContactForm;
