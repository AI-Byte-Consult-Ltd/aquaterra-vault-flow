import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Waves, Coins, Send } from "lucide-react";
import { ReactNode } from "react";

interface MigrationButtonProps {
  label: string;
  tooltip: string;
  onClick: () => void;
  icon: ReactNode;
  glowClass: string;
}

export const MigrationButton = ({ label, tooltip, onClick, icon, glowClass }: MigrationButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onClick}
            size="lg"
            className={`w-full max-w-md h-20 text-lg font-bold ${glowClass} glow-button bg-card hover:bg-card/80 border-2 border-primary/30 backdrop-blur-sm transition-all duration-300`}
          >
            <span className="flex items-center gap-3">
              {icon}
              {label}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-card border-primary/50">
          <p className="text-foreground">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
