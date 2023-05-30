const images = document.querySelectorAll(".container img");
// Set the initial rotation angle
let rotationAngle = 0;
// Function to rotate the images
function rotateImages() {
  // Increase the rotation angle by 1 degree
  rotationAngle += 1;
  // Apply the rotation transform to each image
  images.forEach((image) => {
    image.style.transform = `rotate(${rotationAngle}deg)`;
  });
}
// Call the rotateImages function every 50 milliseconds (for 5 seconds)
const animationInterval = setInterval(rotateImages,100 );
// Stop the animation after 5 seconds (5000 milliseconds)
setTimeout(() => {
  clearInterval(animationInterval);
},10000);