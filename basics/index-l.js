function myfunction1(){
    var step1=document.getElementById("demo").innerHTML;
    var step2=step1.replace("-","_");
    document.getElementById("demo").innerHTML=step2;
    }
    function myfunction2(){
    var step3=document.getElementById("demo").innerHTML;
    var step4=step3.replace("_","-");
    document.getElementById("demo").innerHTML=step4;
}
