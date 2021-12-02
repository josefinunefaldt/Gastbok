
function inlagg() {
// hämtar data från servern
let forfragan = new XMLHttpRequest(); // skapa nytt request
forfragan.open('GET', './text.json', true); // öppna min jsonfil

forfragan.onload = function () {  // när resultatet laddats.

let data = JSON.parse(this.response); // tolka JSON-svaret
for(let i = data.length-1; i>=0; i--){

const postName = document.createElement("p");
postName.setAttribute("class","postName");
postName.textContent = data[i].namn;
document.body.appendChild(postName);

const enamn = document.createElement("p");
enamn.setAttribute("class","enamn");
enamn.textContent = data[i].efternamn;
document.body.appendChild(enamn);

const nummer = document.createElement("p");
nummer.setAttribute("class","nummer");
nummer.textContent = data[i].telefonnummer;
document.body.appendChild(nummer);


   
}
}
forfragan.send();
}

