"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Projects</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          A showcase of my technical projects and applications that demonstrate my skills and expertise.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div variants={item}>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>ROOMEO</CardTitle>
              <CardDescription>Student Accommodation Platform</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">MongoDB</Badge>
              </div>
              <p className="mb-4">
                A web application designed to help students find accommodation by connecting property owners with
                potential tenants.
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Developed a client panel where property owners can list, manage, and update rental properties,
                  providing control over property availability and tenant applications.
                </li>
                <li>
                  Created a customer panel where users can browse available properties, apply for rentals, and track the
                  status of their applications in real time.
                </li>
                <li>
                  Integrated MongoDB for efficient data management, handling property listings, user data, and
                  application processing.
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>STOCK WATCH</CardTitle>
              <CardDescription>Stock Tracking Mobile App</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Alpha Vantage API</Badge>
                <Badge variant="outline">MongoDB</Badge>
              </div>
              <p className="mb-4">
                A mobile application to help users track stock prices and receive the latest news updates related to
                their selected stocks.
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Implemented real-time data fetching with Alpha Vantage API to provide up-to-date stock prices.</li>
                <li>
                  Integrated user authentication and a personalised watchlist feature for tracking preferred stocks.
                </li>
                <li>
                  Utilised MongoDB for efficient data management, demonstrating strong API integration and database
                  handling skills.
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>STROKEY</CardTitle>
              <CardDescription>Stroke Prediction Web App</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Logistic Regression</Badge>
                <Badge variant="outline">HTML/CSS</Badge>
              </div>
              <p className="mb-4">
                A machine learning model designed to predict long-term outcomes in stroke patients using the logistic
                regression algorithm.
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Developed a user-friendly webpage to collect patient data and predict stroke outcomes using the
                  trained model.
                </li>
                <li>
                  Employed logistic regression to implement an accurate prediction model for medical ailment
                  forecasting.
                </li>
                <li>
                  Focused on usability by creating an intuitive interface for both medical professionals and patients.
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>AUTOTASK</CardTitle>
              <CardDescription>AI-Powered Task Productivity Tracker</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Firebase</Badge>
                <Badge variant="outline">OpenAI API</Badge>
              </div>
              <p className="mb-4">A mobile app that intelligently schedules tasks based on deadlines and workload.</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Integrated OpenAI's API to provide smart task recommendations and reminders.</li>
                <li>Used Firebase for real-time task synchronization across multiple devices.</li>
                <li>Designed an analytics dashboard for users to track productivity trends over time.</li>
                <li>Implemented user authentication and data persistence for a seamless user experience.</li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
