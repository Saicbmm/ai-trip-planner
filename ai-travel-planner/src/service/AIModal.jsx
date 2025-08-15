

/*


import { GoogleGenerativeAI } from '@google/generative-ai';

 
  const apiKey =  import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
 const genAI =  new GoogleGenerativeAI(apiKey)


const tools = [
  {
    googleSearch: {},
  },
];

const config = {
  thinkingConfig: {
    thinkingBudget: -1,
  },
  tools,
  responseMimeType: 'application/json',
};
const model = genAI.getGenerativeModel({
  model: 'gemini-2.5-pro',})


export const getContents =
  model.startChat({
    history: [{role: 'user',
      parts: [
        {
          text: `Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget... (rest of your prompt)`,
        }
      ]},{
      role: 'model',
      parts: [{text: `
  "tripDetails": {
    "location": "Las Vegas",
    "totalDays": 3,
    "budget": "Cheap",
    "numberOfPeople": 2,
    "bestTimeToVisit": "The best times to visit for a balance of pleasant weather and manageable crowds are the spring (March to May) and fall (September to November). For the most budget-friendly options, consider a mid-week trip in the late fall or early winter."
  },
  "hotelOptions": [
    {
      "hotelName": "The LINQ Hotel + Experience",
      "address": "3535 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
      "price": "$40 - $150 per night",
      "imageUrl": "https://www.caesars.com/content/dam/linq/hotel/rooms/classic-room-2-queen-nonsmoking-high-floor-d.jpg.transform/card-gallery-lg/image.jpg",
      "geoCoordinates": {
        "latitude": 36.1176,
        "longitude": -115.1713
      },
      "rating": 4.0,
      "description": "A modern and energetic hotel at the heart of the Strip. [13, 19] It offers direct access to the LINQ Promenade, featuring shopping, dining, and the High Roller observation wheel. The central location is a major plus for exploring. [40, 42]"
    },
    {
      "hotelName": "Excalibur Hotel & Casino",
      "address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
      "price": "$30 - $120 per night",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/2c/18/6b/97/exterior.jpg",
      "geoCoordinates": {
        "latitude": 36.0986,
        "longitude": -115.1759
      },
      "rating": 3.5,
      "description": "A family-friendly hotel with a distinctive castle theme, offering some of the most budget-friendly rates on the Strip. [33, 37] It's well-connected to neighboring hotels via a free tram and offers a lively atmosphere with a large casino and multiple dining options. [25, 37]"
    },
    {
      "hotelName": "Downtown Grand Hotel & Casino",
      "address": "206 N 3rd St, Las Vegas, NV 89101, USA",
      "price": "$50 - $140 per night",
      "imageUrl": "https://downtowngrand.com/wp-content/uploads/2021/08/04_DG_Exterior_3-scaled.jpg",
      "geoCoordinates": {
        "latitude": 36.1706,
        "longitude": -115.1418
      },
      "rating": 4.1,
      "description": "Located in the heart of downtown Las Vegas, just steps from the Fremont Street Experience and the Mob Museum. [15, 26, 31] It features a large rooftop pool deck and offers a more local, relaxed vibe away from the Strip's hustle. [26]"
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "theme": "South Strip Icons & Dazzling Fountains",
      "dailyPlan": [
        {
          "time": "9:00 AM - 12:00 PM",
          "placeName": "Welcome to Fabulous Las Vegas Sign",
          "placeDetails": "Start your trip with an iconic photo at this world-famous landmark. [2, 24] Designed by Betty Willis and erected in 1959, it's a must-see to commemorate your visit. [2] It is located on Las Vegas Boulevard South. [6]",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Welcome_to_Fabulous_Las_Vegas_sign.jpg/1200px-Welcome_to_Fabulous_Las_Vegas_sign.jpg",
          "geoCoordinates": {
            "latitude": 36.082027,
            "longitude": -115.172897
          },
          "ticketPricing": "Free",
          "rating": 4.6,
          "travelTime": "15-20 minute bus ride or a short rideshare to the next location."
        },
        {
          "time": "12:00 PM - 2:00 PM",
          "placeName": "Bellagio Conservatory & Botanical Gardens",
          "placeDetails": "Step into a stunning 14,000-square-foot floral wonderland inside the Bellagio. The displays are redesigned seasonally, offering a unique and breathtaking experience with every visit. It's a free and peaceful escape from the casino floor. [14, 16, 34, 39]",
          "placeImageUrl": "https://www.vegas.com/lounge/wp-content/uploads/2019/07/bellagio-conservatory-1200x900.jpg",
          "geoCoordinates": {
            "latitude": 36.1126,
            "longitude": -115.1767
          },
          "ticketPricing": "Free",
          "rating": 4.8,
          "travelTime": "2 minute walk to the next location."
        },
        {
        "time": "2:00 PM - 4:00 PM",
          "placeName": "Fountains of Bellagio",
          "placeDetails": "Witness the iconic and romantic free water show, where over a thousand fountains dance to music and light. [22] Shows run every 30 minutes in the afternoon and every 15 minutes in the evening. [17, 22, 38]",
          "placeImageUrl": "https://www.travelandleisure.com/thmb/p1D-q9L3cWSCap08nxZt9QH7IeM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bellagio-fountains-LASVEGASFOUNTAIN1021-e289893961ed49938015c9d4df226c6d.jpg",
          "geoCoordinates": {
            "latitude": 36.1124,
            "longitude": -115.1770
          },
          "ticketPricing": "Free",
          "rating": 4.8,
          "travelTime": "End of Day 1 plan."
        }
      ]
    },
    {
      "day": 2,
      "theme": "Mid-Strip Marvels & Downtown Energy",
      "dailyPlan": [
        {
          "time": "8:00 AM - 12:00 PM",
          "placeName": "The Venetian Grand Canal Shoppes",
          "placeDetails": "Stroll through a romantic, Italian-themed shopping mall complete with indoor canals, street performers, and a painted sky ceiling. While the gondola rides have a fee, exploring the ambiance is completely free and makes for great photos.",
          "placeImageUrl": "https://www.venetianlasvegas.com/content/dam/venetian/resort/attractions/gondola-rides/gondola-3-1920x1080.jpg",
          "geoCoordinates": {
            "latitude": 36.1215,
            "longitude": -115.1696
          },
          "ticketPricing": "Free to explore",
          "rating": 4.7,
          "travelTime": "10-15 minute walk to the High Roller."
        },
        {
        "time": "12:00 PM - 2:00 PM",
          "placeName": "High Roller Observation Wheel",
          "placeDetails": "Located in the LINQ Promenade, the High Roller is a 550-foot tall Ferris wheel offering stunning 360-degree views of the Las Vegas Strip and valley. While the ride has a ticket price, the surrounding Promenade is a lively area to explore.",
          "placeImageUrl": "https://media.cntraveler.com/photos/5a7c93603415714781703641/16:9/w_2560,c_limit/High-Roller_2018_LINQ-Promenade-Wheel-at-Dusk-(1).jpg",
          "geoCoordinates": {
            "latitude": 36.1176,
            "longitude": -115.1683
          },
          "ticketPricing": "Tickets start around $25, but walking the LINQ Promenade is free.",
          "rating": 4.6,
          "travelTime": "20-30 minute bus ride (The Deuce) to Downtown."
        },
        {
        "time": "2:00 PM - 4:00 PM"
          "placeName": "Fremont Street Experience",
          "placeDetails": "Immerse yourself in the vibrant heart of Downtown Las Vegas. [23] This pedestrian mall features the stunning Viva Vision light show on the world's largest video screen, free live concerts on multiple stages, and a classic Vegas vibe. [30, 44] Shows typically run every hour in the evening. [27, 29, 30]",
          "placeImageUrl": "https://i.ytimg.com/vi/W4-k0iV-RTo/maxresdefault.jpg",
          "geoCoordinates": {
            "latitude": 36.1706,
            "longitude": -115.1444
          },
          "ticketPricing": "Free",
          "rating": 4.6,
          "travelTime": "10 minute walk to the next location."
        },
        {
         "time": "4:00 PM - 6:00 PM",
          "placeName": "Downtown Container Park",
          "placeDetails": "An open-air shopping and entertainment venue made from repurposed shipping containers. [11] It features unique boutique shops, diverse food options, and a giant, fire-breathing praying mantis sculpture that comes to life at night. [11, 45, 46]",
          "placeImageUrl": "https://media.timeout.com/images/105242279/image.jpg",
          "geoCoordinates": {
            "latitude": 36.167590,
            "longitude": -115.138432
          },
          "ticketPricing": "Free entry",
          "rating": 4.4,
          "travelTime": "End of Day 2 plan."
        }
      ]
    },
    {
      "day": 3,
      "theme": "Oasis Views & Volcanic Finales",
      "dailyPlan": [
        {
          "time": "8:00 AM - 12:00 PM",
          "placeName": "Red Rock Canyon National Conservation Area",
          "placeDetails": "Escape the city for a morning to witness the stunning desert landscapes of Red Rock Canyon. A 13-mile scenic drive and numerous hiking trails offer breathtaking views of the red-hued sandstone peaks. An early start is recommended to avoid the heat.",
          "placeImageUrl": "https://www.redrockcanyonlv.org/wp-content/uploads/2021/04/calico-hills-01-1.jpg",
          "geoCoordinates": {
            "latitude": 36.1360,
            "longitude": -115.4277
          },
          "ticketPricing": "Around $20 per vehicle for a day pass.",
          "rating": 4.9,
          "travelTime": "30-40 minute drive back to the Strip."
        },
        {
          "time": "12:00 PM - 2:00 PM",
          "placeName": "Flamingo Wildlife Habitat",
          "placeDetails": "Find a slice of paradise at this free attraction located at the Flamingo Hotel. Wander through lush gardens and see Chilean flamingos, Brown Pelicans, turtles, and other exotic birds in a serene environment.",
          "placeImageUrl": "https://www.caesars.com/content/dam/flm/things-to-do/wildlife-habitat/flamingo-wildlife-habitat-1.jpg.transform/card-gallery-lg/image.jpg",
          "geoCoordinates": {
            "latitude": 36.1166,
            "longitude": -115.1709
          },
          "ticketPricing": "Free",
          "rating": 4.4,
          "travelTime": "10-15 minute walk to the next location."
        },
        {
          "time": "2:00 PM - 4:00 PM",
          "placeName": "The Volcano at The Mirage",
          "placeDetails": "End your trip with another spectacular and free show. The Mirage's volcano erupts nightly, spewing fireballs and smoke choreographed to a dramatic, percussive soundtrack. [12, 47, 48]",
          "placeImageUrl": "https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/07/Mirage-Volcano.jpg",
          "geoCoordinates": {
            "latitude": 36.1213,
            "longitude": -115.1741
          },
          "ticketPricing": "Free",
          "rating": 4.5,
          "travelTime": "End of Day 3 plan."
        }
      ]
    }
  ]
}
`,
        },
      ],
    }
       ]
  });



*/

export const getContents = async ({ location, budget, totalDays, numOfPeople }) => {
  const response = await fetch('http://localhost:8000/generate-itinerary', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      location,
      budget,
      totalDays,
      numOfPeople
    }),
  });

  if (!response.ok) {
    throw new Error(`Backend error: ${response.statusText}`);
  }

  
  const data = await response.json();
  return data.itinerary || data;  //
};
