import React from "react";
import { Question } from "@/data/quizQuestions";
import { Check, X } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedChoice: number | null;
  answered: boolean;
  onSelectChoice: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  selectedChoice,
  answered,
  onSelectChoice,
}) => {
  const getTypeBadge = () => {
    switch (question.type) {
      case "mcq":
        return <span className="badge badge-mcq font-cairo">اختيار من متعدد</span>;
      case "complete":
        return <span className="badge badge-complete font-cairo">أكمل</span>;
      case "definition":
        return <span className="badge badge-definition font-cairo">تعريف</span>;
      case "truefalse":
        return <span className="badge badge-mcq font-cairo">صح / خطأ</span>;
      default:
        return null;
    }
  };

  const getChoiceClass = (index: number) => {
    let classes = "choice-card flex items-start gap-3 p-4";
    
    if (answered) {
      if (index === question.correctAnswer) {
        classes += " correct pulse-success";
      } else if (index === selectedChoice && index !== question.correctAnswer) {
        classes += " wrong pulse-error";
      }
    } else if (selectedChoice === index) {
      classes += " selected";
    }
    
    return classes;
  };

  const getChoiceLabel = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D
  };

  return (
    <div className="quiz-card p-6 mb-6 slide-up">
      {/* Question Header */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-bold font-inter">
          السؤال {questionNumber}
        </span>
        {getTypeBadge()}
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-foreground font-cairo whitespace-pre-wrap leading-relaxed">
          {question.question}
        </p>
        
        {question.code && (
          <pre className="mt-4 p-4 bg-muted rounded-lg overflow-x-auto text-sm font-mono">
            <code>{question.code}</code>
          </pre>
        )}
      </div>

      {/* Answer Choices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.choices.map((choice, index) => (
          choice && (
            <button
              key={index}
              className={getChoiceClass(index)}
              onClick={() => !answered && onSelectChoice(index)}
              disabled={answered}
            >
              <span className={`
                flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm font-inter
                ${answered && index === question.correctAnswer 
                  ? 'bg-success text-success-foreground' 
                  : answered && index === selectedChoice && index !== question.correctAnswer
                    ? 'bg-destructive text-destructive-foreground'
                    : selectedChoice === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                }
              `}>
                {answered && index === question.correctAnswer ? (
                  <Check className="w-5 h-5" />
                ) : answered && index === selectedChoice && index !== question.correctAnswer ? (
                  <X className="w-5 h-5" />
                ) : (
                  getChoiceLabel(index)
                )}
              </span>
              <span className="text-right flex-1 font-cairo">{choice}</span>
            </button>
          )
        ))}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`mt-6 p-4 rounded-lg fade-in ${
          selectedChoice === question.correctAnswer 
            ? 'bg-success/10 border border-success/30' 
            : 'bg-destructive/10 border border-destructive/30'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            {selectedChoice === question.correctAnswer ? (
              <>
                <Check className="w-5 h-5 text-success" />
                <span className="font-bold text-success font-cairo">✓ إجابة صحيحة!</span>
              </>
            ) : (
              <>
                <X className="w-5 h-5 text-destructive" />
                <span className="font-bold text-destructive font-cairo">✗ إجابة خاطئة</span>
              </>
            )}
          </div>
          <p className="text-muted-foreground font-cairo leading-relaxed">
            <span className="font-semibold">الشرح: </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
