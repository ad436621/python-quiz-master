import React from "react";
import { ChevronRight, ChevronLeft, SkipForward, Check } from "lucide-react";

interface QuizControlsProps {
  currentQuestion: number;
  totalQuestions: number;
  selectedChoice: number | null;
  answered: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSkip: () => void;
  onSubmit: () => void;
}

const QuizControls: React.FC<QuizControlsProps> = ({
  currentQuestion,
  totalQuestions,
  selectedChoice,
  answered,
  onPrevious,
  onNext,
  onSkip,
  onSubmit,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className={`
          flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-300 font-cairo
          ${currentQuestion === 0 
            ? 'bg-muted text-muted-foreground cursor-not-allowed' 
            : 'bg-card border border-border hover:border-primary hover:shadow-md'
          }
        `}
      >
        <ChevronRight className="w-5 h-5" />
        السابق
      </button>

      {/* Skip Button */}
      <button
        onClick={onSkip}
        disabled={answered}
        className={`
          flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-300 font-cairo
          ${answered 
            ? 'bg-muted text-muted-foreground cursor-not-allowed' 
            : 'bg-secondary text-secondary-foreground hover:opacity-90 hover:shadow-md'
          }
        `}
      >
        <SkipForward className="w-5 h-5" />
        تخطي
      </button>

      {/* Submit / Next Button */}
      {answered ? (
        <button
          onClick={onNext}
          className="python-button flex items-center gap-2 font-cairo"
        >
          {currentQuestion === totalQuestions - 1 ? 'إنهاء الاختبار' : 'التالي'}
          <ChevronLeft className="w-5 h-5" />
        </button>
      ) : (
        <button
          onClick={onSubmit}
          disabled={selectedChoice === null}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-cairo
            ${selectedChoice === null 
              ? 'bg-muted text-muted-foreground cursor-not-allowed' 
              : 'python-button'
            }
          `}
        >
          <Check className="w-5 h-5" />
          تأكيد الإجابة
        </button>
      )}
    </div>
  );
};

export default QuizControls;
