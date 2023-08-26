

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


var currentDate=new Date();
var year=currentDate.getFullYear();
var month=currentDate.getMonth();
var day=currentDate.getDate();


BTN.onclick=function(){
   if(d2.value==""&& d5.value==""&&d8.value==""){
    d3.style.display="block";
    d6.style.display="block";
    d9.style.display="block";
   }else if(d2.value==""&& d5.value==""&& d8.value>year){
    d3.style.display="block";
    d6.style.display="block";
    d9.innerHTML="must be valid year";
    d9.style.display="block";
   }else if(d2.value==""&& d5.value==""){
    d3.style.display="block";
    d6.style.display="block";
   }
   else if(d2.value==""&&d8.value==""){
    d3.style.display="block";
    d9.style.display="block";
   } else if(d2.value==""&&d8.value==""&&d5.value>12){
    d3.style.display="block";
    d6.innerHTML="must be valid month";
    d6.style.display="block";
    d9.style.display="block";
   }
   else if(d5.value==""&&d8.value==""){
    d6.style.display="block";
    d9.style.display="block";
   }else if(d5.value==""&&d8.value==""&&d2.value>31){
    d3.innerHTML="must be vald date";
    d3.style.display="block";
    d6.style.display="block";
    d9.style.display="block";
   }
   else if(d2.value==""&&d5.value>12&& d8.value>year){
    d3.style.display="block";
    d3.style.display="block";
    d6.innerHTML="must be valid month";
    d6.style.display="block";
    d9.innerHTML="must be valid year";
    d9.style.display="block";
   }else if(d5.value==""&& d8.value>year&&d2.value>31){
    d6.style.display="block";
    d9.innerHTML="must be valid year";
    d9.style.display="block";
    d3.innerHTML="must be vald date";
    d3.style.display="block";
   }else if (d8.value==""&&d2.value>31&&d5.value>12){
    d9.style.display="block";
    d9.style.display="block";
    d3.innerHTML="must be vald date";
    d6.innerHTML="must be valid month";
    d6.style.display="block";
   }else if(d5.value>month){
   var y=year-d8.value;
    var y1=Math.abs(y);
    var m=((12-d5.value)+month+1);
    var m1=Math.abs(m);
    var d=day-d2.value;
    var dd=Math.abs(d);
      d10.innerHTML=y1-1;
      d12.innerHTML=dd;
      d11.innerHTML=m;
   }else if(d2.value>day){
      var y=year-d8.value;
      var y1=Math.abs(y);
      var m=month-d5.value;
      var m1=Math.abs(m);
      var d=((30-d2.value)+day);
      var dd=Math.abs(d);
         d10.innerHTML=y1;
         d12.innerHTML=dd;
         d11.innerHTML=m-1;
      }
   else{
    var y=year-d8.value;
    var y1=Math.abs(y);
    var m=month-d5.value;
    var m1=Math.abs(m);
    var d=day-d2.value;
    var dd=Math.abs(d);
    d10.innerHTML=y1;
    d11.innerHTML=m1;
    d12.innerHTML=dd;
   }
}




