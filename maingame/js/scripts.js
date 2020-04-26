function update() {
    document.getElementById('text').value = escapeCount;
    document.title = escapeCount + " Escape";
    document.getElementById('amountautoClicker').innerHTML = "You Own " + autoClicker + " autoClicker";
    document.getElementById('costautoClicker').innerHTML = "It'll Cost " + cost_printf + " Escape";
    document.getElementById('amountMinishell1').innerHTML = "You Own " + factory + " Factory";
    document.getElementById('costMinishell1').innerHTML = "It'll Cost " + cost_factory + " Escape";
    document.getElementById('amountsecte').innerHTML = "You Own " + secte + " secte";
    document.getElementById('costsecte').innerHTML = "It'll Cost " + cost_secte + " Escape";
    document.getElementById('amount42sh').innerHTML = "You Own " + ubisoft + " Ubisoft";
    document.getElementById('cost42sh').innerHTML = "It'll Cost " + cost_ubisoft + " Escape";
    document.getElementById('amountstudent').innerHTML = "You Own " + student + " Students";
    document.getElementById('coststudent').innerHTML = "It'll Cost " + cost_student + " Escape";
    document.getElementById('amountfortnite').innerHTML = "You Own " + fortnite + " Fortnite's player";
    document.getElementById('costfortnite').innerHTML = "It'll Cost " + cost_fortnite + " Escape";

}

var escapeCount = 0;
var autoClicker = 0;
var cost_printf = 0;
var factory = 0;
var cost_factory = 0;
var secte = 0;
var cost_secte = 0;
var ubisoft = 0;
var cost_ubisoft = 0;
var student = 0;
var cost_student = 0;
var fortnite = 0;
var cost_fortnite = 0;

function timer() {
    escapeCount = escapeCount + autoClicker;
    escapeCount = escapeCount + (secte * 2);
    escapeCount = escapeCount + (factory * 10);
    escapeCount = escapeCount + (ubisoft * 1000);
    escapeCount = escapeCount + (student * 1500);
    escapeCount = escapeCount + (fortnite * 5000);
    update()
}
setInterval(timer, 1000)

function myFunction(event) {
    var x = event.keyCode;
    if (x == 27) { // 27 is the ESC key
        escapeCount++;
        }
}

function save() {
    localStorage.setItem("escapeCount", escapeCount);
}
function load() {
    escapeCount = localStorage.getItem("escapeCount");
    escapeCount = parseInt(escapeCount);
    document.getElementById('text').value = escapeCount;
    document.title = escapeCount + " Escape";
}
function buyautoClicker() {
    if (escapeCount >= ((autoClicker + 1) * 3)) {
        escapeCount = escapeCount - ((autoClicker + 1) * 3);
        autoClicker = autoClicker + 1;
        cost_printf = (autoClicker + 1) * 3
        update()
    }
}
function buysecte() {
    if (escapeCount >= ((secte + 1) * 5)) {
        escapeCount = escapeCount - ((secte + 1) * 5);
        secte = secte + 1;
        cost_secte = (secte + 1) * 5
        update()
    }
}
function buyfactory() {
    if (escapeCount >= ((factory + 1) * 10)) {
        escapeCount = escapeCount - ((factory + 1) * 10);
        factory = factory + 1;
        cost_factory = (factory + 1) * 10
        update()
    }
}
function buyubisoft() {
    if (escapeCount >= ((ubisoft + 1) * 100)) {
        escapeCount = (escapeCount - (ubisoft + 1) * 100);
        ubisoft = ubisoft + 1;
        cost_ubisoft = (ubisoft + 1) * 10
        update()
    }
}
function buystudent() {
    if (escapeCount >= ((student + 1) * 150)) {
        escapeCount = (escapeCount - (student + 1) * 150);
        student = student + 1;
        cost_student = (student + 1) * 30
        update()
    }
}
function buyfortnite() {
    if (escapeCount >= ((fortnite + 1) * 500)) {
        escapeCount = (escapeCount - (fortnite + 1) * 500);
        fortnite = fortnite + 1;
        cost_fortnite = (fortnite + 1) * 500
        update()
    }
}