function teacherLogin() {
    // Add your login logic here for teachers
    // For example, you can retrieve the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your authentication logic here

    // Example: Display an alert for testing
    alert(`Teacher Login\nEmail: ${email}\nPassword: ${password}`);
}

function toggleDropdown() {
    // Select the dropdown content
    var dropdownContent = document.querySelector('.dropdown .dropdown-content');
    // Toggle the display CSS property
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Optional: Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}


