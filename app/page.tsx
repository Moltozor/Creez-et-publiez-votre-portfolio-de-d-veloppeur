import { ContactLink } from "../components/contact/contact"

export default function Home() {
  return (
    <div className="w-full max-w-full bg-surface-page rounded-2xl overflow-hidden border-b-[0.5px] border-b-border">
      <nav className="flex justify-between items-center bg-surface-page px-5 py-4 border-b-[0.5px] border-b-border sticky top-0 z-50 ">
        <span className="font-(family-name:--font-display) text-sm text-(--color-red-400)">_monportfolio</span>
        <ul className="hidden ">
          <li>Accueil</li>
          <li>À propos</li>
          <li>Projets</li>
          <li>Compétences</li>
          <li>Parcours</li>
          <li>Contact</li>
        </ul>
        <span className="inline-flex items-center gap-1.5 text-xs text-[#3B6D11] bg-[rgba(59,109,17,0.08)] border-[0.5px] border-[rgba(59,109,17,0.2)] px-3 py-1 rounded-full">
          <span className="size-[7px] rounded-full bg-[#5fc47f] shrink-0"></span>
          Disponible
        </span>
      </nav>
      <div className="px-5 pt-12 pb-10">
        <p className="text-body text-gray-600 leading-relaxed max-w-[520px] mb-[36px]">// développeur fullstack</p>
        <h1 className="font-display text-[clamp(28px,5vw,42px)] font-medium text-gray-900 leading-[1.1] tracking-[-0.02em] mb-5">Je construis des<br></br>apps qui durent
          <span className="inline-block w-[3px] h-[0.9em] bg-red-400 ml-1 align-middle animate-[blink_1.1s_step-end_infinite]"></span>
        </h1>
        <p className="text-body text-gray-600 leading-[1.7] max-w-[520px] mb-[36px]">
          Passionné par la qualité du code et l'expérience utilisateur.
          Je conçois des interfaces rapides et des APIs robustes, du prototype à la production.
        </p>
        <div className="flex gap-3 flex-wrap mb-[36px]">
          <button className="font-body text-code font-medium py-[11px] px-[22px] rounded-md bg-red-400 text-white border-none cursor-pointer transition-colors duration-[150ms]">Voir mes projets</button>
          <button className="font-body text-code font-medium py-[11px] px-[22px] rounded-md bg-transparent text-red-400 border border-brand-border cursor-pointer transition-colors duration-[150ms]">Me contacter</button>
        </div>
        <div className="stack-pills flex gap-2 flex-wrap">
          <span>React</span>
          <span>Node.js</span>
          <span>TypeScript</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
        </div>
      </div>
      <div className="px-5 py-10" id="stats">
        <span className="bg-surface-subtle font-(family-name:--font-display) text-[11px] font-medium tracking-[.07em] uppercase text-(--color-red-400) block mb-[10px]">
          // en chiffres
        </span>
      </div>
      <div className="border-t border-t-line [border-top-width:0.5px]" id="projects"></div>
      <div className="px-5 py-10 border-t border-t-line [border-top-width:0.5px]" id="contacts">
        <span className="font-display text-[11px] font-medium tracking-[0.07em] uppercase text-red-400 block mb-2.5">// contact</span>
        <h2 className="text-2xl font-medium text-gray-900 leading-[1.2] tracking-[-0.01em] mb-7">Travaillons ensemble</h2>
        <div className="grid grid-cols-1">
          <ContactLink icon="✉️" label="email" value="hello@monportfolio.dev" />
          <ContactLink icon="🐙" label="GitHub" value="github.com/monprofil" />
          <ContactLink icon="💼" label="LinkedIn" value="linkedin.com/in/monprofil" />
          <ContactLink icon="📄" label="CV" value="Télécharger le PDF" />
        </div>
      </div>
      <footer className="flex px-5 py-4 flex-col gap-2 text-center">
        <span className="font-[var(--font-display)] text-[12px] text-[var(--color-gray-400)]">_monportfolio
          <span>.</span>
           2026
        </span>
        <span className="font-[var(--font-display)] text-[12px] text-[var(--color-gray-400)]"></span>
      </footer>
    </div>
  );
}

/* 
<Link href="" className="contact-item">
            <div></div>
            <div>
              <p>Email</p>
              <p>hello@monportfolio.dev</p>
            </div>
          </Link>
          <Link href="">
            <div></div>
            <div>
              <p>GitHub</p>
              <p>github.com/monprofil</p>
            </div>
          </Link>
          <Link href="">
          <div></div>
          <div>
            <p>LinkedIn</p>
            <p>linkedin.com/in/monprofil</p>
          </div>
          </Link>
          <Link href="">
            <div></div>
            <div>
              <p>CV</p>
              <p>Télécharger le PDF</p>
            </div>
          </Link>
*/
