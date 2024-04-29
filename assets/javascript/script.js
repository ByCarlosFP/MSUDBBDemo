function updateTime() {
  const now = new Date();
  const dateTimeStr = now.toLocaleString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: true, 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
  });
  document.getElementById('date-time').innerHTML = dateTimeStr;
}

function teacherLogin() {
  // You should replace the contents of this function with your actual login logic.
  // Below is just placeholder functionality for demonstration purposes.
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Here, you should send the email and password to your server for validation.
  // For demonstration, I'm just logging to the console.
  console.log('Attempting teacher login with:', email, password);

  // Prevent the form from submitting in the traditional way
  return false;
}

// Update the time every second and set initial time
setInterval(updateTime, 1000);
updateTime();


// This function toggles the visibility of the dropdown content
function toggleDropdown() {
    const dropdownContent = document.querySelector('.logo-background .dropdown-content');
    const dropBtn = document.querySelector('.logo-background .dropbtn');

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        dropBtn.classList.remove('active'); // Remove the active class when menu is closed
    } else {
        dropdownContent.style.display = "block";
        dropBtn.classList.add('active'); // Add the active class when menu is opened
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        const dropBtns = document.getElementsByClassName("dropbtn");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
                dropBtns[i].classList.remove('active'); // Remove the active class
            }
        }
    }
}



/*urgent message ticker */
function displayUrgentMessage() {
  const message = localStorage.getItem('urgentMessage');
  console.log(localStorage.getItem('urgentMessage')); // Should log the stored message, if any

  if (message) {
      const messageDisplay = document.getElementById('urgentMessageDisplay');
      const messageSpan = document.createElement('span');
      messageSpan.textContent = message;
      // Add a class based on text length
      messageSpan.className = message.length > 50 ? 'long-text' : 'short-text';
      messageDisplay.appendChild(messageSpan);
  }
}
document.addEventListener('DOMContentLoaded', function() {
    displayUrgentMessage();
});


// Call this function on page load
displayUrgentMessage();
// Call this function every second to update the ticker  
setInterval(displayUrgentMessage, 1000);




