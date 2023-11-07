"use client";

import useBusinessQuery from "@/hooks/use-business-query";
import DollarSign from "./dollar-sign";
import { useMapStore } from "@/hooks/use-map-store";
import { useMilesStore } from "@/hooks/use-miles-store";

export function TwoDollarSigns({ price }: { price: number }) {
  const lat = useMapStore((state) => state.lat);
  const lng = useMapStore((state) => state.lng);
  const radius = useMilesStore((state) => state.radius);

  const {
    isPending,
    isError,
    data: restaurants,
    error,
  } = useBusinessQuery(price, radius, lat, lng);

  // const restaurants: Business[] = await fetch(
  //   "http://localhost:3030/businesses",
  //   options
  // )
  //   .then((response) => response.json())
  //   // .then((result) => console.log(result, "cache"))
  //   .catch((err) => console.error(err));

  return (
    <DollarSign
      restaurants={restaurants}
      pageSign="$$"
      pageDescription="Food or drinks usually cost between $10 - $25."
      pageTitle="Moderately Expensive"
    />
  );
}
