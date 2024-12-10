import React from 'react'
import { json,redirect, useRouteLoaderData } from 'react-router'
import EventItem from "../components/EventItem"
export default function EventDetailPage() {
  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail")
  // const params = useParams();
  return (
    <div>
      <EventItem event={data.event}/>
    </div>
  )
}

export async function loader({request, params}){
  // request and params are passed as loader values by default
  
  const id = params.id
  const response =await fetch('http://localhost:8080/events/'+id);
  if(!response.ok){
    throw json({message:"cant find detail for event"})
  }else{
    return response;
  }
}
export async function deleteAction({request, params}){
  const response = fetch("http://localhost:8080/events/"+params.id,{
    method:request.method,
  })
  if(!response.ok){
    return json({message:"cant delete"},{status:500})
  }
  else{
    return redirect("/events")
  }
}