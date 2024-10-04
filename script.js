let table = [];
for (let i = 0; i < 5; i++) {
    table[i] = prompt("Podaj swoje zainteresowanie ");
}


let list = document.querySelector("#list");
for (let a = 0; a < table.length; a++) {
    let newList = document.createElement("LI");
    let newText = document.createTextNode(table[a]);
    newList.appendChild(newText);
    list.insertBefore(newList, list.childNodes[a + 1]);
}

const button = document.querySelector("#dodaj");
button.addEventListener("click", click);

function click() {
    let input = document.querySelector("#in");
    let output = document.querySelector("#out");
    output.innerHTML = input.value;
    output.style.color="green";
    output.style.fontWeight="bold";
    
    console.log(input.value);
}

function changecolor() {
    $("h1").css("color", "blue");
}
$("h1").fadeOut(3000);
$("h1").delay(5000);
$("h1").fadeIn(0, changecolor);
