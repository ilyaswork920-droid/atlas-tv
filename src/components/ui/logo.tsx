import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoGrad" x1="2" y1="4" x2="38" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="0.5" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logoGrad)" />
      <rect x="1" y="1" width="38" height="38" rx="11" stroke="white" strokeOpacity="0.15" />
      <path
        d="M12 27V13a1 1 0 0 1 1.53-.85l11.2 7a1 1 0 0 1 0 1.7l-11.2 7A1 1 0 0 1 12 27Z"
        fill="white"
      />
      <path
        d="M11 9.5c-2.8 2.6-4.4 6.2-4.4 10s1.6 7.4 4.4 10"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M29 9.5c2.8 2.6 4.4 6.2 4.4 10s-1.6 7.4-4.4 10"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, iconOnly }: { className?: string; iconOnly?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-tight text-cloud">
            My Atlas TV
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-purple-400">
            Streaming
          </span>
        </span>
      )}
    </span>
  );
}
