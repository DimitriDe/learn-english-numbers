
/*LOW LEVEL UTILITIES*/

Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

/*UTILITIES*/

function isLevel(n) {
    n = parseInt(n);
    switch(n) {
        case 4:
        case 5:
        case 6:
        case 7:
            return true;
        break;
        default:
            return false;
        break;
    }
}

function generateRandomNumber(level) {
    level = parseInt(level);
    min = Math.pow(10,level-1);
    max = Math.pow(10,level) - 1;
    console.log(min);
    console.log(max);
    var num = Math.round(Math.random() * (max - min) + min);
    console.log(num);
    return num;
}
