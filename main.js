function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  setInterval(updateClock, 1000);
  window.addEventListener('load', function () {
    var welcomeMessage = document.getElementById('welcome-message');
    var closeButton = document.getElementById('close-button');

    // Show the welcome message
    welcomeMessage.style.display = 'block';

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function () {
        // Hide the welcome message
        welcomeMessage.style.display = 'none';
    });
});
