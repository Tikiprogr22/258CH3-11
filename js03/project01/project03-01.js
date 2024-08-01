/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: LaTysha Turner
      Date:   07/11/2024

      Filename: project03-01.js
*/
//Declare a variable named menuItems
let menuItems = document.getElementsByClassName("menuItem");
// Create a for loop that loops through the contents of the menuItems collection
 
for (let i = 0; i < menuItems.length; i++) {
    // Add an event listener to the menuItems[i] element
    menuItems[i].addEventListener("click", calculateTotal);
 }

 //Function to calculate total order cost
 function calculateTotal() {
    let orderTotal = 0;

    // Loop through each menu item
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }
    // Update the total cost in the span with id billTotal
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
 }


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }