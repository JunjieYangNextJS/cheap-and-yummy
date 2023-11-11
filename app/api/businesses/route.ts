
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
// import Cors from "cors";
// import initMiddleware from "@/lib/init-middleware";


// const cors = initMiddleware(
//     Cors({
//       methods: ['GET'],
//     })
//   );


export async function GET(req: NextRequest, res: NextResponse) {
   

    const latitude = req.nextUrl.searchParams.get("latitude");
  const longitude = req.nextUrl.searchParams.get("longitude");
  const radius = req.nextUrl.searchParams.get("radius");
  const price = req.nextUrl.searchParams.get("price");

        console.log(latitude, longitude, radius, price, 'backend')

    // await cors(req, res);

    try {
       
       
        // const conversationId = searchParams.get("conversationId")

        const options = {
            method: "GET",
            url: "https://api.yelp.com/v3/businesses/search",
            params: {
              latitude,
              longitude,
              term: "restaurants",
              radius,
              categories: "",
              price,
              sort_by: "rating",
              limit: "30",
            },
            headers: {
              accept: "application/json",
              "x-requested-with": "xmlhttprequest",
              "Access-Control-Allow-Origin": "*",
              
              Authorization:
                "Bearer 1Sfh6T-4OK8LJjSy48UzCMhGbf_ovyZ2KZsMw-S9mmntx7WzhzB38wGmcdQocBk6WojyVK7lKfLkRqdR8OClh0xE892t0A6Ipc1KERnHEzp85B0BN0pdFBLi7VNBZXYx",
            },
          };
    
          const res = await axios.request(options);
          const data = await res.data;

          console.log("res:",res)
          console.log("data:",data)

          const businesses = (data.businesses);

          
          console.log("businesses:",businesses)

        

        return NextResponse.json(
            businesses
        )
    } catch (error) {
        console.log("MESSAGES_GET");
        return new NextResponse("Internal Error", {status: 500})
    }
}