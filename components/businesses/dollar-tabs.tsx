"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { OneDollarSign } from "./one-dollar-sign";
import { Separator } from "../ui/separator";
import { TwoDollarSigns } from "./two-dollar-signs";

export default function DollarTabs() {
  const [price, setPrice] = useState(1);
  console.log(price, "price");

  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="$" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="$" className="relative">
              $
            </TabsTrigger>
            <TabsTrigger value="$$">$$</TabsTrigger>
          </TabsList>
        </div>
        <OneDollarSign price={price} />

        <TabsContent
          value="$$"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Moderately expensive
              </h2>
              <p className="text-sm text-muted-foreground">
                Food or drinks usually cost between $10-$25.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <TwoDollarSigns price={price} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
