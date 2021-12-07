function inlagg() { // funktionen startar när body har laddats
    let forfragan = new XMLHttpRequest(); // skapar nytt request
    forfragan.open("GET", "../text.json", true); // öppnar jsonfilen
    forfragan.onload = function () { // funktionen körs när jsonfilen har hämtats
    
        let data = JSON.parse(this.response); // tolka JSON-svaret

        for (let i = data.length - 1; i >= 0; i--) { // en loop som kör igenom alla inmatningarna

            const tiden =document.createElement("p"); //skapar en p-tagg
            tiden.setAttribute("class", "tiden"); //gör den till en class "tiden"
            tiden.textContent = data[i].tid; // skriver ut exakta tid och datum 
            document.body.appendChild(tiden); // texten placeras i body

            const fNamn = document.createElement("p");// skapar en p-tagg
            fNamn.textContent = data[i].namn; // skriver ut förnamn i ptaggen
            document.body.appendChild(fNamn); // texten placeras i body

            const eNamn = document.createElement("p"); //skapar en p-tagg
            eNamn.textContent = data[i].efternamn;//skriver ut efternamn i ptaggen
            document.body.appendChild(eNamn);//texten placeras i body

            const nummer = document.createElement("p");//skapar en p-tagg
            nummer.textContent = data[i].telefonnummer;//skriver ut telefonnummer i ptaggen
            document.body.appendChild(nummer);// texten placeras i body

            const kommentar = document.createElement("p");// skapar en p-tagg
            kommentar.textContent = data[i].kommentar;//kommentarer skrivs ut i ptaggen
            document.body.appendChild(kommentar);//texten placeras i body

            const minDiv = document.createElement("div");//skapar en div
            minDiv.setAttribute("class", "minDiv");// gör den till class "minDiv"
            document.body.appendChild(minDiv);//div placeras i body
        }
    };

     forfragan.send(); // funktionen forfragan startar
}

let minForstaBool = true; // initierar en bool som är true

function testInput(regex, variabelTest,aterkoppling) {// en funktion med tre inparametrar
    let inmatningsTest = regex.test(variabelTest); // testar regular expressions
  
    if (inmatningsTest === true) { // om inmatningen är true
        console.log("Rätt inmatat");
        aterkoppling.innerHTML = " ";
        minForstaBool;
        document.getElementById("minKnapp").disabled = false;  // knappen blir "klickbar"         
    }

    if (inmatningsTest === false) { // om inmatningen är false
        aterkoppling.style.color="red";
        aterkoppling.innerHTML = " *Felmeddelande!";
        aterkoppling.style.margin=" 0.5% 0px 0px 52%";
        aterkoppling.style.fontSize="14px"  
        minForstaBool=false;    
        document.getElementById("minKnapp").disabled = true; // knappen blir "oklickbar"
    }

    inmatningsTest=null; // nollställer testet
}

function onChange(inputFalt) { // en funktion som startar när vi skriver i formuläret
    let inmatForNamn = document.getElementById("forNamn").value; // hämtar värdet i formuläret "forNamn"
    let inmatEfternamn = document.getElementById("efterNamn").value;// hämtar värdet i formuläret "efterNamn"
    let inmatTelefon = document.getElementById("telefonNummer").value;// hämtar värdet i formuläret "telefonNummer"
    let aterkopplingForNamn = document.getElementById("utskriftForNamn");// hämtar ptagg
    let aterkopplingEfterNamn = document.getElementById("utskriftEfterNamn");// hämtar ptagg
    let aterkopplingTeleNr = document.getElementById("utskriftTeleNr");// hämtar ptagg
      
    if (inputFalt=='namn'){ // om man skriver i fältet namn

    testInput(/^[a-ð ,.'-]+$/i,inmatForNamn,aterkopplingForNamn);          
    }

   if(inputFalt=='efternamn'){ // om man skriver i fältet efternamn

    testInput(/^[a-ð ,.'-]+$/i,inmatEfternamn,aterkopplingEfterNamn); // anropar funktion testInput där det testas inmatning för bokstäver, samt skriver ut återkoppling
    }

   if(inputFalt=='telefonNummer'){ // om man skriver i fältet telefonnummer

    testInput(/\d+/,inmatTelefon,aterkopplingTeleNr);// anropar funktion testInput där det testas inmatning för siffror, samt skriver ut återkoppling
   }

   if(minForstaBool==false){ // om bool är falsk

   alert("Oj,något gick fel! Rätta det rödmarkerade fältet och försök igen"); // felmeddelande
     minForstaBool=null; // bool återställs
   }

   if(minForstaBool==true){ // om bool är sann

    console.log("rätt inmatat"); // skriver ut i consolen
   }
}







    
