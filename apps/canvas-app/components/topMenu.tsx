import { Pencil, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./modeToggle";
import { Button } from "./ui/button";
import { TopToolTip } from "./topToolTip";

type TopMenuProps = {
  className?: string;
};

export const TopMenu = ({ className }: TopMenuProps) => {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <TopToolTip onClick={() => {}} trigger={Pencil} content="Pencil" />
        <Button
          variant={"link"}
          className="text-foreground hover:bg-violet-400 hover:text-white"
        >
          <Trash className="h-4 w-4" />
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
};
