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
  if (event.target && event.target.innerText === "Apply" || event.target.innerText === "Easy Apply" ) {
    // linkedin only
    const jobTitle = document.getElementsByClassName("job-details-jobs-unified-top-card__job-title")[0].textContent.trim()
    const company = document.getElementsByClassName("job-details-jobs-unified-top-card__company-name")[0].textContent.trim() || 'Unknown Company';
    
    const location = document.getElementsByClassName("job-details-jobs-unified-top-card__primary-description-container")[0].querySelector("span").innerText;  // Current LinkedIn job URL
    
    
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
