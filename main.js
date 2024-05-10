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
  // day y
  window.onload = function() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
  
    var dateElement = document.getElementById("date");
    dateElement.innerHTML = "Ngày " + day + " tháng " + month + " năm " + year;
  };
      // JavaScript để thực hiện hiệu ứng trượt từ dưới lên và hiển thị nội dung trang web
    
    // Hiệu ứng trượt từ dưới lên và hiển thị nội dung
    function showContent() {
      var loader = document.getElementById('loader');
      var content = document.getElementById('content');
      
      // Hiệu ứng trượt từ dưới lên
      loader.style.display = 'none';
      content.style.display = 'block';
      content.style.transform = 'translateY(100%)';
      content.style.transition = 'transform 0.5s ease-in';
      setTimeout(function() {
        content.style.transform = 'translateY(0)';
      }, 100);
      
      // Tắt hiệu ứng và hiển thị nội dung trang web
      setTimeout(function() {
        content.style.transition = '';
      }, 600);
    }
    
    // Tự động bật hiệu ứng khi tải trang
    window.addEventListener('load', function() {
      setTimeout(function() {
        showContent();
      }, 2500);
    });