
$.getJSON( "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpjaWRlMjJAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2ODQyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTA0LTE4IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1ODk2NDU0MzEsIm5iZiI6MTU4OTYzODIzMX0.Lp0m6AOCt_KFOYUbjZz0iiwyoTm_AHG6YikXOQvuyrI&format=json&language=en-gb", function( data ) {
    console.log(data);
});

// SYMPTOM CALLED AND STORED IN A FUNCTION
function getSymptoms(data) {
        var sympRequest = new XMLHttpRequest();

        sympRequest.open("GET", "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpjaWRlMjJAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2ODQyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTA0LTE4IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1ODkwOTgwNzYsIm5iZiI6MTU4OTA5MDg3Nn0.vLuknteh0JFqZVUwWU5fLUzvH0IuLFDyn4GzXS3kX3I&format=json&language=en-gb");
        sympRequest.send();

        sympRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // data(JSON.parse(this.responseText));
                const symptomDataBase = data(JSON.parse(this.responseText));
                console.log(symtomDataBase)
                    }
                };
            }

       // function printSymptomsToConsole(symptoms) {
       //    console.log(symptoms);
        

        

      //  getSymptoms(printSymptomsToConsole);



        // DIAGNOSIS INPUTS
         
        var nameIput = document.getElementById("");
        var yearIfBirthInput = document.getElementById("");
        var genderIput = document.getElementById("");
    

        // AUTO COMPLETE INPUT

       // let symptoms = symptomDataBase.filter(symptomData =>{
        //    const matches = matchExp(`^${searchText}`,"gi")
       //     return symptomData.name.(matches) && symptomData.id.match(matches)
       // })

        // console.log(matches);

    


       document.getElementById("inputSymptoms").addEventListener("input", (e)=>{
            let symptomArray = [];
            console.log(e.target.value);
       });
    
    

        