import React, { useState, useCallback } from "react";
import { quizQuestions, shuffleQuestions, Question } from "@/data/quizQuestions";
import QuizHeader from "./QuizHeader";
import QuizProgress from "./QuizProgress";
import QuestionCard from "./QuestionCard";
import QuizControls from "./QuizControls";
import QuizResults from "./QuizResults";
import QuizFooter from "./QuizFooter";
import PlayerNameModal from "./PlayerNameModal";

const Quiz: React.FC = () => {
  const [playerName, setPlayerName] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>(() => shuffleQuestions(quizQuestions));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [answeredIndices, setAnsweredIndices] = useState<Set<number>>(new Set());

  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectChoice = useCallback((index: number) => {
    if (!answered) {
      setSelectedChoice(index);
    }
  }, [answered]);

  const handleSubmit = useCallback(() => {
    if (selectedChoice === null || answered) return;
    
    setAnswered(true);
    
    // Only count if not already answered this question
    if (!answeredIndices.has(currentQuestionIndex)) {
      setAnsweredQuestions(prev => prev + 1);
      setAnsweredIndices(prev => new Set(prev).add(currentQuestionIndex));
      
      if (selectedChoice === currentQuestion.correctAnswer) {
        setCorrectAnswers(prev => prev + 1);
      }
    }
  }, [selectedChoice, answered, currentQuestion, currentQuestionIndex, answeredIndices]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedChoice(null);
      setAnswered(false);
    } else {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedChoice(null);
      setAnswered(false);
    }
  }, [currentQuestionIndex]);

  const handleSkip = useCallback(() => {
    handleNext();
  }, [handleNext]);

  const handleRestart = useCallback(() => {
    setQuestions(shuffleQuestions(quizQuestions));
    setCurrentQuestionIndex(0);
    setSelectedChoice(null);
    setAnswered(false);
    setCorrectAnswers(0);
    setAnsweredQuestions(0);
    setIsComplete(false);
    setAnsweredIndices(new Set());
  }, []);

  // Show name modal if player hasn't entered their name
  if (!playerName) {
    return <PlayerNameModal onSubmit={setPlayerName} />;
  }

  if (isComplete) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8" dir="rtl">
        <QuizHeader totalQuestions={questions.length} />
        <QuizResults
          totalQuestions={answeredQuestions}
          correctAnswers={correctAnswers}
          playerName={playerName}
          onRestart={handleRestart}
        />
        <QuizFooter />
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8" dir="rtl">
      <QuizHeader totalQuestions={questions.length} />
      
      <QuizProgress
        currentQuestion={currentQuestionIndex}
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        answeredQuestions={answeredQuestions}
      />
      
      <QuestionCard
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        selectedChoice={selectedChoice}
        answered={answered}
        onSelectChoice={handleSelectChoice}
      />
      
      <QuizControls
        currentQuestion={currentQuestionIndex}
        totalQuestions={questions.length}
        selectedChoice={selectedChoice}
        answered={answered}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSkip={handleSkip}
        onSubmit={handleSubmit}
      />
      
      <QuizFooter />
    </div>
  );
};

export default Quiz;
