import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, AlertCircle } from "lucide-react";

interface PlayerNameModalProps {
  onSubmit: (name: string) => void;
}

const PlayerNameModal: React.FC<PlayerNameModalProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const validateFullName = (fullName: string): boolean => {
    const parts = fullName.trim().split(/\s+/);
    return parts.length >= 3 && parts.every(part => part.length >= 2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("يرجى إدخال اسمك");
      return;
    }
    
    if (!validateFullName(name)) {
      setError("يرجى إدخال الاسم الثلاثي كاملاً (الاسم الأول + اسم الأب + اسم العائلة)");
      return;
    }
    
    setError("");
    onSubmit(name.trim());
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md w-full" dir="rtl">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <User className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">مرحباً بك!</h2>
          <p className="text-muted-foreground mt-2 text-center">
            أدخل اسمك الثلاثي للبدء في الاختبار والظهور في لوحة المتصدرين
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="الاسم الأول + اسم الأب + اسم العائلة"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              className="text-right text-lg py-6"
              autoFocus
            />
            {error && (
              <div className="flex items-center gap-2 mt-2 text-destructive text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-muted-foreground text-center">
            مثال: أحمد محمد علي
          </p>
          <Button 
            type="submit" 
            className="w-full py-6 text-lg"
          >
            ابدأ الاختبار
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PlayerNameModal;
