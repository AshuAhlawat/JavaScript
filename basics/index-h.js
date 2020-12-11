function toFahrenheit(c){
    return c*9/5 + 32;
     }
     function toCelsius(f){
    return (f-32)*5/9;
     }
     document.getElementById("celsius").innerHTML=toFahrenheit(27);
     document.getElementById("fahrenheit").innerHTML="100 Fahrenheit to celsius are " + toCelsius(100) + " degrees";
