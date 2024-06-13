
import Places from './Places.jsx';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js'

export default function AvailablePlaces({ onSelectPlace }) {

  // const places = localStorage.getItem("places")
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching]= useState(false)
  const [error,setError]= useState()

   

  //sends a get request
  useEffect(()=>{
    async function fetchPlaces(){
      setIsFetching(true)
      try{
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json(); 

        if(!response.ok){
          throw new Error("failed to fetch places")
        }
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(resData.places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false)
        })

      }
      catch(error){
        setError({message: error.message || "Couldnt fetch places try again later "})
      }
      
    }
    fetchPlaces();
  },[])

  if(error){
    return <Error title="An error has occured" message={error.message}/>;
  }   

  
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      loadingText = "fetching places ..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
