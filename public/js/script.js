const imageGallerySection = document.querySelector('.image-gallery');

const imagesArray = [
    '../images/photo1.jpg',
    '../images/photo2.jpg',
    '../images/photo3.jpg',
    '../images/photo4.jpg',
    '../images/photo5.jpg',
    '../images/photo6.jpg'
]

for(let i = 0; i < imagesArray.length; i++) {
    const image = document.createElement('img');
    image.src = imagesArray[i];
    imageGallerySection.appendChild(image);     
}
