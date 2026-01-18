import React from "react";
import { Trophy, RefreshCcw, Star, Target } from "lucide-react";

interface QuizResultsProps {
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  totalQuestions,
  correctAnswers,
  onRestart,
}) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage >= 90) return { text: "ممتاز! أداء رائع! 🎉", color: "text-success" };
    if (percentage >= 75) return { text: "جيد جداً! استمر! 🌟", color: "text-primary" };
    if (percentage >= 60) return { text: "جيد! يمكنك التحسن أكثر 💪", color: "text-secondary-foreground" };
    if (percentage >= 40) return { text: "لا بأس، حاول مرة أخرى 📚", color: "text-muted-foreground" };
    return { text: "راجع الدروس وحاول مجدداً 📖", color: "text-destructive" };
  };

  const message = getMessage();

  return (
    <div className="quiz-card p-8 text-center slide-up max-w-xl mx-auto">
      {/* Trophy Icon */}
      <div className="mb-6">
        <div className={`
          inline-flex items-center justify-center w-24 h-24 rounded-full
          ${percentage >= 60 ? 'bg-success/20' : 'bg-muted'}
        `}>
          <Trophy className={`w-12 h-12 ${percentage >= 60 ? 'text-success' : 'text-muted-foreground'}`} />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-foreground mb-4 font-cairo">
        🎊 انتهى الاختبار! 🎊
      </h2>

      {/* Message */}
      <p className={`text-xl font-semibold mb-8 font-cairo ${message.color}`}>
        {message.text}
      </p>

      {/* Score Card */}
      <div className="bg-muted rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground font-inter">{totalQuestions}</p>
            <p className="text-sm text-muted-foreground font-cairo">إجمالي الأسئلة</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-success" />
            </div>
            <p className="text-3xl font-bold text-success font-inter">{correctAnswers}</p>
            <p className="text-sm text-muted-foreground font-cairo">إجابة صحيحة</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-6 h-6 text-secondary-foreground" />
            </div>
            <p className="text-3xl font-bold text-secondary-foreground font-inter">{percentage}%</p>
            <p className="text-sm text-muted-foreground font-cairo">النسبة</p>
          </div>
        </div>
      </div>

      {/* Progress Visualization */}
      <div className="mb-8">
        <div className="h-4 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${
              percentage >= 60 ? 'bg-success' : 'bg-destructive'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Restart Button */}
      <button
        onClick={onRestart}
        className="python-button flex items-center gap-2 mx-auto font-cairo"
      >
        <RefreshCcw className="w-5 h-5" />
        إعادة الاختبار
      </button>
    </div>
  );
};

export default QuizResults;
