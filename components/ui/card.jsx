export const Card = ({ as: Component = "div", accent = false, className = "", children, ...props }) => (
  <Component
    className={`bg-white/5 border border-white/10 rounded-lg p-5 ${accent ? "border-l-2 border-l-accent" : ""} ${className}`}
    {...props}
  >
    {children}
  </Component>
)
