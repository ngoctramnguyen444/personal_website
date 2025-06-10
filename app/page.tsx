"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Database, Github, Linkedin, Mail, Star, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { RetroGrid } from "@/components/retro-grid"
import { GlitchText } from "@/components/glitch-text"
import { PixelCursor } from "@/components/pixel-cursor"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white overflow-hidden">
      <PixelCursor />
      <RetroGrid />

      {/* Navigation */}
      <header className="relative z-10 border-b-2 border-pink-500 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              DATA_SCIENCE.exe
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              {["HOME", "ABOUT", "SKILLS", "PROJECTS"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-pink-400 transition-colors font-mono tracking-wider"
                >
                  {item}
                </Link>
              ))}
            </div>
            <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-500/20">
              RESUME.pdf
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 py-20 md:py-32 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-800/50 border border-purple-500 text-xs font-mono">
              HELLO_WORLD.txt
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="block text-blue-300">I'm</span>
              <GlitchText
                text="TRAM NGUYEN"
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500"
              />
            </h1>
            <p className="text-lg text-purple-200 font-mono">Data Science/AI Enthusiast</p>
            <div className="flex space-x-4">
              <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500">
                View Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/20">
                Contact Me
              </Button>
            </div>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="text-purple-300 hover:text-pink-400 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-purple-300 hover:text-pink-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-purple-300 hover:text-pink-400 transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border-2 border-purple-500 rounded-xl p-6 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              &lt;WHO_AM_I&gt;
            </h2>
            <p className="text-base mb-4 text-purple-100">
              I'm driven by curiosity, clarity, and a desire to make data beautiful.
            </p>
            <p className="text-base mb-4 text-purple-100">
              My journey in data science began in high school where I discovered my love for patterns and predictions. Now, I
              combine statistical analysis with creative visualization to tell compelling data stories.
            </p>
            <p className="text-base text-purple-100">
              When I'm not coding or analyzing datasets, you can find me creating art, reading or watching movies.
            </p>
            <h2 className="text-2xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
              &lt;/WHO_AM_I&gt;
            </h2>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 py-20 container mx-auto px-4 bg-gradient-to-b from-transparent to-black/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-pink-800/50 border border-pink-500 text-xs font-mono mb-6">
            SKILLS.json
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            TECH_STACK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/40 backdrop-blur-sm border-2 border-blue-500 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                  <Database className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-300">Data Analysis</h3>
                <ul className="space-y-2 font-mono text-sm text-blue-400">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-pink-400 mr-2" />
                    <span>Python (Pandas, NumPy)</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-pink-400 mr-2" />
                    <span>R (tidyverse, ggplot2)</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-pink-400 mr-2" />
                    <span>SQL (PostgreSQL, MySQL)</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-pink-400 mr-2" />
                    <span>Excel & Power BI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-2 border-purple-500 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 mb-4">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">Machine Learning</h3>
                <ul className="space-y-2 font-mono text-sm text-blue-400">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-blue-400 mr-2" />
                    <span>Scikit-learn</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-blue-400 mr-2" />
                    <span>TensorFlow & Keras</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-blue-400 mr-2" />
                    <span>PyTorch</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-blue-400 mr-2" />
                    <span>Natural Language Processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-2 border-pink-500 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(219,39,119,0.3)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 mb-4">
                  <svg
                    className="h-6 w-6 text-pink-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16V21M12 16L9 13M12 16L15 13M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-pink-300">Cloud & Big Data</h3>
                <ul className="space-y-2 font-mono text-sm text-blue-400">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-purple-400 mr-2" />
                    <span>AWS (S3, EC2, SageMaker)</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-purple-400 mr-2" />
                    <span>Google Cloud Platform</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-purple-400 mr-2" />
                    <span>Hadoop & Spark</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-purple-400 mr-2" />
                    <span>Docker & Kubernetes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-purple-800/50 border border-purple-500 text-xs font-mono mb-6">
            PROJECTS.py
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            MY_PROJECTS()
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Sentiment Analysis Dashboard"
              description="Real-time social media sentiment analysis tool with interactive visualizations and predictive modeling."
              image="/placeholder.svg?height=300&width=500"
              tags={["Python", "NLP", "React", "D3.js"]}
              link="#"
            />

            <ProjectCard
              title="Customer Churn Prediction"
              description="Machine learning model to predict customer churn for a telecommunications company with 92% accuracy."
              image="/placeholder.svg?height=300&width=500"
              tags={["Scikit-learn", "XGBoost", "Pandas", "Tableau"]}
              link="#"
            />

            <ProjectCard
              title="COVID-19 Data Visualization"
              description="Interactive dashboard tracking global pandemic trends with predictive modeling for future outbreaks."
              image="/placeholder.svg?height=300&width=500"
              tags={["R", "Shiny", "ggplot2", "Time Series"]}
              link="#"
            />

            <ProjectCard
              title="Neural Style Transfer App"
              description="Web application that applies artistic styles to images using convolutional neural networks."
              image="/placeholder.svg?height=300&width=500"
              tags={["PyTorch", "Flask", "TensorFlow.js", "CNN"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t-2 border-pink-500 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                DATA_SCIENCE.exe
              </div>
              <div className="text-xs text-purple-300 font-mono mt-1">© 2025 Tram Nguyen. All rights reserved.</div>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-purple-300 hover:text-pink-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-purple-300 hover:text-pink-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-purple-300 hover:text-pink-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
