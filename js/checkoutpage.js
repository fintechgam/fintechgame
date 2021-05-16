var BlazorCheckout = {
    CountDown: function(second) {
        var left = second;
        var el = document.getElementsByClassName('timer-b');
        var i = 0;
        for (i = 0; i < el.length; i++) {
            el[i].innerHTML = duration2(left);
        }
        left--;
        return;
    },
    CopyInput: function(id) {
        var copyText = document.getElementById(id);
        copyText.select();
        document.execCommand("copy");
        return true;
    }
}

function duration2(secs) {
    if (secs <= 0) {
        return "Too Late";
    }
    var vHour = Math.floor(secs / 3600);
    secs -= (vHour * 3600);
    var vMin = Math.floor(secs / 60);
    secs -= (vMin * 60);
    var sout = '';
    if (vHour > 0) {
        sout = vHour + ':';
    }
    sout = sout + pad(vMin) + ':';
    sout = sout + pad(secs);
    return sout.trim();
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}