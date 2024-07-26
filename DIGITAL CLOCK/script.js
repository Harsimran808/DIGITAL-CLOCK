function updateTime() {
  const now = new Date();

  // Get time components
    const hours = now.getHours().toString()
  const minutes = now.getMinutes().toString()
  const seconds = now.getSeconds().toString()

  // Get date components
  const day = now.getDate().toString()
  const month = (now.getMonth() + 1).toString()// Months are zero-based
  const year = now.getFullYear();
  const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });

  // Format the time and date strings
  const timeString = `"  ${hours}:${minutes}:${seconds}  "`;
  const dateString = `${weekday} ${month}/${day}/${year}`;

  // Update the HTML content
  const timeElement = document.getElementById('time');
  timeElement.textContent = `${timeString}\n   ${dateString}`;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
