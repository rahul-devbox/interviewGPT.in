import { MainHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Hero,
  TrustBar,
  HowItWorks,
  Features,
  VideoDemo,
  Pricing,
  Testimonials,
  FAQ,
  DownloadCTA,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Features />
        <VideoDemo />
        <Pricing />
        <Testimonials />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
