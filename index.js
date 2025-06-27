// This line ensures that JavaScript runs ONLY after the HTML is fully loaded and parsed.
document.addEventListener("DOMContentLoaded", function () {
  // Log to verify timing
  console.log("The DOM has loaded");

  // Find the paragraph with id="text"
  const paragraph = document.getElementById("text");

  // Change its content using `textContent` (as required by the lab)
  paragraph.textContent = "This is really cool!";
});

// This log runs immediately, before the DOM is ready
console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
