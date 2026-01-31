"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Check, ChevronLeft, Loader2, Building2, Users, Mail, Phone, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSalesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    teamSize: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = "";
    
    switch (name) {
      case "name":
        if (value.length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Please enter a valid work email";
        break;
      case "mobile":
        if (!/^\d{10}$/.test(value)) error = "Mobile number must be exactly 10 digits";
        break;
      case "company":
        if (value.length < 2) error = "Company name is required";
        break;
      case "teamSize":
        if (!value) error = "Please select a team size";
        break;
    }
    
    setErrors(prev => {
      const newErrors = { ...prev };
      if (error) newErrors[name] = error;
      else delete newErrors[name];
      return newErrors;
    });
    
    return !error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Specific handling for mobile number to allow only digits and max 10 chars
    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
      // Live validation for mobile
      if (numericValue.length > 0 && numericValue.length !== 10) {
        setErrors(prev => ({ ...prev, mobile: "Mobile number must be exactly 10 digits" }));
      } else {
        setErrors(prev => {
           const newErrors = { ...prev };
           delete newErrors.mobile;
           return newErrors;
        });
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      // Clear error on change for other fields
      if (errors[name]) {
         setErrors(prev => {
           const newErrors = { ...prev };
           delete newErrors[name];
           return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    const fields = ["name", "email", "mobile", "company", "teamSize"];
    
    fields.forEach(field => {
      if (!validateField(field, formData[field as keyof typeof formData])) {
        isValid = false;
      }
    });

    if (!isValid) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const inputClasses = (error?: string) => cn(
    "flex h-11 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
    error ? "border-red-500 focus-visible:ring-red-500" : "border-input"
  );

  const labelClasses = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block text-foreground/90";

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background pt-20 pb-12">
      <Container className="max-w-xl">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-primary/10 shadow-xl overflow-hidden">
                 <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-primary to-purple-600" />
                <CardHeader className="text-center pt-8 pb-4">
                  <CardTitle className="text-3xl font-bold">Contact Sales</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Get a custom plan tailored for your organization.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8 pt-2">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label htmlFor="name" className={labelClasses}>Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/50" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className={cn(inputClasses(errors.name), "pl-10")}
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      {errors.name && <p className="text-xs text-red-500 font-medium ml-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Work Email */}
                      <div className="space-y-1">
                        <label htmlFor="email" className={labelClasses}>Work Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/50" />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@company.com"
                            className={cn(inputClasses(errors.email), "pl-10")}
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        {errors.email && <p className="text-xs text-red-500 font-medium ml-1">{errors.email}</p>}
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-1">
                        <label htmlFor="mobile" className={labelClasses}>Mobile Number</label>
                         <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/50" />
                          <input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            placeholder="9876543210"
                            maxLength={10}
                            className={cn(inputClasses(errors.mobile), "pl-10")}
                            value={formData.mobile}
                            onChange={handleInputChange}
                          />
                        </div>
                        {errors.mobile && <p className="text-xs text-red-500 font-medium ml-1">{errors.mobile}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                         {/* Company Name */}
                        <div className="space-y-1">
                          <label htmlFor="company" className={labelClasses}>Company Name</label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/50" />
                            <input
                              id="company"
                              name="company"
                              type="text"
                              placeholder="Acme Inc."
                              className={cn(inputClasses(errors.company), "pl-10")}
                              value={formData.company}
                              onChange={handleInputChange}
                            />
                          </div>
                          {errors.company && <p className="text-xs text-red-500 font-medium ml-1">{errors.company}</p>}
                        </div>

                        {/* Team Size */}
                        <div className="space-y-1">
                          <label htmlFor="teamSize" className={labelClasses}>Team Size</label>
                           <div className="relative">
                             <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground/50" />
                             <select
                                id="teamSize"
                                name="teamSize"
                                className={cn(inputClasses(errors.teamSize), "pl-10 appearance-none")}
                                value={formData.teamSize}
                                onChange={handleInputChange}
                              >
                                <option value="" disabled>Select size</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="200+">200+ employees</option>
                              </select>
                              <div className="absolute right-3 top-3 pointer-events-none text-muted-foreground/50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                              </div>
                           </div>
                           {errors.teamSize && <p className="text-xs text-red-500 font-medium ml-1">{errors.teamSize}</p>}
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label htmlFor="message" className={labelClasses}>Message (Optional)</label>
                      <div className="relative">
                         <textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your requirements..."
                            className={cn(inputClasses(), "min-h-[100px] py-3 resize-y pl-3")}
                            value={formData.message}
                            onChange={handleInputChange}
                          />
                      </div>
                    </div>

                    <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 via-primary to-purple-600 hover:opacity-90 transition-opacity h-12 text-base font-semibold shadow-lg group" 
                        disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Request Demo"
                      )}
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground/80 pt-2">
                        By submitting this form, you agree to our <Link href="#" className="underline hover:text-primary">Terms of Service</Link> and <Link href="#" className="underline hover:text-primary">Privacy Policy</Link>.
                    </p>

                  </form>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              className="w-full"
            >
               <Card className="border-green-500/20 shadow-2xl overflow-hidden">
                 <div className="h-2 w-full bg-green-500" />
                 <CardContent className="flex flex-col items-center justify-center p-12 text-center space-y-6">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center"
                    >
                        <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </motion.div>
                    
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-foreground">Request Sent!</h2>
                        <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                            Thanks, <span className="font-semibold text-foreground">{formData.name}</span>! We&apos;ve received your request.
                        </p>
                         <p className="text-muted-foreground">
                            Our sales team will contact you at <span className="font-medium text-foreground">{formData.email}</span> within 24 hours.
                        </p>
                    </div>

                    <Button asChild variant="outline" className="mt-8 border-primary/20 hover:bg-primary/5 text-primary">
                        <Link href="/">Return to Home</Link>
                    </Button>
                 </CardContent>
               </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}
