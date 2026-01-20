import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Crown, Medal, Award, ChevronLeft } from "lucide-react";

interface Score {
  id: string;
  player_name: string;
  score: number;
  total_questions: number;
  percentage: number;
}

const MiniLeaderboard: React.FC = () => {
  const [topScores, setTopScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTopScores = async () => {
    const { data, error } = await supabase
      .from("quiz_scor")
      .select("*")
      .order("percentage", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(3);

    if (!error && data) {
      setTopScores(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTopScores();

    const channel = supabase
      .channel("mini_leaderboard")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "quiz_scores",
        },
        () => fetchTopScores()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 1:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 2:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="bg-card/50 rounded-xl p-4 animate-pulse">
        <div className="h-4 bg-muted rounded w-24 mb-3" />
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card/50 rounded-xl p-4 border border-border/50" dir="rtl">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">المتصدرون</span>
        </div>
        <Link
          to="/leaderboard"
          className="text-xs text-primary hover:underline flex items-center gap-1"
        >
          عرض الكل
          <ChevronLeft className="w-3 h-3" />
        </Link>
      </div>

      {topScores.length === 0 ? (
        <p className="text-xs text-muted-foreground text-center py-2">
          لا توجد نتائج بعد
        </p>
      ) : (
        <div className="space-y-2">
          {topScores.map((score, index) => (
            <div
              key={score.id}
              className="flex items-center gap-2 text-sm"
            >
              {getRankIcon(index)}
              <span className="flex-1 truncate text-foreground">{score.player_name}</span>
              <span className="text-primary font-bold">{score.percentage.toFixed(0)}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MiniLeaderboard;
