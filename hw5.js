document.addEventListener('DOMContentLoaded', function () {


    //numero uno :3

    let count1 = 0;
    const button1 = document.getElementById('button1');
    const display1 = document.getElementById('count1');
    const message1 = document.getElementById('message1');

    button1.addEventListener('click', function () {
      count1++;
      display1.textContent = count1;

      if (count1 >= 15) {
        button1.disabled = true;
        message1.textContent = "ah im full thank you!";
      }
    });

    // numero dos :3

    let count2 = 10;
    const display2 = document.getElementById('timer2');
    const resetbtn2 = document.getElementById('resetbtn2');
    let interval;

    function startTimer() {

        interval = setInterval(function() {
        count2--;
        display2.textContent = count2;

        if (count2 <= 0) {
            clearInterval(interval);
            display2.textContent = "время вышло!";
          }
        }, 1000);
      }

    resetbtn2.addEventListener('click', function () {
        clearInterval(interval);
        count2 = 10;
        display2.textContent = count2;
        startTimer();
    });

    startTimer();


    // numero tres :3

    let count3 = 0;
    let interval3;
    const display3 = document.getElementById('timer3');
    const startbtn3 = document.getElementById('startbtn3');
    const stopbtn3 = document.getElementById('stopbtn3');
    const resetbtn3 = document.getElementById('resetbtn3');

    startbtn3.addEventListener('click', function () {
      if (!interval3) {
        interval3 = setInterval(function () {
          count3++;
          display3.textContent = count3;
        }, 1000);
      }
    });

    stopbtn3.addEventListener('click', function () {
      clearInterval(interval3);
      interval3 = null;
    });

    resetbtn3.addEventListener('click', function () {
      clearInterval(interval);
      interval3 = null;
      count3 = 0;
      display3.textContent = count3;
    });


  });