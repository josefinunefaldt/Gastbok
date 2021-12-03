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

function regexTest(regex, variabelTest) {
    let bokstavTest = regex.test(variabelTest);

    if (bokstavTest === true) {
        return true;
    }

    if (bokstavTest === false) {
        return false;
    }
}

function onChange() { 
    let inmatForNamn = document.getElementById("forNamn").value;
    let aterkopplingForNamn = document.getElementById("utskriftFornamn");
    let inmatEfterNamn = document.getElementById("efterNamn");
    let aterkopplingEfterNamn = document.getElementById("utskriftEfterNamn");

    if (regexTest(/[a-ö]+i/, inmatForNamn) == true) {
        aterkopplingForNamn.innerHTML = "godkänt";
        
        console.log("rad 62");
    } else {
        aterkopplingForNamn.innerHTML = "fel";
        console.log("rad 65");
       
    }

    if (regexTest(/[a-ö]+i/, inmatEfterNamn) == true) {
        aterkopplingEfterNamn.innerHTML = "godkänt";
        
        console.log("rad 72");
    } else {
        aterkopplingEfterNamn.innerHTML = "fel";
        console.log("rad 75");
       
    }
}