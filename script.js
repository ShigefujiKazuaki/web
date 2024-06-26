document.getElementById('changeImageButton').addEventListener('click', function() {
    var image = document.getElementById('interactiveImage');
    if (image.src.includes('Image1.jfif')) {
        image.src = 'Image2.jfif';
    } else {
        image.src = 'Image1.jfif';
    }
});