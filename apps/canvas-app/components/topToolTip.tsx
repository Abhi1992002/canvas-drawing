import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

type TopToolTipProps = {
  trigger: LucideIcon;
  content: string;
  onClick: () => void;
};

export const TopToolTip = ({
  onClick,
  trigger: Trigger,
  content,
}: TopToolTipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={onClick}
          className="text-foreground hover:bg-violet-400 hover:text-white h-10 px-4 py-2 rounded-md"
        >
          <Trigger className="h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent className="mt-2">
          <p className="text-xs">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
