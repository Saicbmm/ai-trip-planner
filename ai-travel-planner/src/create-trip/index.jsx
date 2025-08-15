import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {  SelectBudgetOptions, SelectTravelsList } from '../constants/options';
import { toast } from 'sonner';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { getContents } from '../service/AIModal';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { Save } from 'lucide-react';
import { db } from '../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';





function CreateTrip() {
    const [place, setPlace] = useState();
    const[openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState([]);
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(false);


    const navigate= useNavigate();
    const handleInputChange=(name, value)=> {


        
        setFormData({...formData, [name]: value})

    }

    useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

  
const login = useGoogleLogin({
    
  onSuccess: (codeResp) =>GetUserProfile(codeResp),
  onError: (error) => console.log(error)  })
/*
function extractJSON(text) {
  try {
    console.log("➡️ extractJSON() called with text:", text);
    // Remove Markdown backticks and anything before/after the JSON block
    const jsonMatch = text.match(/{[\s\S]*}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    } else {
      throw new Error("No JSON found in string.");
    }
  } catch (err) {
    console.error("❌ Failed to parse JSON:", err);
    return null;
  }
}
  */

    const OnGenerateTrip=async()=>{
        


const user = JSON.parse(localStorage.getItem("user"));

  
    

 if (!user) {
    setOpenDialog(true);
     console.log("✅ Running OnGenerateTrip... (no user)");
    return;
  }
  

       if (
  (formData?.totalDays > 5 && !formData?.location) ||
  !formData?.budget ||
  !formData?.traveler
) {
  toast("Please fill all details");
  return;
}


        setLoading(true);
        try {
    const payload = {
      location: formData?.location?.label || "",
      budget: formData?.budget,
      totalDays: formData?.totalDays,
      numOfPeople: formData?.traveler // Or travelerType, as needed
    };
        //const FINAL_PROMPT = AI_PROMPT.replace('{location}', formData?.location?.label).replace('{totalDays}', formData?.totalDays).replace('{traveler}', formData?.traveler).replace('{budget}', formData?.budget).replace('{totalDays}', formData?.totalDays);
    

       const result = await getContents(payload);
   
    setLoading(false);
    // Now result is an object { tripDetails, hotelOptions, itinerary, ... }
    SaveAiTrip(result);
  } catch (error) {
    setLoading(false);
    toast("Failed to generate itinerary.");
    console.error(error);
  }
    }
    const SaveAiTrip= async (TripData) => {
      console.log("➡️ SaveAiTrip() called with TripData:", TripData);
        
      //  const parsedTripData = extractJSON(TripData);
        
       setLoading(true);
        const user= JSON.parse(localStorage.getItem("user"));
        const docId = Date.now().toString(); 
await setDoc(doc(db, "AITrips", docId), {
  userSelection: formData,
  tripData: TripData,
  userEmail: user?.email,
  id: docId
});
setLoading(false);
navigate(`/view-trip/` + docId);
    }

const GetUserProfile = async (tokenInfo) => {
  console.log("➡️ GetUserProfile() called with token:", tokenInfo?.access_token);

  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: "application/json",
        },
      }
    );

    console.log("✅ axios.get success! User data:", response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    setOpenDialog(false);
    OnGenerateTrip(); // continues the flow
  } catch (error) {
    console.error("❌ Error in axios.get():", error?.response?.data || error.message || error);
  }
};

  
    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 text-center ml-35'>
            <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
            <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information and our trip planner will generate a customized itinerary based on your preferences</p>

            <div className='mt-20 flex flex-col gap-10'>
                <div>
                    <h2 className='text-xl my-3 font-medium'>What is the destination of choice?</h2>
                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        selectProps={{ place, onChange: (v) => { setPlace(v); handleInputChange('location', v) } }}
                    />
                    
                </div>

                <div>


                    <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
                    <Input placeholder={'Ex.3'} type="number" 
                    onChange={(e)=>handleInputChange('totalDays', e.target.value)}
                    />
                </div>
            </div>
            <div>
                <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectBudgetOptions.map((item, index) => (<div key={index} className={`p-4 border cursor-pointer rounded-lg hover:shadow:lg${formData?.budget==item.title&&'shadow-lg border-black'}`} onClick={()=>handleInputChange('budget', item.title)}>
                        <h2 className='text-4xl'>{item.icon}</h2>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                        </div>
                        ))}
                    </div>
                  
    </div>
    <div>
                <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {SelectTravelsList.map((item, index) => (<div key={index} className={`p-4 border cursor-pointer rounded-lg hover:shadow:lg${formData?.traveler==item.people&&'shadow-lg border-black'}`} onClick={()=>handleInputChange('traveler', item.people)}>
                        <h2 className='text-4xl'>{item.icon}</h2>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                        </div>
                        ))}
                    </div>
                  
    </div>
    <div className='my-10 flex justify-end'> 
        <Button disabled={loading}onClick={OnGenerateTrip}>
            {loading ? <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" /> : "Generate Trip"}
            </Button></div>
   <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      {/* Accessible title for screen readers */}
      <DialogTitle>Sign In</DialogTitle>

      
      <DialogDescription>
        
        Sign in securely with Google to access your trip.
      </DialogDescription>

      
      <div className="mt-4 text-center">
        <img src="/logo.svg" alt="Logo" className="mx-auto mb-4" />

        <div className="font-bold text-lg">Sign in with Google</div>
        <div className="text-sm text-gray-500 mb-4">Secure login with Google Authentication</div>

        <Button
   
          onClick={login}
          variant="outline"
          className="w-full flex items-center justify-center gap-3"
        >
           
          <FcGoogle className="h-6 w-6" />
          <span>Sign In With Google</span>
          
        </Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>


            </div>
  
         
            

                    )
                }
    


            export default CreateTrip