'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export default function Paragraph({paragraph}: {paragraph: string}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.1"]
  })

  const words = paragraph.split(" ")
  return (
    <p 
      ref={container}         
      className="leading-relaxed my-4 space-y-1 text-xl sm:text-3xl text-gray-700" // Add your paragraph styles here
    >
    {
      words.map((word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
    </p>
  )
}

const Word = ({children, progress, range}: {children: string, progress: any, range: any}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative inline-block mx-1">
      <span className="opacity-20">{children}</span>
      <motion.span 
        className="absolute left-0 top-0"
        style={{opacity}}
      >
        {children}
      </motion.span>
    </span>
  )
}