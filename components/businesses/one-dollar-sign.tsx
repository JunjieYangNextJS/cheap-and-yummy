"use client";

import useBusinessQuery from "@/hooks/use-business-query";
import DollarSign from "./dollar-sign";

export function OneDollarSign({ price }: { price: number }) {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "applications/json",
  //     Authorization:
  //       "Bearer 1Sfh6T-4OK8LJjSy48UzCMhGbf_ovyZ2KZsMw-S9mmntx7WzhzB38wGmcdQocBk6WojyVK7lKfLkRqdR8OClh0xE892t0A6Ipc1KERnHEzp85B0BN0pdFBLi7VNBZXYx",
  //   },
  // };

  const { isPending, isError, data: restaurants, error } = useBusinessQuery();

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
  );
}
