"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, GraduationCap } from "lucide-react"

export default function EducationPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Education</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          My academic background and qualifications that have shaped my technical expertise.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 w-full">
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle>Master of Information Technology (Cyber Security)</CardTitle>
                    <CardDescription>Queensland University of Technology, Brisbane, Australia</CardDescription>
                  </div>
                </div>
                <Badge className="w-fit">2022 - 2024</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Key Courses:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Network Security</Badge>
                    <Badge variant="outline">Cryptography</Badge>
                    <Badge variant="outline">Web Security</Badge>
                    <Badge variant="outline">Cloud Computing</Badge>
                    <Badge variant="outline">Advanced Programming</Badge>
                    <Badge variant="outline">Mobile Application Development</Badge>
                    <Badge variant="outline">Database Systems</Badge>
                    <Badge variant="outline">IT Project Management</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Achievements:</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Completed industry-partnered projects with real-world applications</li>
                    <li>Specialized in secure application development and vulnerability assessment</li>
                    <li>Participated in cybersecurity competitions and hackathons</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <CardTitle>Bachelor of Engineering in Instrumentation and Control</CardTitle>
                    <CardDescription>PSG College of Technology, Coimbatore, India</CardDescription>
                  </div>
                </div>
                <Badge className="w-fit">2017 - 2021</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Key Courses:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Control Systems</Badge>
                    <Badge variant="outline">Embedded Systems</Badge>
                    <Badge variant="outline">Programming Fundamentals</Badge>
                    <Badge variant="outline">Digital Electronics</Badge>
                    <Badge variant="outline">Microprocessors</Badge>
                    <Badge variant="outline">Industrial Automation</Badge>
                    <Badge variant="outline">Signal Processing</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Achievements:</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Developed a sensor-based monitoring system for industrial applications</li>
                    <li>Participated in technical symposiums and paper presentations</li>
                    <li>Completed internship in industrial automation and control systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <CardTitle>Additional Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-4 border rounded-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="font-medium">Web Development Bootcamp</h3>
                    <Badge variant="outline">2023</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Comprehensive training in modern web development technologies including React, Node.js, and database
                    integration.
                  </p>
                </li>
                <li className="p-4 border rounded-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="font-medium">AWS Cloud Practitioner</h3>
                    <Badge variant="outline">2023</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Foundational knowledge of AWS cloud services, security, and deployment models.
                  </p>
                </li>
                <li className="p-4 border rounded-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="font-medium">Mobile App Development with Flutter</h3>
                    <Badge variant="outline">2022</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Specialized training in cross-platform mobile application development using Flutter and Dart.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
