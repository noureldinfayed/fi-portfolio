'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import ProjectScene from '@/components/sections/ProjectScene'
import { StudioInterlude, StatsInterlude } from '@/components/sections/Interlude'
import FooterSection from '@/components/sections/FooterSection'
import { projects } from '@/data/projects'

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="work">
        <Hero />
        <StudioInterlude />

        {projects.slice(0, 4).map((project, i) => (
          <ProjectScene key={project.id} project={project} isEven={i % 2 === 0} />
        ))}

        <StatsInterlude />

        {projects.slice(4, 8).map((project, i) => (
          <ProjectScene key={project.id} project={project} isEven={i % 2 !== 0} />
        ))}

        {projects.slice(8).map((project, i) => (
          <ProjectScene key={project.id} project={project} isEven={i % 2 === 0} />
        ))}

        <FooterSection />
      </main>
    </>
  )
}
