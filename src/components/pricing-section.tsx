"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingData = {
  "wordpress-site": {
    essential: {
      price: "£499",
      features: [
        "Professional Landing Page",
        "Requirements doc",
        "Mobile & tablet responsive layout",
        "Brand styling (colours, fonts)",
        "Basic on-page SEO (titles & meta)",
        "Fast-loading & performance optimised",
        "Site launch & deployment",
        "Contact info/form if wanted"
      ]
    },
    growth: {
      price: "£749",
      features: [
        "Up to 5 Pages (Home, About, Services, contact etc.)",
        "Site planning call",
        "Blog setup & categories (if one of pages)",
        "Google Analytics setup",
        "XML sitemaps",
        "Speed & mobile optimisation",
        "One revision round",
        "Basic handover"
      ]
    },
    premium: {
      price: "£999+",
      features: [
        "Up to 10 Pages",
        "Full site planning call (including lead funnel)",
        "Advanced contact/lead capture forms",
        "Complete Google Search Console setup",
        "SEO enhancements",
        "Up to three revision rounds",
        "Site handover / editing walkthrough"
      ],
      note: "Price depends on complexity of site"
    }
  },
  "custom-coded": {
    "template-based": {
      price: "From £2,000",
      features: [
        "High-quality pre-built template (Next.js / modern stack)",
        "Customised branding (colours, fonts, layout tweaks)",
        "Up to 5 pages",
        "Fully responsive design",
        "Performance-optimised build",
        "Basic SEO setup",
        "Deployment & hosting setup"
      ],
      timeline: "~2-3 weeks",
      benefits: ["Faster launch", "Lower cost", "Ideal for marketing sites"]
    },
    "fully-custom": {
      price: "From £5,000",
      features: [
        "Fully custom UI/UX design",
        "Custom frontend (React / Next.js / similar)",
        "Backend development (if required)",
        "Database & API setup",
        "Authentication & user flows (if needed)",
        "Admin dashboard (if applicable)",
        "Deployment & infrastructure setup",
        "Documentation & handover"
      ],
      benefits: ["Fully bespoke", "Scalable backend", "Ideal for apps & platforms"],
      note: "Final pricing depends on scope - all projects are quoted after a discovery call"
    }
  },
  "shopify": {
    standard: {
      price: "From £699",
      note: "Contact for quote",
      tagline: "Custom-planned Shopify stores, tailored to your business",
      minimumScope: [
        "Shopify theme setup & configuration",
        "Brand styling (colours, fonts, layout)",
        "Up to 5 products added",
        "Payment & shipping setup",
        "Basic SEO setup",
        "Store ready to accept orders"
      ],
      pricingRange: "£699 – £3,500+",
      pricingFactors: [
        "Number of products",
        "Required integrations",
        "Custom design or functionality",
        "Migration from another platform"
      ]
    }
  }
};

const hostingData = {
  "wordpress-site": {
    "simply-hosting": {
      price: "£10",
      period: "/month",
      features: [
        "Fast managed hosting (Hostinger)",
        "SSL certificate",
        "Weekly automated backups",
        "Uptime monitoring",
        "WordPress installed and configured"
      ]
    },
    "hosting-plus": {
      price: "£30",
      period: "/month",
      features: [
        "WordPress core updates",
        "Theme & plugin updates",
        "Monthly security scans",
        "Malware monitoring",
        "Basic technical support"
      ]
    },
    "premium-hosting": {
      price: "£75",
      period: "/month",
      features: [
        "Up to an hour of edits a month",
        "Performance monitoring & optimisation",
        "Legal compliance checks (cookie scans & banner updates)",
        "Priority support"
      ]
    }
  },
  "custom-coded": {
    "simply-hosting": {
      price: "£10",
      period: "/month",
      features: [
        "Fast managed hosting (Hostinger)",
        "SSL certificate",
        "Weekly automated backups",
        "Uptime monitoring",
        "WordPress installed and configured"
      ]
    },
    "hosting-plus": {
      price: "£30",
      period: "/month",
      features: [
        "WordPress core updates",
        "Theme & plugin updates",
        "Monthly security scans",
        "Malware monitoring",
        "Basic technical support"
      ]
    },
    "premium-hosting": {
      price: "£75",
      period: "/month",
      features: [
        "Up to an hour of edits a month",
        "Performance monitoring & optimisation",
        "Legal compliance checks (cookie scans & banner updates)",
        "Priority support"
      ]
    }
  }
};

