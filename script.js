let table = [];
for (var i = 0; i < 5; i++) {
    table[i] = prompt("Podaj swoje zainteresowanie ");
}


var list = document.querySelector("#list");
for (var a = 0; a < table.length; a++) {
    var newList = document.createElement("LI");
    var newText = document.createTextNode(table[a]);
    newList.appendChild(newText);
    list.insertBefore(newList, list.childNodes[a + 1]);
}

var button = document.querySelector("#dodaj");
button.addEventListener("click", click);

function click() {
    var input = document.querySelector("#in");
    var output = document.querySelector("#out");
    output.innerHTML = input.value;

    console.log(input.value);
}

function changecolor() {
    $("h1").css("color", "blue");
}
$("h1").fadeOut(3000);
$("h1").delay(5000);
$("h1").fadeIn(0, changecolor);
