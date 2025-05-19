"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server, Smartphone, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

// Skill box component
function SkillBox({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center p-3 md:p-4 bg-card border border-border rounded-md hover:border-primary transition-colors">
      <span className="font-medium text-sm md:text-base text-center">{name}</span>
    </div>
  )
}

// Skill section component
function SkillSection({
  title,
  description,
  icon: Icon,
  skills,
}: {
  title: string
  description: string
  icon: React.ElementType
  skills: string[]
}) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }
  return (
    <motion.div variants={item} className="space-y-4">
      <div className="flex items-center gap-3 md:gap-4">
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
        <div>
          <h2 className="text-base md:text-lg font-bold">{title}</h2>
          <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div
        className={cn(
          "grid gap-3 md:gap-4",
          skills.length > 6 ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" : "grid-cols-2 sm:grid-cols-3",
        )}
      >
        {skills.map((skill) => (
          <SkillBox key={skill} name={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const programmingLanguages = ["Python", "JavaScript", "TypeScript", "C/C++", "Dart", "SQL", "HTML/CSS", "Bash"]

  const frameworks = ["React", "Next.js", "Node.js", "Express.js", "FastAPI", "Flutter", "React Native", "Tailwind CSS"]

  const tools = ["Git", "Docker", "Postman", "Selenium", "JIRA", "Confluence"]

  const platforms = ["GitHub", "Vercel", "Heroku", "AWS (EC2, S3)", "Firebase"]

  const databases = ["MongoDB", "PostgreSQL", "MySQL", "Firebase/Firestore", "GraphQL", "RESTful APIs"]

  const mobileDev = ["Flutter", "React Native", "Firebase Integration", "Mobile UI/UX"]

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full mb-6 md:mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Skills</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          A comprehensive overview of my technical skills and proficiencies.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 md:space-y-10">
        <SkillSection
          title="Programming Languages"
          description="Core languages I work with"
          icon={Terminal}
          skills={programmingLanguages}
        />

        <SkillSection
          title="Frameworks & Libraries"
          description="Technologies I build with"
          icon={Code}
          skills={frameworks}
        />

        <SkillSection
          title="Tools & DevOps"
          description="Development and deployment tools"
          icon={Server}
          skills={tools}
        />

        <SkillSection
          title="Platforms & Services"
          description="Cloud and hosting platforms"
          icon={Globe}
          skills={platforms}
        />

        <SkillSection
          title="Databases & Backend"
          description="Data storage and management"
          icon={Database}
          skills={databases}
        />

        <SkillSection
          title="Mobile Development"
          description="Cross-platform and native mobile development"
          icon={Smartphone}
          skills={mobileDev}
        />
      </motion.div>
    </div>
  )
}
