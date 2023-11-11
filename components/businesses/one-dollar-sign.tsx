"use client";

import axios from "axios";
import useBusinessQuery from "@/hooks/use-business-query";
import DollarSign from "./dollar-sign";
import { useMapStore } from "@/hooks/use-map-store";
import { useMilesStore } from "@/hooks/use-miles-store";
import { useEffect, useState } from "react";

export function OneDollarSign({ price }: { price: number }) {
  const latitude = useMapStore((state) => state.lat);
  const longitude = useMapStore((state) => state.lng);
  const radius = useMilesStore((state) => state.radius);

  const {
    isPending,
    isError,
    data: restaurants,
    error,
  } = useBusinessQuery(price, radius, latitude, longitude);

  // const [restaurants, setRestaurants] = useState<any>([]);

  // useEffect(() => {
  //   const getBusiness = async () => {

  //     const res = await axios({
  //       method: "get",
  //       url: "/api/businesses",
  //       params: { latitude, longitude, radius, price },
  //     });

  //     const data = await res.data;

  //     setRestaurants(data);
  //   };

  //   getBusiness();
  // }, [latitude, longitude, radius, price]);

  // console.log(restaurants, "restaurants");

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
      pageSign="$"
      pageDescription="Food or drinks usually cost $10 and under."
      pageTitle="Inexpensive"
    />
    // <div>null</div>
  );
}
