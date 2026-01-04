"use client"; 

import React from 'react'
import { motion } from "motion/react";
import { ProductCard } from '@/components/ProductCard';

export default function Product() {
  return (
    <div className='relative flex-col flex gap-3 md:gap-5 pb-10'>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
        <h1 className='text-center text-4xl md:text-5xl font-bold text-zinc-600'>
          {"What is FieldZen?"
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
                FieldZen is a simple, AI-assisted platform to manage field teams, track daily activities, and turn raw visit data into clear insights — without spreadsheets or chaos.
        </motion.p>
        <div className="flex gap-4 justify-center flex-wrap">
            <ProductCard
                title="📍 Field Activity Tracking"
                description="Log daily visits in seconds"
                steps={[
                    "Location & time-stamped entries",
                    "Works on mobile-first workflows"
                ]}
            />
            <ProductCard
                title="📊 Smart Reports"
                description="Automatic daily & weekly summaries"
                steps={[
                    "No manual Excel work",
                    "Export anytime"
                ]}
            />
            <ProductCard
                title="👥 Team Visibility"
                description="Know who’s active, where, and how often"
                steps={[
                    "Compare performance fairly"
                ]}
            />
        </div>
    </div>
  )
}
