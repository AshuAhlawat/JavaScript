var cars = ["Saab", "Volvo", "BMW"];
cars[0] = 6;
document.getElementById("demo").innerHTML = cars[0] + "<br><br>" + cars[1];
var last=cars[cars.length - 1];
document.getElementById("d").innerHTML=last;