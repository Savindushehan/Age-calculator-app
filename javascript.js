

var d1=document.getElementById("D1");
var d2=document.getElementById("D2");
var d3=document.getElementById("D3");
var d4=document.getElementById("D4");
var d5=document.getElementById("D5");
var d6=document.getElementById("D6");
var d7=document.getElementById("D7");
var d8=document.getElementById("D8");
var d9=document.getElementById("D9");
var d10=document.getElementById("D10");
var d11=document.getElementById("D11");
var d12=document.getElementById("D12");
var BTN=document.getElementById("btn");


BTN.onclick=function(){
   if(d2.value==""&& d5.value==""&&d8.value==""){
    d3.style.display="block";
    d6.style.display="block";
    d9.style.display="block";
   }else if(d2.value==""&& d5.value==""){
    d3.style.display="block";
    d6.style.display="block";
   }else if(d2.value==""&&d8.value==""){
    d3.style.display="block";
    d9.style.display="block";
   }else if(d5.value==""&&d8.value==""){
    d6.style.display="block";
    d9.style.display="block";
   }else if(d2.value==""){
    d3.style.display="block";
   }else if(d5.value==""){
    d6.style.display="block";
   }else if(d8.value==""){
    d9.style.display="block";
   }
}




