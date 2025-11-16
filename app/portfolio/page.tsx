import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// TODO: Replace with your actual project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image: "/next.svg", // TODO: Replace with actual project image
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with dark mode support.",
    image: "/vercel.svg", // TODO: Replace with actual project image
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/window.svg", // TODO: Replace with actual project image
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 4,
    title: "Landing Page Design",
    description: "A beautiful landing page design with smooth animations and modern UI components.",
    image: "/globe.svg", // TODO: Replace with actual project image
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 5,
    title: "Dashboard Application",
    description: "A comprehensive dashboard with data visualization, charts, and analytics.",
    image: "/file.svg", // TODO: Replace with actual project image
    technologies: ["React", "D3.js", "TypeScript", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, comments, and SEO optimization.",
    image: "/next.svg", // TODO: Replace with actual project image
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
];

export default function Portfolio() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Header Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                Portfolio
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                {/* TODO: Add your portfolio introduction */}
                A collection of my recent projects showcasing my skills in web design and development. 
                Each project represents a unique challenge and solution.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" className="w-full sm:w-auto min-h-[44px]" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="w-full sm:w-auto min-h-[44px]" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

