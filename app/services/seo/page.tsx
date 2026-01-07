"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Search, 
  TrendingUp, 
  FileText, 
  Link as LinkIcon, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Check
} from "lucide-react";

const seoServices = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Identify the right keywords to target for maximum visibility and traffic.",
    features: ["Competitor Analysis", "Search Volume Research", "Long-tail Keywords"]
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "Optimize your website's content, structure, and HTML elements for search engines.",
    features: ["Meta Tags", "Content Optimisation", "Header Structure"]
  },
  {
    icon: LinkIcon,
    title: "Link Building",
    description: "Build quality backlinks to improve your website's authority and search rankings.",
    features: ["Outreach Strategy", "Quality Backlinks", "Link Profile Analysis"]
  },
  {
    icon: BarChart3,
    title: "SEO Analytics",
    description: "Track and analyze your SEO performance with detailed reports and insights.",
    features: ["Rank Tracking", "Traffic Analysis", "Performance Reports"]
  },
];

const seoBenefits = [
  "Increased organic traffic to your website",
  "Higher search engine rankings",
  "Better visibility for your target audience",
  "Improved user experience and site structure",
  "Long-term sustainable growth",
  "Cost-effective marketing strategy",
  "Better conversion rates",
  "Competitive advantage in your industry"
];

const seoSetup = {
  price: "£250-£500",
  type: "One-Off",
  features: [
    "SEO audit & baseline report",
    "Keyword research (primary + secondary keywords)",
    "Technical SEO setup",
    "Google Search Console setup",
    "XML sitemap submission",
    "Basic on-page optimisation (titles & meta)",
    "Indexing checks"
  ]
};

const seoPricingPlans = {
  local: {
    price: "£150",
    period: "/month",
    features: [
      "Google Business Profile optimisation",
      "Local keyword tracking",
      "On-page SEO improvements (1–2 pages/month)",
      "Local citation checks",
      "Monthly performance report"
    ]
  },
  growth: {
    price: "£250",
    period: "/month",
    features: [
      "Content optimisation (2–4 pages/month)",
      "Internal linking",
      "Keyword ranking tracking",
      "Competitor monitoring",
      "Monthly SEO report & recommendations"
    ],
    includes: "Everything in Local SEO, plus:"
  },
  premium: {
    price: "£500+",
    period: "/month",
    features: [
      "Ongoing SEO strategy & planning",
      "LLM sitemap",
      "Maps optimisation",
      "Priority support & reporting"
    ],
    includes: "Everything in growth tier, plus:",
    addOns: ["Content planning & optimisation"]
  }
};

export default function SEOServices() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Header Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                Search Engine Optimisation (SEO)
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-foreground/70">
                Improve your website's search engine visibility and drive organic traffic to your business. 
                Comprehensive SEO strategies tailored to help you rank higher and reach more customers.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* SEO Setup Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">SEO Setup (One-Off)</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{seoSetup.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  Initial SEO setup to get your website ready for optimisation
                </CardDescription>
                <ul className="space-y-3">
                  {seoSetup.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Monthly SEO Plans
              </h2>
              <p className="text-base sm:text-lg text-foreground/70">
                Choose the perfect SEO package for your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {Object.entries(seoPricingPlans).map(([tier, data]) => {
                const tierData = data as any;
                const displayName = tier === "local" ? "Local SEO" : 
                                  tier === "growth" ? "Growth SEO" : 
                                  "Premium SEO";
                const isRecommended = tier === "growth";
                
                return (
                  <Card 
                    key={tier} 
                    className={`flex flex-col hover:shadow-lg transition-shadow relative ${
                      isRecommended ? "border-primary border-2" : ""
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <Badge variant="default" className="text-xs px-3 py-1">
                          Recommended
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{displayName}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{tierData.price}</span>
                        <span className="text-lg text-foreground/70 ml-1">{tierData.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      {tierData.includes && (
                        <CardDescription className="mb-4 font-medium">
                          {tierData.includes}
                        </CardDescription>
                      )}
                      <CardDescription className="mb-6">
                        {tier === "local" ? "Perfect for local businesses" : 
                         tier === "growth" ? "Ideal for growing companies" : 
                         "Comprehensive SEO solution"}
                      </CardDescription>
                      <ul className="flex-1 space-y-3 mb-6">
                        {tierData.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {tierData.addOns && (
                        <div className="mb-6 pt-4 border-t">
                          <p className="text-sm font-medium mb-2">Add-ons:</p>
                          <ul className="space-y-2">
                            {tierData.addOns.map((addon: string, index: number) => (
                              <li key={index} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{addon}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <Button 
                        className="w-full" 
                        variant={isRecommended ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link href="/contact">
                          Get Started
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

        {/* Services Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                My SEO Services
              </h2>
              <p className="text-base sm:text-lg text-foreground/70">
                Comprehensive search engine optimisation services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoServices.map((service) => {
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
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl">Benefits of SEO</CardTitle>
                    <CardDescription className="text-base sm:text-lg mt-1">
                      Why invest in search engine optimisation
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {seoBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base text-foreground/70">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm sm:text-base text-foreground/70 mb-4">
                    SEO is a long-term investment that helps your business grow organically. 
                    By optimizing your website for search engines, you'll attract more qualified 
                    visitors who are actively searching for your products or services.
                  </p>
                  <Button asChild>
                    <Link href="/contact">
                      Get SEO Consultation
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
                  Ready to Improve Your Rankings?
                </CardTitle>
                <CardDescription className="mt-4 text-base sm:text-lg">
                  Let's discuss how SEO can help grow your business and drive more traffic.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Your SEO Journey
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
