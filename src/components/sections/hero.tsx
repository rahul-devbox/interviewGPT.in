"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { GradientText, GlowEffect } from "@/components/ui/gradient-text";
import { scrollToSection } from "@/lib/utils";
import { useState, useEffect, useCallback, useRef } from "react";

const question = "How should we approach this?";
  
const fullAnswer = `A: Break it into smaller steps. Start with the easy parts first. Test as we go. Adjust if something doesn't work.

• Split the problem
• Start simple
• Check progress
• Fix what's not working`;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function MacAppPreview() {
  const [showApp, setShowApp] = useState(false);
  const [phase, setPhase] = useState(0);
  const [transcriptionText, setTranscriptionText] = useState("");
  const [answerContent, setAnswerContent] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Ref to track the current animation run ID for cancellation
  const demoRunId = useRef(0);

  const runDemo = useCallback(async () => {
    // Generate a unique ID for this execution
    const currentRunId = Date.now();
    demoRunId.current = currentRunId;

    // Helper to check if this run is still valid
    const isActive = () => demoRunId.current === currentRunId;

    // Reset state
    setShowApp(false);
    setPhase(0);
    setTranscriptionText("");
    setAnswerContent("");
    setIsSpeaking(false);

    await delay(2000);
    if (!isActive()) return;

    setShowApp(true);
    await delay(800);
    if (!isActive()) return;

    setIsSpeaking(true);
    await delay(1200);
    if (!isActive()) return;

    setPhase(1);
    for (let i = 0; i <= question.length; i++) {
      if (!isActive()) return;
      setTranscriptionText(question.slice(0, i));
      await delay(45);
    }
    setIsSpeaking(false);
    await delay(600);
    if (!isActive()) return;

    setPhase(2);
    for (let i = 0; i <= fullAnswer.length; i++) {
      if (!isActive()) return;
      setAnswerContent(fullAnswer.slice(0, i));
      await delay(12);
    }

    await delay(4000);
    // Loop ends naturally
  }, []);

  useEffect(() => {
    const timer = setTimeout(runDemo, 0); // Avoid synchronous setState in effect
    const interval = setInterval(runDemo, 22000); // 22s cycle matches animation time approx
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      demoRunId.current = 0; // Cancel any active run on unmount
    };
  }, [runDemo]);

  const renderAnswer = (text: string) => {
    if (!text) return null;
    
    return text.split('\n').map((line, i) => {
      if (line.startsWith('• ')) {
        return (
          <p key={i} className="text-white/80 pl-3 py-0.5 text-[10px] md:text-[11px] text-left">
            {line}
          </p>
        );
      } else if (line.startsWith('A: ')) {
        return (
          <p key={i} className="text-white/90 py-0.5 text-[10px] md:text-[11px] leading-relaxed text-left">
            <span className="text-emerald-400 font-semibold">A:</span> {line.substring(3)}
          </p>
        );
      } else if (line.trim()) {
        return (
          <p key={i} className="text-white/85 py-0.5 text-[10px] md:text-[11px] leading-relaxed text-left">
            {line}
          </p>
        );
      }
      return <div key={i} className="h-1" />;
    });
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Ambient Glow */}
      <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-50" />
      
      {/* Mac Window */}
      <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.5)] border border-white/[0.08]">
        
        {/* macOS Title Bar */}
        <div className="relative flex items-center h-7 md:h-9 px-3 md:px-4 bg-gradient-to-b from-[#3d3d3d] to-[#303030]">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noise)"/%3E%3C/svg%3E")' }} />
          
          {/* Traffic Lights */}
          <div className="flex items-center gap-[6px] md:gap-2 z-10">
            <div className="w-[10px] h-[10px] md:w-3 md:h-3 rounded-full bg-[#ff5f56] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
            <div className="w-[10px] h-[10px] md:w-3 md:h-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
            <div className="w-[10px] h-[10px] md:w-3 md:h-3 rounded-full bg-[#27ca3f] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
          </div>
          
          {/* Window Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] md:text-[11px] text-white/50 font-medium tracking-wide">
              Zoom Meeting
            </span>
          </div>
        </div>

        {/* Meeting Content */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] bg-[#1a1a1a]">
          
          {/* Participants */}
          <div className="absolute inset-0 flex">
            
            {/* Interviewer - Left */}
            <div className="flex-1 relative bg-gradient-to-br from-[#243447] to-[#1a2736] m-0.5 md:m-1 rounded md:rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Top Label - Interviewer */}
              <div className="absolute top-1.5 md:top-2 left-1.5 md:left-2 z-10">
                <div className="bg-black/70 backdrop-blur-sm px-2 md:px-2.5 py-0.5 md:py-1 rounded text-[8px] md:text-[10px] text-white font-medium">
                  <span className="text-emerald-400">●</span> Meeting Organizer
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-14 h-14 md:w-20 lg:w-24 md:h-20 lg:h-24 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center shadow-lg ring-2 ring-white/10">
                    <svg className="w-8 h-8 md:w-12 lg:w-14 md:h-12 lg:h-14 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  
                  {/* Speaking Waves */}
                  <AnimatePresence>
                    {isSpeaking && (
                      <motion.div 
                        className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 flex items-end justify-center gap-[2px] md:gap-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        {[0, 1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            className="w-[3px] md:w-1 bg-green-400 rounded-full origin-bottom"
                            animate={{ 
                              height: [6, 18, 6],
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 0.4 + (i % 3) * 0.1, // Deterministic duration based on index
                              delay: i * 0.08,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* You - Right */}
            <div className="flex-1 relative bg-gradient-to-br from-[#2d3a4a] to-[#1e2836] m-0.5 md:m-1 rounded md:rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Top Label - Candidate */}
              <div className="absolute top-1.5 md:top-2 right-1.5 md:right-2 z-10">
                <div className="bg-black/70 backdrop-blur-sm px-2 md:px-2.5 py-0.5 md:py-1 rounded text-[8px] md:text-[10px] text-white font-medium">
                  <span className="text-blue-400">●</span> You (Candidate)
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 lg:w-24 md:h-20 lg:h-24 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center shadow-lg ring-2 ring-white/10">
                  <svg className="w-8 h-8 md:w-12 lg:w-14 md:h-12 lg:h-14 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* AI Copilot - Center Overlay */}
          <AnimatePresence>
            {showApp && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none p-2 md:p-4"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <div 
                  className="w-[92%] max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[400px] pointer-events-auto relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 32, 45, 0.95) 0%, rgba(20, 22, 35, 0.98) 100%)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    borderRadius: 'clamp(10px, 2vw, 14px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
                  }}
                >
                  {/* Invisible popup - Above app with arrow pointing to edge */}
                  <AnimatePresence>
                    {phase === 2 && (
                      <motion.div 
                        className="absolute -top-5 sm:-top-6 md:-top-7 left-1/2 -translate-x-1/2 z-20"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="flex flex-col items-center">
                          <div 
                            className="px-2 sm:px-2.5 py-0.5 rounded"
                            style={{
                              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                              boxShadow: '0 2px 8px rgba(5, 150, 105, 0.3)',
                            }}
                          >
                            <span className="text-[7px] sm:text-[8px] md:text-[9px] text-white font-medium whitespace-nowrap">
                              Invisible during screen share
                            </span>
                          </div>
                          {/* Arrow pointing to app edge */}
                          <div 
                            style={{
                              width: 0,
                              height: 0,
                              borderLeft: '4px solid transparent',
                              borderRight: '4px solid transparent',
                              borderTop: '4px solid #047857',
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-1.5 sm:p-2 md:p-2.5 lg:p-3 flex flex-col gap-1 sm:gap-1.5 md:gap-2" style={{ height: 'clamp(150px, 32vw, 260px)' }}>
                    
                    {/* Transcription Pill */}
                    <div 
                      className="flex items-center gap-1.5 sm:gap-2 rounded-full px-2 sm:px-2.5 md:px-3 h-6 sm:h-7 md:h-8 shrink-0"
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {/* Status */}
                      <div className="relative shrink-0">
                        <motion.div 
                          className="w-1.5 h-1.5 sm:w-[6px] sm:h-[6px] md:w-2 md:h-2 rounded-full bg-green-400"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0 overflow-hidden">
                        <motion.p 
                          className="text-[9px] sm:text-[10px] md:text-[11px] text-white/90 font-medium text-left"
                          key={phase}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {phase === 0 && (
                            <span className="flex items-center gap-2">
                              Listening...
                              {isSpeaking && (
                                <span className="flex items-center gap-[2px]">
                                  {[0,1,2].map(i => (
                                    <motion.span
                                      key={i}
                                      className="w-[2px] md:w-[3px] h-2 md:h-3 bg-green-400/80 rounded-full"
                                      animate={{ scaleY: [0.4, 1, 0.4] }}
                                      transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.12 }}
                                    />
                                  ))}
                                </span>
                              )}
                            </span>
                          )}
                          {phase >= 1 && <span className="text-left">Q: {transcriptionText}</span>}
                        </motion.p>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button className="w-4 h-4 md:w-5 md:h-5 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
                          <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white/40" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button className="w-4 h-4 md:w-5 md:h-5 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors">
                          <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Answer Area */}
                    <div 
                      className="flex-1 rounded-xl md:rounded-2xl overflow-hidden min-h-0"
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <div 
                        className="h-full p-2.5 md:p-3 overflow-y-auto"
                        style={{ scrollbarWidth: 'none' }}
                      >
                        {phase < 2 ? (
                          <div className="h-full flex flex-col items-center justify-center">
                            <motion.div 
                              className="flex items-center gap-1 mb-2"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            >
                              {[0, 1, 2].map(i => (
                                <div 
                                  key={i} 
                                  className="w-1 h-1 rounded-full bg-white/30"
                                />
                              ))}
                            </motion.div>
                            <p className="text-[9px] md:text-[10px] text-white/40">
                              {phase === 0 ? "Waiting for question..." : "Processing..."}
                            </p>
                          </div>
                        ) : (
                          <div>
                            {renderAnswer(answerContent)}

                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex items-center justify-between shrink-0 px-0.5">
                      {/* Nav */}
                      <div className="flex items-center gap-1">
                        <button className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                          <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <span className="text-[8px] md:text-[9px] text-white/40 font-medium tabular-nums w-6 text-center">1/1</span>
                        <button className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                          <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                      </div>

                      {/* Modes */}
                      <div className="flex p-[2px] rounded-lg bg-black/20 border border-white/[0.04]">
                        {['Analyze', 'AI Chat', 'Answer'].map((mode) => (
                          <button 
                            key={mode}
                            className="h-4 md:h-5 px-2 md:px-2.5 rounded-md text-[8px] md:text-[9px] font-medium transition-all text-white/50 hover:text-white/80 hover:bg-white/5"
                          >
                            {mode}
                          </button>
                        ))}
                      </div>

                      {/* Utils */}
                      <div className="flex items-center gap-1">
                        <button className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                          <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                        </button>
                        <button className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                          <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Zoom Controls */}
          <div className="absolute bottom-0 left-0 right-0 h-8 md:h-11 bg-gradient-to-t from-[#232323] to-[#232323]/95 flex items-center justify-center gap-0.5 md:gap-1 px-2 border-t border-white/5">
            {[
              { icon: 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z', label: 'Mute' },
              { icon: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z', label: 'Video' },
              { icon: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z', label: 'Share' },
            ].map((btn) => (
              <button 
                key={btn.label} 
                className={`group flex flex-col items-center gap-0.5 px-2 md:px-3 py-1 rounded transition-colors ${
                  btn.label === 'Share' ? 'hover:bg-red-500/10' : 'hover:bg-white/10'
                }`}
              >
                <div className="relative">
                  <svg 
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 ${btn.label === 'Share' ? 'text-red-400' : 'text-white/80'}`} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={btn.icon}/>
                  </svg>
                  {btn.label === 'Share' && (
                    <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5 md:h-2 md:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-full w-full bg-red-500"></span>
                    </span>
                  )}
                </div>
                <span className={`text-[7px] md:text-[8px] hidden md:block ${btn.label === 'Share' ? 'text-red-400 font-medium' : 'text-white/50'}`}>
                  {btn.label === 'Share' ? 'Sharing' : btn.label}
                </span>
              </button>
            ))}
            <button className="flex flex-col items-center gap-0.5 px-2.5 md:px-4 py-1 rounded bg-red-600 hover:bg-red-500 transition-colors ml-1">
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/>
              </svg>
              <span className="text-[7px] md:text-[8px] text-white hidden md:block">End</span>
            </button>
          </div>
        </div>
      </div>

      {/* Phase Indicator Pills */}
      <motion.div 
        className="flex justify-center items-center gap-2 md:gap-3 mt-4 md:mt-6 flex-wrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { label: 'Listening', num: 0, icon: '🎧' },
          { label: 'Transcribing', num: 1, icon: '✍️' },
          { label: 'Generating', num: 2, icon: '✨' },
        ].map((item) => (
          <div
            key={item.num}
            className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium transition-all duration-500 ${
              phase === item.num
                ? 'bg-primary/15 text-primary border border-primary/25 shadow-sm shadow-primary/10'
                : 'bg-muted/40 text-muted-foreground/60 border border-transparent'
            }`}
          >
            <span className="text-xs md:text-sm">{item.icon}</span>
            <span>{item.label}</span>
            {phase === item.num && (
              <motion.div
                className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-12 md:pt-36 md:pb-28 overflow-hidden">
      <GlowEffect className="top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-25" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4 md:mb-6 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm">
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2 mr-1.5 md:mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
            </span>
            New v5.1 Released – Faster & Smarter
          </Badge>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 md:mb-6 max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="block">Ace Every Meeting with</span> <GradientText>AI by Your Side</GradientText>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Listens to every question. Gives you personalized answers. Your invisible AI copilot for your next meetings.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="h-10 md:h-12 px-5 md:px-6 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-blue-600 via-primary to-purple-600 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 border-0 relative overflow-hidden group"
            asChild
          >
            <Link href="/download" className="gap-2">
              <motion.div
                className="absolute inset-0 top-0 block h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ left: "-100%" }}
                animate={{ left: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />
              <div className="relative flex items-center justify-center gap-2">
                <Rocket className="w-4 h-4" />
                Download Free
              </div>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-10 md:h-12 px-5 md:px-6 text-sm md:text-base font-medium rounded-full hover:bg-secondary/50 hover:scale-105 active:scale-95 transition-all border-2"
            asChild
          >
            <Link href="#demo" onClick={(e) => scrollToSection(e, "#demo")}>
              <div className="flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </div>
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 md:gap-3 mb-10 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs md:text-sm text-muted-foreground font-medium">Available for</p>
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/download?platform=mac">
              <PlatformBadge
                platform="mac"
                className="cursor-pointer hover:border-primary/50 transition-colors"
              />
            </Link>
            <Link href="/download?platform=windows">
              <PlatformBadge
                platform="windows"
                className="cursor-pointer hover:border-primary/50 transition-colors"
              />
            </Link>
          </div>
        </motion.div>

        {/* App Preview */}
        <motion.div
          className="w-full px-2 md:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <MacAppPreview />
        </motion.div>

        <ScrollIndicator
          className="mt-8 md:mt-12"
          onClick={() => document.getElementById("trust")?.scrollIntoView({ behavior: "smooth" })}
        />
      </Container>
    </section>
  );
}