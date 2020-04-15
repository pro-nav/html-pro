let len, del, t0;

t0 = 5000;

function playNote(note, len, del) {
    setTimeout(function () {
        getkey(note);
    }, t0);
    setTimeout(function () {
        keyRele(note);
    }, t0 + len);
    setTimeout(function () {
        console.log(note);
    }, t0 + len + del);

    t0 = t0 + len + del;
}

playNote('C4', 250, 500);
playNote('C4', 250, 250);
playNote('D4', 1000, 250);
playNote('C4', 1000, 250);
playNote('F4', 1000, 250);
playNote('E4', 2000, 500);
playNote('C4', 250, 500);
playNote('C4', 250, 250);
playNote('D4', 1000, 250);
playNote('C4', 1000, 250);
playNote('G4', 1000, 250);
playNote('F4', 2000, 500);
playNote('C4', 250, 500);
playNote('C4', 250, 250);
playNote('C4', 1000, 250);
playNote('A4', 1000, 250);
playNote('F4', 500, 250);
playNote('F4', 250, 250);
playNote('E4', 1000, 250);
playNote('D4', 2000, 500);
playNote('A#4', 250, 500);
playNote('A#4', 250, 250);
playNote('A4', 1000, 250);
playNote('F4', 1000, 250);
playNote('G4', 1000, 250);
playNote('F4', 2000, 250);