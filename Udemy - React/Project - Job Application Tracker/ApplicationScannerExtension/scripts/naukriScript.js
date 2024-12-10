// Example of detecting an "Apply" button click
function addUniqueJob(jobDetails,jobsApplied) {
  // Check if a job with the same title already exists in the array
  const duplicate = jobsApplied.find(existingJob => existingJob.title === jobDetails.title);

  if (!duplicate) {
    jobsApplied.push(jobDetails);
  } else {
    console.log('Duplicate job:', jobDetails.title);
  }
}
document.addEventListener('click', function(event) {
  if (event.target && event.target.innerText === "Apply" || event.target.innerText === "Apply on employer website" ) {
    console.log("Applied")
    // linkedin only
    const jobTitle = document.getElementsByClassName("styles_jd-header-title__rZwM1")[0].textContent.trim()
    const company = document.getElementsByClassName("styles_jd-header-comp-name__MvqAI")[0].textContent.trim() || 'Unknown Company';
    
    const location = document.getElementsByClassName("styles_jhc__location__W_pVs")[0]
    .innerText; 
    
    
    const jobDetails = {
      title: jobTitle,
      company: company,
      location: location,
      dateApplied: new Date().toLocaleDateString() // Store the date of application
    };   
    // Create a new <li> element
    console.log(jobDetails)
    chrome.runtime.sendMessage({ type: "JOB_DATA", jobDetails});
    alert(this.URL);
  }
});
