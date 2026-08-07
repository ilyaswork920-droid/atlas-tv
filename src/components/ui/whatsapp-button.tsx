"use client";

import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/site-config";

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow,
}: {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <Button
      href={buildWhatsAppUrl(message)}
      external
      variant={variant}
      size={size}
      className={className}
      showArrow={showArrow}
    >
      {children}
    </Button>
  );
}
