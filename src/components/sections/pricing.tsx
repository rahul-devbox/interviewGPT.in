"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"pay-as-you-go" | "monthly">("pay-as-you-go");

  const cardBaseClasses =
    "flex flex-col h-full border border-border/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative bg-card";
  const premiumCardClasses = "border-primary shadow-lg ring-1 ring-primary/20";

  const standardButtonClasses =
    "w-full bg-foreground text-background hover:bg-foreground/90 shadow-md hover:shadow-lg transition-[color,box-shadow]";

  return (
    <section id="pricing" className="py-24 bg-secondary border-y border-border/70">
      <Container>
        <SectionHeader
          title="Simple, Transparent Pricing"
          subtitle="Choose the perfect plan for your interview preparation journey."
        />

        {/* Toggle Switch */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="bg-muted/80 p-1 rounded-full relative flex items-center h-9 sm:h-10 w-fit border border-border/80 shadow-sm">
            {/* Animated slider - uses CSS for width, JS for position */}
            <div
              className={cn(
                "absolute rounded-full h-[calc(100%-8px)] top-1 bottom-1 bg-gradient-to-r from-blue-600 via-primary to-purple-600 shadow-md shadow-primary/20 ring-1 ring-white/25 animate-gradient-x motion-reduce:animate-none",
                "w-[105px] sm:w-32 md:w-40",
                "transition-transform duration-300 ease-out",
                billingCycle === "pay-as-you-go" ? "translate-x-0" : "translate-x-[105px] sm:translate-x-32 md:translate-x-40"
              )}
            />
            <button
              onClick={() => setBillingCycle("pay-as-you-go")}
              className={cn(
                "relative z-10 px-2 sm:px-6 text-[11px] sm:text-sm font-medium transition-colors w-[105px] sm:w-32 md:w-40 text-center whitespace-nowrap",
                billingCycle === "pay-as-you-go" ? "text-white" : "text-muted-foreground"
              )}
            >
              Pay As You Go
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "relative z-10 px-2 sm:px-6 text-[11px] sm:text-sm font-medium transition-colors w-[105px] sm:w-32 md:w-40 text-center whitespace-nowrap",
                billingCycle === "monthly" ? "text-white" : "text-muted-foreground"
              )}
            >
              Monthly
            </button>
          </div>

          <div className="flex items-start md:items-center gap-2 md:gap-3 text-xs sm:text-sm font-medium text-amber-700 bg-amber-50 dark:bg-amber-900/20 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-amber-200 dark:border-amber-900/50 max-w-2xl mx-auto text-left md:text-center shadow-sm">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 md:mt-0" />
            <span className="leading-relaxed md:leading-snug">
              <strong>Session Logic:</strong> Minimum charge is 30 mins per session.{" "}
              <br className="hidden md:block" />
              If you exceed 30 mins, it auto-extends by another 30 mins.
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
          >
            {billingCycle === "pay-as-you-go" ? (
              <>
                {/* Free Trial Plan */}
                <div className="h-full">
                  <Card className={cn(cardBaseClasses)}>
                    <CardHeader>
                      <CardTitle className="text-xl">Free Trial</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">₹0</span>
                        <span className="text-muted-foreground ml-2">/ 7 min</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Test the waters</p>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> 7 Minutes of
                          Interview
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Medium Level
                          Coding
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Behavioral
                          Round
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> No Credit Card
                          Needed
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" size="lg" asChild>
                        <Link href="/login?package=free-trial">Try for Free</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Standard Plan */}
                <div className="h-full">
                  <Card className={cn(cardBaseClasses)}>
                    <CardHeader>
                      <CardTitle className="text-xl">Standard</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">₹999</span>
                        <span className="text-muted-foreground ml-2">/ 1 hour</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Perfect for a full mock round
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> 1 Hour of
                          Interview
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Medium Level
                          Coding
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Behavioral
                          Round
                        </li>

                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Standard 24/7
                          Support
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Credits Never
                          Expire
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={standardButtonClasses} size="lg" asChild>
                        <Link href="/login?package=standard">Get Standard (1 Hour)</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Premium Plan */}
                <div className="h-full">
                  <Card className={cn(cardBaseClasses, premiumCardClasses)}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Badge className="px-3 py-1 bg-gradient-to-r from-blue-600 via-primary to-purple-600 border-0 text-white shadow-lg animate-gradient-x">
                        Most Popular
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">Premium</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">₹1,699</span>
                        <span className="text-muted-foreground ml-2">/ 2 hours</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        For serious candidates targeting top roles
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3 text-sm font-medium">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> 2 Hours of
                          Interview
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> Hard Level DSA
                          Solving
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> Behavioral Round
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> System Design
                        </li>

                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> Priority 24/7
                          Support
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> Credits Never
                          Expire
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 via-primary to-purple-600 text-white shadow-md border-0 relative overflow-hidden group animate-gradient-x"
                        size="lg"
                      >
                        <motion.div
                          className="absolute inset-0 top-0 block h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          initial={{ left: "-100%" }}
                          animate={{ left: "200%" }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "linear",
                            repeatDelay: 0.5,
                          }}
                        />
                        <div className="relative z-10">
                          <Link href="/login?package=premium">Get Premium (2 Hours)</Link>
                        </div>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </>
            ) : (
              <>
                {/* Enterprise */}
                <div className="h-full md:col-start-1">
                  <Card className={cn(cardBaseClasses)}>
                    <CardHeader>
                      <CardTitle className="text-xl">Enterprise</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">Custom</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">For large teams</p>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Custom Bulk
                          Hours
                        </li>

                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Custom
                          Integrations
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Unlimited Team
                          Sessions
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0" /> Annual
                          Contracts
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" size="lg">
                        Contact Sales
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* Unlimited Monthly Plan */}
                <div className="h-full md:col-start-2">
                  <Card
                    className={cn(
                      cardBaseClasses,
                      "border-primary shadow-lg ring-1 ring-primary/20"
                    )}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Badge className="px-3 py-1 bg-gradient-to-r from-blue-600 via-primary to-purple-600 border-0 text-white shadow-lg animate-gradient-x">
                        Unlimited
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">Monthly Unlimited</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">₹9,999</span>
                        <span className="text-muted-foreground ml-2">/ month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Complete freedom. No usage limits.
                      </p>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3 text-sm font-medium">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> Unlimited
                          Interview Time
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> Hard Level DSA
                          Solving
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> Behavioral Round
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> System Design
                        </li>

                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> Priority 24/7
                          Support
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary shrink-0" /> 30 Days Validity
                          from Purchase
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 via-primary to-purple-600 text-white shadow-md border-0 relative overflow-hidden group animate-gradient-x"
                        size="lg"
                      >
                        <motion.div
                          className="absolute inset-0 top-0 block h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                          initial={{ left: "-100%" }}
                          animate={{ left: "200%" }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "linear",
                            repeatDelay: 0.5,
                          }}
                        />
                        <div className="relative z-10">
                          <Link href="/login?package=monthly">Get Monthly Access</Link>
                        </div>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Referral Box */}
        <div className="max-w-3xl mx-auto mt-16 p-6 rounded-lg bg-card border border-border/80 shadow-md text-center">
          <h3 className="font-bold text-lg mb-2">🎁 Refer & Earn</h3>
          <p className="text-muted-foreground text-sm">
            Share your unique <strong>referral code</strong>. For every friend who subscribes,{" "}
            <strong>you both get 30 minutes of premium time</strong>. No limits refer more to stack
            hours and practice for free.
          </p>
        </div>
      </Container>
    </section>
  );
}
