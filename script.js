function updateClock() {
    const hand = document.querySelector('.hand');
    const currentDate = new Date();
    // const hours = currentDate.getHours();
    // const minutes = currentDate.getMinutes();
    // const seconds = currentDate.getSeconds();
    
  
    hand.style.transform = `translateX(-50%) translateY(-100%) rotate(51.43deg)`;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);
  