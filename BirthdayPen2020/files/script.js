const synth = new Tone.Synth({      //FMSynth
    oscillator: {
        type: "sine",               //pwm
        modulationFrequency: 0.9    //0.2
    },
    envelope: {
        attack: 0.01,   // 0.02
        decay: 0.2,     //0.2
        sustain: 0.2,   //0.2
        release: 0.1,   //0.9
    }
}).toMaster();

let note;

function getkey(note) {
    synth.triggerAttack(note);
    document.getElementById(note).classList.replace('white', 'white-dark');
    document.getElementById(note).classList.replace('black', 'black-light');
}

function keyRele(note) {
    synth.triggerRelease();
    document.getElementById(note).classList.replace('white-dark', 'white');
    document.getElementById(note).classList.replace('black-light', 'black');
}

function unmute(){
    synth.triggerAttackRelease('A4', '8n' );
    document.getElementById('query').style.display = "none";
    document.getElementById('a111').style.opacity = 1;
    document.getElementById('a112').style.opacity = 1;
    document.getElementById('a113').style.opacity = 1;
}