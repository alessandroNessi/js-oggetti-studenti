function printStudents(){
    document.getElementById("userList").innerHTML="";
    studenti.forEach(function (element, index){
        document.getElementById("userList").innerHTML+=`<li> <strong>studente${index+1}:</strong></li>`;
        document.getElementById("userList").innerHTML+=`<li>${element.nome}</li>`;
        document.getElementById("userList").innerHTML+=`<li>${element.cognome}</li>`;
        document.getElementById("userList").innerHTML+=`<li>${element.eta}</li><hr>`;
    });
}
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
    document.getElementById("proprietyList").innerHTML+=`<li>${key}:<input id="${key}" type="text"></li>`;
}
printStudents();
document.getElementById("newStudent").addEventListener("click", function(){
    let nome=document.getElementById("nome").value, cognome, eta;
    if(nome.length>0 && nome.length<50 && isNaN(parseInt(nome))){
        let cognome=document.getElementById("cognome").value;
        if(cognome.length>0 && cognome.length<50 && isNaN(parseInt(cognome))){
            let eta=parseInt(document.getElementById("eta").value);
            if(eta>0 && !isNaN(eta)){
                let newstudent ={
                    "nome": nome,
                    "cognome": cognome,
                    "eta": eta
                };
                studenti.push(newstudent);
                printStudents();
            }   
        }
    }
});