"use client";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does InterviewCopilot work?",
    answer:
      "It runs on your desktop during calls. Listens to questions, shows live transcription, and gives you AI-powered answer suggestions instantly. You read, adapt, and respond naturally.",
  },
  {
    question: "Is it visible during screen sharing?",
    answer:
      "No. The app is completely invisible during screen sharing. It remains hidden to the interviewer while being visible only to you.",
  },
  {
    question: "Is it ethical to use during real interviews?",
    answer:
      "We built this as a confidence and preparation tool. It helps you articulate your real skills better under pressure - like having smart notes. You still need genuine knowledge. We don't promote faking abilities you don't have.",
  },
  {
    question: "Does it work with Zoom, Meet, and Teams?",
    answer:
      "Yes. Works with Zoom, Google Meet, Microsoft Teams, Webex, and any app that plays audio. Captures system audio directly - no special setup needed.",
  },
  {
    question: "Is my audio or conversation stored anywhere?",
    answer:
      "No. Everything processes in real-time and gets discarded immediately. We don't record or store your calls. Your interviews stay private.",
  },
  {
    question: "What are the system requirements?",
    answer: "Mac 10.15+ or Windows 10+. Minimum 4GB RAM. Stable internet. That's it.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "Try 7 minutes free before paying. Purchased credits never expire. Face genuine issues? Email support@interviewgpt.in - we'll fix it or compensate.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary border-y border-border/70">
      <Container className="max-w-3xl">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about InterviewGPT"
        />

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
