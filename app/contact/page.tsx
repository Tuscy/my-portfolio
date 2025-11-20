import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Header Section */}
        <section className="px-4 py-8 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                Get In Touch
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                Have a project in mind? I'd love to hear from you. Contact me by email or book a call below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact and Booking Section */}
        <section className="px-4 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8">
          <div className="container mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Contact Info</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Contact me here or book a call below
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Section */}
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-muted-foreground shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-sm sm:text-base mb-1">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors break-all"
                    >
                      rhyse.business@gmail.com
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t"></div>

                {/* Booking Section */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Ready to start your project? Book a call to discuss your needs, 
                    timeline, and how I can help bring your vision to life.
                  </p>
                  <Button size="lg" className="w-full min-h-[44px]" asChild>
                    <Link href="https://calendly.com/rhyse-business/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a Call
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Click to open the booking system in a new tab
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
