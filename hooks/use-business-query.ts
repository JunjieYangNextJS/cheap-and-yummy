"use client"

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useBusinessQuery = (price: number, radius: number, latitude: number, longitude: number) => {
    let limit = 30;

    const getBusiness = async () => {
        // const options = {
        //     method: 'GET',
        //     headers: {
        //       accept: 'application/json',
              
        //       Authorization: 'Bearer 1Sfh6T-4OK8LJjSy48UzCMhGbf_ovyZ2KZsMw-S9mmntx7WzhzB38wGmcdQocBk6WojyVK7lKfLkRqdR8OClh0xE892t0A6Ipc1KERnHEzp85B0BN0pdFBLi7VNBZXYx'
        //     },
            
        //   };
          
        // const res = await fetch("https://api.yelp.com/v3/businesses/search?latitude=30.267153&longitude=-97.743057&term=restaurants&radius=24140&categories=&price=1&sort_by=rating&limit=30", options)
        // // const res = await fetch("http://localhost:3030/businesses", options)
        // // const res = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&term=restaurants&radius=${radius}&price=${price}&sort_by=rating&limit=${limit}`, options)
        // return res.json();
        // const options = {
        //     method: 'GET',
        //     url: 'https://api.yelp.com/v3/businesses/search',
        //     params: {
        //       latitude: '30.267153',
        //       longitude: '-97.743057',
        //       term: 'restaurants',
        //       radius: '24140',
        //       categories: '',
        //       price: '1',
        //       sort_by: 'rating',
        //       limit: '30'
        //     },
        //     headers: {
        //       accept: 'application/json',
              
        //       Authorization: 'Bearer 1Sfh6T-4OK8LJjSy48UzCMhGbf_ovyZ2KZsMw-S9mmntx7WzhzB38wGmcdQocBk6WojyVK7lKfLkRqdR8OClh0xE892t0A6Ipc1KERnHEzp85B0BN0pdFBLi7VNBZXYx',
              
        //     },
            
        //   };
        const res = await axios({
                method: "get",
                url: "/api/businesses",
                params: { latitude, longitude, radius, price },
              });

          // const res = await axios.request(options);
          const data = await res.data;
          return data;

//           axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
    }

    const { isPending, isError, data, error } = 
    useQuery(
        {
            queryKey: ["business", {price, radius, latitude, longitude, limit}], 
            queryFn: getBusiness 
        }
    );



    return { isPending, isError, data, error };
}

export default useBusinessQuery;