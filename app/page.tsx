import { LoadingScreen } from "../components/loading-screen/loadingScreen"
import { Nav } from "../components/nav/nav"
import { Hero } from "../components/hero/hero"
import { About } from "../components/about/about"
import { Projects } from "../components/projects/projects"
import { Skills } from "../components/skills/skills"
import { Timeline } from "../components/timeline/timeline"
import { Contact } from "../components/contact/contact"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
      </main>
      <Contact />
    </>
  );
}
