import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

function HotelCardItem({hotelCardOptions}) {

     const[photoUrl, setPhotoUrl] = useState();
    
       useEffect(() => {
            
                hotelCardOptions&&GetPlacePhoto();
            
        }, [hotelCardOptions]);
        const GetPlacePhoto=async()=>{
            const data = {
                textQuery: hotelCardOptions?.hotelName
            }
            const result=await GetPlaceDetails(data).then(resp=>{console.log(resp.data.places[0].photos[3].name)
    
            const PhotoUrl=PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            console.log(PhotoUrl)
            setPhotoUrl(PhotoUrl);
            })
        }

  return (
 <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotelCardOptions?.hotelName + "," + hotelCardOptions?.address} target="_blank">
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img src={photoUrl?photoUrl: '/placeholder.png'} className='rounded-xl h-[180px] w-full object-cover'/>

                     <div className='my-2 flex flex-col gap-2'>
                        <h2 className='font-medium'>{hotelCardOptions?.hotelName}</h2>
                        <h2 className='text-xs text-gray-500'>📍{hotelCardOptions?.address}</h2>
                        <h2 className='text-sm'>💰{hotelCardOptions?.price}</h2>
                        <h2 className='text-sm'>⭐{hotelCardOptions?.rating}</h2>
                        </div>
                    </div>
                    </Link>
  )
}

export default HotelCardItem