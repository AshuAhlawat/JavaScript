var Guns=["M416","SCAR-L","Beryl","DP-28","UMP-9"];
var Glength=Guns.length;
var codeol="<ol start=0>";
var i;
for (i=0; i<Glength ; i++) {
codeol += "<li>" + Guns[i] + "</li>";
}
codeol += "</ol>";
document.getElementById("list").innerHTML=codeol;
codeul="<ul>";
Guns.forEach(myfunction);
codeul+="</ul>";
function myfunction(s){
codeul+= "<li>" + s + "</li>";
}
document.getElementById("l").innerHTML=codeul;