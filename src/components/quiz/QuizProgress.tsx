import React from "react";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  correctAnswers: number;
  answeredQuestions: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  correctAnswers,
  answeredQuestions,
}) => {
  const percentage = answeredQuestions > 0 
    ? Math.round((correctAnswers / answeredQuestions) * 100) 
    : 0;
  
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="quiz-card p-6 mb-6 fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="stat-card">
          <p className="text-2xl font-bold text-primary font-inter">
            {currentQuestion + 1}
          </p>
          <p className="text-sm text-muted-foreground font-cairo">السؤال الحالي</p>
        </div>
        
        <div className="stat-card">
          <p className="text-2xl font-bold text-foreground font-inter">
            {totalQuestions}
          </p>
          <p className="text-sm text-muted-foreground font-cairo">إجمالي الأسئلة</p>
        </div>
        
        <div className="stat-card">
          <p className="text-2xl font-bold text-success font-inter">
            {correctAnswers}
          </p>
          <p className="text-sm text-muted-foreground font-cairo">الإجابات الصحيحة</p>
        </div>
        
        <div className="stat-card">
          <p className="text-2xl font-bold text-secondary-foreground font-inter">
            {percentage}%
          </p>
          <p className="text-sm text-muted-foreground font-cairo">النسبة المئوية</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <p className="text-center text-sm text-muted-foreground mt-2 font-cairo">
        التقدم: {currentQuestion + 1} من {totalQuestions}
      </p>
    </div>
  );
};

export default QuizProgress;
