document.getElementById('imageUpload').addEventListener('change', function(event) {
    const galleryGrid = document.getElementById('galleryGrid');
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                galleryGrid.appendChild(imgElement);
            };

            reader.readAsDataURL(file);
        }
    }
});
