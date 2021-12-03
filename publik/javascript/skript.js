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

function regexTest(regex, variabelTest,) {
    let bokstavTest = regex.test(variabelTest); // testar regular expressions
    let aterkoppling = document.getElementById("utskrift");

    if (bokstavTest === true) {

        aterkoppling.innerHTML = "godkänt";
       
    }

    if (bokstavTest === false) {
        aterkoppling.innerHTML = "fel";
     
    }

    bokstavTest=null;
}

function onChange(namn) { 
    let inmatForNamn = document.getElementById("forNamn").value;
    let inmatEfternamn = document.getElementById("efterNamn").value;
    let inmatTelefon = document.getElementById("telefonNummer").value;
   
    if (namn=='namn'){

    regexTest(/^[a-ð ,.'-]+$/i,inmatForNamn);   

    }

   if(namn=='efternamn'){

    regexTest(/^[a-ð ,.'-]+$/i,inmatEfternamn,);
   }

   if(namn=='telefonNummer'){

    regexTest(/\d+/,inmatTelefon,);


   }

    
}



    
