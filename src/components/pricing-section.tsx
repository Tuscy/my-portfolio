"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

const pricingData = {
  "wordpress-site": {
    basic: {
      price: "£499",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO setup",
        "1 month support"
      ]
    },
    standard: {
      price: "£999",
      features: [
        "Up to 10 pages",
        "Custom design",
        "Contact form + newsletter",
        "Advanced SEO",
        "3 months support",
        "Social media integration"
      ]
    },
    premium: {
      price: "£1,999",
      features: [
        "Unlimited pages",
        "Fully custom design",
        "E-commerce integration",
        "Premium SEO package",
        "6 months support",
        "Performance optimization",
        "Security features"
      ]
    }
  },
  "custom-coded": {
    basic: {
      price: "£1,499",
      features: [
        "Up to 5 pages",
        "Custom HTML/CSS/JS",
        "Responsive design",
        "Contact form",
        "Basic animations",
        "1 month support"
      ]
    },
    standard: {
      price: "£2,999",
      features: [
        "Up to 10 pages",
        "Custom React/Next.js",
        "Advanced animations",
        "API integration",
        "CMS integration",
        "3 months support"
      ]
    },
    premium: {
      price: "£4,999",
      features: [
        "Unlimited pages",
        "Full-stack application",
        "Custom backend",
        "Database integration",
        "Advanced features",
        "6 months support",
        "Performance optimization"
      ]
    }
  },
  "shopify": {
    basic: {
      price: "£799",
      features: [
        "Theme customization",
        "Product setup (up to 20)",
        "Payment integration",
        "Basic SEO",
        "1 month support"
      ]
    },
    standard: {
      price: "£1,599",
      features: [
        "Custom theme design",
        "Product setup (up to 50)",
        "Advanced payment options",
        "Email marketing setup",
        "3 months support",
        "Inventory management"
      ]
    },
    premium: {
      price: "£2,999",
      features: [
        "Fully custom theme",
        "Unlimited products",
        "Advanced apps integration",
        "Premium SEO package",
        "6 months support",
        "Performance optimization",
        "Custom functionality"
      ]
    }
  }
};

const hostingData = {
  "wordpress-site": {
    basic: {
      price: "£9.99",
      period: "/month",
      features: [
        "10GB storage",
        "50GB bandwidth",
        "Free SSL certificate",
        "Weekly backups",
        "Email support"
      ]
    },
    standard: {
      price: "£19.99",
      period: "/month",
      features: [
        "50GB storage",
        "200GB bandwidth",
        "Free SSL certificate",
        "Daily backups",
        "Priority support",
        "CDN included"
      ]
    },
    premium: {
      price: "£39.99",
      period: "/month",
      features: [
        "Unlimited storage",
        "Unlimited bandwidth",
        "Free SSL certificate",
        "Real-time backups",
        "24/7 priority support",
        "Advanced CDN",
        "Staging environment"
      ]
    }
  },
  "custom-coded": {
    basic: {
      price: "£14.99",
      period: "/month",
      features: [
        "20GB storage",
        "100GB bandwidth",
        "Free SSL certificate",
        "Weekly backups",
        "Email support"
      ]
    },
    standard: {
      price: "£29.99",
      period: "/month",
      features: [
        "100GB storage",
        "500GB bandwidth",
        "Free SSL certificate",
        "Daily backups",
        "Priority support",
        "CDN included"
      ]
    },
    premium: {
      price: "£59.99",
      period: "/month",
      features: [
        "Unlimited storage",
        "Unlimited bandwidth",
        "Free SSL certificate",
        "Real-time backups",
        "24/7 priority support",
        "Advanced CDN",
        "Staging environment"
      ]
    }
  }
};

export default function PricingSection() {
  const [isHostingOpen, setIsHostingOpen] = useState<string | undefined>(undefined);

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
            
            return (
              <TabsContent key={tabKey} value={tabKey} className="mt-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {Object.entries(plans).map(([tier, data]) => (
                    <Card 
                      key={tier} 
                      className={`flex flex-col hover:shadow-lg transition-shadow relative ${
                        tier === "standard" ? "border-primary border-2" : ""
                      }`}
                    >
                      {tier === "standard" && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                          <Badge variant="default" className="text-xs px-3 py-1">
                            Recommended
                          </Badge>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-2xl capitalize">{tier}</CardTitle>
                        <div className="mt-4">
                          <span className="text-4xl font-bold">{data.price}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <CardDescription className="mb-6">
                          Perfect for {tier === "basic" ? "small projects" : tier === "standard" ? "growing businesses" : "enterprise needs"}
                        </CardDescription>
                        <ul className="flex-1 space-y-3 mb-6">
                          {data.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
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
                                    {Object.entries(hostingPlans).map(([hostingTier, hostingData]) => (
                                      <div key={hostingTier} className="p-3 rounded-md bg-muted/50">
                                        <div className="flex items-center justify-between mb-2">
                                          <span className="text-sm font-medium capitalize">{hostingTier}</span>
                                          <span className="text-sm font-semibold">
                                            {hostingData.price}
                                            <span className="text-xs text-muted-foreground">{hostingData.period}</span>
                                          </span>
                                        </div>
                                        <ul className="space-y-1.5">
                                          {hostingData.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-1.5">
                                              <Check className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                                              <span className="text-xs text-muted-foreground">{feature}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        )}
                        
                        <Button 
                          className="w-full" 
                          variant={tier === "standard" ? "default" : "outline"}
                          size="lg"
                        >
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
