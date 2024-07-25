document.addEventListener('DOMContentLoaded', function () {
    var time = 900;
    var intr;
    var minutes = document.querySelectorAll('.minutes');
    var seconds = document.querySelectorAll('.seconds');

    function start_timer() {
        intr = setInterval(tick, 1000);
    }

    function tick() {
        time = time - 1;
        var mins = Math.floor(time / 60);
        var secs = time - mins * 60;
        if (mins === 0 && secs === 0) {
            clearInterval(intr);
        }
        minutes.forEach(function (item) {
            item.innerHTML = mins >= 10 ? mins : '0' + mins;
        });
        secs = secs >= 10 ? secs : '0' + secs;
        seconds.forEach(function (item) {
            item.innerHTML = secs;
        });
    }

    start_timer();
});
