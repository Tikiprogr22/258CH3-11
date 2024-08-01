"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: LaTysha Turner
      Date:   07/16/2024

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

//Sample implementation baased on the provided steps

document.addEventListener('DOMContentLoaded' ,
    function () {
        const phrases = document.querySelectorAll('dfn');
        const footnotes = [
            'First footnote text' ,
            'Second footnote text' ,
        ];

        for (let i = 0; i < phrases.length; i++) {
            phrases[i].onclick = function () {
            // Create element for popup
            const phrase = document.createElement('h1');
            phrase.textContent = this.textContent;

            const footnote = document.createElement('p');
            footnote.textContent = footnotes[i];
            footnote.style.fontStyle = 'italic';
            footnote.style.fontSize = '1.2em';

            const closeButton = document.createElement('input');
            closeButton.type = 'button';
            closeButton.value = 'Close Footnote';
            closeButton.style.display = 'block';
            closeButton.style.margin = '10px auto';

            // Create and style the popup window
            const popup = window.open('', 'footnote', 'width=300, height=200, top=100, left=100');
            popup.document.body.style.backgroundColor = 'ivory';
            popup.document.body.style.fontSize = '16px';
            popup.document.body.style.padding = '10px';

            // Append elements to the popup window
            popup.document.body.appendChild(phrase);
            popup.document.body.appendChild(footnote);
            popup.document.body.appendChild(closeButton);

            // Add event listener to close the popup
            closeButton.onclick = function () {
                popup.close();
            }
            }
        }
    }
)
