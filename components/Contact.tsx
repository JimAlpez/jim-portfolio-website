"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import SectionHeading from "./SectionHeading";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitButton";
import Section from "./Section";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Section sectionView="Contact" id="contact">
      <div className="px-4 py-20">
        <SectionHeading
          primaryText="Get in"
          secondaryText="Touch"
          shadowText="Contact"
        />

        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }
            setEmail("");
            setMessage("");
            toast.success("Email sent successfully!");
          }}
          className="mt-10 flex flex-col">
          <input
            type="email"
            name="senderEmail"
            placeholder="Your email"
            required
            maxLength={500}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 h-14 rounded-lg border border-black/10"
          />
          <textarea
            placeholder="Your message"
            name="message"
            required
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-52 my-3 rounded-lg border border-black/10 p-4"
          />
          <SubmitBtn />
        </form>
      </div>
    </Section>
  );
}
