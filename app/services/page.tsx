"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Code, Search, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "WordPress",
    description: "Custom WordPress website development including theme design, customization, and hosting solutions.",
    link: "/services/wordpress",
  },
  {
    icon: Code,
    title: "Shopify",
    description: "Shopify store development with custom themes, e-commerce setup, and optimisation services.",
    link: "/services/shopify",
  },
  {
    icon: Code,
    title: "Custom Coded",
    description: "Fully custom-coded websites built from scratch using modern frameworks and technologies.",
    link: "/services/custom-coded",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Search engine optimisation to improve your website's visibility and drive organic traffic to your business.",
    link: "/services/seo",
  },
];

const pricingOverview = {
  wordpress: {
    title: "WordPress",
    startingPrice: "From £499",
    description: "WordPress website development and hosting",
    features: ["Custom Themes", "Plugin Development", "Hosting Included", "Support"],
    link: "/services/wordpress"
  },
  shopify: {
    title: "Shopify",
    startingPrice: "From £699",
    description: "Shopify store development and setup",
    features: ["Custom Themes", "E-commerce Setup", "Payment Integration", "Support"],
    link: "/services/shopify"
  },
  customCoded: {
    title: "Custom Coded",
    startingPrice: "From £2,000",
    description: "Fully custom-coded websites",
    features: ["Custom Development", "Modern Frameworks", "Full-Stack Solutions", "Support"],
    link: "/services/custom-coded"
  },
  seo: {
    title: "SEO Services",
    startingPrice: "From £150/month",
    description: "Comprehensive SEO packages for all business sizes",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Monthly Reports"],
    link: "/services/seo"
  }
};

export default function Services() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Header Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-foreground">
                Services
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-foreground/70">
                Comprehensive web development and SEO services to help your business grow online. 
                From custom websites to search engine optimisation, I provide solutions tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Services Overview Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader>
                      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <CardDescription className="text-base mb-4 flex-1">
                        {service.description}
                      </CardDescription>
                      <Button asChild className="w-full sm:w-auto">
                        <Link href={service.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <Separator />

        {/* Pricing Overview Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Pricing Overview
              </h2>
              <p className="text-base sm:text-lg text-foreground/70">
                Transparent pricing for all our services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(pricingOverview).map(([key, plan]) => (
                <Card key={key} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">{plan.title}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold">{plan.startingPrice}</span>
                    </div>
                    <CardDescription className="text-base mt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="flex-1 space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={plan.link}>
                        View Full Pricing
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Call to Action Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl sm:text-3xl">
                  Ready to Get Started?
                </CardTitle>
                <CardDescription className="mt-4 text-base sm:text-lg">
                  Have a project in mind? Let's discuss how I can help bring your vision to life.
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

