import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Sparkles, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image: "/next.svg", 
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with dark mode support.",
    image: "/vercel.svg", 
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration.",
    image: "/window.svg", 
    technologies: ["React", "Node.js", "MongoDB"],
  },
];

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Creating beautiful, modern, and user-friendly website designs that engage and convert visitors.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive, fast, and accessible web applications using the latest technologies.",
  },
  {
    icon: Smartphone,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and experiences that delight users and drive engagement.",
  },
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Ensuring your website looks perfect on all devices, from mobile phones to desktop computers.",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Tailored web solutions designed to meet your specific business needs and goals.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "UI/UX Design",
  "Figma",
  "Responsive Design",
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Left side - Text content */}
              <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Hi, I'm Rhyse, a{" "}
                  <span className="text-primary">Web Designer</span>
                  <br />
                  & Developer
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  I create beautiful, functional, and user-friendly websites that help businesses 
                  grow and succeed online. Specializing in modern web design and development.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/portfolio">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Right side - Profile Image */}
              <div className="flex flex-1 justify-center lg:justify-end">
                <div className="relative size-64 sm:size-80 lg:size-96">
                  <Image
                    src="/headPic.png"
                    alt="Profile picture"
                    fill
                    className="rounded-full object-cover shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Services Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Services I Offer
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive web design and development services to bring your vision to life
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Separator />

        {/* Featured Work Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Featured Work
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  A selection of my recent projects showcasing my skills and expertise
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">
                  View All Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Technologies Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Technologies & Skills
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Technologies and tools I work with to create amazing web experiences
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Call-to-Action Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl sm:text-4xl">
                  Let's Work Together
                </CardTitle>
                <CardDescription className="mt-4 text-lg">
                  Have a project in mind? I'd love to hear from you. 
                  Let's create something amazing together.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
