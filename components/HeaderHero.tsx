"use client";

import Image from "next/image";
import React from "react";
import hero from "@/public/hero.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGitSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

const HeaderHero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={hero}
              alt="hero"
              width="192"
              height="192"
              quality="75"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              shiftness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🧑‍💻
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&lsquo;m Ram.</span> I&lsquo;m a{" "}
        <span className="font-bold">front-end dev </span> with{" "}
        <span className="font-bold">7+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row item-center justify-center 
      gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="group  bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
          rounded-full outilne-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
        >
          Connect with me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
        outilne-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
          href="/ram_kole_resume.pdf"
          download
        >
          Download CV <HiDownload />{" "}
        </a>
        <a
          className="bg-white px-4 py-3 text-gray-050 flex items-center gap-2 rounded-full
        outilne-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10
        "
          href="https://www.linkedin.com/in/ram-kole-web/"
          target="_blank"
        >
          <BsLinkedin className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
        <a
          className="bg-white text-[1.25rem] px-4 py-3 text-gray-950 flex items-center gap-2 rounded-full
        outilne-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10
        "
          href="https://github.com/ramkole"
          target="_blank"
        >
          <FaGitSquare />
        </a>
      </motion.div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Design changes are undergoing...</span>
      </motion.h1>
    </section>
  );
};

export default HeaderHero;
