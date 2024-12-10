import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  async function addMeetupHandler(enteredMeetupData) {
    try {
      console.log("sending");

      const response = await fetch("/api/newmeetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log

      if (!response.ok) {
        throw new Error("Failed to send meetup data");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
