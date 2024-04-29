function publishUrgentMessage() {
    const message = document.getElementById('urgentMessageInput').value;
    
    localStorage.setItem('urgentMessage', message);
    console.log('Saving message:', message); // Debugging line
    alert('Urgent message published successfully.');
    localStorage.setItem('urgentMessage', message);
    console.log('Message saved:', message); // This should not log null or undefined

}

// This function toggles the visibility of the dropdown content
function toggleDropdown() {
    const dropdownContent = document.querySelector('.header .dropdown-content');
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