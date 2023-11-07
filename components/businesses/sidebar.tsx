"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Playlist } from "@/data/playlists";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useMilesStore, milesType } from "@/hooks/use-miles-store";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  const miles: milesType[] = ["5", "10", "15", "20", "25"];

  const changeRadius = useMilesStore((state) => state.changeRadius);

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {/* <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            <div className="flex items-center space-x-2">
              <Switch id="open-now" className="bg-orange-400" />
              <Label htmlFor="open-now">Open Now</Label>
            </div>
          </h2>
        </div> */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Distance
          </h2>
          <div className="space-y-1">
            {miles.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => changeRadius(item)}
              >
                {item} miles
              </Button>
            ))}

            {/* <Button variant="ghost" className="w-full justify-start">
              10 miles
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              15 miles
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              20 miles
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              25 miles
            </Button> */}
          </div>
        </div>
        {/* <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
        </div> */}
      </div>
    </div>
  );
}
