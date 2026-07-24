export const Section = ({ id, as: Component = "section", className = "", children }) => (
  <Component id={id} className={`px-5 py-16 sm:px-10 sm:py-24 border-t border-white/10 ${className}`}>
    {children}
  </Component>
)

export const SectionHeading = ({ eyebrow, heading }) => (
  <>
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">{eyebrow}</p>
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{heading}</h2>
  </>
)
