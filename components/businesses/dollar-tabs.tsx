"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { OneDollarSign } from "./one-dollar-sign";
import { Separator } from "../ui/separator";
import { TwoDollarSigns } from "./two-dollar-signs";

export default function DollarTabs() {
  const [price, setPrice] = useState(1);

  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="$" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="$" className="relative">
              <div onClick={() => setPrice(1)}>$</div>
            </TabsTrigger>
            <TabsTrigger value="$$">
              <div onClick={() => setPrice(2)}>$$</div>
            </TabsTrigger>
          </TabsList>
        </div>
        <OneDollarSign price={price} />

        <TwoDollarSigns price={price} />
      </Tabs>
    </div>
  );
}
