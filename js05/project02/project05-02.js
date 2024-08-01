"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: LaTysha Turner
      Date:   07/14/2024

      Filename: project05-02.js
*/
// Declare Variables
var images = document.getElementsByTagName("img");
var photoBucket = document.getElementById("photo_bucket");
var photoList = document.getElementById("photo_list");

// Loop through all the items in the images collections
for (var i = 0; i < images.length; i++) {
    // Add an onclick event
    images[i].onclick = function() {
    // Anonymous function to handle image click
     if (this.parentElement.id === "photo_bucket") {
    // if the image is in this photo bucket
    var newItem = document.createElement("li");
    photoList.appendChild(newItem); newItem.appendChild(this);
     } else {
// if the image is in the photo list
var oldItem = this.parentElement;
        photoBucket.appendChild(this);

        oldItem.parentElement.removeChild(oldItem);
     }
    };
}