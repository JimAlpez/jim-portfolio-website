"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      className="text-center mb-20 sm:mb-28 w-[min(100%, 38rem)] space-y-6">
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:jim.alpez06@gmail.com" className="underline">
          jim.alpez06@gmail.com
        </a>{" "}
        or through this form.
      </p>

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
    </motion.section>
  );
}
