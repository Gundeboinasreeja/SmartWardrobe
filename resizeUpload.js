// resizeImage function to resize the image before upload
function resizeImage(file, callback) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function () {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            const maxWidth = 300; // Maximum width/height for resized images
            const scaleSize = maxWidth / img.width;
            canvas.width = maxWidth;
            canvas.height = img.height * scaleSize;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const resizedImageData = canvas.toDataURL("image/jpeg");
            callback(resizedImageData);
        };
    };
    reader.readAsDataURL(file);
}

// Usage in upload function
function uploadImage(section) {
    const fileInput = document.getElementById(`${section}File`);
    const files = fileInput.files;
    const imagesContainer = document.getElementById(`${section}Images`);

    const color = prompt("Please enter the color of the item:");

    if (files.length > 0) {
        const file = files[0];
        resizeImage(file, function (resizedImageData) {
            const img = document.createElement('img');
            img.src = resizedImageData;
            img.classList.add('uploaded-image');
            img.onclick = () => openModal(img.src, section);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => imgContainer.remove();

            const imgContainer = document.createElement('div');
            imgContainer.appendChild(img);
            imgContainer.appendChild(deleteBtn);
            imagesContainer.appendChild(imgContainer);

            imgContainer.dataset.imageName = file.name.toLowerCase();
            imgContainer.dataset.color = color ? color.toLowerCase() : "";

            // Save resized image to local storage
            const imageData = { src: resizedImageData, name: file.name, color: imgContainer.dataset.color };
            saveImageToLocalStorage(section, imageData);
        });

        fileInput.value = ""; // Clear the input
    } else {
        alert("Please choose a file first.");
    }
}
