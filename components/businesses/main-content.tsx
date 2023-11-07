"use client";

import React from "react";
import GoogleMapComponent from "../google-map/google-map";
import DollarTabs from "./dollar-tabs";
import { useMapStore } from "@/hooks/use-map-store";

export default function MainContent() {
  const isOpen = useMapStore((state) => state.isOpen);

  return (
    <div className="col-span-3 lg:col-span-4 lg:border-l">
      {isOpen && <GoogleMapComponent />}
      <DollarTabs />
    </div>
  );
}
