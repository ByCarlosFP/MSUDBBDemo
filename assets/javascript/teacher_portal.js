// Function to handle file upload
function uploadFile(file) {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`uploads/${currentUser.uid}/${file.name}`);

    return fileRef.put(file).then((snapshot) => {
        console.log('File uploaded successfully');
        return snapshot;
    }).catch((error) => {
        console.error('Error uploading file:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    });
}

// Add event listener to file upload form
fileUploadForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    uploadFile(file)
        .then((snapshot) => {
            // Handle successful upload
        })
        .catch((error) => {
            // Handle upload error
        });
});

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    console.log('Message sent:', message);
});

function logout() {
    firebase.auth().signOut().then(() => {
        console.log('Successfully logged out');
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Logout failed', error.message);
    });
}
