var name = document.getElementById("")
var yearOfBirth = document.getElementById("")
var sex = document.getElementById("")
var symptomInput = document.getElementById("inputSymptoms")
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
       
      for (i = 0; i < symptomDataBase.length; i++) {
        if (symptomDataBase[i].Name.toLowerCase() === symptomInputValue.toLowerCase()) {
          //return symptomDataBase[i].Name && symptomsId.push(symptomDataBase[i].ID)
        //console.log("Name "+symptomDataBase[i].Name+" Id"+symptomDataBase[i].ID)
        symptomsId.push(symptomDataBase[i].ID)
        //userLoggedSymptoms.push(symptomDataBase[i].Name)
            $("#userLoggedInput").append("<p>"+symptomDataBase[i].Name+"</p>")

        
        //var userLoggedHTML = '';
        //for (var i = 0; i < userLoggedSymptoms.length; i++) {
        //userLoggedHTML += '<span class="test">' + userLoggedSymptoms[i] + '</span><br/><br/>';
        //}
        }
        
    }


    document.getElementById("inputSymptoms").value = ""
    console.log(symptomsId)
    //userLogged.innerHTML = userLoggedHTML

    }
})

//$(document).ready(function(){
 //           $("userLoggedInput").append("<p>"+symptomDataBase[i].Name+"</p>")
 //       })



