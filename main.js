function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      const notification = document.getElementById('copy-notification');
      notification.style.opacity = '1';
      setTimeout(() => {
        notification.style.opacity = '0';
      }, 2000);
      console.log('Text copied to clipboard:', text);

      // Tạo hiệu ứng pháo hoa
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    })
    .catch((error) => {
      console.error('Failed to copy text:', error);
    });
}

function disableWebsite() {
  document.body.classList.add('disabled');

  const disableMessage = document.createElement('div');
  disableMessage.classList.add('disable-message');

  if (new Date().getHours() >= 21 || new Date().getHours() < 8) {
    disableMessage.textContent = 'Website đang đóng (từ 21:00 - 08:00).';
  } else if (new Date().getHours() >= 11 && new Date().getHours() < 13) {
    disableMessage.textContent = 'Website đang đóng (từ 11:00 - 13:00).';
  }

  if (!document.querySelector('.disable-message')) {
    document.body.appendChild(disableMessage);
  }
}

function enableWebsite() {
  document.body.classList.remove('disabled');

  const disableMessage = document.querySelector('.disable-message');
  if (disableMessage) {
    document.body.removeChild(disableMessage);
  }
}

function checkWebsiteStatus() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if ((currentHour >= 21 && currentHour < 24) || (currentHour >= 0 && currentHour < 8) || (currentHour >= 11 && currentHour < 13)) {
    disableWebsite();
  } else {
    enableWebsite();
  }
}

setInterval(checkWebsiteStatus, 1000);

setInterval(checkWebsiteStatus, 1000);

fetch('https://docs.google.com/spreadsheets/d/1wmVxlgrp4gHr-0y6RxY-_t_oZh5aFgBD2A8DQFHfkpM/export?format=csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.trim().split('\n');
    const cardContainer = document.getElementById('card-container');

    rows.forEach((row, index) => {
      if (index > 0) { // Skip the header row
        const [tenMayNhanh, matKhau, ipServer, trangThai] = row.split(',');
        const statusClass = trangThai.trim().toLowerCase() === 'hoạt động' ? 'active' : 'inactive';

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h3>${tenMayNhanh}</h3>
          <p>Mật khẩu: ${matKhau} <span class="copy-btn" onclick="copyToClipboard('${matKhau}')">Copy</span></p>
          <p>IP server: ${ipServer} <span class="copy-btn" onclick="copyToClipboard('${ipServer}')">Copy</span></p>
          <p id="tt" class="${statusClass}"> ${trangThai}</p>
        `;
        cardContainer.appendChild(card);
      }
    });
  })
  .catch(error => console.error('Error:', error));