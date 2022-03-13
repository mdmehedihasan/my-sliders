const images = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg',
    'images/pic6.jpg',
    'images/pic7.jpg',
    'images/pic8.jpg',
    'images/pic9.jpg'
];
let imageIndex = 0;
const imgElement = document.getElementById('slider-image');
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }

    const imgUrl = images[imageIndex];
    imgElement.setAttribute('src', imgUrl);
    imageIndex++;
}, 1000);