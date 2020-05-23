var name = document.getElementById("")
var yearOfBirth = document.getElementById("")
var sex = document.getElementById("")
var symptomInput = document.getElementById("inputSymptoms")
var tags = [];

// const getSymptoms = async sympRequest => {
//   const symtoms = await fetch("url");
//   const symtomResponse= await symtoms.json();
// }
var symptomDataBase;
var symptomsId = []
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
           console.log(JSON.parse(this.responseText));
    }
}
}


function getSymptoms(callb) {
	var sympRequest = new XMLHttpRequest();

	sympRequest.open("GET", "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpjaWRlMjJAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2ODQyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTA0LTE4IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1OTAyNDMwNjksIm5iZiI6MTU5MDIzNTg2OX0.Cxr3JaRykRe79lyBRW0u_TbgbT4SqjQRvWsQyR1SLb4&format=json&language=en-gb");
	sympRequest.send();

	sympRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			callb(JSON.parse(this.responseText));
            symptomDataBase = JSON.parse(this.responseText);
            tags = symptomDataBase.map(x=>x.Name);
            console.log(tags)
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

getSymptoms(logSymptoms)



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
        console.log("Name "+symptomDataBase[i].Name+" Id"+symptomDataBase[i].ID)
        symptomsId.push(symptomDataBase[i].ID)
        }
    }
    document.getElementById("inputSymptoms").value = ""
    console.log(symptomsId)

}



})


