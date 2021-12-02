const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let fs = require("fs");
app.use(express.static("publik"));
app.listen(3000);   // lyssnar på port 3000
console.log("Kör servern på localhost:3000");
app.get("/", (req, res) => {  
  
res.sendFile(__dirname + "/index.html");  // servar en statisk html-sida.
});
const file = "./publik/text.json";

// för att servern ska kunna hitta filer som tex JavaScript, css-filer,bildfiler så behövs en publik mapp
app.use(express.static("publik"));


app.use(bodyParser.urlencoded({ extended: true })) 
app.post("/textfil", (req, res) => { 
   
let person = {
namn: req.body.fNamn,
efternamn: req.body.eNamn,
telefonnummer: req.body.teleNr,
kommentar: req.body.kommentar

}

let data = fs.readFileSync(file); // läser in data från file
 let parseData = JSON.parse(data); //gör om data till json
 parseData.push(person);
 
 let inmata = JSON.stringify(parseData);
     fs.writeFile(file, inmata, (err) => {
       if (err) throw err;
   
 });



});





    





