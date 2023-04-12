 
 "use strict";
    
(function(){
    document.getElementById('convert').addEventListener('submit',function(event){
			
        event.preventDefault();
        var distance = parseFloat(document.getElementById('distance').value);
        if (distance) {
            var conversion = (distance * 1.689344).toFixed(3);
            var answer= document.getElementById('answer');
            answer.innerHTML = `<h2> ${distance} miles convert to ${conversion} Kilometres</h2>`;
            //alert(conversion);
        }else{
            answer.innerHTML = "<h2>Not Number Please enter a number</h2>";
            //alert('not number')
        }
        //alert(distance);

    })
})();