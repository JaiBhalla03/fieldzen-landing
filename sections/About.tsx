"use client";

import React from 'react'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      <h1 className='text-center text-4xl md:text-5xl font-bold text-zinc-600'>
                {"Built for teams that work on the ground"
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: true }}
                      className="mr-2 inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
              </h1>
              <motion.p
                  initial={{
                      opacity: 0,
                  }}
                  whileInView={{
                      opacity: 1,
                  }}
                  transition={{
                      duration: 0.3,
                      delay: 0.8,
                  }}
                  className='text-center text-md md:text-lg text-neutral-600 w-full md:w-[80%] mx-auto'>
                    FieldZen was created to simplify field reporting, improve visibility, and help managers make better decisions — without complexity.      
            </motion.p>
            here i will be writing the about section of the field zen 
            
    </div>
  )
}
