document.getElementById("getUserInfoBtn").addEventListener("click", getUserInfo);

async function getUserInfo() {
  await chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError);
      return;
    }

    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById("userInfo").textContent = JSON.stringify(data);
        chrome.runtime.sendMessage({ type: "USER_TOKEN", data});
      })
      .catch(error => console.error("Error fetching user info:", error));
  });
  
}
