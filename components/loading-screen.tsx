"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("INITIALIZING...")
  const [isComplete, setIsComplete] = useState(false)

  const loadingTexts = [
    "INITIALIZING...",
    "LOADING DATA_SCIENCE.exe",
    "CONNECTING TO MATRIX...",
    "DOWNLOADING SKILLS...",
    "COMPILING PROJECTS...",
    "RENDERING PORTFOLIO...",
    "SYSTEM READY!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5

        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * (loadingTexts.length - 1))
        setCurrentText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)])

        if (newProgress >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => {
            onComplete()
          }, 1000)
          return 100
        }

        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-pink-900/50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(219, 39, 119, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(219, 39, 119, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 2s linear infinite",
          }}
        />
      </div>

      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent animate-scan-line" />
      </div>

      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Logo */}
        <div className="space-y-4">
          <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-mono">
            DATA_SCIENCE.exe
          </div>
          <div className="text-sm text-purple-300 font-mono tracking-wider">VERSION 2.0.25 - Y2K EDITION</div>
        </div>

        {/* Loading container */}
        <div className="w-full max-w-md mx-auto space-y-6">
          {/* Status text */}
          <div className="text-center">
            <div className="text-lg font-mono text-blue-300 mb-2 min-h-[1.5rem]">{currentText}</div>
            <div className="text-sm font-mono text-purple-400">{Math.floor(progress)}% COMPLETE</div>
          </div>

          {/* Loading bar container */}
          <div className="relative">
            {/* Outer border with glow */}
            <div className="w-full h-8 border-4 border-pink-500 rounded-lg bg-black/50 backdrop-blur-sm shadow-[0_0_20px_rgba(219,39,119,0.5)] p-1">
              {/* Inner loading bar */}
              <div className="relative h-full rounded-sm overflow-hidden bg-purple-900/30">
                {/* Progress fill */}
                <div
                  className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />

                  {/* Chunky pixels effect */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                      linear-gradient(90deg, rgba(255,255,255,0.1) 50%, transparent 50%),
                      linear-gradient(rgba(255,255,255,0.1) 50%, transparent 50%)
                    `,
                      backgroundSize: "4px 4px",
                    }}
                  />
                </div>

                {/* Loading bar segments */}
                <div className="absolute inset-0 flex">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="flex-1 border-r border-black/20 last:border-r-0" />
                  ))}
                </div>
              </div>
            </div>

            {/* Glitch effect overlay */}
            {progress > 50 && (
              <div className="absolute inset-0 animate-pulse">
                <div className="w-full h-8 border-4 border-blue-400 rounded-lg opacity-30 animate-glitch-border" />
              </div>
            )}
          </div>

          {/* System info */}
          <div className="text-xs font-mono text-purple-300 space-y-1 text-left bg-black/30 p-3 rounded border border-purple-500/30">
            <div className="flex justify-between">
              <span>MEMORY:</span>
              <span className="text-green-400">512MB AVAILABLE</span>
            </div>
            <div className="flex justify-between">
              <span>CPU:</span>
              <span className="text-green-400">PENTIUM III 1GHz</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-pink-400">LOADING...</span>
            </div>
          </div>
        </div>

        {/* Blinking cursor */}
        <div className="flex justify-center">
          <span className="text-pink-400 font-mono text-xl animate-pulse">_</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glitch-border {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        
        .animate-glitch-border {
          animation: glitch-border 0.3s infinite;
        }
      `}</style>
    </div>
  )
}
