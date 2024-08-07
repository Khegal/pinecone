// 👉 TASK 1- Select the following elements from the DOM:

// BUTTONS
const launchButton = null;
console.log(document.getElementById("launchButton").innerHTML);

const confirmButton = null;
console.log(document.getElementById("confirmButton").innerHTML);

const cancelButton = null;
console.log(document.getElementById("cancelButton").innerHTML);

// MESSAGES
const successMessage = null;
console.log(document.querySelector("report success off"));

const failureMessage = null;
console.log(document.querySelector("report failure off"));

// MODAL
const modal = null;

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//      - HTML
//      - The DOM's element.onclick
//      - element.addEventListener()
// document.getElementById("launchButton").onclick = function () {
//   alert("clicked");
// };
// document.getElementById("launchButton").addEventListener("click", function () {
//   alert("clickeeededd");
// });
// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
//JavaScript
document
  .getElementsByClassName("launchButton")
  .addEventListener("click", function () {
    let element = document.querySelector(".modal.off");
    element.classList.replace("modal off", "");
  });
// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

// 👉 TASK 8- Select a link and prevent its default behavior

// 👉 TASK 9- Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.

// 👉 TASK 10- [STRETCH] Create helper functions
function openModal() {}

function closeModal() {}

function killReports() {}
