"use client"; // Make sure this is a client-side component in Next.js

import { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

import { redirect } from "next/navigation";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [applications, setApplications] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  async function getApplicationData() {
    const applicationsRef = collection(db, "applications"); // Get a reference to the collection
    const snapshot = await getDocs(applicationsRef); // Get all documents in the collection
    
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      setApplications((applications)=>{
        return [...applications, doc.data()];
      })
    });
    console.log(applications)
    return snapshot;
  }

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getApplicationData()
        console.log(user.email)
        setUserEmail(user.email);
        setUsername(user.displayName || "Anonymous");
      } else {
        setUsername(null);
        redirect("/auth");
      }
    });
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  
  if (username === null) {
    // Return a loading state or a redirect to login if necessary
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <div className="mx-auto flex flex-col  justify-center">
      <h1 className="ml-4 text-2xl mt-2">Welcome {username}, These are your current applications</h1>
    </div>

      <table className=" w-5/6 ml-6 mt-6 p-2">
        <thead className="border-2">
          <tr>
            <th className="border-2">Location</th>
            <th className="border-2">Company Name</th>
            <th className="border-2">Position</th>
            <th className="border-2">Date Applied</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {applications.map((row)=>{
            if(userEmail == row.mail){
              return (
                <tr className="border-2">
                <td className="border-2">{row.location}</td>
                <td className="border-2">{row.company}</td>
                <td className="border-2">{row.title}</td>
                <td className="border-2">{row.dateApplied}</td>
                </tr>
              )
          }
        }
      ) || ""}
        </tbody>
      </table>
    </>
  );
}
