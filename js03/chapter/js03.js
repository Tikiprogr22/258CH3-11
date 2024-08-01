/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */
    /*Days of the week */
     let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday", "Saturday"];

     window.addEventListener("load", addWeekDays);
     //Function to write weekday names into the calendar 
     function addWeekDays() {
        let i = 0; //initial counter value
        //Reference the collection of heading cells
        let headingCells = document.getElementsByTagName("th");
        //Write each of the seven days into a heading cell
        while (i < 7) {
            headingCells[i].innerHTML = weekDays[i];
            //Increase the counter by 1
            i++;
        }
        window.addEventListener("load", showGames);
        
        //Function to write game information into the calendar
        function showGames()
        {
            for (let i = 0; i < gameDates.length; i++) {
                let gameInfo = "";

                //Open the paragraph
                gameInfo += "<p>";

                //Include the Opponent
                gameInfo += gameOpponents[i] + "<br>";

                //Include the result and score
                gameInfo += gameResults[i] + ": (" + runScored[i] + " - " + runsAllowed[i] + ")";

                // Close the paragraph
                gameInfo += "</p>";

                // Write the information into the table cell
                let tableCell = document.getElementById(gameDates[i]);
                tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
            }
        }
     }
