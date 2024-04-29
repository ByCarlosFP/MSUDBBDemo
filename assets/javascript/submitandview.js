function submitContent() {
    const textUploadValue = document.getElementById('text-upload').value;
    const fileUploadInput = document.getElementById('file-upload');
    const file = fileUploadInput.files[0];
    const announcementsText = document.getElementById('announcementsTextField').value;
    
    // Display text content
    if (textUploadValue !== '') {
        document.getElementById('contentDisplay').innerHTML += `<p>${textUploadValue}</p>`;
    }

    // Display file content
    if (file) {
        if (file.type.startsWith('image')) { // Check if file is an image
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageUrl = event.target.result;
                document.getElementById('contentDisplay').innerHTML += `<img src="${imageUrl}" class="displayed-image" alt="Uploaded Image">`;
            };
            reader.readAsDataURL(file);
        } else if (file.type.startsWith('video')) { // Check if file is a video
            document.getElementById('contentDisplay').innerHTML += `<video src="${URL.createObjectURL(file)}" class="displayed-video" controls></video>`;
        } else { // If file is neither image nor video
            document.getElementById('contentDisplay').innerHTML += `<p>Unsupported file type: ${file.name}</p>`;
        }
    }

    // Display announcements
    if (announcementsText !== '') {
        document.getElementById('contentDisplay').innerHTML += `<p>${announcementsText}</p>`;
    }

    // Clear text field after submission
    document.getElementById('announcementsTextField').value = '';

    // Scroll to the bottom of the newsfeed
    document.getElementById('contentDisplay').scrollTop = document.getElementById('contentDisplay').scrollHeight;
}