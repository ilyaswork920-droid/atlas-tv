import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Atlas TV"
      width={1536}
      height={1024}
      priority
      className={cn("h-20 w-auto self-start object-contain", className)}
    />
  );
}
