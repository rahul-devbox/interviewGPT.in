"use client";

import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { FileText, Shield, CreditCard, Ban, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Last Updated: January 2026
            </p>
          </div>

          <div className="space-y-8 text-foreground/80 leading-relaxed">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 text-sm">
              <p className="m-0 font-medium">
                Welcome to <strong>InterviewCopilot</strong>. By downloading, installing, or using
                InterviewGPT.in and our desktop applications, you officially agree to be bound by
                these terms.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Service Description</h2>
                </div>
                <p className="mb-3">InterviewCopilot is a desktop application providing:</p>
                <ul className="grid sm:grid-cols-3 gap-3">
                  <li className="bg-secondary/30 p-3 rounded text-center text-sm font-medium">
                    Real-time Transcription
                  </li>
                  <li className="bg-secondary/30 p-3 rounded text-center text-sm font-medium">
                    AI Answer Suggestions
                  </li>
                  <li className="bg-secondary/30 p-3 rounded text-center text-sm font-medium">
                    Resume Personalization
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">User Accounts</h2>
                </div>
                <ul className="space-y-2 list-disc pl-5 marker:text-muted-foreground">
                  <li>You must be at least 18 years old.</li>
                  <li>You must provide accurate registration information.</li>
                  <li>
                    <strong>One account per person.</strong> Sharing accounts is strictly
                    prohibited.
                  </li>
                  <li>You are responsible for securing your own password.</li>
                </ul>
              </section>

              <Separator />

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Subscription & Credits</h2>
                </div>
                <div className="bg-card border rounded-xl overflow-hidden">
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x">
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">Free Trial</h3>
                      <p className="text-sm text-muted-foreground">
                        7 minutes one-time use per account to test capabilities.
                      </p>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">Paid Credits</h3>
                      <p className="text-sm text-muted-foreground">
                        Time-based credits that <strong>never expire</strong>. Use them anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Separator />

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                    <Ban className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Acceptable Use</h2>
                </div>
                <p className="mb-3 font-medium">You agree NOT to:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Use the service for any illegal purposes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Attempt to reverse-engineer or hack the application.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Resell or redistribute your account access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">×</span>
                    <span>Use automated bots or scripts.</span>
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Disclaimer</h2>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-4 rounded-lg text-sm text-amber-900 dark:text-amber-200">
                  <p className="mb-2">
                    <strong>AI Assistance Only:</strong> We provide AI-generated suggestions as
                    assistance. We do not guarantee job offers or interview success.
                  </p>
                  <p>
                    AI responses may not always be accurate. You are responsible for how you use
                    these suggestions.
                  </p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">Other Provisions</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground">Governing Law</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      These terms are governed by the laws of India. Disputes are subject to the
                      exclusive jurisdiction of Bangalore, Karnataka courts.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">Bug Reporting</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Reporting significant, unknown bugs may earn you up to 1 hour of free credits
                      at our discretion.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">Termination</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We may suspend accounts that violate these terms or engage in abuse.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <Separator />

            <div className="text-center pt-4">
              <p className="font-semibold">Questions?</p>
              <a href="mailto:support@interviewgpt.in" className="text-primary hover:underline">
                support@interviewgpt.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          interviewgpt.in &copy; 2026
        </div>
      </Container>
    </div>
  );
}
