-- Create a table for storing quiz scores/leaderboard
CREATE TABLE public.quiz_scores (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  player_name TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL DEFAULT 0,
  percentage DECIMAL(5,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quiz_scores ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to view scores (public leaderboard)
CREATE POLICY "Anyone can view scores" 
ON public.quiz_scores 
FOR SELECT 
USING (true);

-- Create policy for anyone to insert their score
CREATE POLICY "Anyone can insert their score" 
ON public.quiz_scores 
FOR INSERT 
WITH CHECK (true);

-- Create index for faster leaderboard queries
CREATE INDEX idx_quiz_scores_percentage ON public.quiz_scores(percentage DESC, created_at DESC);

-- Enable realtime for live leaderboard updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.quiz_scores;