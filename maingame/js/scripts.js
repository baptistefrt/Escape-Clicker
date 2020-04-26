
function update() {
    document.getElementById('text').value = escapeCount;
    document.title = escapeCount + " Escape";
    document.getElementById('amountupgrade').innerHTML = "You Own " + upgrade + " Upgrades";
    document.getElementById('costupgrade').innerHTML = "It'll Cost " + cost_upgrade + " Escape";
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
    if (escapeCount > 30) {
        document.getElementById("player30").disabled = true;
    }
    if (escapeCount > 90000000) {
        document.getElementById("player").disabled = false;
        loop()
    }
}

var escapeCount = 0;
var upgrade = 0;
var cost_upgrade = 1000;
var oldCount = 0;
var autoClicker = 0;
var cost_printf = 5;
var factory = 0;
var cost_factory = 500;
var secte = 0;
var cost_secte = 250;
var ubisoft = 0;
var cost_ubisoft = 1000;
var student = 0;
var cost_student = 5000;
var fortnite = 0;
var cost_fortnite = 15000;

function timer() {
    escapeCount = escapeCount + autoClicker;
    escapeCount = escapeCount + (secte * 2);
    escapeCount = escapeCount + (factory * 5);
    escapeCount = escapeCount + (ubisoft * 20);
    escapeCount = escapeCount + (student * 50);
    escapeCount = escapeCount + (fortnite * 200);
    update()
}
setInterval(timer, 1000)

function myFunction(event) {
    document.getElementById("player").disabled = true;
    document.getElementById("player30").disabled = false;
    var x = event.keyCode;
    if (x == 27 && upgrade == 0) { // 27 is the ESC key
        escapeCount++;
        }
    if (x == 27 && upgrade != 0) { // 27 is the ESC key
        escapeCount = escapeCount * upgrade + 1;
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
function buyupgrade() {
    if (escapeCount >= ((upgrade + 1) * 1000)) {
        escapeCount = escapeCount - ((upgrade + 1) * 1000);
        upgrade = upgrade + 1;
        cost_upgrade = (upgrade + 1) * 1000
        update()
    }
}
function buyautoClicker() {
    if (escapeCount >= ((autoClicker + 1) * 5)) {
        escapeCount = escapeCount - ((autoClicker + 1) * 5);
        autoClicker = autoClicker + 1;
        cost_printf = (autoClicker + 1) * 5
        update()
    }
}
function buysecte() {
    if (escapeCount >= ((secte + 1) * 250)) {
        escapeCount = escapeCount - ((secte + 1) * 250);
        secte = secte + 1;
        cost_secte = (secte + 1) * 250
        update()
    }
}
function buyfactory() {
    if (escapeCount >= ((factory + 1) * 500)) {
        escapeCount = escapeCount - ((factory + 1) * 500);
        factory = factory + 1;
        cost_factory = (factory + 1) * 500
        update()
    }
}
function buyubisoft() {
    if (escapeCount >= ((ubisoft + 1) * 1000)) {
        escapeCount = (escapeCount - (ubisoft + 1) * 1000);
        ubisoft = ubisoft + 1;
        cost_ubisoft = (ubisoft + 1) * 1000
        update()
    }
}
function buystudent() {
    if (escapeCount >= ((student + 1) * 5000)) {
        escapeCount = (escapeCount - (student + 1) * 5000);
        student = student + 1;
        cost_student = (student + 1) * 5000
        update()
    }
}
function buyfortnite() {
    if (escapeCount >= ((fortnite + 1) * 15000)) {
        escapeCount = (escapeCount - (fortnite + 1) * 15000);
        fortnite = fortnite + 1;
        cost_fortnite = (fortnite + 1) * 15000
        update()
    }
}