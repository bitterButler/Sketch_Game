/*Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. 
Don’t try to create them by hand by copying and pasting them in your HTML file!
It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.
Use Flexbox to make the divs appear as a grid (versus just one on each line). 
Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. 
This project is an opportunity specifically to practice Flexbox!
Be careful with borders and margins, as they can adjust the size of the squares!*/

var gridNum;

function generateGrid(gridNum){
  for (var i = 0; i < gridNum; i++){
    var div = document.createElement("div");
    var myContainer = document.querySelector(".flex-container");
    //myContainer.style.width = "1500px";
    //myContainer.style.height = "500px";
    // set style
    div.style.width = "100%";
    //div.style.height = "10px";
    //div.style.background = "grey";
    //div.style.border = "0.05px solid gray";
    //div.innerText = i+1;
    //div.style.fontSize ="5px";
    // better to use CSS though - just set class
    div.setAttribute("class", "row"); // and make sure myclass has some styles in css
    myContainer.appendChild(div); //document.getElementById("main").appendChild(div);
    
    for (var j = 0; j < gridNum; j++){
      var innerDiv = document.createElement("div"); //column divs
      // set style
      innerDiv.style.width = "15px";
      innerDiv.style.height = "15px";
      //innerDiv.style.background = "white";
      innerDiv.style.border = "0.1px solid grey";
      innerDiv.setAttribute("class", "col");
      div.append(innerDiv);
    }
  }
  /*Set up a “hover” effect*/
  var smallBox = document.querySelectorAll(".col");
  for (i = 0; i < smallBox.length; i++){
    smallBox[i].addEventListener("mouseenter", function(){
    this.classList.add("hover");
  });
  smallBox[i].addEventListener("mouseleave", function() {
    this.classList.remove("hover");
  });
  }
}

function resetGrid(){
  newGridNum = 0;
  gridNum = 0;
  document.querySelector(".col").remove();
  document.querySelector(".row").remove();

}



/*Set up a “hover” effect so that the grid divs change color when your mouse passes over them, 
leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. 
You can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
Adding a new class to the div.
Changing the div’s background color using JavaScript.*/


//MAYBE I COULD DO "function hovering(){}" ??? - dont think rn that its necessary.
//var smallBox = document.querySelectorAll(".col");
//for (i = 0; i < smallBox.length; i++){
//  smallBox[i].addEventListener("mouseenter", function(){
//  this.classList.add("hover");
//});
//smallBox[i].addEventListener("mouseleave", function() {
//  this.classList.remove("hover");
//});
//}

/*Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) 
so that you’ve got a new sketch pad.
Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, 
potentially causing delays, freezing, or crashing that we want to prevent.
Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used. */

var tablazat = document.querySelector(".tablazat");
const newButton = document.createElement("button");
newButton.textContent = "Grid numbers modify!";
tablazat.append(newButton);

var myButton = document.querySelector("button");
myButton.style.marginLeft = "50px";
myButton.setAttribute("class", "gridNumBtn");

var myButton = document.querySelector(".gridNumBtn");
myButton.addEventListener("click", function(){
  var newGridNum = prompt("Enter a number for grid (max 100): ");
  var numOK = false;
  while(!numOK){
    if (newGridNum < 100){
      gridNum = newGridNum;
      numOK = true;
      //function for generating the grid (top 2 for loops needs to have its own "generateGrid" function)
      //generateGrid(0);
      generateGrid(newGridNum);
    }
    else {
      newGridNum = prompt("Too much. Try again: ");
    }
  }
  myContainer.replaceChildren();

})
