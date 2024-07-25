function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update the clock every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time immediately
  updateTime();
  