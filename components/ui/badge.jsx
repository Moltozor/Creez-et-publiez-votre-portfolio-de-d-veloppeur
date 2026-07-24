const VARIANTS = {
  solid: "font-mono text-xs px-3 py-1 rounded-full bg-accent/10 text-accent-soft border border-accent/20",
  overlay: "font-mono text-[11px] px-2 py-0.5 rounded-sm bg-black/50 text-accent-faint",
}

export const Badge = ({ variant = "solid", className = "", children }) => (
  <span className={`${VARIANTS[variant]} ${className}`}>{children}</span>
)
