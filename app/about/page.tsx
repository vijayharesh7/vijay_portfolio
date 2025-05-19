"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, BookOpen, Brain, Clock, Lightbulb, Users } from "lucide-react"

export default function AboutPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-base md:text-lg mb-3 md:mb-4">
            As a recent graduate with a Master&apos;s in Information Technology (Cyber Security) from Queensland
            University of Technology, I bring a strong foundation in full-stack development and cybersecurity.
          </p>
          <p className="text-base md:text-lg mb-3 md:mb-4">
            My quick learning abilities, adaptability, and problem-solving mindset allow me to thrive in fast-paced
            environments. I&apos;m eager to leverage my technical expertise, coupled with excellent teamwork and
            collaboration skills, to contribute to innovative projects and drive success.
          </p>
          <p className="text-base md:text-lg">
            Ready to deliver impactful results from day one, I am passionate about creating efficient, secure, and
            user-friendly applications that solve real-world problems.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Brain className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Quick Learner</CardTitle>
                <CardDescription>Rapidly adapts to new technologies and environments</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I pride myself on my ability to quickly grasp new concepts and technologies. This has allowed me to
                seamlessly transition between different tech stacks and contribute effectively to diverse projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Problem Solver</CardTitle>
                <CardDescription>Analytical approach to complex challenges</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I enjoy tackling complex problems and finding elegant solutions. My background in both development and
                cybersecurity gives me a unique perspective when approaching technical challenges.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Team Player</CardTitle>
                <CardDescription>Collaborative and communicative</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I thrive in collaborative environments and believe that the best solutions come from diverse
                perspectives. I value clear communication and am always willing to both teach and learn from my peers.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Efficient</CardTitle>
                <CardDescription>Delivers high-quality work on time</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                I understand the importance of deadlines and efficient workflows. I consistently deliver high-quality
                work within the agreed timeframes, without compromising on quality or attention to detail.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full"
      >
        <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <Award className="h-6 w-6 text-primary mt-0.5" />
            <div>
              <span className="font-medium">Available to start immediately</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Award className="h-6 w-6 text-primary mt-0.5" />
            <div>
              <span className="font-medium">Full working rights in Australia (485 Visa)</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Award className="h-6 w-6 text-primary mt-0.5" />
            <div>
              <span className="font-medium">Willing to relocate for the right opportunity</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <BookOpen className="h-6 w-6 text-primary mt-0.5" />
            <div>
              <span className="font-medium">
                Constantly learning and improving my skills through personal projects and online courses
              </span>
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
