export default async function RestaurantsCard() {
  const options = {
    method: "GET",
    headers: {
      accept: "applications/json",
      Authorization:
        "Bearer 1Sfh6T-4OK8LJjSy48UzCMhGbf_ovyZ2KZsMw-S9mmntx7WzhzB38wGmcdQocBk6WojyVK7lKfLkRqdR8OClh0xE892t0A6Ipc1KERnHEzp85B0BN0pdFBLi7VNBZXYx",
    },
  };

  const restaurants: Promise<Business[]> = await fetch(
    "http://localhost:3030/businesses",
    options
  )
    .then((response) => response.json())
    // .then((result) => console.log(result, "cache"))
    .catch((err) => console.error(err));

  return <div>FoodCard</div>;
}

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer 1Sfh6T-4OK8LJjSy48UzCMhGbf_ovyZ2KZsMw-S9mmntx7WzhzB38wGmcdQocBk6WojyVK7lKfLkRqdR8OClh0xE892t0A6Ipc1KERnHEzp85B0BN0pdFBLi7VNBZXYx",
//   },
// };

// const foods = await fetch(
//   "https://api.yelp.com/v3/businesses/search?latitude=30.267153&longitude=-97.743057&term=restaurants&radius=32187&price=1&sort_by=rating&limit=20",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// "use client";

// nah

// import React, { useState, useEffect } from "react";

// const [restaurants, setRestaurants] = useState([]);

// const getData = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "applications/json",
//       Authorization:
//         "Bearer 1Sfh6T-4OK8LJjSy48UzCMhGbf_ovyZ2KZsMw-S9mmntx7WzhzB38wGmcdQocBk6WojyVK7lKfLkRqdR8OClh0xE892t0A6Ipc1KERnHEzp85B0BN0pdFBLi7VNBZXYx",
//     },
//   };

//   const foods = await fetch("http://localhost:3030/businesses", options)
//     .then((response) => response.json())
//     .then((result) => setRestaurants(result))
//     .catch((err) => console.error(err));
// };

// useEffect(() => {
//   getData();
// }, []);
