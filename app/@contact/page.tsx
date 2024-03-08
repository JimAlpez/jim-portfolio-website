"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import SectionHeading from "@/components/section-heading";
import SubmitBtn from "@/components/submit-button";
import Section from "@/components/section";
import { sendEmail } from "@/actions/sendEmail";
import { TbMessage2Check } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { useTheme } from "@/context/theme-context";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { theme } = useTheme();

  return (
    <div className="pb-12">
      <Section sectionView="Contact" id="contact">
        <div
          className={`overflow-hidden mx-4 px-8 py-10 lg:px-12 lg:py-20 rounded-xl shadow-lg border-t-2 ${
            theme === "light"
              ? "shadow-sky-900/20 border-sky-900/20"
              : "shadow-blue-100/20 border-blue-100/20"
          }`}>
          <SectionHeading
            primaryText="Get in"
            secondaryText="Touch"
            shadowText="Contact"
          />
          <div className="flex flex-col md:flex-row items-start gap-x-20 gap-y-10">
            <div className="space-y-8 py-3">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                  },
                }}
                viewport={{ once: true }}
                className="space-y-1">
                <h5 className="text-3xl font-bold uppercase drop-shadow-md">
                  Contact info
                </h5>
                <p className="text-sm italic font-semibold">
                  Got a project? Let&apos;s talk
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                  },
                }}
                viewport={{ once: true }}
                className="flex items-start gap-4">
                <TbMessage2Check className="text-2xl text-secondary" />
                <div>
                  <p className="text-sm text-secondary font-medium">
                    Talk to me:
                  </p>
                  <a
                    href="skype:jim.alpez06@gmail.com?call"
                    className="font-bold">
                    jim.alpez06@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.2,
                  },
                }}
                viewport={{ once: true }}
                className="flex items-start gap-4">
                <TbPhone className="text-2xl text-secondary" />
                <div>
                  <p className="text-sm text-secondary font-medium">Call me:</p>
                  <a href="skype:+639760888072?call" className="font-bold">
                    +639 760 888 072
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.3,
                  },
                }}
                viewport={{ once: true }}
                className="flex items-start gap-4">
                <GrMapLocation className="text-2xl text-secondary" />
                <div>
                  <p className="text-sm text-secondary font-medium">Address:</p>
                  <a
                    href="https://maps.app.goo.gl/w3DZfhNNLecaZSWd6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold">
                    Calbayog City, Samar,
                    <br /> Philippines
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 w-full">
              <form
                action={async (formData) => {
                  const { data, error } = await sendEmail(formData);

                  if (error) {
                    toast.error(error);
                    return;
                  }
                  setName("");
                  setEmail("");
                  setMessage("");
                  toast.success("Email sent successfully!");
                }}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.2,
                    },
                  }}
                  viewport={{ once: true }}>
                  <label htmlFor="senderName">Name *</label>
                  <input
                    type="text"
                    name="senderName"
                    id="senderName"
                    placeholder="Your name"
                    required
                    maxLength={500}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={
                      theme === "light"
                        ? "border-primary/30 focus:border-primary"
                        : "border-blue-50/30 focus:border-blue-50"
                    }
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.3,
                    },
                  }}
                  viewport={{ once: true }}>
                  <label htmlFor="senderEmail">Email*</label>
                  <input
                    type="email"
                    name="senderEmail"
                    id="senderEmail"
                    placeholder="Your working email"
                    required
                    maxLength={500}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={
                      theme === "light"
                        ? "border-primary/30 focus:border-primary"
                        : "border-blue-50/30 focus:border-blue-50"
                    }
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      delay: 0.4,
                    },
                  }}
                  viewport={{ once: true }}>
                  <label htmlFor="message">Message*</label>
                  <textarea
                    placeholder="Your message"
                    name="message"
                    id="message"
                    required
                    maxLength={5000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={
                      theme === "light"
                        ? "border-primary/30 focus:border-primary"
                        : "border-blue-50/30 focus:border-blue-50"
                    }
                  />
                </motion.div>
                <SubmitBtn />
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
