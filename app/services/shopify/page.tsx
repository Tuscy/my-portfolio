import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  ShoppingCart, 
  Palette, 
  Smartphone, 
  Settings, 
  ArrowRight,
  CheckCircle2,
  CreditCard
} from "lucide-react";

const shopifyServices = [
  {
    icon: Palette,
    title: "Custom Shopify Theme Design",
    description: "Beautiful, modern Shopify themes tailored to your brand and product offerings.",
    features: ["Custom Theme Development", "Brand Identity", "Product Showcase"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Setup",
    description: "Complete Shopify store setup with product management, payment integration, and shipping configuration.",
    features: ["Product Setup", "Payment Gateways", "Shipping Configuration"]
  },
  {
    icon: Settings,
    title: "Shopify Customization",
    description: "Custom apps, functionality, and integrations to enhance your Shopify store's capabilities.",
    features: ["Custom Apps", "Third-party Integrations", "Performance Optimization"]
  },
  {
    icon: CreditCard,
    title: "Payment & Checkout",
    description: "Seamless payment processing and optimized checkout experience to maximize conversions.",
    features: ["Payment Integration", "Checkout Optimization", "Security Features"]
  },
];

const shopifyBenefits = [
  "Easy-to-use content management system",
  "Built-in payment processing",
  "Mobile-responsive by default",
  "Secure and PCI compliant",
  "Scalable for growing businesses",
  "24/7 Shopify support included",
  "App ecosystem for extended functionality",
  "SEO-friendly platform"
];

export default function ShopifyServices() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Header Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                Shopify Store Services
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                From custom Shopify theme design to store setup and optimization, I provide comprehensive 
                Shopify development services to launch and grow your online store.
              </p>
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
                Comprehensive Shopify development solutions for your e-commerce business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shopifyServices.map((service) => {
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

        {/* Pricing Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Shopify</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">From £699</span>
                  <span className="text-lg text-muted-foreground ml-2">(Contact for quote)</span>
                </div>
                <CardDescription className="mt-4 text-base">
                  Custom-planned Shopify stores, tailored to your business
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Minimum scope includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Shopify theme setup & configuration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Brand styling (colours, fonts, layout)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Up to <strong>5 products added</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Payment & shipping setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic SEO setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Store ready to accept orders</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">How pricing works (clear + reassuring):</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Every Shopify store is different. Prices typically range between <strong>£699 – £3,500+</strong>, depending on:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Number of products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Required integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Custom design or functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Migration from another platform</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full" variant="default" size="lg" asChild>
                  <Link href="/contact">Contact for Quote</Link>
                </Button>
              </CardContent>
            </Card>
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
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl">Why Choose Shopify</CardTitle>
                    <CardDescription className="text-base sm:text-lg mt-1">
                      Benefits of building your store on Shopify
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {shopifyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Shopify is a powerful e-commerce platform that makes it easy to set up and manage your online store. 
                    With my custom development services, you'll get a store that's tailored to your brand and optimized for sales.
                  </p>
                  <Button asChild>
                    <Link href="/contact">
                      Discuss Your Shopify Store
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
                  Ready to Launch Your Shopify Store?
                </CardTitle>
                <CardDescription className="mt-4 text-base sm:text-lg">
                  Let's discuss your project and create an amazing online store together.
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

