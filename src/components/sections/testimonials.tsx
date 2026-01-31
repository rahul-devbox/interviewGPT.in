"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/rating-stars";

// 15 Specific Testimonials mapped from User Request
const testimonials = [
  // REVIEW 1
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Now at Google",
    rating: 5.0,
    quote:
      "Got my Google offer in 3 days. The STAR format suggestions were spot on. Never felt this confident in a meeting before.",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  // REVIEW 2
  {
    name: "Arjun Mehta",
    role: "Product Manager",
    company: "Now at Microsoft",
    rating: 5.0,
    quote:
      "Switched from dev to PM after 4 years. This tool helped me articulate product thinking clearly. Worth every rupee.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  // REVIEW 3
  {
    name: "Sneha Krishnan",
    role: "Data Scientist",
    company: "Now at Amazon",
    rating: 4.5,
    quote:
      "Saved me when I blanked on a probability question. Transcription lagged slightly but overall a lifesaver.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  // REVIEW 4
  {
    name: "Vikram Reddy",
    role: "Frontend Developer",
    company: "Now at Flipkart",
    rating: 5.0,
    quote:
      "5 meetings in 2 weeks. Got 3 offers. The coding explanations helped me sound like a senior dev. Insane value.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  // REVIEW 5
  {
    name: "Ananya Patel",
    role: "Associate Consultant",
    company: "Now at Deloitte",
    rating: 5.0,
    quote:
      "First meeting ever. Was terrified. The personalized answers based on my resume got me into Deloitte as a fresher!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  // REVIEW 6
  {
    name: "Rohit Nair",
    role: "DevOps Engineer",
    company: "Now at Razorpay",
    rating: 4.0,
    quote:
      "Solid transcription accuracy. Wish I could customize answer length more. But definitely helped with system design rounds.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  // REVIEW 7
  {
    name: "Kavitha Iyer",
    role: "UX Designer",
    company: "Now at Swiggy",
    rating: 5.0,
    quote:
      "Uploaded my portfolio and it understood my projects contextually. Design meetings finally feel manageable now.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  // REVIEW 8
  {
    name: "Aditya Singh",
    role: "Backend Developer",
    company: "Now at PhonePe",
    rating: 5.0,
    quote:
      "LLD and HLD were my weakness. Now I explain architecture like a staff engineer. Got 80% hike with senior role.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  // REVIEW 9
  {
    name: "Meera Joshi",
    role: "Marketing Manager",
    company: "Now at Zomato",
    rating: 4.5,
    quote:
      "3 year career gap after baby. This helped me frame it positively. HR suggestions were perfect for comeback meetings.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  // REVIEW 10
  {
    name: "Karthik Venkatesh",
    role: "Full Stack Developer",
    company: "Now at Atlassian",
    rating: 5.0,
    quote:
      "5 rounds for Atlassian Australia remote role. Consistent support throughout. Got offer with 3x salary. Life changing.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  // REVIEW 11
  {
    name: "Divya Menon",
    role: "HR Business Partner",
    company: "Now at Infosys",
    rating: 4.5,
    quote:
      "Ironic that I work in HR and used this! Competency questions are tough even for us. AI understood HR terminology well.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  // REVIEW 12
  {
    name: "Rahul Kapoor",
    role: "Cloud Architect",
    company: "Now at AWS",
    rating: 5.0,
    quote:
      "From Tier 3 city startup to AWS. Helped me answer in Amazon's leadership principles format. Bar raiser cleared.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  // REVIEW 13
  {
    name: "Nisha Agarwal",
    role: "Financial Analyst",
    company: "Now at Goldman Sachs",
    rating: 5.0,
    quote:
      "Finance meetings mix math and behavioral. Transcription let me focus on calculations. Got into GS Bangalore.",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  // REVIEW 14
  {
    name: "Siddharth Jain",
    role: "Trainee Engineer",
    company: "Now at TCS",
    rating: 4.0,
    quote:
      "Free trial worked great for campus placement. Basic plan for TCS NQT was enough. Good for freshers like me.",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  // REVIEW 15
  {
    name: "Pooja Rao",
    role: "QA Lead",
    company: "Now at Walmart",
    rating: 5.0,
    quote:
      "8 years in testing but bad at soft skill questions. Got the exact words I needed. Now leading a team of 12.",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
  },
];

// Split into two rows
const row1 = testimonials.slice(0, 8);
const row2 = testimonials.slice(8, 15);

function TestimonialCard({ data }: { data: (typeof testimonials)[0] }) {
  return (
    <Card className="w-[280px] md:w-[400px] shrink-0 h-auto min-h-[240px] md:min-h-[260px] bg-card transition-all border-border/80 hover:border-primary/25 hover:shadow-lg flex flex-col justify-between">
      <CardContent className="h-full flex flex-col p-6">
        {/* Rating */}
        <div className="flex mb-4">
          <RatingStars rating={data.rating} className="text-yellow-500" />
        </div>

        {/* Quote */}
        <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1 italic relative">
          &quot;{data.quote}&quot;
        </blockquote>

        {/* Profile */}
        <div className="mt-5 pt-4 border-t border-border/70 flex items-center gap-3 shrink-0">
          <div className="relative h-10 w-10 rounded-full overflow-hidden border border-border/80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.image} alt={data.name} className="object-cover w-full h-full" />
          </div>
          <div>
            <div className="font-semibold text-sm text-foreground">{data.name}</div>
            <div className="text-xs text-muted-foreground">
              {data.role} • {data.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-background border-y border-border/70 overflow-hidden"
    >
      <Container className="px-0 md:px-0 max-w-none">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <SectionHeader
            title="Loved by Thousands of Job Seekers"
            subtitle="See what our users say about their meeting experience"
          />

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <RatingStars rating={4.8} className="text-yellow-500" />
              <span className="font-bold text-xl">4.8 out of 5</span>
            </div>
            <p className="text-muted-foreground text-sm">Based on 2,500+ reviews</p>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Left/Right Fade Masks - Adjusted for mobile */}
          <div className="absolute left-0 top-0 h-full w-8 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-8 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling content with vertical spacing */}
          <div className="space-y-8">
            {/* Row 1 - Left */}
            <div className="flex w-max animate-loop-scroll hover:paused gap-4 md:gap-6 pl-4 md:pl-6">
              {[...row1, ...row1, ...row1].map((t, i) => (
                <TestimonialCard key={`row1-${i}`} data={t} />
              ))}
            </div>

            {/* Row 2 - Right (Reverse) */}
            <div className="flex w-max animate-loop-scroll-reverse hover:paused gap-4 md:gap-6 pl-4 md:pl-6">
              {[...row2, ...row2, ...row2].map((t, i) => (
                <TestimonialCard key={`row2-${i}`} data={t} />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes loop-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        @keyframes loop-scroll-reverse {
          from {
            transform: translateX(-33.33%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-loop-scroll {
          animation: loop-scroll 120s linear infinite;
        }
        .animate-loop-scroll-reverse {
          animation: loop-scroll-reverse 120s linear infinite;
        }
        .hover\\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
