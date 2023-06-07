
    const hand = document.querySelector('.hand');
    const currentDate = new Date();
    var currentHour = currentDate.getHours();
    const options = { weekday: 'long' };
    const day = currentDate.toLocaleString('en-US', options);

    const handDegPerHour = 2.14285;
    const onepart = 51.4285;
    const halfOfOnePart = 25.71425;

    switch (day) {
      case 'Sunday':
        var degree = 0;
        showTime(degree);

        break;
      case 'Monday':
        var degree = 51.43;
        showTime(degree);
        break;
      case 'Tuesday':
        var degree = 102.86;
        showTime(degree);
        break;
      case 'Wednesday':
        var degree = 154.29;
        showTime(degree);
        break;
      case 'Thursday':
        var degree = 205.72;
        showTime(degree);
        break;
      case 'Friday':
        var degree = 257.15;
        showTime(degree);
        break;
      case 'Saturday':
        var degree = 308.58;
        showTime(degree);
        break;
      default:
        var degree = 0;
        break;
    }
    // hand.style.transform = `translateX(-50%) translateY(-100%) rotate(${degree}deg)`;
    
    function showTime(degree) {
      // console.log(degree);
      var midpoint = degree;
      var startdeg = midpoint - halfOfOnePart;
      var handposition = startdeg + (handDegPerHour * currentHour);
      hand.style.transform = `translateX(-50%) translateY(-100%) rotate(${handposition}deg)`;
    }
