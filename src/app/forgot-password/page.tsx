"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/icons";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add password reset logic here
    console.log("Reset password for:", email);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2">
           <div className="bg-primary/10 p-2 rounded-xl">
              <Logo iconOnly className="h-8 w-8" />
           </div>
           <h1 className="text-2xl font-semibold tracking-tight">Reset your password</h1>
        </div>

        <Card className="w-full max-w-[400px] shadow-sm border-border/60">
          <CardContent className="p-6 sm:p-8 flex flex-col gap-6">
            {!submitted ? (
              <>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                </div>

                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white" 
                  size="lg" 
                  onClick={handleSubmit}
                >
                  Send reset instructions
                </Button>
              </>
            ) : (
               <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Check your email</h3>
                    <p className="text-sm text-muted-foreground">
                      We have sent a password reset link to<br/>
                      <span className="font-medium text-foreground">{email}</span>
                    </p>
                  </div>
                  <Button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-4" 
                    size="lg"
                    asChild
                  >
                     <a href="mailto:">Open email app</a>
                  </Button>
                   <p className="text-sm text-muted-foreground pt-2">
                        Didn&apos;t receive the email? <button onClick={() => setSubmitted(false)} className="text-blue-500 font-medium hover:underline">Click to resend</button>
                    </p>
               </div>
            )}
          </CardContent>
        </Card>

        {/* Back to sign-in */}
        <div className="text-center">
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-1 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Back to sign-in
            </Link>
        </div>

      </div>
    </div>
  );
}
