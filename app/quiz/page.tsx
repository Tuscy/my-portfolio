"use client";

import { useState, useMemo } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  QUIZ_QUESTIONS,
  MAX_RAW_SCORE,
  SCORE_BANDS,
  RESULTS_AI_TIP,
  CALENDLY_AUDIT_URL,
} from "./data";

const TOTAL_QUESTIONS = QUIZ_QUESTIONS.length;

function getNormalizedScore(answers: Record<string, number>): number {
  const raw = Object.values(answers).reduce((s, w) => s + w, 0);
  return MAX_RAW_SCORE > 0 ? Math.round((raw / MAX_RAW_SCORE) * 100) : 0;
}

function getScoreBand(score: number): keyof typeof SCORE_BANDS {
  if (score < SCORE_BANDS.low.max) return "low";
  if (
    score >= SCORE_BANDS.medium.min &&
    score < (SCORE_BANDS.medium.max ?? 100)
  )
    return "medium";
  return "high";
}

function ScoreDonut({ score }: { score: number }) {
  const percent = Math.min(100, Math.max(0, score));
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percent / 100) * circumference;
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="size-48 -rotate-90"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          className="text-muted/30"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className="text-accent transition-[stroke-dashoffset] duration-500"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
        />
      </svg>
      <span className="absolute text-2xl font-semibold tabular-nums">
        {score}
        <span className="text-muted-foreground font-normal">/100</span>
      </span>
    </div>
  );
}

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [completed, setCompleted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const progressPercent = ((currentIndex + 1) / TOTAL_QUESTIONS) * 100;

  const handleSelect = (weight: number) => {
    if (!currentQuestion) return;
    const newAnswers = { ...answers, [currentQuestion.id]: weight };
    setAnswers(newAnswers);
    if (currentIndex + 1 >= TOTAL_QUESTIONS) {
      setCompleted(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const normalizedScore = useMemo(
    () => (completed ? getNormalizedScore(answers) : 0),
    [completed, answers]
  );
  const band = completed ? getScoreBand(normalizedScore) : "low";
  const bandMessage = SCORE_BANDS[band].message;

  return (
    <div className="flex min-h-screen bg-background font-sans">
      <main className="flex w-full flex-col">
        <Header />

        <section className="px-4 py-8 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8">
          <div className="container mx-auto max-w-2xl">
            <div className="flex flex-col items-center gap-4 text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight">
                Quiz
              </h1>
              <p className="max-w-xl text-base sm:text-lg leading-7 text-foreground/70">
                Do you know what makes a website convert? See how your site stacks up.
              </p>
            </div>

            {!completed ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-foreground/70 mb-2">
                    <span>Question {currentIndex + 1} of {TOTAL_QUESTIONS}</span>
                  </div>
                  <div
                    className="h-2 w-full rounded-full bg-muted overflow-hidden"
                    role="progressbar"
                    aria-valuenow={currentIndex + 1}
                    aria-valuemin={1}
                    aria-valuemax={TOTAL_QUESTIONS}
                  >
                    <div
                      className="h-full bg-accent transition-[width] duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">
                      {currentQuestion.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {currentQuestion.options.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => handleSelect(opt.weight)}
                        className={cn(
                          "w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors",
                          "hover:bg-accent/20 hover:border-accent/50",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          "border-border bg-background"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl sm:text-2xl">
                    How your site scores at converting
                  </CardTitle>
                  <CardDescription className="text-base">
                    Based on your answers, here’s how you’re doing.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6">
                  <ScoreDonut score={normalizedScore} />
                  <p className="text-foreground/90 text-center max-w-md">
                    {bandMessage}
                  </p>
                  <div className="w-full max-w-md rounded-lg border border-border bg-muted/30 px-4 py-3 text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
                      {RESULTS_AI_TIP.label}
                    </p>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {RESULTS_AI_TIP.text}
                    </p>
                  </div>
                  <Button size="lg" className="w-full sm:w-auto min-h-[44px]" asChild>
                    <Link
                      href={CALENDLY_AUDIT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book a free audit now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
