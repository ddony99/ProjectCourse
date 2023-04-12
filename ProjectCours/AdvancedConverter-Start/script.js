
    

    (function() {
        var convertType = "miles";
        var heading = document.querySelector("h1");
        var intro = document.querySelector("p");
        var answer = document.getElementById("answer");
        var form = document.getElementById("convert");
    
        //found the keyboard Press it
        document.addEventListener('keydown',function(event){
    
           var key = event.code;
           if (key === "KeyK") {
    
                convertType = "Kilometers";
                heading.innerHTML = "Kilometers to miles Conveter";
                intro.innerHTML= "Type in a number of kilometer and click the buttom to convert the distance to miles";
    
           }else if(key === "KeyM") {
                convertType = "miles";
                heading.innerHTML = "miles to kilometers Conveter";
                intro.innerHTML= "Type in a number of miles and click the buttom to convert the distance to kilometers";
           }
    
        })
    
        form.addEventListener('submit', function(event){
    
            event.preventDefault();
            var distance = parseFloat(document.getElementById('distance').value);
            if (distance) {
    
                //convert k to M
                //convert M to K
                if(convertType == "miles"){
    
                    var converted = (distance * 1.609344).toFixed(3);
                    answer.innerHTML = `${distance} mile converts to ${converted} kilometers`;
    
    
                }else{
    
                    var converted = (distance * 0.621371192).toFixed(3);
                    answer.innerHTML = `${distance} kilometers converts to ${converted} miles`;
                }
    
                
            } else {
                answer.innerHTML = "<h2>Please Provide a Number </h2>";
            }
    
    
        })
    })();