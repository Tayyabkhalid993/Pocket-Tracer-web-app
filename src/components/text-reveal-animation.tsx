'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'

gsap.registerPlugin(CustomEase)
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1')

export const TextRevealAnimation = ({ text,className }: { text: string, className?:string }) => {
  const heroInfiniteRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRefs = useRef<GSAPTween[]>([])

  const resetAnimationState = () => {
    const wordAnimations = containerRef.current?.querySelectorAll('.word-animation');
    if (wordAnimations && wordAnimations.length > 0) {
      gsap.set(wordAnimations, {
        y: '100%'
      })
    }
    if (heroInfiniteRef.current) {
      gsap.set(heroInfiniteRef.current, {
        marginLeft: '40px',
        marginRight: '-40px',
        opacity: 0
      })
    }
  }

  const runAnimation = () => {
    // Clear any existing animations
    animationRefs.current.forEach(anim => anim.kill())
    animationRefs.current = []

    // Reset to initial state
    resetAnimationState()

    const titles = containerRef.current?.querySelectorAll('.h_title')
    if (!titles) return

    const tl = gsap.timeline({ defaults: { duration: 1 } })

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('.word-animation')
      const delay = index * 0.08

      const anim = gsap.to(el, {
        y: 0,
        duration: 1.5,
        ease: 'cubic-text',
        delay
      })
      animationRefs.current.push(anim)
    })

    if (heroInfiniteRef.current) {
      const anim = gsap.to(heroInfiniteRef.current, {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: 'power1.out',
        delay: 1.2
      })
      animationRefs.current.push(anim)
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation()
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(containerRef.current)
    runAnimation()

    return () => {
      observer.disconnect()
      animationRefs.current.forEach(anim => anim.kill())
    }
  }, [text])

  // Split text into lines
  const lines = text.split('\n').filter(line => line.trim() !== '')

  // Function to preserve spaces between words
  const renderWords = (line: string) => {
    const words = line.split(/(\s+)/) // Split by whitespace but keep the spaces
    return words.map((word, i) => {
      if (word.trim() === '' && word !== '') {
        // This is a space character
        return <span key={i} className="inline-block">{word}</span>
      }
      return (
        <span key={i} className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
          <span className="word-animation inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
            {word}
          </span>
        </span>
      )
    })
  }

  return (
    <div className={`pt-[10px] pb-[9px] lg:py-[18px] ${className || " "}`}>
      <div 
        ref={containerRef}
        className="h_container flex flex-col items-center px-2"
      >
        {lines.map((line, lineIndex) => (
          <h1 
            key={lineIndex} 
            className={`h_title relative w-full text-center font-light uppercase leading-[90%] whitespace-pre-wrap`}
          >
            {renderWords(line)}
          </h1>
        ))}
      </div>
    </div>
  )
}