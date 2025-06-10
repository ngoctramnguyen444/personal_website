"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className="relative">
      <span className={cn("relative z-10", className)}>{text}</span>

      {isGlitching && (
        <>
          <span
            className={cn("absolute top-0 left-0 z-0 text-pink-500 animate-glitch-1", className)}
            aria-hidden="true"
          >
            {text}
          </span>
          <span
            className={cn("absolute top-0 left-0 z-0 text-blue-500 animate-glitch-2", className)}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}

      <style jsx global>{`
        @keyframes glitch-1 {
          0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
          20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -3px); }
          40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 3px); }
          60% { clip-path: inset(25% 0 58% 0); transform: translate(3px, 1px); }
          80% { clip-path: inset(54% 0 7% 0); transform: translate(-3px, -2px); }
          100% { clip-path: inset(58% 0 43% 0); transform: translate(2px, 2px); }
        }
        
        @keyframes glitch-2 {
          0% { clip-path: inset(25% 0 58% 0); transform: translate(2px, -2px); }
          20% { clip-path: inset(54% 0 7% 0); transform: translate(-1px, 3px); }
          40% { clip-path: inset(58% 0 43% 0); transform: translate(1px, -1px); }
          60% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, -2px); }
          80% { clip-path: inset(92% 0 1% 0); transform: translate(3px, 1px); }
          100% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 2px); }
        }
        
        .animate-glitch-1 {
          animation: glitch-1 0.2s infinite linear alternate-reverse;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 0.3s infinite linear alternate-reverse;
        }
      `}</style>
    </div>
  )
}
