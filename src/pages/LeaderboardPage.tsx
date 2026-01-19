import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Leaderboard from "@/components/quiz/Leaderboard";

const LeaderboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4" dir="rtl">
      <div className="container max-w-2xl mx-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للاختبار
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">🏆 لوحة المتصدرين</h1>
          <p className="text-muted-foreground">أفضل النتائج في اختبار Python</p>
        </div>

        <Leaderboard showAll />
      </div>
    </div>
  );
};

export default LeaderboardPage;
