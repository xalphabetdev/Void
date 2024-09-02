"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";




function Home() {
  return (
    <AuroraBackground>
     

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
          Enhance Your Public Profile
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          With <span className="font-extralight text-base md:text-4xl text-yellow-500 py-4">"ENHANCED"</span> Biolinks
        </div>
        <Link href="/signup">
  <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
  Get Started
  </button>
</Link>
      </motion.div>
    </AuroraBackground>
  );
}





export default Home;
