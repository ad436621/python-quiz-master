import React from "react";
import { User } from "lucide-react";
import MiniLeaderboard from "./MiniLeaderboard";

interface QuizHeaderProps {
  totalQuestions: number;
  playerName?: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ totalQuestions, playerName }) => {
  return (
    <header className="py-8 px-4">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Main Header */}
        <div className="flex-1 text-center md:text-right">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-5xl snake-icon">🐍</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground font-cairo">
              اختبار Python التفاعلي
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-3 font-cairo">
            بنك الأسئلة الشامل - {totalQuestions} سؤال
          </p>
          
          {playerName && (
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-3">
              <User className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold">{playerName}</span>
            </div>
          )}
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm font-semibold text-primary font-inter">
              MADE BY ALF: AHMED EID
            </p>
            <p className="text-xs text-muted-foreground font-inter">
              NOTE: ALF = ALFANAN
            </p>
          </div>
        </div>

        {/* Mini Leaderboard */}
        <div className="w-full md:w-64 flex-shrink-0">
          <MiniLeaderboard />
        </div>
      </div>
    </header>
  );
};

export default QuizHeader;
