/*print students in ul "userList" */
function printStudents(){
    document.getElementById("userList").innerHTML="";
    studenti.forEach(function (element, index){
        document.getElementById("userList").innerHTML+=`<li> <strong>studente${index+1}:</strong></li>`;
        document.getElementById("userList").innerHTML+=`<li>${element.nome}</li>`;
        document.getElementById("userList").innerHTML+=`<li>${element.cognome}</li>`;
        document.getElementById("userList").innerHTML+=`<li>${element.eta}</li><hr>`;
    });
}

//declaring vars
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
//end declaring vars

// print students in the ul proprietyList with an adjacent input for the new insert
for(var key in studente1){
    document.getElementById("proprietyList").innerHTML+=`<li>${key}:<input id="${key}" type="text"></li>`;
}

//prints the students that we placed in the var declaration into "userList"
printStudents();

//gives the click event to the button and add and check new students
document.getElementById("newStudent").addEventListener("click", function(){
    let nome=document.getElementById("nome").value, cognome, eta;
    if(nome.length>0 && nome.length<50 && isNaN(parseInt(nome))){//check 0<name<50 and is not a numb
        let cognome=document.getElementById("cognome").value;
        if(cognome.length>0 && cognome.length<50 && isNaN(parseInt(cognome))){//check 0<cognome<50 and is not a numb
            let eta=parseInt(document.getElementById("eta").value);//check eta is a numb
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
    document.getElementById("nome").value="";
    document.getElementById("cognome").value="";
    document.getElementById("eta").value="";
});