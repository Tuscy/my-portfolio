import Footer from "@/components/footer";
import Header from "@/components/header";
import PricingSection from "@/components/pricing-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Palette, 
  Smartphone, 
  Globe, 
  Server, 
  ArrowRight,
  CheckCircle2,
  Settings
} from "lucide-react";

const wordpressServices = [
  {
    icon: Palette,
    title: "Custom WordPress Design",
    description: "Beautiful, modern WordPress themes tailored to your brand and business goals.",
    features: ["Custom Theme Development", "UI/UX Optimization", "Brand Identity"]
  },
  {
    icon: Settings,
    title: "WordPress Development",
    description: "Building fast, responsive WordPress sites using best practices and modern plugins.",
    features: ["Custom Plugins", "Theme Customization", "Performance Optimization"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "WordPress websites that look and work perfectly on all devices, from mobile to desktop.",
    features: ["Responsive Layouts", "Touch Optimization", "Cross-Browser Support"]
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    description: "Reliable WordPress hosting solutions with fast performance and 99.9% uptime guarantee.",
    features: ["Fast Loading Times", "SSL Certificates", "Regular Backups"]
  },
];

const hostingFeatures = [
  "Fast and reliable hosting infrastructure",
  "Free SSL certificates for secure connections",
  "Regular automated backups",
  "99.9% uptime guarantee",
  "24/7 monitoring and support",
  "Easy domain management",
  "Scalable hosting plans",
  "CDN integration for global performance"
];

export default function WordPressServices() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Header Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                WordPress Website Services
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                From custom WordPress design to deployment and hosting, I provide comprehensive WordPress 
                development services to bring your online presence to life.
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
                Comprehensive WordPress development solutions for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wordpressServices.map((service) => {
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

        {/* Detailed Pricing Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Pricing Plans
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Choose the perfect plan for your WordPress website
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Essential Plan */}
              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Essential</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">£499</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="mb-6">
                    Perfect for getting started with a professional landing page
                  </CardDescription>
                  <ul className="flex-1 space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Professional Landing Page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Requirements doc</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Mobile & tablet responsive layout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Brand styling (colours, fonts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic on-page SEO (titles & meta)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Fast-loading & performance optimised</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Site launch & deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Contact info/form if wanted</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" size="lg" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Growth Plan */}
              <Card className="flex flex-col hover:shadow-lg transition-shadow border-primary border-2 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Badge variant="default" className="text-xs px-3 py-1">
                    Recommended
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Growth</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">£749</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="mb-6">
                    Everything in Essential, plus more pages and features
                  </CardDescription>
                  <ul className="flex-1 space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Up to 5 Pages (Home, About, Services, contact etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Site planning call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Blog setup & categories (if one of pages)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Google Analytics setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">XML sitemaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Speed & mobile optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">One revision round</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic handover</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="default" size="lg" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Premium</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">£999+</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Price depends on complexity of site)
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="mb-6">
                    Comprehensive solution with advanced features
                  </CardDescription>
                  <ul className="flex-1 space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Up to 10 Pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Full site planning call (including lead funnel)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Advanced contact/lead capture forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Complete Google Search Console setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">SEO enhancements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Up to three revision rounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Site handover / editing walkthrough</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" size="lg" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Add-Ons Section */}
            <div className="mt-12">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Add-Ons</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Additional services available for all plans
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Hosting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Legal setup (privacy policy - complianz plugin)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Sitemap etc (for essential plan)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Site migration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Copywriting</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Additional pages</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Pricing Section */}
        <PricingSection />

        <Separator />

        {/* Hosting Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl">Hosting Offers</CardTitle>
                    <CardDescription className="text-base sm:text-lg mt-1">
                      Reliable hosting solutions included with WordPress development
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {hostingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm sm:text-base text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    When you work with me for WordPress development, hosting can be included as part of the package. 
                    This ensures your website is deployed on reliable infrastructure with ongoing support and maintenance.
                  </p>
                  <Button asChild>
                    <Link href="/contact">
                      Discuss Hosting Options
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
                  Ready to Build Your WordPress Website?
                </CardTitle>
                <CardDescription className="mt-4 text-base sm:text-lg">
                  Let's discuss your project and create something amazing together.
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