const retainerPackage = {
  price: "From £100",
  period: "/month",
  description: "If you'd like ongoing UX improvements, new features, or continuous enhancements to your website, I offer a monthly retainer package.",
  note: "Scope and pricing are discussed and agreed in advance."
};

const servicePageLinks = {
  "wordpress-site": "/services/wordpress",
  "custom-coded": "/services/custom-coded",
  "shopify": "/services/shopify"
};

export default function PricingSection() {
  const [isHostingOpen, setIsHostingOpen] = useState<string | undefined>(undefined);

  // Filter plans based on service type
  const getFilteredPlans = (tabKey: string, plans: typeof pricingData[keyof typeof pricingData]) => {
    if (tabKey === "custom-coded") {
      // Show template-based and fully-custom for custom-coded
      const { "template-based": templateBased, "fully-custom": fullyCustom } = plans as typeof pricingData["custom-coded"];
      return { "template-based": templateBased, "fully-custom": fullyCustom };
    } else if (tabKey === "shopify") {
      // Only show standard for shopify
      const { standard } = plans;
      return { standard };
    }
    // Show all plans for wordpress-site (essential, growth, premium)
    return plans;
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your project
          </p>
        </div>

        <Tabs defaultValue="wordpress-site" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="wordpress-site">WordPress Site</TabsTrigger>
            <TabsTrigger value="custom-coded">Custom Coded</TabsTrigger>
            <TabsTrigger value="shopify">Shopify</TabsTrigger>
          </TabsList>

          {Object.entries(pricingData).map(([tabKey, plans]) => {
            const hasHosting = tabKey === "wordpress-site" || tabKey === "custom-coded";
            const hostingPlans = hasHosting ? hostingData[tabKey as keyof typeof hostingData] : null;
            const filteredPlans = getFilteredPlans(tabKey, plans);
            const planCount = Object.keys(filteredPlans).length;
            const gridCols = planCount === 1 ? "md:grid-cols-1" : planCount === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
            
            // WordPress add-ons
            const wordpressAddOns = tabKey === "wordpress-site" ? [
              "Hosting",
              "Legal setup (privacy policy - complianz plugin)",
              "Sitemap etc (for essential plan)",
              "Site migration",
              "Copywriting",
              "Additional pages"
            ] : null;
            
            return (
              <TabsContent key={tabKey} value={tabKey} className="mt-0">
                {tabKey === "shopify" ? (
                  // Special handling for Shopify
                  <div className="space-y-6">
                    {Object.entries(filteredPlans).map(([tier, data]) => {
                      const shopifyData = data as typeof pricingData["shopify"]["standard"];
                      return (
                        <Card key={tier} className="flex flex-col hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-2xl">Shopify Store</CardTitle>
                            <div className="mt-4">
                              <span className="text-4xl font-bold">{shopifyData.price}</span>
                              {shopifyData.note && (
                                <span className="text-lg text-muted-foreground ml-2">({shopifyData.note})</span>
                              )}
                            </div>
                            {shopifyData.tagline && (
                              <CardDescription className="mt-4 text-base">
                                {shopifyData.tagline}
                              </CardDescription>
                            )}
                          </CardHeader>
                          <CardContent className="flex-1 flex flex-col">
                            {shopifyData.minimumScope && (
                              <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Minimum scope includes:</h3>
                                <ul className="space-y-2">
                                  {shopifyData.minimumScope.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className="mb-6">
                              <h3 className="text-lg font-semibold mb-3">How pricing works (clear + reassuring):</h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                Every Shopify store is different. Prices typically range between {shopifyData.pricingRange}, depending on:
                              </p>
                              <ul className="space-y-2">
                                {shopifyData.pricingFactors?.map((factor, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{factor}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button className="w-full" variant="default" size="lg" asChild>
                              <Link href="/contact">Contact for Quote</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                ) : (
                  <div className={`grid grid-cols-1 gap-6 ${gridCols}`}>
                    {Object.entries(filteredPlans).map(([tier, data]) => {
                      const tierData = data as any;
                      const isRecommended = tier === "growth" || tier === "template-based";
                      const displayName = tier === "template-based" ? "Template-Based" : 
                                        tier === "fully-custom" ? "Fully Custom" :
                                        tier.charAt(0).toUpperCase() + tier.slice(1);
                      
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
                              {tierData.note && (
                                <p className="text-sm text-muted-foreground mt-2">{tierData.note}</p>
                              )}
                            </div>
                            {tierData.timeline && (
                              <CardDescription className="mt-2">{tierData.timeline}</CardDescription>
                            )}
                          </CardHeader>
                          <CardContent className="flex-1 flex flex-col">
                            {tierData.benefits && (
                              <div className="mb-4">
                                <p className="text-sm font-medium mb-2">Key Benefits:</p>
                                <div className="flex flex-wrap gap-2">
                                  {tierData.benefits.map((benefit: string, index: number) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {benefit}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                            <CardDescription className="mb-6">
                              {tier === "essential" ? "Perfect for getting started" : 
                               tier === "growth" ? "Ideal for growing businesses" : 
                               tier === "premium" ? "Comprehensive solution" :
                               tier === "template-based" ? "Faster launch, lower cost" :
                               "Fully bespoke solution"}
                            </CardDescription>
                            <ul className="flex-1 space-y-3 mb-6">
                              {tierData.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {tabKey === "wordpress-site" && wordpressAddOns && (
                              <div className="mt-6 pt-6 border-t">
                                <h3 className="text-sm font-semibold mb-3">Add-Ons:</h3>
                                <ul className="space-y-2">
                                  {wordpressAddOns.map((addon, index) => (
                                    <li key={index} className="text-xs text-muted-foreground">
                                      • {addon}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {hasHosting && hostingPlans && (
                              <div className="mt-6 pt-6 border-t">
                                <Accordion 
                                  type="single" 
                                  collapsible 
                                  className="w-full"
                                  value={isHostingOpen}
                                  onValueChange={setIsHostingOpen}
                                >
                                  <AccordionItem value="hosting" className="border-none">
                                    <AccordionTrigger className="text-sm font-semibold py-2 hover:no-underline">
                                      Hosting Options
                                    </AccordionTrigger>
                                    <AccordionContent>
                                      <div className="space-y-3 pt-2">
                                        {Object.entries(hostingPlans).map(([hostingTier, hostingData]) => {
                                          const hostingTierData = hostingData as any;
                                          const hostingDisplayName = hostingTier === "simply-hosting" ? "Simply Hosting" :
                                                                    hostingTier === "hosting-plus" ? "Hosting Plus" :
                                                                    "Premium Hosting";
                                          return (
                                            <div key={hostingTier} className="p-3 rounded-md bg-muted/50">
                                              <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium">{hostingDisplayName}</span>
                                                <span className="text-sm font-semibold">
                                                  {hostingTierData.price}
                                                  <span className="text-xs text-muted-foreground">{hostingTierData.period}</span>
                                                </span>
                                              </div>
                                              <ul className="space-y-1.5">
                                                {hostingTierData.features.map((feature: string, index: number) => (
                                                  <li key={index} className="flex items-start gap-1.5">
                                                    <Check className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                                                    <span className="text-xs text-muted-foreground">{feature}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          );
                                        })}
                                        <div className="p-3 rounded-md bg-muted/50 mt-3">
                                          <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium">Retainer Package</span>
                                            <span className="text-sm font-semibold">
                                              {retainerPackage.price}
                                              <span className="text-xs text-muted-foreground">{retainerPackage.period}</span>
                                            </span>
                                          </div>
                                          <p className="text-xs text-muted-foreground mb-2">{retainerPackage.description}</p>
                                          <p className="text-xs text-muted-foreground italic">{retainerPackage.note}</p>
                                        </div>
                                      </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              </div>
                            )}
                            
                            <Button 
                              className="w-full mt-6" 
                              variant={isRecommended ? "default" : "outline"}
                              size="lg"
                              asChild
                            >
                              <Link href="/contact">Get Started</Link>
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
                <div className="mt-8 flex justify-center">
                  <Button asChild variant="outline" size="lg">
                    <Link href={servicePageLinks[tabKey as keyof typeof servicePageLinks]}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
