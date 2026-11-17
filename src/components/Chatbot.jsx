/**
 * Portfolio chatbot – 2026 Standard
 * 
 * Features:
 * - SSE streaming (token-by-token rendering)
 * - Source attribution badges (AI Agent vs Rule-based)
 * - Conversation persistence (survives close, clears on page refresh)
 * - Expanded context window (20 messages)
 * - Accessibility: Escape, focus trap, ARIA, reduced motion
 * 
 * Config: src/constants/chatbot.js
 * Logic: src/utils/chatbotLogic.js
 */
import { useState, useRef, useEffect, useCallback, lazy, Suspense } from "react";
import { X, Send, Volume2, Square } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { chatbotConfig } from "../constants/chatbot";
import { getChatbotReplyAsync } from "../utils/chatbotLogic";
import { homeData } from "../constants/home";

// Lazy load ReactMarkdown (12KB+) since only used in chatbot
const ReactMarkdown = lazy(() => import("react-markdown").then(m => ({ default: m.default })));

/** Generate a stable id for a new message */
function nextMessageId() {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const initialMessages = [
  { id: nextMessageId(), role: "bot", content: chatbotConfig.welcomeMessage },
];

/** Hook to detect user's reduced motion preference */
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}



export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [slowResponse, setSlowResponse] = useState(false);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const slowTimerRef = useRef(null);
  const dialogRef = useRef(null);
  const streamingMsgIdRef = useRef(null);
  const audioRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Focus trap for modal accessibility
  useEffect(() => {
    if (!open || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const focusableElements = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    dialog.addEventListener('keydown', handleTabKey);
    return () => dialog.removeEventListener('keydown', handleTabKey);
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Conversation persists on close — only resets on page refresh
  const handleClose = useCallback(() => {
    setOpen(false);
    setInput("");
    if (audioRef.current) {
      audioRef.current.pause();
    }
    // Messages are NOT reset — they persist until page refresh
  }, []);

  // --- Audio Management ---
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleStopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPlayingAudioId(null);
  }, []);

  const handlePlayAudio = useCallback(async (msgId, text) => {
    if (playingAudioId === msgId) {
      handleStopAudio();
      return;
    }

    handleStopAudio();

    try {
      setPlayingAudioId(msgId);

      const cleanText = text.replace(/[*#`_~]/g, '').trim();

      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: cleanText })
      });

      if (!response.ok) throw new Error('Failed to fetch audio stream');

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onended = () => {
        setPlayingAudioId(null);
        URL.revokeObjectURL(url);
      };

      audio.onerror = () => {
        console.error('Audio playback error');
        setPlayingAudioId(null);
        URL.revokeObjectURL(url);
      };

      await audio.play();
    } catch (err) {
      console.error('Failed to play audio:', err);
      setPlayingAudioId(null);
    }
  }, [playingAudioId, handleStopAudio]);

  // Smart follow-up suggestions based on last user message
  const getFollowUpSuggestions = useCallback((userText) => {
    const t = userText.toLowerCase();
    if (t.includes('skill') || t.includes('tech') || t.includes('stack')) {
      return ['Show React projects', 'Show Node.js projects', 'Any Full Stack experience?'];
    } else if (t.includes('project') || t.includes('built') || t.includes('dashboard') || t.includes('web app')) {
      return ['What tech stack?', 'Any live demos?', 'Experience at Paultech?'];
    } else if (t.includes('experience') || t.includes('work') || t.includes('job') || t.includes('paultech')) {
      return ['What are his skills?', 'Education background?', 'Open to opportunities?'];
    } else if (t.includes('education') || t.includes('degree') || t.includes('university')) {
      return ['Certifications?', 'Work experience?', 'What are his skills?'];
    } else if (t.includes('contact') || t.includes('hire') || t.includes('email') || t.includes('linkedin')) {
      return ['Download resume?', 'Availability?', 'View projects'];
    } else if (t.includes('certif')) {
      return ['What tools does he use?', 'Any Microsoft certs?', 'Work experience?'];
    }
    return ['Skills', 'Projects', 'Experience', 'Contact'];
  }, []);

  const sendMessage = useCallback(async () => {
    const text = input.trim().slice(0, chatbotConfig.maxInputLength);
    if (!text || loading) return;

    setInput("");
    setSlowResponse(false);
    setSuggestions([]);  // clear old suggestions
    setMessages((prev) => [...prev, { id: nextMessageId(), role: "user", content: text }]);
    setLoading(true);

    // Show 'still thinking' hint after 6s (catches cold starts)
    slowTimerRef.current = setTimeout(() => setSlowResponse(true), 6000);

    // Create a placeholder bot message for streaming
    const botMsgId = nextMessageId();
    streamingMsgIdRef.current = botMsgId;

    try {
      // Use last 20 messages for context (up from 6)
      const conversationHistory = messages.slice(-20).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      }));

      // Add empty bot message that we'll stream into
      setMessages((prev) => [
        ...prev,
        { id: botMsgId, role: "bot", content: "", source: null, isStreaming: true }
      ]);
      setStreaming(true);

      const { reply, source } = await getChatbotReplyAsync(
        text,
        conversationHistory,
        // onToken callback — progressively update the bot message
        (token, fullReplacement) => {
          clearTimeout(slowTimerRef.current);
          setSlowResponse(false);

          setMessages((prev) =>
            prev.map((msg) => {
              if (msg.id !== botMsgId) return msg;
              return {
                ...msg,
                // If fullReplacement is provided (guardrail), replace entirely
                content: fullReplacement || (msg.content + token),
              };
            })
          );
        }
      );

      // Finalize the message with source badge
      setMessages((prev) =>
        prev.map((msg) => {
          if (msg.id !== botMsgId) return msg;
          return {
            ...msg,
            content: reply || msg.content,
            source,
            isStreaming: false,
          };
        })
      );

      // Show contextual follow-up suggestions
      setSuggestions(getFollowUpSuggestions(text));
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => {
        // If we already have the streaming placeholder, update it
        const hasPlaceholder = prev.some(m => m.id === botMsgId);
        if (hasPlaceholder) {
          return prev.map(msg => {
            if (msg.id !== botMsgId) return msg;
            return { ...msg, content: "Something went wrong. Please try again.", isStreaming: false, source: 'error' };
          });
        }
        return [...prev, { id: nextMessageId(), role: "bot", content: "Something went wrong. Please try again.", source: 'error' }];
      });
    } finally {
      clearTimeout(slowTimerRef.current);
      setSlowResponse(false);
      setLoading(false);
      setStreaming(false);
      streamingMsgIdRef.current = null;
    }
  }, [input, loading, messages, getFollowUpSuggestions]);

  const handleSuggestionClick = useCallback(async (q) => {
    if (loading) return;

    const runLogic = async () => {
      setSuggestions([]);  // clear suggestions immediately
      setMessages((prev) => [...prev, { id: nextMessageId(), role: "user", content: q }]);
      setLoading(true);

      const botMsgId = nextMessageId();
      streamingMsgIdRef.current = botMsgId;

      try {
        const conversationHistory = messages.slice(-20).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content,
        }));

        setMessages((prev) => [
          ...prev,
          { id: botMsgId, role: "bot", content: "", source: null, isStreaming: true }
        ]);
        setStreaming(true);

        const { reply, source } = await getChatbotReplyAsync(
          q,
          conversationHistory,
          (token, fullReplacement) => {
            setMessages((prev) =>
              prev.map((msg) => {
                if (msg.id !== botMsgId) return msg;
                return {
                  ...msg,
                  content: fullReplacement || (msg.content + token),
                };
              })
            );
          }
        );

        setMessages((prev) =>
          prev.map((msg) => {
            if (msg.id !== botMsgId) return msg;
            return { ...msg, content: reply || msg.content, source, isStreaming: false };
          })
        );

        // Show contextual follow-up suggestions
        setSuggestions(getFollowUpSuggestions(q));
      } catch (error) {
        console.error('Chat error:', error);
        setMessages((prev) => {
          const hasPlaceholder = prev.some(m => m.id === botMsgId);
          if (hasPlaceholder) {
            return prev.map(msg => {
              if (msg.id !== botMsgId) return msg;
              return { ...msg, content: "Something went wrong. Please try again.", isStreaming: false, source: 'error' };
            });
          }
          return [...prev, { id: nextMessageId(), role: "bot", content: "Something went wrong. Please try again.", source: 'error' }];
        });
      } finally {
        setLoading(false);
        setStreaming(false);
        streamingMsgIdRef.current = null;
      }
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(runLogic, { timeout: 100 });
    } else {
      setTimeout(runLogic, 0);
    }
  }, [loading, messages, getFollowUpSuggestions]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  return (
    <>
      <AnimatePresence>
        {/* ── Chat Panel (Light Mode Glassmorphism) ── */}
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
            className={`fixed bottom-24 right-6 z-[100] flex flex-col w-[min(380px,calc(100vw-3rem))] h-[min(540px,72vh)] rounded-[1.5rem] bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={homeData.image.src}
                    alt="Ganesh"
                    className="w-10 h-10 rounded-xl object-cover shadow-sm border border-slate-700"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h3 id="chatbot-title" className="font-bold text-[15px] text-white leading-tight">
                    {chatbotConfig.botName}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400">AI Assistant</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="p-2 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white transition-colors focus:outline-none"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div
              className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-950/40"
              aria-live="polite"
              aria-atomic="false"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex flex-col max-w-[85%]">
                    <div
                      className={`rounded-[1.25rem] px-4 py-3 text-[15px] shadow-sm ${msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-sm shadow-[0_4px_14px_rgba(37,99,235,0.2)]"
                        : "bg-slate-800/90 text-slate-200 rounded-bl-sm border border-slate-700/60 leading-relaxed font-normal"
                        }`}
                    >
                      {msg.role === "bot" ? (
                        <div className="prose prose-sm max-w-none break-words [&_a]:break-all text-slate-200 font-normal leading-[1.6] [&_a]:text-blue-400 [&_a]:underline [&_strong]:text-white [&_strong]:font-bold">
                          {msg.content ? (
                            <Suspense fallback={<span>{msg.content}</span>}>
                              <ReactMarkdown>{msg.content}</ReactMarkdown>
                            </Suspense>
                          ) : (
                            /* Empty streaming placeholder — show cursor blink */
                            <span className="inline-block w-1.5 h-4 bg-blue-500 rounded-sm animate-pulse" />
                          )}
                          {/* Streaming cursor */}
                          {msg.isStreaming && msg.content && (
                            <span className="inline-block w-1.5 h-4 bg-blue-500 rounded-sm animate-pulse ms-0.5 align-middle" />
                          )}
                        </div>
                      ) : (
                        <span>{msg.content}</span>
                      )}
                    </div>
                    {/* TTS control */}
                    {msg.role === "bot" && !msg.isStreaming && msg.content && msg.content !== "Something went wrong. Please try again." && (
                      <button
                        type="button"
                        onClick={() => playingAudioId === msg.id ? handleStopAudio() : handlePlayAudio(msg.id, msg.content)}
                        className={`p-1 mt-2 rounded-md border text-slate-400 hover:text-white transition-colors focus:outline-none ${playingAudioId === msg.id ? 'bg-red-950 text-red-400 border-red-800 hover:text-red-300' : 'bg-slate-800 border-slate-700 hover:bg-slate-700'}`}
                        title={playingAudioId === msg.id ? "Stop reading" : "Read aloud"}
                        aria-label={playingAudioId === msg.id ? "Stop reading" : "Read aloud"}
                      >
                        {playingAudioId === msg.id ? <Square className="w-3.5 h-3.5 fill-current" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {loading && !streaming && (
                <div className="flex flex-col items-start gap-1">
                  <div className="bg-slate-800 rounded-[1.25rem] rounded-bl-sm px-5 py-3.5 border border-slate-700 shadow-sm">
                    <span className="inline-flex gap-1.5 align-middle">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]" />
                    </span>
                  </div>
                  {slowResponse && (
                    <p className="text-xs text-slate-400 font-medium ps-1 animate-pulse">
                      Thinking... ☕
                    </p>
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {!loading && suggestions.length > 0 && (
              <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-950">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-2">Ask next</p>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {suggestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => handleSuggestionClick(q)}
                      className="flex-shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 text-slate-300 bg-slate-900 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Initial suggestions */}
            {!loading && suggestions.length === 0 && messages.length <= 1 && (
              <div className="px-4 py-2.5 border-t border-slate-800 bg-slate-950">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-2">Get started</p>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {["Experience", "Projects", "Skills", "Contact"].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => handleSuggestionClick(q)}
                      className="flex-shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 text-slate-300 bg-slate-900 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-slate-800 bg-slate-950">
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my work..."
                  maxLength={chatbotConfig.maxInputLength}
                  className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-[14px] font-normal text-white placeholder-slate-500 border border-slate-800 focus:border-blue-500 focus:outline-none transition-all"
                  disabled={loading}
                  aria-label="Chat message"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-white hover:bg-blue-500 disabled:opacity-40 disabled:pointer-events-none transition-all focus:outline-none"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Toggle Button (Dark Mode) ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            type="button"
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-20 z-[99] flex items-center gap-2.5 p-1.5 pe-5 rounded-full bg-slate-900 text-white border border-slate-800 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:border-slate-700 transition-colors duration-200 focus:outline-none"
            aria-label="Open chat assistant"
            aria-haspopup="dialog"
          >
            {/* Profile ring */}
            <div className="relative">
              <img
                src={homeData.image.src}
                alt="Ganesh"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-900 rounded-full"></span>
            </div>
            <span className="text-xs font-semibold text-slate-200">Chat with Ganesh AI</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;
