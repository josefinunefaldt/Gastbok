
function knapp(){ // funktionen startas när användaren klickar på logga in
	var anvandarNamn = document.getElementById("ePost").value; // hämtar värdet från inmatningsfältet "ePost" 
	var losen = document.getElementById("losenOrdet").value;// hämtar värdet från inmatningsfältet "losenOrdet"
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;// regex för giltig email
		
	if(anvandarNamn ==''){ // om det inte skrivs något i fältet 
	alert("Skriv ditt användarnamn!");		
	}

	else if(losen==''){// om det inte skrivs något i fältet 
    alert("Ange lösenord!");			
	}

	else if(!regex.test(anvandarNamn)){// om användaren inte skriver rätt enligt regular expressions
	alert("Ogilitg email!");
	}

	else if(losen.length < 6 || losen.length > 10){ // om lösenordet inte är emellan 6-10 tecken
	alert("Oj! lösenordet ska vara mellan 6-10 tecken.");
	}
}


