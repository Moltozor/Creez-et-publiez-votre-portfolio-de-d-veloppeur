"use client"

import { useLanguage } from "../language/LanguageProvider"
import { Section, SectionHeading } from "../ui/section"
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"

const SKILLS = [
  { category: "Frontend", items: ["Html", "Css", "Sass", "Javascript", "React", "Redux", "Responsive design"] },
  { category: "Outils", items: ["Git & GitHub", "VS Code", "API REST", "Figma"] },
]

export const Skills = () => {
  const { t } = useLanguage()

  return (
    <Section id="competences">
      <SectionHeading eyebrow={t.skills.eyebrow} heading={t.skills.heading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SKILLS.map((group) => (
          <Card key={group.category}>
            <p className="text-white font-medium mb-3">{t.skills.categories[group.category]}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
