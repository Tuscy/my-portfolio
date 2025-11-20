import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />
        
        {/* Hero Section with Profile Image */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <div className="relative size-24 sm:size-32 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/headPic.png"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                About Me
              </h1>
              <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                I'm a passionate web designer and developer with a focus on creating beautiful, 
                functional, and user-friendly websites. I specialize in modern web design 
                principles and cutting-edge technologies to bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Skills Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Frontend Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                  <CardDescription>Modern frontend technologies and frameworks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>HTML5</Badge>
                    <Badge>CSS3</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Design Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Design</CardTitle>
                  <CardDescription>UI/UX design and tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">Adobe XD</Badge>
                    <Badge variant="secondary">UI/UX Design</Badge>
                    <Badge variant="secondary">Responsive Design</Badge>
                    <Badge variant="secondary">Prototyping</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Backend Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Backend & Tools</CardTitle>
                  <CardDescription>Server-side technologies and development tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">REST APIs</Badge>
                    <Badge variant="outline">Database Design</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Skills</CardTitle>
                  <CardDescription>Other relevant skills and expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">SEO</Badge>
                    <Badge variant="outline">Performance Optimization</Badge>
                    <Badge variant="outline">Accessibility</Badge>
                    <Badge variant="outline">Project Management</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </section>

        <Footer />
      </main>
    </div>
  );
}

