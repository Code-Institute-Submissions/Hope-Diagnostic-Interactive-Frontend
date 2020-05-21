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
                            }); //

