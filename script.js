
    const hand = document.querySelector('.hand');
    const currentDate = new Date();
    const options = { weekday: 'long' };
    const day = currentDate.toLocaleString('en-US', options);

    switch (day) {
      case 'Sunday':
        var degree = 0;
        break;
      case 'Monday':
        var degree = 51.43;
        break;
      case 'Tuesday':
        var degree = 102.86;
        break;
      case 'Wednesday':
        var degree = 154.29;
        break;
      case 'Thursday':
        var degree = 205.72;
        break;
      case 'Friday':
        var degree = 257.15;
        break;
      case 'Saturday':
        var degree = 308.58;
        break;
      default:
        var degree = 0;
        break;
    }
    hand.style.transform = `translateX(-50%) translateY(-100%) rotate(${degree}deg)`;
  