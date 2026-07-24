const VARIANTS = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-white/20 text-white hover:border-accent",
}

export const Button = ({ href, variant = "primary", className = "", children }) => (
  <a
    href={href}
    className={`inline-block px-6 py-3 rounded-md text-sm font-medium no-underline transition-colors duration-150 ${VARIANTS[variant]} ${className}`}
  >
    {children}
  </a>
)
