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

// sao chép nội dung
// Lấy tất cả các phần tử có class "mk" và "ip"
const mkElements = document.querySelectorAll('.mk');
const ipElements = document.querySelectorAll('.ip');

// Thêm sự kiện click cho các phần tử có class "mk"
mkElements.forEach(element => {
  element.addEventListener('click', () => {
    // Lấy nội dung của phần tử và copy vào clipboard
    const content = element.querySelector('p').textContent;
    navigator.clipboard.writeText(content);
    alert('Đã sao chép nội dung mật khẩu!');
  });
});

// Thêm sự kiện click cho các phần tử có class "ip"
ipElements.forEach(element => {
  element.addEventListener('click', () => {
    // Lấy nội dung của phần tử và copy vào clipboard
    const content = element.querySelector('p').textContent;
    navigator.clipboard.writeText(content);
    alert('Đã sao chép nội dung IP Server!');
  });
});