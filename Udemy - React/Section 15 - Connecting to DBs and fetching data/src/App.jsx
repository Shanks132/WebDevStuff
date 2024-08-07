import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
// import { response } from 'express';
import Error from './components/Error.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';


function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState()
  const [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(()=>{
    async function fetchPlaces(){
      try{
        const places = await fetchUserPlaces();
        setUserPlaces(places)
      }
      catch(error){
        
      }
    }
  })
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
  
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places:[selectedPlace, ...userPlaces]}),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Executing")  
      const resData = response.json()
      if (!response.ok) {
        console.log(resData)
        throw new Error("Failed to update user data")
      }
    }
    catch (error) {
      setErrorUpdatingPlaces({message:error.message||"failed to update places"})
      setUserPlaces(userPlaces)
      // console.log("Data sending failed")
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try{
      await updateUserPlaces(userPlaces.filter((place)=>{place.id !== selectedPlace.current.id}))
    }
    catch(error){
      setUserPlaces(userPlaces)
      setErrorUpdatingPlaces({message:error.message||"failed to delete places"})}

    setModalIsOpen(false);
  }, [userPlaces]);


  function handleError(){
    setErrorUpdatingPlaces(null)
  }
  return (
    <>
    <Modal 
    open={errorUpdatingPlaces}
    onClose={handleError}>
      {errorUpdatingPlaces && (<Error
       title="error updating places"
       message={errorUpdatingPlaces.message}
       onConfirm={handleError}
      />)}
    </Modal> 
 
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
