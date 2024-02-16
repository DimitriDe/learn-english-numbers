
var prenom;
var niveau;
var generated_number;
var textual_elements = [];
var scores = [];

/*INTERFACE*/

function askFirstName() {
    prenom = null;
    while(prenom == null || prenom.trim().length < 1) {
        prenom = prompt('What\'s your name ?');
    }
    $('#firstname').text(prenom);
}

function generateNewNumber() {
    niveau = prompt('Choose level : 4,5,6,7 digits');
    if(isLevel(niveau)) {
        clearTextualNumber();
        clearTextualCorrection();
        generated_number = generateRandomNumber(niveau);
        $('#generated-number').html(generated_number.format(0,3,' ','.'));
        hideGenerate();
        showCommands();
    } else {
        alert('Ooops, incorrect level :(');
    }
}

function checkTextualNumber() {
    var corrected = generateCorrection($('#generated-number').text());
    var inputed = $('#textual-number').text().trim().toLowerCase();
    $('#textual-correction').text(corrected);
    if(corrected.localeCompare(inputed) === 0) {
        alert('Good !');
        scores.push({"number":generated_number,"result":true});
    } else {
        alert('Sorry !');
        scores.push({"number":generated_number,"result":false});
    }
    updateScore();
    hideCommands();
    showGenerate();
    generateNewNumber();
}

function clearTextualCorrection() {
    $('#textual-correction').html('');
}

function showGenerate() {
    $('#generated-number-actions').show();
}

function hideGenerate() {
    $('#generated-number-actions').hide();
}

function showCommands() {
    $('#textual-number-actions').show();
}

function hideCommands() {
    $('#textual-number-actions').hide();
}

function appendTextualNumber(text) {
    textual_elements.push(text);
    updateTextualNumber();
}

function clearTextualLastNumber() {
    textual_elements.pop();
    updateTextualNumber();
}

function clearTextualNumber() {
    textual_elements = [];
    updateTextualNumber();
}

function updateTextualNumber() {
    $('#textual-number').text(textual_elements.join(' '));
}

function updateScore() {
    $('#score-board table tbody').html('');
    var stotal = scores.length;
    var sok = 0;
    scores.forEach( function(el) {
        var ico;
        if(el.result == true) {
            sok ++;
            ico = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
        } else {
            ico = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
        }
        $('#score-board table tbody').append('<tr><td>'+el.number+'</td><td>'+ico+'</td></tr>');
    });
    $('#score').text(sok + ' / ' + stotal);
}

$(document).ready( function() {

    $('.bt-number').click( function(ev) {
        ev.preventDefault();
        appendTextualNumber($(this).text().toLowerCase());
    });

    $('.bt-generate').click( function(ev) {
        generateNewNumber();
    });

    $('.bt-check').click( function(ev) {
        checkTextualNumber();
    });

    $('.bt-clear').click( function(ev) {
        ev.preventDefault();
        clearTextualLastNumber();
    });

    $('.bt-clear-all').click( function(ev) {
        ev.preventDefault();
        clearTextualNumber();
    });
    updateScore();
    hideCommands();

    askFirstName();
    generateNewNumber();
});
