var actualizarHora = function() {
    var fecha = new Date();
        weekDay = fecha.getDay(),
        day = fecha.getDate(),
        month = fecha.getMonth(),
        year = fecha.getFullYear(),
        hours = fecha.getHours(),
        minutes = fecha.getMinutes(),
        seconds = fecha.getSeconds(),
        ampm;

    var pWeekDay = document.getElementById('weekDay'),
        pDay = document.getElementById('day'),
        pMonth = document.getElementById('month'),
        pYear = document.getElementById('year'),
        pHours = document.getElementById('hours'),
        pMinutes = document.getElementById('minutes'),
        pSeconds = document.getElementById('seconds'),
        pAMPM = document.getElementById('ampm');        

    var allWeek = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
        pWeekDay.textContent = allWeek[weekDay] + ', ';

    pDay.textContent = day;

    var allMonth =['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    pMonth.textContent = allMonth[month];

    pYear.textContent = year;

    if(hours >= 12) {
        hours = hours - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    if(hours == 0) {
        hours = 12;
    }

    pHours.textContent = hours;

    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    pMinutes.textContent = minutes;

    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    pSeconds.textContent = seconds;
    pAMPM.textContent = ampm;
}

actualizarHora();

var intervalo = setInterval(actualizarHora, 1000);