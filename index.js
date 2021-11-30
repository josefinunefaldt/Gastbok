const express = require("express");
const app = express();
app.get("/", (req, res) => {  
  
    res.sendFile(__dirname + "/index.html");  // servar en statisk html-sida.
});
app.listen(3000);   // lyssnar på port 3000
console.log("Kör servern på localhost:3000");
app.use(express.static("publik"));

// för att servern ska kunna hitta filer som tex JavaScript, css-filer,bildfiler så behövs en publik mapp
app.use(express.static("publik"));

let fs = require("fs");
app.use(express.urlencoded()); 
app.post("/textfil", (req, res) => { 
    let fNamn = req.body.fNamn;
    let eNamn = req.body.eNamn;
    let teleNr = req.body.teleNr;
    let hemsida = req.body.hemsida;
    let kommentar = req.body.kommentar;
    let fullInmatning = fNamn+"\n"+eNamn+"\n"+teleNr+"\n"+hemsida+"\n"+kommentar;
    fs.appendFile("meddelanden.txt", fullInmatning, (err) => { 
        if(err) throw err;
    });
    res.send(`Skrev till fil: ${fNamn} ${eNamn} ${teleNr} ${hemsida} ${kommentar}`);
});

