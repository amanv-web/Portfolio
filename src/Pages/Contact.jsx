import React, { useState } from "react";
import GradientText from "../components/fancy/text/GradientText";
import { sendEmail } from "../components/features/Email";
 import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import PillCTA from "../components/fancy/text/PillCta";
function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.user_email.value;

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    setLoading(true);

    sendEmail(e.target)
      .then(() => {
        setLoading(false);
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-white md:mb-20">

      {/* HEADING */}
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa"]}
        className="text-center mb-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          Get in touch
        </h2>
      </GradientText>

      {/* CTA */}
      <p className="text-gray-400 md:text-center mb-10 max-w-xl mx-auto  leading-relaxed">
        Let’s build something impactful together. 
        <span className="text-[#40d6c5] font-semibold"> I usually respond within 24 hours.</span>
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}

<div className="space-y-4 text-gray-300">

  <a
    href="mailto:getintouch.amanv@hotmail.com"
    className="flex items-center gap-3 hover:text-[#40d6c5] transition"
  >
    <HiOutlineMail className="text-xl" />
    <span>getintouch.amanv@hotmail.com</span>
  </a>

  <a
    href="https://linkedin.com/in/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-[#40d6c5] transition"
  >
    <FaLinkedin className="text-xl" />
    <span>LinkedIn</span>
  </a>

  <a
    href="https://github.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 hover:text-[#40d6c5] transition"
  >
    <FaGithub className="text-xl" />
    <span>GitHub</span>
  </a>

</div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-3xl bg-[#111] outline-none focus:ring-1 focus:ring-[#40d6c5]"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-3xl bg-[#111] outline-none focus:ring-1 focus:ring-[#40d6c5]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 rounded-3xl bg-[#111] outline-none focus:ring-1 focus:ring-[#40d6c5]"
          />

      <PillCTA
type="submit"
disabled={loading}
text={loading ? "Sending..." : "Send Message"}
className="self-start mt-2"
/>

         
        </form>

      </div>
    </div>
  );
}

export default Contact;