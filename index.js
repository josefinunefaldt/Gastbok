const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let fs = require("fs");
app.use(express.static("publik"));

app.get("/",async function (req, res){ 
res.sendFile(__dirname + "/login.html"); // servar en statisk html-sida.
});

// för att servern ska kunna hitta filer som tex JavaScript, css-filer,bildfiler så behövs en publik mapp
app.use(express.static("publik"));
const file = "publik/text.json"; 

app.use(bodyParser.urlencoded({ extended: true })) 
app.post("/textfil", (req, res) => {  // funktion med formulär "textfil"

  //hämtar inmatningar i formuläret samt har escape-sekvenser för att motverka ondskefull inmatning
  let nyttEfterNamn = req.body.eNamn.replace(/</g, "&lt;"); 
  let nyttForNamn = req.body.fNamn.replace(/</g, "&lt;");
  let nyttTeleNr = req.body.teleNr.replace(/</g, "&lt;");
  let nyKommentar = req.body.kommentar.replace(/</g, "&lt;");
  let tidJustNu = new Date().toISOString().substr(0, 16); 

  let person ={ // objekt person som sedan ska läggas in i jsonfilen
  
    tid: tidJustNu,
    namn: nyttForNamn,
    efternamn: nyttEfterNamn,
    telefonnummer: nyttTeleNr,
    kommentar: nyKommentar,
  }

  let data = fs.readFileSync(file); // läser in data från file som är json rådata
  let parseData = JSON.parse(data); //gör om data,översätter till JavaScript-format 
  parseData.push(person); // pushar in objektet i ParseData som nu är i JavaScriptformat
 
  let inmata = JSON.stringify(parseData); // gör om JavaScriptinnehåll till json-stringdata, funkar det inte att skriva writefile utan att göra detta
  fs.writeFile(file, inmata, (err) => {  
       if (err) throw err;   
  });

  res.redirect("/Gastbok"); // kommer till gästboksssidan
});

app.get("/Gastbok", async function(req, res) { // gör detta så det ska se "snyggare ut" då det står /Gastbok istället i adressfältet
res.sendFile(__dirname + "/publik/html/index.html");  // servar en statisk html-sida.
});

app.post("/loggain", async function(req, res) { // en funktion från logga in formuläret

  var anvandarNamn = req.body.epost; // hämtar värdet från epost
  var losen = req.body.losen;// hämtar värdet från lösenordet
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;// regex för giltig email
 	
  if(anvandarNamn ==''){ // om användaren inte skriver någonting så stannar den kvar på samma sida
  res.redirect("/");  
  }

  else if(losen==''){// om användaren inte skriver någonting så stannar den kvar på samma sida
  res.redirect("/");
  }

  else if(!regex.test(anvandarNamn)){// om användaren skriver ogiltig inmatning så stannar den kvar på samma sida
  res.redirect("/");  
  }

  else if(losen.length < 6 || losen.length > 10){ // om användaren inte skriver ogiltigt lösenord så stannar den kvar på samma sida
  res.redirect("/");
  }

  else {
  res.redirect("/Gastbok");// om användaren skriver rätt så kommer den till sidan för gästboken
  }
});

app.listen(3000);   // lyssnar på port 3000
console.log("Kör servern på localhost:3000");






    

