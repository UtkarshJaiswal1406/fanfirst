import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CyberButton({ children, className, variant = "cyan", size = "default", ...props }) {
  const variantClasses = {
    cyan: "neon-cyan",
    blue: "neon-blue",
    purple: "neon-purple",
    pink: "neon-pink",
  }

  const sizeClasses = {
    default: "px-4 py-2",
    sm: "px-3 py-1 text-sm",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <Button
      className={cn(
        "cybr-btn neon-glow relative overflow-hidden",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

