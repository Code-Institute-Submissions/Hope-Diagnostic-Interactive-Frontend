
// SYMPTOM CALLED AND STORED IN A FUNCTION
function getSymptoms(data) {
        var sympRequest = new XMLHttpRequest();

        sympRequest.open("GET", "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpjaWRlMjJAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2ODQyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTA0LTE4IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1ODg5NTYwMTUsIm5iZiI6MTU4ODk0ODgxNX0.wH6WSyWr-n5i_0LZ8gpzgTPmIvtA2ohQrNwxczXnTXE&format=json&language=en-gb");
        sympRequest.send();

        sympRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data(JSON.parse(this.responseText));
                    }
                };
            }

        function printSymptomsToConsole(symptoms) {
            console.log(symptoms);
        }

        const symptomDataBase= getSymptoms(data)

        getSymptoms(printSymptomsToConsole);


        // JQUERY DOCUMENTATION TO CALL DIAGNOSIS

        var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?symptoms=%255B234%252C11%255D&gender=male&year_of_birth=1984&language=en-gb",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
                    "x-rapidapi-key": "cbaa1a8304msh8d59ebaa7935a9ep1021b2jsn5bfa00b3365e"
                            }
                        }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        
            // FETCH DOCUMENTATION TO CALL DIAGNOSIS
            
            fetch("https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?symptoms=%255B234%252C11%255D&gender=male&year_of_birth=1984&language=en-gb", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
                        "x-rapidapi-key": "cbaa1a8304msh8d59ebaa7935a9ep1021b2jsn5bfa00b3365e"
                                }
                            })
                            .then(response => {
                                console.log(response);
                            })
                            .catch(err => {
                                console.log(err);
                            });

