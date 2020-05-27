//var name = document.getElementById("")
var yearOfBirth = document.getElementById("yearOfBirthInput")
var sex = document.getElementsByName("customRadioInline1")
var symptomInput = document.getElementById("inputSymptoms")
var diagnosisData;
//var userLoggedSymptoms = []
//var userLogged = document.getElementById("userLoggedInput");
var tags = [];

// const getSymptoms = async sympRequest => {
//   const symtoms = await fetch("url");
//   const symtomResponse= await symtoms.json();
// }
var symptomDataBase;
var symptomsId = []
//console.log(symptomsId)

loggingToken();
function loggingToken(){
    var uri = "https://sandbox-authservice.priaid.ch/login";
    var userName = "jcide22@gmail.com"
    var secret_key = "Nb82FwEm45Dsr6YAk";
    var computedHash = CryptoJS.HmacMD5(uri, secret_key);
    var computedHashString = computedHash.toString(CryptoJS.enc.Base64); 
    var bearer = userName+":"+computedHashString
    

    var tokenCall = new XMLHttpRequest();
    tokenCall.open('POST', uri, true);
    tokenCall.setRequestHeader('Authorization','Bearer ' + bearer);
    tokenCall.send();

    tokenCall.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200) {
			//callb(JSON.parse(this.responseText));
           //console.log(JSON.parse(this.responseText));
           localStorage.setItem("token",JSON.parse(this.responseText).Token);
           getSymptoms(logSymptoms)

    }
}
}


function getSymptoms(callb) {
    var sympRequest = new XMLHttpRequest();
    var token = localStorage.getItem("token");
    //console.log(token)
	sympRequest.open("GET", "https://sandbox-healthservice.priaid.ch/symptoms?token="+token+"&format=json&language=en-gb");
	sympRequest.send();

	sympRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			callb(JSON.parse(this.responseText));
            symptomDataBase = JSON.parse(this.responseText);
            tags = symptomDataBase.map(x=>x.Name);
            //console.log(tags)
            $( function() {

            $( "#inputSymptoms" ).autocomplete({
            source: tags
            });
            } );
			//return symptomDataBase
		}
	};
}

function logSymptoms(data) {
	console.log(data);
}




symptomInput.addEventListener("keypress", function(e){

  //symptomFilterArray = []
  //if(e.target.value){
  //  symptomFilterArray = symptomDataBase.filter(symptomDataBase => symptomDataBase.ToLowerCase().includes(e.target.value));
  //  symptomFilterArray = symptomDataBase.map()
  //  console.log(symptomFilterArray);
  //}

  if(e.key == "Enter"){
      e.preventDefault();
      
    var symptomInputValue = document.getElementById("inputSymptoms").value
      var spellCheck = false; 
      for (i = 0; i < symptomDataBase.length; i++) {
        if (symptomDataBase[i].Name.toLowerCase() === symptomInputValue.toLowerCase()) {
          //return symptomDataBase[i].Name && symptomsId.push(symptomDataBase[i].ID)
        //console.log("Name "+symptomDataBase[i].Name+" Id"+symptomDataBase[i].ID)
        symptomsId.push(symptomDataBase[i].ID)
        //userLoggedSymptoms.push(symptomDataBase[i].Name)
            $("#userLoggedInput").append("<p>"+symptomDataBase[i].Name+"</p>")

        spellCheck = true;
        //var userLoggedHTML = '';
        //for (var i = 0; i < userLoggedSymptoms.length; i++) {
        //userLoggedHTML += '<span class="test">' + userLoggedSymptoms[i] + '</span><br/><br/>';
        //}
        }

        
    }
    if (!spellCheck){
        alert("Check your spellings and Enter correct symptom")
    }


    document.getElementById("inputSymptoms").value = ""
    console.log(symptomsId)
    //userLogged.innerHTML = userLoggedHTML

    }
})

//$(document).ready(function(){
 //           $("userLoggedInput").append("<p>"+symptomDataBase[i].Name+"</p>")
 //       })



function getDiagnosis(event) {
    var gender;
        for(i = 0; i < sex.length; i++) {
        if(sex[i].checked){
            gender = sex[i].value;
        
        }
        
        }
    console.log(yearOfBirth.value)
    event.preventDefault();
    var sympRequest = new XMLHttpRequest();
    var token = localStorage.getItem("token");
    //console.log(token)
	sympRequest.open("GET", "https://sandbox-healthservice.priaid.ch/diagnosis?symptoms="+JSON.stringify(symptomsId)+"&gender="+gender+"&year_of_birth="+yearOfBirth.value+"&token="+token+"&format=json&language=en-gb");
	sympRequest.send();

	sympRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
            //callb(JSON.parse(this.responseText));
            
            diagnosisData = JSON.parse(this.responseText);
            //tags = symptomDataBase.map(x=>x.Name);
            //console.log(tags)
            console.log(diagnosisData)
            showDiagnosis(diagnosisData)
			//return symptomDataBase
		}
	};
}

function showDiagnosis(data){
    for(i = 0; i < data.length; i++) {
        $("#returnedDiagnosis").append("<p> Name: "+data[i].Issue.Name+"</p>");
        $("#returnedDiagnosis").append("<p> Accuracy: "+data[i].Issue.Accuracy+"</p>");
        $("#returnedDiagnosis").append("<p> Professional Name: "+data[i].Issue.ProfName+"</p>");
        $("#returnedDiagnosis").append("<br>");
    }
}

function clearBoxes(event){
    event.preventDefault()
    $("#userLoggedInput").find('p').remove()
    $("#returnedDiagnosis").find('p').remove()
}

