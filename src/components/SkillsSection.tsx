import { CyberCard, CyberCardContent, CyberCardHeader, CyberCardTitle } from "@/components/ui/cyber-card"
import { Badge } from "@/components/ui/badge"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Tailwind CSS"],
      color: "bg-blue-500/10 text-blue-400 border-blue-400/30"
    },
    {
      title: "Cybersecurity",
      skills: ["Network Security", "Threat Analysis", "Security Best Practices", "Risk Assessment", "Ethical Hacking Basics"],
      color: "bg-red-500/10 text-red-400 border-red-400/30"
    },
    {
      title: "Mathematics",
      skills: ["Calculus", "Statistics", "Discrete Mathematics", "Cryptography Fundamentals", "Problem Solving"],
      color: "bg-green-500/10 text-green-400 border-green-400/30"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "VS Code", "npm/yarn", "Browser DevTools", "Linux Basics"],
      color: "bg-purple-500/10 text-purple-400 border-purple-400/30"
    }
  ]

  const proficiencyLevels = [
    { skill: "HTML/CSS", level: 90 },
    { skill: "JavaScript", level: 85 },
    { skill: "React", level: 80 },
    { skill: "Cybersecurity Concepts", level: 75 },
    { skill: "Mathematics", level: 88 },
    { skill: "Problem Solving", level: 92 }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning web development, cybersecurity, and mathematical analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <CyberCard key={index} className="p-6">
              <CyberCardHeader>
                <CyberCardTitle className="text-xl text-primary mb-4">
                  {category.title}
                </CyberCardTitle>
              </CyberCardHeader>
              <CyberCardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`${category.color} hover:scale-105 transition-transform cursor-pointer`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CyberCardContent>
            </CyberCard>
          ))}
        </div>

        <CyberCard className="p-8">
          <CyberCardHeader>
            <CyberCardTitle className="text-2xl text-primary mb-8 text-center">
              Proficiency Levels
            </CyberCardTitle>
          </CyberCardHeader>
          <CyberCardContent>
            <div className="space-y-6">
              {proficiencyLevels.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{item.skill}</span>
                    <span className="text-primary font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-red-600 to-red-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CyberCardContent>
        </CyberCard>
      </div>
    </section>
  )
}

export default SkillsSection