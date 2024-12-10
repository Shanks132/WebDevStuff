import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  if(data.isError){
    return(
      <p>{data.message}</p>
    );
  }
  const events = data.events
  // this will be a actual promise but useDataLoader takes care of that
  return (
    <>
      <EventsList events={events} />
    </>
  );
}
export default EventsPage;  
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //incorrect response
    // throw new Response(JSON.stringify({message:"Cant fech events"}),{status:500,});
    return json(
      {message:"Can't fetch events"},
      {status:500}
    )
    // throw {message:"Couldnt fetch events"}
    // return {isError : true, message:"Couldnt fetch events"}
  } else {
    // const resData = await response.json();
    // const res = new Response();
    // return resData.events
    return response;
  }
}
