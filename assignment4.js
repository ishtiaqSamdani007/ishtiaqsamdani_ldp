// Create a simple application which displays two counts:Local Score, Session Score and a button to increment these counts. Local score must persist in Local Storage and Session score must persist in Session Storage and must reset on closing the session.

// Get local score element
let localScore = document.getElementById("local-score");

// Get session score element
let sessionScore = document.getElementById("session-score");

// Get local increment button
let localIncrement = document.getElementById("local-increment");

// Get session increment button
let sessionIncrement = document.getElementById("session-increment");

// Set initial scores from local and session storage
localScore.textContent = window.localStorage.getItem("localScore") || 0;
sessionScore.textContent = window.sessionStorage.getItem("sessionScore") || 0;

// Increment local score
localIncrement.addEventListener("click", () => {
    let currentScore = parseInt(localScore.textContent);
    localScore.textContent = currentScore + 1;
    window.localStorage.setItem("localScore", localScore.textContent);
});

// Increment session score
sessionIncrement.addEventListener("click", () => {
    let currentScore = parseInt(sessionScore.textContent);
    sessionScore.textContent = currentScore + 1;
    window.sessionStorage.setItem("sessionScore", sessionScore.textContent);
});


// window.addEventListener("beforeunload", () => {
//     window.sessionStorage.setItem("sessionScore", 0);
// });
