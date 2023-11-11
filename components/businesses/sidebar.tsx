"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Playlist } from "@/data/playlists";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import {
  useMilesStore,
  milesType,
  radiusInCM,
  findKeyByValue,
} from "@/hooks/use-miles-store";
import { useMapStore } from "@/hooks/use-map-store";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  const miles: milesType[] = ["5", "10", "15", "20", "25"];

  const radius = useMilesStore((state) => state.radius);

  const changeRadius = useMilesStore((state) => state.changeRadius);

  const changeMapOpen = useMapStore((state) => state.onToggle);

  const isOpen = useMapStore((state) => state.isOpen);
  const locationName = useMapStore((state) => state.locationName);

  const handleClickMap = () => {
    changeMapOpen();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'auto' for instant scroll
    });
  };

  const handleClickMiles = (item: milesType) => {
    changeRadius(item);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'auto' for instant scroll
    });
  };

  return (
    <div className={cn("pb-12 ", className)}>
      <div className="space-y-10 py-16 sticky top-0">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            <div className="flex flex-col gap-2">
              <div>
                At{" "}
                <span
                  className="underline text-orange-400 ml-1 cursor-pointer"
                  onClick={handleClickMap}
                >
                  {locationName}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  onClick={handleClickMap}
                  checked={isOpen}
                  id="open-now"
                  className="bg-orange-400"
                />
                <Label htmlFor="open-now">Open Map</Label>
              </div>
            </div>
          </h2>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Distance
          </h2>
          <div className="space-y-1">
            {miles.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  item === findKeyByValue(radiusInCM, radius) && "bg-gray-100"
                )}
                onClick={() => handleClickMiles(item)}
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
