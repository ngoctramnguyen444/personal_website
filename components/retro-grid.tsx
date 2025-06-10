"use client"

import { useEffect, useRef } from "react"

export function RetroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drawGrid = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid settings
      const gridSize = 50
      const horizonY = canvas.height * 0.6
      const vanishingPointX = canvas.width / 2

      // Draw horizontal lines
      ctx.strokeStyle = "rgba(219, 39, 119, 0.2)" // Pink
      ctx.lineWidth = 1

      for (let y = horizonY; y <= canvas.height; y += 20) {
        const lineSpacing = (y - horizonY) / 2

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw vertical lines radiating from vanishing point
      ctx.strokeStyle = "rgba(139, 92, 246, 0.2)" // Purple

      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, canvas.height)
        ctx.lineTo(vanishingPointX, horizonY)
        ctx.stroke()
      }

      // Draw sun/circle at vanishing point
      const gradient = ctx.createRadialGradient(vanishingPointX, horizonY, 0, vanishingPointX, horizonY, 200)

      gradient.addColorStop(0, "rgba(219, 39, 119, 0.6)")
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.3)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(vanishingPointX, horizonY, 200, 0, Math.PI * 2)
      ctx.fill()
    }

    drawGrid()
    window.addEventListener("resize", drawGrid)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("resize", drawGrid)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}
