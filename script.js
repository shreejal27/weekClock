    const hand = document.querySelector('.hand');
    const currentDate = new Date();
    var currentHour = currentDate.getHours();
    const options = { weekday: 'long' };
    const day = currentDate.toLocaleString('en-US', options);

    const handDegPerHour = 2.14285;
    const onepart = 51.4285;
    const halfOfOnePart = 25.71425;

    let degree = 0;

    switch (day) {
      case 'Sunday':
         degree = 0;
        break;
      case 'Monday':
         degree = 51.43;
        break;
      case 'Tuesday':
         degree = 102.86;
        break;
      case 'Wednesday':
         degree = 154.29;
        break;
      case 'Thursday':
         degree = 205.72;
        break;
      case 'Friday':
         degree = 257.15;
        break;
      case 'Saturday':
         degree = 308.58;
        break;
    }
    // hand.style.transform = `translateX(-50%) translateY(-100%) rotate(${degree}deg)`;
    showTime(degree);

    function showTime(degree) {
      // console.log(degree);
      var midpoint = degree;
      var startdeg = midpoint - halfOfOnePart;
      var handposition = startdeg + (handDegPerHour * currentHour);
      hand.style.transform = `translateX(-50%) translateY(-100%) rotate(${handposition}deg)`;
    }
