import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Server, 
  ArrowRight,
  CheckCircle2,
  Database,
  Zap
} from "lucide-react";

const customCodedServices = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Fully custom websites built from scratch using modern frameworks and technologies.",
    features: ["React & Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    icon: Database,
    title: "Full-Stack Solutions",
    description: "Complete web applications with custom backends, databases, and API integrations.",
    features: ["Backend Development", "Database Design", "API Integration"]
  },
  {
    icon: Zap,
    title: "Performance Optimisation",
    description: "Lightning-fast websites optimised for speed, SEO, and user experience.",
    features: ["Code Optimisation", "Performance Tuning", "SEO Best Practices"]
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    description: "Reliable hosting solutions with fast performance and 99.9% uptime guarantee.",
    features: ["Fast Loading Times", "SSL Certificates", "Regular Backups"]
  },
];

const customCodedBenefits = [
  "Complete control over design and functionality",
  "Optimised performance and loading speeds",
  "Scalable architecture for future growth",
  "No dependency on third-party platforms",
  "Custom features tailored to your needs",
  "Better SEO control and optimisation",
  "Enhanced security and data control",
  "Unique design that stands out"
];

export default function CustomCodedServices() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Header Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                Custom Coded Website Services
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                From custom design to full-stack development, I provide comprehensive custom-coded website 
                services built from the ground up to meet your exact requirements.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Pricing Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Custom Website
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Choose the approach that best fits your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Template-Based */}
              <Card className="flex flex-col hover:shadow-lg transition-shadow border-primary border-2 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="default" className="text-xs px-3 py-1">
                    Recommended
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Template-Based</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">From £2,000</span>
                  </div>
                  <CardDescription className="mt-2">~2-3 weeks</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Key Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Faster launch</Badge>
                      <Badge variant="secondary" className="text-xs">Lower cost</Badge>
                      <Badge variant="secondary" className="text-xs">Ideal for marketing sites</Badge>
                    </div>
                  </div>
                  <CardDescription className="mb-6">
                    Perfect for businesses that need a professional website quickly
                  </CardDescription>
                  <ul className="flex-1 space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">High-quality pre-built template (Next.js / modern stack)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Customised branding (colours, fonts, layout tweaks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Up to 5 pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Fully responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Performance-optimised build</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic SEO setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Deployment & hosting setup</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="default" size="lg" asChild>
                    <Link href="/contact">BOOK A CALL TO DISCUSS</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Fully Custom */}
              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Fully Custom</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">From £5,000</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Key Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Fully bespoke</Badge>
                      <Badge variant="secondary" className="text-xs">Scalable backend</Badge>
                      <Badge variant="secondary" className="text-xs">Ideal for apps & platforms</Badge>
                    </div>
                  </div>
                  <CardDescription className="mb-6">
                    Complete custom solution built from the ground up
                  </CardDescription>
                  <ul className="flex-1 space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Fully custom UI/UX design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Custom frontend (React / Next.js / similar)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Backend development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Database & API setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Authentication & user flows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Admin dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Deployment & infrastructure setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Documentation & handover</span>
                    </li>
                  </ul>
                  <div className="mb-6 p-3 rounded-md bg-muted/50">
                    <p className="text-xs text-muted-foreground italic">
                      Final pricing depends on scope - all projects are quoted after a discovery call.
                    </p>
                  </div>
                  <Button className="w-full" variant="outline" size="lg" asChild>
                    <Link href="/contact">BOOK A CALL TO DISCUSS</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Services Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                What I Offer
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Comprehensive custom development solutions for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {customCodedServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <Badge key={feature} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Separator />

        {/* Benefits Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl">Why Choose Custom Coded</CardTitle>
                    <CardDescription className="text-base sm:text-lg mt-1">
                      Benefits of a custom-built website
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {customCodedBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Custom-coded websites give you complete control over every aspect of your site. 
                    Built from scratch using modern technologies, your website will be fast, secure, 
                    and perfectly tailored to your business needs.
                  </p>
                  <Button asChild>
                    <Link href="/contact">
                      Discuss Your Custom Website
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Call to Action Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl">
                  Ready to Build Your Custom Website?
                </CardTitle>
                <CardDescription className="mt-4 text-base sm:text-lg">
                  Let's discuss your project and create something truly unique together.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started
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

