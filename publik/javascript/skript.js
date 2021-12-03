function inlagg() {
    // hämtar data från servern
    let forfragan = new XMLHttpRequest(); // skapa nytt request
    forfragan.open("GET", "./text.json", true); // öppna min jsonfil

    forfragan.onload = function () {
        // när resultatet laddats.

        let data = JSON.parse(this.response); // tolka JSON-svaret

        for (let i = data.length - 1; i >= 0; i--) {
            const fNamn = document.createElement("p");
            fNamn.setAttribute("class", "fNamn");
            fNamn.textContent = data[i].namn;
            
            document.body.appendChild(fNamn);

            const eNamn = document.createElement("p");
            eNamn.setAttribute("class", "eNamn");
            eNamn.textContent = data[i].efternamn;
            document.body.appendChild(eNamn);

            const nummer = document.createElement("p");
            nummer.setAttribute("class", "nummer");
            nummer.textContent = data[i].telefonnummer;
            document.body.appendChild(nummer);

            const kommentar = document.createElement("p");
            kommentar.setAttribute("class", "kommentar");
            kommentar.textContent = data[i].kommentar;
            document.body.appendChild(kommentar);
            const minDiv = document.createElement("div");
            minDiv.setAttribute("class", "minDiv");
            document.body.appendChild(minDiv);
        }
    };

    forfragan.send();
}

let minForstaBool = true;

function testInput(regex, variabelTest,aterkoppling) {
    let inmatningsTest = regex.test(variabelTest); // testar regular expressions
   
  
    if (inmatningsTest === true) {
        console.log("Rätt inmatat");
        aterkoppling.innerHTML = " ";
        minForstaBool;
        document.getElementById("minKnapp").disabled = false;
              
    }

    if (inmatningsTest === false) {
        aterkoppling.style.color="red";
        aterkoppling.innerHTML = " *Felmeddelande!";
        aterkoppling.style.margin=" 1px 0px 0px 75px";
        aterkoppling.style.fontSize="14px"  
        minForstaBool=false;    
        document.getElementById("minKnapp").disabled = true;
    }

    inmatningsTest=null;
}

function onChange(inputFalt) { 
    let inmatForNamn = document.getElementById("forNamn").value;
    let inmatEfternamn = document.getElementById("efterNamn").value;
    let inmatTelefon = document.getElementById("telefonNummer").value;
    let aterkopplingForNamn = document.getElementById("utskriftForNamn");
    let aterkopplingEfterNamn = document.getElementById("utskriftEfterNamn");
    let aterkopplingTeleNr = document.getElementById("utskriftTeleNr");
    
   
    if (inputFalt=='namn'){

    testInput(/^[a-ð ,.'-]+$/i,inmatForNamn,aterkopplingForNamn);          

    }

   if(inputFalt=='efternamn'){

    testInput(/^[a-ð ,.'-]+$/i,inmatEfternamn,aterkopplingEfterNamn);
   }

   if(inputFalt=='telefonNummer'){

    testInput(/\d+/,inmatTelefon,aterkopplingTeleNr);
   }

   if(minForstaBool==false){

   alert("Oj,något gick fel! Rätta det rödmarkerade fältet och försök igen");
    minForstaBool=null;
   }
   if(minForstaBool==true){

    console.log("rätt inmatat");
   }

    
}



    
