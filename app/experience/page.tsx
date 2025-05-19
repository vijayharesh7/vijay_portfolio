"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ExperiencePage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Work Experience</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          My professional journey includes experience in full-stack development, mobile app development, and AI
          integration.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 w-full">
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle>Full Stack Developer (Industry IT Project)</CardTitle>
                  <CardDescription>OREFOX | QUT, Brisbane</CardDescription>
                </div>
                <Badge className="w-fit">Jan 2024 - Mar 2024</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Django</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Delivered a real time bushfire monitoring system using Django and PostgreSQL, based on client
                  requirements, within 2 months.
                </li>
                <li>
                  Quickly learned new technologies and built a real-time dashboard for fire activity tracking and
                  alerts, integrating with mapping tools.
                </li>
                <li>Designed and executed test cases to ensure data accuracy and system reliability.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle>Mobile App Developer (WIL Project)</CardTitle>
                  <CardDescription>POCKET DEV | QUT, Brisbane</CardDescription>
                </div>
                <Badge className="w-fit">Apr 2024 - Jun 2024</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Dart</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Firestore</Badge>
                  <Badge variant="outline">JIRA</Badge>
                  <Badge variant="outline">Confluence</Badge>
                  <Badge variant="outline">Git</Badge>
                </div>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Led a team of 3 developers to design and implement a property development ROI calculator app using
                  Flutter and Firebase within a 2-month timeline.
                </li>
                <li>
                  Rapidly adapted to new technologies and developed key features including dynamic user input forms,
                  real-time financial calculations, and data visualisations for cash flow and project profitability.
                </li>
                <li>
                  Utilized JIRA for agile project management, Confluence for documentation, and SharePoint for
                  collaborative file sharing and version control.
                </li>
                <li>Developed and executed test scenarios to validate financial computations and UI responsiveness.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle>AUTOTASK (AI-Powered Task Productivity Tracker)</CardTitle>
                  <CardDescription>QUT, Brisbane</CardDescription>
                </div>
                <Badge className="w-fit">Sep 2024 - Jan 2025</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Firestore</Badge>
                  <Badge variant="outline">OpenAI API</Badge>
                  <Badge variant="outline">Firebase Auth</Badge>
                  <Badge variant="outline">Firebase Analytics</Badge>
                </div>
              </div>
              <ul className="space-y-2 list-disc pl-5">
                <li>Created a mobile app that intelligently schedules tasks based on deadlines and workload.</li>
                <li>Integrated OpenAI's API to provide smart task recommendations and reminders.</li>
                <li>Used Firebase for real-time task synchronization across multiple devices.</li>
                <li>Designed an analytics dashboard for users to track productivity trends over time.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
