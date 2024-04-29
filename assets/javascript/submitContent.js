function submitContent() {
    const userInput = document.getElementById('userInput').value;
    const fileUploadInput = document.getElementById('file-upload');
    const file = fileUploadInput.files[0];

    // Display text content
    if (userInput !== '') {
        document.getElementById('contentDisplay').innerHTML += `<p>${userInput}</p>`;
        document.getElementById('userInput').value = ''; 
    }

    // Display file content
    if (file) {
        if (file.type.startsWith('image')) { 
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageUrl = event.target.result;
                document.getElementById('contentDisplay').innerHTML += `<img src="${imageUrl}" class="displayed-image" alt="Uploaded Image">`;
            };
            reader.readAsDataURL(file);
        } else if (file.type.startsWith('video')) { 
            document.getElementById('contentDisplay').innerHTML += `<video src="${URL.createObjectURL(file)}" class="displayed-video" controls></video>`;
        } else { 
            document.getElementById('contentDisplay').innerHTML += `<p>Unsupported file type: ${file.name}</p>`;
        }
        fileUploadInput.value = ''; 
    }
}