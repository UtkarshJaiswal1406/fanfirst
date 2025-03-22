import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function CyberCard({
  children,
  className,
  variant = "default",
  glowing = false,
  hoverable = false,
  ...props
}) {
  const variantClasses = {
    default: "bg-card border-gray-800",
    gradient: "gradient-border bg-card",
    neon: "neon-border bg-card",
  }

  return (
    <Card
      className={cn(variantClasses[variant], glowing && "neon-glow", hoverable && "hover-card", className)}
      {...props}
    >
      {children}
    </Card>
  )
}

