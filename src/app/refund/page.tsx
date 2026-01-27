"use client";

import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RefundPolicy() {
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
              Refund Policy
            </h1>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Last Updated: January 2026
            </p>
          </div>

          <div className="space-y-10 text-foreground/80 leading-relaxed">
            {/* Core Policy Alert */}
            <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">
                Strict No-Refund Policy
              </h2>
              <p className="text-red-900/80 dark:text-red-300/80 font-medium">
                All purchases are final. When you purchase a plan, you receive credits that do not
                expire.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Why No Refunds?</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-muted/40 rounded-lg">
                  <strong>Costly AI infrastructure:</strong> Our service incurs real-time costs from
                  AI providers (OpenAI/Anthropic) as soon as you use it.
                </div>
                <div className="p-4 bg-muted/40 rounded-lg">
                  <strong>Free Trial Available:</strong> Everyone gets a 7-minute free trial to
                  confirm the app works for them before paying.
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Exceptions & Compensation</h2>
              <p className="mb-3">
                While we do not offer monetary refunds, we provide{" "}
                <strong>credit compensation</strong> for genuine technical failures:
              </p>

              <div className="space-y-3">
                <div className="flex gap-4 p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="text-2xl">🚨</div>
                  <div>
                    <h3 className="font-semibold text-foreground">Server Faults</h3>
                    <p className="text-sm text-muted-foreground">
                      If our servers were down during your interview.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="text-2xl">💳</div>
                  <div>
                    <h3 className="font-semibold text-foreground">Billing Errors</h3>
                    <p className="text-sm text-muted-foreground">
                      Duplicate charges or incorrect amounts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">What We Do Not Cover</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-border"></span> Disliking specific
                  AI answers
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-border"></span> Not getting the job
                  offer
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-border"></span> &quot;Change of
                  mind&quot; after buying
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-border"></span> Your own internet
                  connection issues
                </li>
              </ul>
            </section>

            <Separator />

            <section className="bg-secondary/20 p-6 rounded-xl">
              <h2 className="text-lg font-bold text-foreground mb-3">Consumer Rights</h2>
              <p className="text-sm text-muted-foreground mb-4">
                This policy is compliant with the Consumer Protection Act, 2019 (India) and the IT
                Act, 2000. For unresolved disputes, you may approach the appropriate consumer forum.
              </p>
              <h3 className="text-sm font-semibold mb-1">Support Contact</h3>
              <p className="text-sm">
                Email for claims:{" "}
                <span className="text-primary font-medium">support@interviewgpt.in</span>
                <br />
                Response time: Within 48 hours
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
