"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo, GoogleLogo } from "@/components/icons";


function LoginForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<"email" | "password" | "code">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Track tracking - example logic
    const pkg = searchParams.get("package");
    if (pkg) {
      console.log("User interested in package:", pkg);
      // Here you would typically send an event to analytics
    }
  }, [searchParams]);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "email" && email) {
      setStep("password");
    } else if (step === "password") {
         console.log("Login with:", { email, password });
         // Perform actual login logic here
    } else if (step === "code") {
        console.log("Verify code:", otp.join(""));
    }
  };

  const handleBack = () => {
      if (step === "code") {
          setStep("password");
      } else {
          setStep("email");
          setPassword("");
      }
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-[400px]">
      <div className="flex flex-col items-center gap-2">
         <div className="bg-primary/10 p-2 rounded-xl">
            <Logo iconOnly className="h-8 w-8" />
         </div>
         <h1 className="text-2xl font-semibold tracking-tight">
            {step === "code" ? "Check your email" : "Sign in"}
         </h1>
      </div>

      <Card className="w-full shadow-sm border-border/60">
        <CardContent className="p-6 sm:p-8 flex flex-col gap-6">
          {step === "email" ? (
              <>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoFocus
                    />
                  </div>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" size="lg" onClick={handleContinue}>
                    Continue
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-muted-foreground/20" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full relative gap-2" size="lg">
                     <GoogleLogo className="w-5 h-5" />
                     Continue with Google
                  </Button>

                   <div className="text-center text-sm text-muted-foreground mt-2">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-blue-500 hover:underline font-medium">
                      Sign up
                    </Link>
                  </div>
              </>
          ) : step === "password" ? (
              <>
                   {/* Step 2: Password */}
                  <div className="space-y-4">
                       <div className="space-y-1">
                          <p className="text-sm font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">{email}</p>
                       </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Password
                            </label>
                            <Link 
                                href="/forgot-password" 
                                className="text-xs text-muted-foreground hover:text-foreground"
                                tabIndex={-1}
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <div className="relative">
                            <input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Your password"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              autoFocus
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3 7 10 7 10-7 10-7"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="6" y1="17" x2="4" y2="19"/><line x1="18" y1="17" x2="20" y2="19"/></svg>
                                )}
                            </button>
                        </div>
                      </div>
                  </div>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" size="lg" onClick={handleContinue}>
                    Sign in
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-muted-foreground/20" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or</span>
                    </div>
                  </div>

                  <Button 
                      variant="outline" 
                      className="w-full gap-2 items-center justify-center p-0" 
                      size="lg"
                      onClick={() => setStep("code")}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      Email sign-in code
                  </Button>
                  
                   <div className="text-center mt-2">
                      <button onClick={handleBack} className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-1 mx-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          Go back
                      </button>
                  </div>
              </>
          ) : (
              <>
                  {/* Step 3: OTP Code */}
                   <div className="space-y-4 text-center">
                       <div className="space-y-2">
                          <p className="text-sm font-medium">
                              Enter the code sent to <br />
                              <span className="font-semibold text-foreground">{email}</span>
                          </p>
                       </div>

                      <div className="flex justify-center gap-2">
                          {otp.map((digit, index) => (
                              <input
                                  key={index}
                                  id={`otp-${index}`}
                                  type="text"
                                  maxLength={1}
                                  className="w-10 h-10 sm:w-12 sm:h-12 border border-input rounded-md text-center text-xl font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:border-input bg-background"
                                  value={digit}
                                  onChange={(e) => handleOtpChange(index, e.target.value)}
                                  onKeyDown={(e) => handleKeyDown(index, e)}
                                  autoFocus={index === 0}
                              />
                          ))}
                      </div>

                      <p className="text-sm text-muted-foreground">
                          Didn&apos;t receive a code? <button className="text-foreground font-medium hover:underline">Resend (25)</button>
                      </p>
                  </div>
                    <div className="text-center mt-2">
                      <button onClick={handleBack} className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-1 mx-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          Go back
                      </button>
                  </div>
              </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background flex flex-col items-center justify-center p-4">
      {/* Suspense boundary for useSearchParams */}
      <Suspense fallback={<div>Loading...</div>}>
         <LoginForm />
      </Suspense>
    </div>
  );
}
