import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden bg-black/40 backdrop-blur-sm border-2 border-purple-500 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-1">
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 z-20">
          <div className="px-2 py-1 bg-pink-500/80 rounded-md text-xs font-mono">PROJECT_FILE</div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          {title}
        </h3>
        <p className="text-purple-200 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-blue-500 text-blue-300 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={link} className="inline-flex items-center text-pink-400 hover:text-pink-300 text-sm font-medium">
          View Project <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
