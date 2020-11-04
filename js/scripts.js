

var toggleButton = document.querySelector("#button");

// Listen for a click on the button
toggleButton.addEventListener('click', function() {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle('dark-theme');  
  });

