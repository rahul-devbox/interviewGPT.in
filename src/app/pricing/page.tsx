import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { DownloadCTA } from "@/components/sections/download-cta";

export const metadata = {
  title: "Pricing - InterviewGPT",
  description: "Simple, transparent pricing for InterviewCopilot. Start for free.",
};

export default function PricingPage() {
  return (
    <>
      <div className="pt-20">
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </div>
    </>
  );
}
