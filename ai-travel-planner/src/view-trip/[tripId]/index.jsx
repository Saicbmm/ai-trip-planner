import { doc, getDoc } from 'firebase/firestore';
import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../service/firebaseConfig';
import { toast } from 'sonner';
import { Info } from 'lucide-react';
import Hotels from '../components/Hotels';
import InfoSection from '../components/InfoSection';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

function Viewtrip() {


    const {tripId} = useParams();
    const [trip, setTrip] = useState([]);

       useEffect(() => {
        tripId && GetTripData();
        
    },[tripId])

    const GetTripData=async()=>{
        const docRef=doc(db,'AITrips', tripId);
        const docSnap =await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document:", docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such document!");
            toast("No such trip found");
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
         <InfoSection trip={trip}/>

         <Hotels trip={trip}/>

         <PlacesToVisit trip={trip}/>

         <Footer trip={trip}/>

    </div>
  )
}

export default Viewtrip