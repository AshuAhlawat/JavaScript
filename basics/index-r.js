var txt= "";
var myArray=[23,45,83,02,27];
myArray.forEach(myfunction);
document.getElementById("demo").innerHTML = txt;
function myfunction(value,index,array){
txt= txt + value + "<br>";
}
var orderArray=myArray.sort(function(a,b){return b-a});
document.getElementById("d").innerHTML=orderArray.join("<br>");