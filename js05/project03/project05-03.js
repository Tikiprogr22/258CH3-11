"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: LaTysha Turner
      Date:   07/14/2024

      Filename: project05-03.js
*/
// Reference tto the source document and TOC
const sourceDoc = document.getElementById('source_doc');
const toc = document.getElementById('toc');

console.log(sourceDoc, toc);
// Initialize heading Count
let headingCount = 1;
// Constant tag for the heading to look for
const heading = 'H2';
// Iterate through each child of the source document
for (let n = sourceDoc.firstElementChild;
n !== null; n = n.nextElementSibling) {
    if (n.nodeName === heading) {
// Create anchor element
const anchor = document.createElement('a');
anchor.name = `doclink${headingCount}`;
n.insertBefore(anchor, n.firstChild);
//Create list item and toc link
const listItem = document.createElement('li');
    const link = document.createElement('a')
    link.textContent = n.textContent;
    link.href = `#doclink${headingCount}`;
    // Append link to list item, and and list item to toc
listItem.appendChild(link);
toc.appendChild(listItem);
// Increment heading count 
headingCount++;
    }
}