import { useQuery } from '@tanstack/react-query'

const useBusinessQuery = (price = 1, radius = 16093, latitude = 30.267153, longitude = -97.743057) => {
    let limit = 20;

    const getBusiness = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer 1Sfh6T-4OK8LJjSy48UzCMhGbf_ovyZ2KZsMw-S9mmntx7WzhzB38wGmcdQocBk6WojyVK7lKfLkRqdR8OClh0xE892t0A6Ipc1KERnHEzp85B0BN0pdFBLi7VNBZXYx'
            }
          };
          
        const res = await fetch("http://localhost:3030/businesses", options)
        // const res = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&term=restaurants&radius=${radius}&price=${price}&sort_by=rating&limit=${limit}}`, options)
        return res.json();
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