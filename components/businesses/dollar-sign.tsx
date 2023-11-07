"use client";

import React from "react";
import { TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";
import BusinessCard from "./business-card";

interface DollarSignProps {
  restaurants: Business[];
  pageTitle: string;
  pageDescription: string;
  pageSign: "$" | "$$";
}

export default function DollarSign({
  restaurants,
  pageTitle,
  pageDescription,
  pageSign,
}: DollarSignProps) {
  return (
    <TabsContent value={pageSign} className="border-none p-0 outline-none">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{pageTitle}</h2>
          <p className="text-sm text-muted-foreground">{pageDescription}</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <div className="grid grid-cols-2">
          {restaurants?.map((business: Business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </div>
    </TabsContent>
  );
}
