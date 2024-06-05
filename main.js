
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