import { cn } from "@/lib/utils";

interface PlatformBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  platform: "mac" | "windows";
  active?: boolean;
}

export function PlatformBadge({
  platform,
  active = true,
  className,
  ...props
}: PlatformBadgeProps) {
  const labels = {
    mac: "macOS",
    windows: "Windows",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-border/80 bg-background/80 text-foreground shadow-sm transition-all hover:bg-background hover:shadow-md hover:scale-105 select-none",
        active ? "opacity-100" : "opacity-50",
        className
      )}
      {...props}
    >
      {platform === "mac" && (
        <svg viewBox="0 0 814 1000" fill="currentColor" className="w-4 h-4 mb-[2px]">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
        </svg>
      )}
      {platform === "windows" && (
        <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
          <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180h244.2V32L203.8 65.7z" />
        </svg>
      )}
      <span>{labels[platform]}</span>
    </div>
  );
}
