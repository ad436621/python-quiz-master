import React from "react";

interface QuizHeaderProps {
  totalQuestions: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ totalQuestions }) => {
  return (
    <header className="text-center py-8 px-4">
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="text-5xl snake-icon">🐍</span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground font-cairo">
          اختبار Python التفاعلي
        </h1>
      </div>
      
      <p className="text-lg text-muted-foreground mb-3 font-cairo">
        بنك الأسئلة الشامل - {totalQuestions} سؤال
      </p>
      
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-semibold text-primary font-inter">
          MADE BY ALF: AHMED EID
        </p>
        <p className="text-xs text-muted-foreground font-inter">
          NOTE: ALF = ALFANAN
        </p>
      </div>
    </header>
  );
};

export default QuizHeader;
