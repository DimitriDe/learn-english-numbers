function generateCorrection(number) {
    var groups = number.split(' ');
    console.log(groups);

    var groups_length = groups.length;
    console.log(groups_length);

    var gout = '';
    for (var i=0; i < groups_length ; i++) {
        gout = gout + groupToText(groups[i],i,groups_length);
    }
    return gout.trim();
}

function groupToText(number, git, gcount) {
    var out = '';
    var n1 = '';
    var n2 = '';
    var n3 = '';
    var gtype;

    number = pad(number, 3);

    //quelle unité concerne le groupe ?
    if (gcount == 3) {
        if(git == 0) gtype = 'million';
        if(git == 1) gtype = 'thousand';
        if(git == 2) gtype = 'unit';
    }
    if (gcount == 2) {
        if(git == 0) gtype = 'thousand';
        if(git == 1) gtype = 'unit';
    }

    //premier chiffre du groupe
    switch(number[0]) {
        case '1' : n1 = 'one hundred '; break;
        case '2' : n1 = 'two hundred '; break;
        case '3' : n1 = 'three hundred '; break;
        case '4' : n1 = 'four hundred '; break;
        case '5' : n1 = 'five hundred '; break;
        case '6' : n1 = 'six hundred '; break;
        case '7' : n1 = 'seven hundred '; break;
        case '8' : n1 = 'eight hundred '; break;
        case '9' : n1 = 'nine hundred '; break;
        default : break;
    }

    //second chiffre du groupe
    switch(number[1]) {
        case '1' : n2 = 'ten '; break;
        case '2' : n2 = 'twenty '; break;
        case '3' : n2 = 'thirty '; break;
        case '4' : n2 = 'fourty '; break;
        case '5' : n2 = 'fifty '; break;
        case '6' : n2 = 'sixty '; break;
        case '7' : n2 = 'seventy '; break;
        case '8' : n2 = 'eighty '; break;
        case '9' : n2 = 'ninety '; break;
        default : break;
    }

    if(n2 == 'ten ') {
        //si dizaine
        switch(number[2]) {
            case '1' : n2 = 'eleven '; break;
            case '2' : n2 = 'twelve '; break;
            case '3' : n2 = 'thirteen '; break;
            case '4' : n2 = 'fourteen '; break;
            case '5' : n2 = 'fifteen '; break;
            case '6' : n2 = 'sixteen '; break;
            case '7' : n2 = 'seventeen '; break;
            case '8' : n2 = 'eighteen '; break;
            case '9' : n2 = 'nineteen '; break;
            default : break;
        }
    } else {
        //autre
        switch(number[2]) {
            case '1' : n3 = 'one '; break;
            case '2' : n3 = 'two '; break;
            case '3' : n3 = 'three '; break;
            case '4' : n3 = 'four '; break;
            case '5' : n3 = 'five '; break;
            case '6' : n3 = 'six '; break;
            case '7' : n3 = 'seven '; break;
            case '8' : n3 = 'eight '; break;
            case '9' : n3 = 'nine '; break;
            default : break;
        }
    }

    var tand = '';
    if(gtype == 'unit') {
        tand = 'and ';
        if(number[1] == '0' && number[2] == '0') {
            tand = '';
        }
        if(number[0] == '0' && number[1] == '0' && number[2] == '0') {
            tand = '';
        }
    }

    var lastunit = '';
    if(gtype == 'million' || gtype == 'thousand') {
        lastunit = gtype + ' ';
    }


    out = n1 + tand + n2 + n3 + lastunit;

    return out;
}
