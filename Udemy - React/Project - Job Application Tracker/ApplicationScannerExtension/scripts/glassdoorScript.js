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
  // glassdoor only
  if (event.target && event.target.innerText === "Easy Apply" || event.target.innerText === "Apply") {
    const jobTitle = document.getElementsByClassName("EmployerProfile_employerInfo  __d8uSE")[0].textContent.trim()
    const company = document.getElementsByClassName("heading_Heading__BqX5J heading_Level1__soLZs")[0].textContent.trim() || 'Unknown Company';
    // console.log(company)
    const location = document.getElementsByClassName("JobDetails_location__mSg5h")[0].textContent;  // Current LinkedIn job URL
    
    const jobDetails = {
      title: jobTitle,
      company:company,
      location:location,
      dateApplied: new Date().toLocaleDateString() // Store the date of application
    };
    console.log(jobDetails)
    chrome.runtime.sendMessage({ type: "JOB_DATA", jobDetails});
    alert(this.URL);
  }
});
