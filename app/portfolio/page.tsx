import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "iOS App Website",
    description: "A modern e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image: "/shift-app.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Mailchimp"],
    liveUrl: "https://shifthabits.co.uk"
  },
  {
    id: 2,
    title: "Media Site",
    description: "A responsive portfolio website showcasing projects and skills with dark mode support.",
    image: "/youu-media.png",
    technologies: ["React", "Next.js", "TypeScript"],
    liveUrl: "https://www.youumedia.com"
  },
  {
    id: 3,
    title: "Events Company",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/haven-events.png",
    technologies: ["Wordpress", "Woocommerce", "Stripe", "Ticketing System"],
    liveUrl: "https://havenhq.co.uk"
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
                A collection of my recent projects. If you'd like to see more, feel free to get in touch!
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
                        Visit Site
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

