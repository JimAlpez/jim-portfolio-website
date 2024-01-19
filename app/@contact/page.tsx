"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import SectionHeading from "@/components/section-heading";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-button";
import Section from "@/components/section";
import { TbMessage2Check } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Section sectionView="Contact" id="contact">
      <div className="px-4 py-20">
        <SectionHeading
          primaryText="Get in"
          secondaryText="Touch"
          shadowText="Contact"
        />
        <div className="flex flex-col md:flex-row items-start gap-x-20 gap-y-10">
          <div className="space-y-8 py-3">
            <div className="space-y-1">
              <h5 className="text-3xl font-bold uppercase drop-shadow-md">
                Contact info
              </h5>
              <p className="text-sm italic font-semibold">
                Got a project? Let&apos;s talk
              </p>
            </div>
            <div className="flex items-start gap-4">
              <TbMessage2Check className="text-2xl text-secondary" />
              <div>
                <p className="text-sm text-secondary font-medium">
                  Talk to me:
                </p>
                <p className="font-bold">jim.alpez06@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TbPhone className="text-2xl text-secondary" />
              <div>
                <p className="text-sm text-secondary font-medium">Call me:</p>
                <p className="font-bold">+639 760 888 072</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GrMapLocation className="text-2xl text-secondary" />
              <div>
                <p className="text-sm text-secondary font-medium">
                  Address me:
                </p>
                <p className="font-bold">
                  Rawis, Calbayog City,
                  <br /> Western Samar, Philippines
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
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
              }}>
              <div>
                <label htmlFor="senderName">Name*</label>
                <input
                  type="text"
                  name="senderName"
                  id="senderName"
                  placeholder="Your name"
                  required
                  maxLength={500}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
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
                />
              </div>
              <div>
                <label htmlFor="message">Message*</label>
                <textarea
                  placeholder="Your message"
                  name="message"
                  id="message"
                  required
                  maxLength={5000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <SubmitBtn />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
