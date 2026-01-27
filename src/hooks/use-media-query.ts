import { useState, useEffect } from "react";
import { useMounted } from "@/hooks/use-mounted";

export function useMediaQuery(query: string): boolean {
  const mounted = useMounted();
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch by waiting for mount
    if (!mounted) return;

    const media = window.matchMedia(query);

    // Initial check
    // eslint-disable-next-line
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    media.addEventListener("change", listener);

    // Cleanup
    return () => media.removeEventListener("change", listener);
  }, [query, mounted]);

  return matches;
}
