var txt="";
var i = 0;
var tableof1=[1,2,3,4,5,6,7,8,9,10];
var tableof2=tableof1.map(multi2);
function multi2(value){
return value*2;
}
document.getElementById("a").innerHTML=tableof2;
myfunction();
function myfunction()
{
    for(i=0; i<tableof2.length; i++){
        txt= txt + "2 X " + tableof1[i] + " = " + tableof2[i] +"<br>";
    }
}

document.getElementById("b").innerHTML=txt;