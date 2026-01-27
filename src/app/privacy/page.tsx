"use client";

import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Back to Home
        </Link>
        <div className="bg-card rounded-2xl shadow-lg border border-border/80 p-8 md:p-12">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Last Updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <div className="p-4 bg-muted/50 rounded-lg text-sm border border-muted-foreground/10">
              <p className="m-0">
                <strong>InterviewCopilot</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                operates the InterviewGPT.in website and InterviewCopilot desktop application. This
                policy explains how we collect, use, and protect your information.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="h-6 w-1 bg-primary rounded-full block"></span>
                Information We Collect
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Account Information</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm marker:text-muted-foreground">
                    <li>Name and email address</li>
                    <li>Password (encrypted)</li>
                    <li>
                      Payment information (processed securely via third-party payment gateways)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Usage Information</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm marker:text-muted-foreground">
                    <li>Interview session duration</li>
                    <li>Feature usage statistics</li>
                    <li>App version and operating system</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-400 mb-2 text-sm uppercase tracking-wide">
                  We Do NOT Collect
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/90 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span> Audio recordings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span> Transcription content
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span> Screen recordings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✕</span> Meeting content
                  </li>
                </ul>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <ul className="space-y-2 list-disc pl-5 marker:text-primary">
                <li>To provide and maintain our service</li>
                <li>To process payments and manage subscriptions</li>
                <li>To send important updates about your account</li>
                <li>To improve our product and user experience</li>
                <li>To respond to support requests</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Data Storage & Security</h2>
              <div className="bg-secondary rounded-lg p-6 space-y-3 border">
                <p className="flex items-start gap-3">
                  <span className="text-lg">🔒</span>
                  <span>Your data is stored on secure servers with strict access controls.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-lg">🛡️</span>
                  <span>All transmissions are encrypted using industrial-grade SSL/TLS.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-lg">🔑</span>
                  <span>Passwords are hashed and never stored in plain text.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-lg">💳</span>
                  <span>Payment processing is handled by PCI-compliant third parties.</span>
                </p>
                <p className="font-medium mt-2 text-sm">
                  We do not sell your personal data to anyone.
                </p>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p className="mb-4">We use reliable third-party services to power our application:</p>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 border rounded bg-card">
                  <div className="font-semibold text-sm">Payments</div>
                  <div className="text-xs text-muted-foreground">Razorpay / Stripe</div>
                </div>
                <div className="p-3 border rounded bg-card">
                  <div className="font-semibold text-sm">AI Engine</div>
                  <div className="text-xs text-muted-foreground">OpenAI / Anthropic</div>
                </div>
                <div className="p-3 border rounded bg-card">
                  <div className="font-semibold text-sm">Analytics</div>
                  <div className="text-xs text-muted-foreground">Usage Metrics</div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Your Rights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Access your personal data",
                  "Correct inaccurate information",
                  "Delete your account & data",
                  "Export your data",
                  "Opt-out of marketing emails",
                ].map((right, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded bg-secondary/30">
                    <span className="h-2 w-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{right}</span>
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            <div className="grid sm:grid-cols-2 gap-8">
              <section>
                <h2 className="text-lg font-bold text-foreground mb-3">Data Retention</h2>
                <ul className="text-sm space-y-2 list-disc pl-4 text-muted-foreground">
                  <li>Account data retained while active</li>
                  <li>Deleted within 30 days of request</li>
                  <li>Tax records retained as per law</li>
                </ul>
              </section>
              <section>
                <h2 className="text-lg font-bold text-foreground mb-3">Governing Law</h2>
                <p className="text-sm text-muted-foreground">
                  This policy is governed by the laws of India, including the Information Technology
                  Act, 2000 and applicable data protection regulations.
                </p>
              </section>
            </div>

            <Separator />

            <section className="bg-primary/5 rounded-xl p-6 text-center">
              <h2 className="text-lg font-bold text-foreground mb-2">Have Questions?</h2>
              <p className="text-muted-foreground mb-4 text-sm">
                For any privacy-related queries, reach out to our team.
              </p>
              <a
                href="mailto:privacy@interviewgpt.in"
                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                privacy@interviewgpt.in
              </a>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t flex justify-between items-center text-xs text-muted-foreground">
            <span>© 2026 InterviewCopilot</span>
            <span>InterviewGPT.in</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
