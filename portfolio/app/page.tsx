import Link from "next/link"
import { ArrowRight } from "lucide-react"

import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import Projects from "@/components/projects"
import Interests from "@/components/interests"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Education & Work Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Experience</h2>
          <Timeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Other Interests Section */}
      <section id="interests" className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Other Interests</h2>
          <Interests />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="mb-8 max-w-xl mx-auto text-gray-300">Interested in working together? Feel free to reach out.</p>
          <Link
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition-colors"
          >
            Contact Me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
