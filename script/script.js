var studente1 ={
    "nome": "marco",
    "cognome": "rossi",
    "eta": 25
};
var studente2 = {
    "nome": "dario",
    "cognome": "gialli",
    "eta": 25
};
var studente3 = {
    "nome": "mario",
    "cognome": "verdi",
    "eta": 25
};
var studenti=[studente1, studente2, studente3];
console.log(studenti);
for(var key in studente1){
    document.getElementById("proprietyList").innerHTML+=`<li>${key}</li>`;
}
