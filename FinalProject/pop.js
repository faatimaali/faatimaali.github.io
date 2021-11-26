/* Width of each carousel image, in pixels */
let carouselWidth = 400; 

/* Part 2.1: Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

/* Part 2.2: Create variable to keep track of which image we're on */
let imageNum = 0;

/* Part 2.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	// change imageNum
	imageNum ++;
	checkControls();
	// how many pixels from the left should imageRow now be?
	let calcleft = -carouselWidth * imageNum;
	// change css for imageRow
	imageRow.style.left = calcleft + "px";
	
}

/* Part 2.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;

/* Part 2.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	// change imageNum
	imageNum --;
	checkControls();
	// how many pixels from the left should imageRow now be?
	let calcleft = -carouselWidth * imageNum;
	// change css for imageRow
	imageRow.style.left = calcleft + "px";
	
}

/* Part 2.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Part 2.7 */

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 0) {
		// What should happen if it's the first image?
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == totalImages - 	1) {
		// What should happen it's the last image?
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton.classList.remove("hidden");
	}
	
}
// 
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
// 

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
 function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id
	document.getElementById(lightboxID).classList.remove('hidden');

}



// 
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 
pictures.onclick = unhideLightbox;

/**
 * Calls unhideLightbox with the id of the first lightbox
 * 
USE:
element.classList.add('class-name')  
element.classList.remove('class-name') 
element.onclick = functionToRun.
 */
function unhideLightbox1() {
	// TODO: Look in q2.html to see what the id for the lightbox div is for the first picture, and call unhideLightbox
	unhideLightbox("hay");

}

// TODO: Set the browser to run the function unhideLightbox1 when someone clicks #picture-1

document.getElementById("picture-1").onclick = unhideLightbox1;

// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id
	document.getElementById(lightboxID).classList.add('hidden');

}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;