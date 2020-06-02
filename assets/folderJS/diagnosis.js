/*---------------------------------------USER_DATA_INPUT--*/
var yearOfBirth = document.getElementById("yearOfBirthInput")
var sex = document.getElementsByName("customRadioInline1")
var symptomInput = document.getElementById("inputSymptoms")
var diagnosisData;
var tags = [];
var symptomDataBase;
var symptomsId = []
loggingToken();
/*-------------------------------------API_TOKEN_AUTO_GENERATOR--*/
function loggingToken() {
	var uri = "https://sandbox-authservice.priaid.ch/login";
	var userName = "jcide22@gmail.com"
	var secret_key = "Nb82FwEm45Dsr6YAk";
	var computedHash = CryptoJS.HmacMD5(uri, secret_key);
	var computedHashString = computedHash.toString(CryptoJS.enc.Base64);
	var bearer = userName + ":" + computedHashString
	var tokenCall = new XMLHttpRequest();
	tokenCall.open('POST', uri, true);
	tokenCall.setRequestHeader('Authorization', 'Bearer ' + bearer);
	tokenCall.send();
	tokenCall.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			localStorage.setItem("token", JSON.parse(this.responseText).Token);
			getSymptoms(logSymptoms)
		}
	}
}
/*-----------------------------------------SYMPTOMS_XMLHTTP_REQUEST--*/
function getSymptoms(callb) {
	var sympRequest = new XMLHttpRequest();
	var token = localStorage.getItem("token");
	sympRequest.open("GET", "https://sandbox-healthservice.priaid.ch/symptoms?token=" + token + "&format=json&language=en-gb");
	sympRequest.send();
	sympRequest.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			callb(JSON.parse(this.responseText));
			symptomDataBase = JSON.parse(this.responseText);
			tags = symptomDataBase.map(x => x.Name);
			$(function() {
				$("#inputSymptoms").autocomplete({
					source: tags
				});
			});
		}
	};
}

function logSymptoms(data) {
	console.log(data);
}
/*---------------------------------------------SYMPTOM_INPUT_ITERATION--*/
symptomInput.addEventListener("keypress", function(e) {
	if(e.key == "Enter") {
		e.preventDefault();
		var symptomInputValue = document.getElementById("inputSymptoms").value
		var spellCheck = false;
		for(i = 0; i < symptomDataBase.length; i++) {
			if(symptomDataBase[i].Name.toLowerCase() === symptomInputValue.toLowerCase()) {
				symptomsId.push(symptomDataBase[i].ID)
				$("#userLoggedInput").append("<p>" + symptomDataBase[i].Name + "</p>")
				spellCheck = true;
			}
        }
/*------------------------------------------------SYMPTOM_INPUT_ERROR_ALAERT--*/        
		if(!spellCheck) {
			alert("Check your spellings and Enter correct symptom")
		}
		document.getElementById("inputSymptoms").value = ""
		console.log(symptomsId)
	}
})

function getDiagnosis(event) {
	var gender;
	for(i = 0; i < sex.length; i++) {
		if(sex[i].checked) {
			gender = sex[i].value;
		}
    }
    
/*-----------------------------------------------------DIAGNOSIS_XMLHTTP_REQUEST--*/    
	console.log(yearOfBirth.value)
	event.preventDefault();
	var sympRequest = new XMLHttpRequest();
	var token = localStorage.getItem("token");
	sympRequest.open("GET", "https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=" + JSON.stringify(symptomsId) + "&gender=" + gender + "&year_of_birth=" + yearOfBirth.value + "&token=" + token + "&format=json&language=en-gb");
	sympRequest.send();
	sympRequest.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			diagnosisData = JSON.parse(this.responseText);
			console.log(diagnosisData)
			showDiagnosis(diagnosisData)
		}
	};
}
/*--------------------------------------------RESULT_LOGGED_TO_PAGE--*/
function showDiagnosis(data) {
	for(i = 0; i < data.length; i++) {
		$("#returnedDiagnosis").append("<p> Name: " + data[i].Issue.Name + "</p>");
		$("#returnedDiagnosis").append("<p> Accuracy: " + data[i].Issue.Accuracy + "</p>");
		$("#returnedDiagnosis").append("<p> Professional Name: " + data[i].Issue.ProfName + "</p>");
		$("#returnedDiagnosis").append("<br>");
	}
}
/*-------------------------------------------------CLEAR_BOXES--*/
function clearBoxes(event) {
	event.preventDefault()
	$("#userLoggedInput").find('p').remove()
    $("#returnedDiagnosis").find('p').remove()
    
}