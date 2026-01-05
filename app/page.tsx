import Footer from "@/components/footer";
import Header from "@/components/header";
import PricingSection from "@/components/pricing-section";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Code, 
  Palette, 
  Globe,  
  ArrowRight,
  ExternalLink,
  Star,
  Calendar
} from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "iOS App Website",
    description: "A modern e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    image: "/next.svg", 
    liveUrl: "https://shifthabits.co.uk"
  },
  {
    id: 2,
    title: "Events Site",
    description: "A responsive portfolio website showcasing projects and skills with dark mode support.",
    image: "/vercel.svg", 
    liveUrl: "https://havenhq.co.uk"
  },
  {
    id: 3,
    title: "Media Page",
    description: "A responsive portfolio website showcasing projects and skills with dark mode support.",
    image: "/vercel.svg", 
    liveUrl: "https://www.youumedia.com"
  }
];

const services = [
  {
    icon: Palette,
    title: "Web Development",
    description: "Creating beautiful, modern, and responsive website designs that engage and convert visitors. This includes any and all backends too.",
  },
  {
    icon: Code,
    title: "Hosting & Maintenance",
    description: "Providing reliable and secure web hosting solutions with regular maintenance to ensure optimal performance and uptime.",
  },
  {
    icon: Globe,
    title: "Search Engine Optimisation (SEO)",
    description: "Optimising websites to improve search engine rankings, increase organic traffic, and enhance online visibility.",
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    quote: "Rhyse delivered an exceptional website that exceeded our expectations. The design is modern, the functionality is flawless, and the user experience is outstanding.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Creative Agency",
    quote: "Working with Rhyse was a pleasure. He understood our vision and brought it to life with a beautiful, responsive website. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "E-commerce Solutions",
    quote: "The custom-coded website Rhyse created for us is fast, secure, and perfectly tailored to our needs. Our conversion rates have improved significantly.",
    rating: 5
  },
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
                  Welcome to StickySites,{" "}
                  <span className="text-primary">I'm Rhyse</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  I create beautiful, functional, and easy to use websites that help businesses 
                  grow their online presence and get their customers to stick.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="https://calendly.com/rhyse-business/30min" target="_blank" rel="noopener noreferrer">
                      Book a Free Audit
                      <Calendar className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">
                      Web Services
                      <ArrowRight className="ml-2 h-4 w-4" />
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
                My Services
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

        {/* Pricing Section */}
        <PricingSection />

        <Separator />

        {/* Testimonials Section - Hidden for now */}
        {/* <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What Clients Say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">
                      "{testimonial.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-4">
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator /> */}

        {/* Featured Work Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Featured Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A selection of my recent projects showcasing my skills and expertise
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Link href={project.liveUrl} target="_blank" key={project.id}>
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
                  </Card>
                </Link>
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
                  Let's create something amazing.
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
