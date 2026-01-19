import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Medal, Award, Crown } from "lucide-react";

interface Score {
  id: string;
  player_name: string;
  score: number;
  total_questions: number;
  percentage: number;
  created_at: string;
}

interface LeaderboardProps {
  currentPlayerName?: string;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ currentPlayerName }) => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchScores = async () => {
    const { data, error } = await supabase
      .from("quiz_scores")
      .select("*")
      .order("percentage", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(10);

    if (!error && data) {
      setScores(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchScores();

    // Subscribe to realtime updates
    const channel = supabase
      .channel("quiz_scores_changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "quiz_scores",
        },
        () => {
          fetchScores();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-muted-foreground font-bold">{index + 1}</span>;
    }
  };

  const getRankBg = (index: number) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-l from-yellow-500/20 to-transparent border-yellow-500/30";
      case 1:
        return "bg-gradient-to-l from-gray-400/20 to-transparent border-gray-400/30";
      case 2:
        return "bg-gradient-to-l from-amber-600/20 to-transparent border-amber-600/30";
      default:
        return "bg-card/50 border-border/50";
    }
  };

  if (loading) {
    return (
      <div className="bg-card rounded-2xl shadow-lg p-6" dir="rtl">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-bold text-foreground">لوحة المتصدرين</h2>
        </div>
        <div className="animate-pulse space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-14 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl shadow-lg p-6" dir="rtl">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold text-foreground">لوحة المتصدرين</h2>
      </div>

      {scores.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">
          لا توجد نتائج بعد. كن أول المتصدرين!
        </p>
      ) : (
        <div className="space-y-3">
          {scores.map((score, index) => (
            <div
              key={score.id}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${getRankBg(index)} ${
                currentPlayerName === score.player_name ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="flex-shrink-0">
                {getRankIcon(index)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">
                  {score.player_name}
                  {currentPlayerName === score.player_name && (
                    <span className="text-primary text-sm mr-2">(أنت)</span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">
                  {score.score} / {score.total_questions} إجابة صحيحة
                </p>
              </div>
              <div className="flex-shrink-0 text-left">
                <span className="text-2xl font-bold text-primary">
                  {score.percentage.toFixed(0)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
