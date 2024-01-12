let end = new Date("2/2/2024 00:00:00").getTime();
let check = setInterval(function () {
    let now = new Date().getTime();
    let distance = end - now;
    let day = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    let second = Math.floor((distance % (60 * 1000)) / 1000);


    document.getElementById('day').innerText = day;
    document.getElementById('hours').innerText = hour;
    document.getElementById('minutes').innerText = minute;
    document.getElementById('seconds').innerText = second;

}, 1000);



