"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: LaTysha Turner
      Date:   07/23/2024

      Filename: project06-02.js
*/
window.addEventListener('load', function() {
    let allSelect = 
    document.querySelectorAll('form#govLinks');

    for(let i = 0; i < allSelect.length; i++) 
    {
        allSelect[i].onchange = function(evt)
        {
            let linkURL = evt.target.value;
            console.log(linkURL);

            let newWin = window.open(linkURL);
        };
    }
});


