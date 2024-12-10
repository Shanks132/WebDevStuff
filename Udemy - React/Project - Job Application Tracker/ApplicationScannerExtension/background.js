chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "USER_TOKEN") {
    // Store the token or account info in chrome.storage
    console.log(message.data);
    chrome.storage.local.set({ email: message.data.email }, () => {
      console.log('Email stored:', message.data.email);
    });
  }

  if (message.type === "JOB_DATA") {
    console.log(message.jobDetails);
    // Retrieve the email from chrome.storage
    chrome.storage.local.get("email", (result) => {
      if (result.email) {
        const data = { ...message.jobDetails, mail: result.email };
        // Send the combined data to Firebase
        fetch("http://localhost:3000/send-data", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jobData: data }),
        })
          .then((response) => {
            console.log("Data sent to Firebase:", response);
          })
          .catch((error) => {
            console.log("Error sending data:", error);
          });
      } else {
        console.log("No email found in storage.");
      }
    });
  }
});
