"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Mail, Download, Briefcase, Code, GraduationCap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)] w-full">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 w-full px-4"
          >
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Hi, I&apos;m <span className="text-gradient">Vijay Haresh Ragupathy</span>
            </h1>
            <div className="h-10 md:h-12 lg:h-16 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Cybersecurity Specialist",
                  1000,
                  "Mobile App Developer",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground"
              />
            </div>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground">
              A passionate developer with expertise in full-stack development and cybersecurity, ready to deliver
              impactful results from day one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mt-2 md:mt-4"
          >
            <Button asChild size="sm" className="md:text-base md:h-10 md:px-4 md:py-2">
              <Link href="/contact">
                <Mail className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="md:text-base md:h-10 md:px-4 md:py-2">
              <a
                href="https://dc642vukkw.ufs.sh/f/0KuDxNoUojPJQ12LPexlKJw01iaZtXxNE2AG5DCsgLfYeMkj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full"
        >
          <Link href="/experience" className="group">
            <div className="flex flex-col items-center p-4 md:p-6 bg-card rounded-lg border border-border transition-all hover:border-primary hover:shadow-md h-full">
              <Briefcase className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Experience</h3>
              <p className="text-center text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
                Explore my professional journey and work experience
              </p>
              <div className="flex items-center text-primary mt-auto">
                <span className="mr-2 text-sm md:text-base">View Experience</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link href="/projects" className="group">
            <div className="flex flex-col items-center p-4 md:p-6 bg-card rounded-lg border border-border transition-all hover:border-primary hover:shadow-md h-full">
              <Code className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Projects</h3>
              <p className="text-center text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
                Check out my latest projects and technical achievements
              </p>
              <div className="flex items-center text-primary mt-auto">
                <span className="mr-2 text-sm md:text-base">View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link href="/education" className="group sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center p-4 md:p-6 bg-card rounded-lg border border-border transition-all hover:border-primary hover:shadow-md h-full">
              <GraduationCap className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">Education</h3>
              <p className="text-center text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
                Learn about my educational background and qualifications
              </p>
              <div className="flex items-center text-primary mt-auto">
                <span className="mr-2 text-sm md:text-base">View Education</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
