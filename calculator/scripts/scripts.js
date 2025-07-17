//Variable pour la date choisi

var votreDate = document.getElementById('votreDate');
var dateChoisi = document.getElementById('dateChoisi');

//Variable pour les variables

var ageAnnees = document.getElementById('ageAnnees');
var ageMois = document.getElementById('ageMois');
var ageJours = document.getElementById('ageJours');
var ageHeures = document.getElementById('ageHeures');
var ageSecondes = document.getElementById('ageSecondes');
var ageMilisecs = document.getElementById('ageMilisecs');

votreDate.addEventListener('change',function(){
	var options = {year: 'numeric', month: 'long', day: 'numeric'};
	var selectedDate = new Date(this.value);
	var DOB = selectedDate.toLocaleDateString('en-US',options);
	

	dateChoisi.innerHTML = "<span style='color: white;'>DOB : " + " " + DOB + "</span>";
	
	var miliSecondes_Btw_DOB = Date.parse(DOB);
	var	miliSeconde_Btw_Maintenant = Date.now();
	
	var age_en_MiliSecondes = miliSeconde_Btw_Maintenant - miliSecondes_Btw_DOB;

	//console.log(age_en_MiliSecondes);	

	var miliSecondes = age_en_MiliSecondes;
	var seconde = 1000;
	var minute = seconde*60;
	var heure = minute*60;
	var jour = heure*24;
	var mois = jour*30;
	var annee = jour*365;
	
	
	//Début de la calculatrice
	
	var annees = Math.round(miliSecondes/annee);
	var moiss = annees*12;
	var jours = annees*365;
	var heures = Math.round(miliSecondes/heure);
	var secondes = Math.round(miliSecondes/seconde);
	
	//Afficher les résultats
    ageAnnees.innerHTML = annees
	ageMois.innerHTML = moiss
	ageJours.innerHTML = jours
	ageHeures.innerHTML = heures
	ageSecondes.innerHTML = secondes
	ageMilisecs.innerHTML = miliSecondes;
	
	// Define a function to update the time
function updateTime() {
    var options = {year: 'numeric', month: 'long', day: 'numeric'};
    var selectedDate = new Date(votreDate.value);
    var DOB = selectedDate.toLocaleDateString('en-US', options);

    dateChoisi.innerHTML = "<span style='color: white;'>DOB : " + " " + DOB + "</span>";

    var miliSecondes_Btw_DOB = Date.parse(DOB);
    var miliSeconde_Btw_Maintenant = Date.now();

    var age_en_MiliSecondes = miliSeconde_Btw_Maintenant - miliSecondes_Btw_DOB;

    var miliSecondes = age_en_MiliSecondes;
    var seconde = 1000;
    var minute = seconde * 60;
    var heure = minute * 60;
    var jour = heure * 24;
    var mois = jour * 30;
    var annee = jour * 365;

    var annees = Math.round(miliSecondes / annee);
    var moiss = annees * 12;
    var jours = annees * 365;
    var heures = Math.round(miliSecondes / heure);
    var secondes = Math.round(miliSecondes / seconde);

    ageAnnees.innerHTML = annees;
    ageMois.innerHTML = moiss;
    ageJours.innerHTML = jours;
    ageHeures.innerHTML = heures;
    ageSecondes.innerHTML = secondes;
    ageMilisecs.innerHTML = miliSecondes;
}

// Call updateTime once to update the time when the page loads
updateTime();

// Call updateTime every second
setInterval(updateTime, 1);
	
	//Système d'ouverture de ma calculatrice
	
	document.querySelector('.cal-age').classList.add('expand');
})  




   


