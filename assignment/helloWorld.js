'use script'

console.log("hello world");


//make a list of 3 possible images
const images = ['zinnia.png', 'susans.jpg', 'morningglories.png'];
//make an index which will track the currently displayed image
let currentImgIndex = 0;

//get a reference to the image in HTML by its class
const imageToSwitch = document.querySelector('.imageToSwitch');

//make a function that will run when the "<" button is clicked:
//it decrements the index, then displays the image 'before' this one
function prevImage(){
  currentImgIndex--; //to go to previous image, decrease the index
  if (currentImgIndex === -1) { //if we decrease past the bounds of the array,
    currentImgIndex = 2; //'reset' at array end
  }

  displayImage(currentImgIndex);
}

//make a function that will run when the ">" button is clicked:
//it decrements the index, then displays the image 'after' this one
function nextImage(){
  currentImgIndex++; //to go to the next image, increase the index
  if (currentImgIndex === 3) { //if we increase past the bounds of our array,
    currentImgIndex = 0; //'reset' at array beginning
  }

  displayImage(currentImgIndex);
}

//actually display the image (so far we have only messed with the index, 
//a lowly int). To do this we access the imageToSwitch var's source and 
//swap it out for the array with the matching index
function displayImage(index){
  imageToSwitch.src = images[index];
}