import "./styles.css";
import Dot from "./Dot";

const dotsContainer = document.getElementById("dots-container");
const dot1 = new Dot(dotsContainer, "red", 100);
const blueDot = new Dot(dotsContainer, "blue", 50);
blueDot.move(400, 300);
dot1.setRadius(20);

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const testArray = ["blue", "purple", "red", "yellow", "brown", "black"];
const selectButton = document.getElementById("button");
selectButton.addEventListener("click", function () {
  const newDot = new Dot(
    dotsContainer,
    testArray[entierAleatoire(0, 5)],
    entierAleatoire(10, 100)
  );
  newDot.move(entierAleatoire(0, 400), entierAleatoire(0, 300));
  newDot.setRadius(Math.random(0, 50));
});
// STEP 1: create new point that is blue and has a size of 50
// STEP2: move the second dot to the coordinates x: 300, y: 50
// STEP4: Set the radius of the first red sqaure to 20.
// Change the radius of the second square so that it becomes a dot.
// STEP 5: Create a new green dot that has a size of 75 and move it to the coordinates x: 350, y: 250

// Bonus 1: Select the button element, add a click event handler so that a new element is created everytime the button is clicked
// Bonus 2 : Manage a random position for each new created element.
