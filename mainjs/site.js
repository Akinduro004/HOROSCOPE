//Counter functions
function ResetCounter(){
    document.getElementById("CounterText").innerHTML=0;
}

function IncreaseCounter(){
    document.getElementById("CounterText").innerHTML ++;
}

function DecreaseCounter(){
    document.getElementById("CounterText").innerHTML --;
}



//Horoscope functions

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


var monthElement = document.getElementById("month");

var selectedMonth = document.getElementById("month").value;

var days = document.getElementById("day");



function LoadMonths(){

    for (var i=0; i<months.length; i++){

        var opt = document.createElement("option");
        //<option></option>

        opt.value=months[i];
        //<option value="Jan"></option>

        opt.innerHTML=months[i];
        // <option value="Jan">Jan</option>

        monthElement.appendChild(opt);
        
    }
    days.style.display="none";
  
}

function LoadDays(month){

    days.innerHTML="";

    if(month=="NA"){
        alert("select a proper month!!!");
        days.style.display="none";

    }else{

        days.style.display="inline-block";
        if(month == "Jan" || month=="Mar" || month=="May"|| month=="Dec"){
            for (var i=1; i<=31; i++){
                var opt = document.createElement("option");
                opt.value=i;
                opt.innerHTML=i;
                days.appendChild(opt);
            }
    
        }else if(month=="Feb"){
    
            for (var i=1; i<=29; i++){
                var opt = document.createElement("option");
                opt.value=i;
                opt.innerHTML=i;
                days.appendChild(opt);
            }
    
        }else{
    
            for (var i=1; i<=30; i++){
                var opt = document.createElement("option");
                opt.value=i;
                opt.innerHTML=i;
                days.appendChild(opt);
            }
        }

    }

   
    
}

function displaysign(){
    var mnth=document.getElementById("month").value;
    var dy=document.getElementById("day").value;
    var result=document.getElementById("result");
    var re="Your Zodiac Sign is"

    if(mnth=="NA"){
        alert("select a proper month and proceed");
    }
    else
       {
        if(mnth=="Dec"){
            if(dy>=23){
               result.innerHTML=re+" "+"capricorn";
               document.getElementById("sign-symbol").src="images/capricon.jpg";
            }
            else{
                result.innerHTML=re+" "+"sagittarius";
                document.getElementById("sign-symbol").src="images/sagattarius.jpg";
            }
        }
       }
    
   
   
    
        if(mnth=="Jan"){
            if(dy<=19){
               result.innerHTML=re+" "+"capricorn";
               document.getElementById("sign-symbol").src="images/capricon.jpg";
            }
            else{
                result.innerHTML=re+" "+"aquarius";
                document.getElementById("sign-symbol").src="images/aquarius.jpg";
            }
        }
    

    
        
        if(mnth=="Feb"){
            if(dy<=18){
               result.innerHTML=re+" "+"aquarius";
               document.getElementById("sign-symbol").src="images/aquarius.jpg";
            }
            else{
                result.innerHTML=re+" "+"pisces";
                document.getElementById("sign-symbol").src="images/pisces.jpg";
            }
        }
    

  
    
        if(mnth=="Mar"){
            if(dy<=20){
               result.innerHTML=re+" "+"pisces";
               document.getElementById("sign-symbol").src="images/pisces.jpg";
            }
            else{
                result.innerHTML=re+" "+"aries";
                document.getElementById("sign-symbol").src="images/aries.jpg";
            }
        
    }
    if(mnth=="Apr"){
        if(dy<=29){
           result.innerHTML=re+" "+"Aries";
           document.getElementById("sign-symbol").src="images/aries.jpg";
        }
        else{
            result.innerHTML=re+" "+"Taurus";
            document.getElementById("sign-symbol").src="images/aries.jpg";
        }
    
}
if(mnth=="May"){
    if(dy<=20){
       result.innerHTML=re+" "+"Taurus";
       document.getElementById("sign-symbol").src="images/aries.jpg";
    }
    else{
        result.innerHTML=re+" "+"Gemini";
        document.getElementById("sign-symbol").src="images/emini.jpg";
    }

}
if(mnth=="Jun"){
    if(dy<=20){
       result.innerHTML=re+" "+"Gemini";
       document.getElementById("sign-symbol").src="images/emini.jpg";
    }
    else{
        result.innerHTML=re+" "+"Cancer";
        document.getElementById("sign-symbol").src="images/cancer.jpg";
    }

}

if(mnth=="Jul"){
    if(dy<=22){
       result.innerHTML=re+" "+"Cancer";
       document.getElementById("sign-symbol").src="images/cancer.jpg";
    }
    else{
        result.innerHTML=re+" "+"Leo";
        document.getElementById("sign-symbol").src="images/leo.jpg";
    }

}
if(mnth=="Aug"){
    if(dy<=22){
       result.innerHTML=re+" "+"Leo";
       document.getElementById("sign-symbol").src="images/leo.jpg";
    }
    else{
        result.innerHTML=re+" "+"Virgo";
        document.getElementById("sign-symbol").src="images/virgo.jpg";
    }

}
if(mnth=="Sep"){
    if(dy<=22){
       result.innerHTML=re+" "+"Virgo";
       document.getElementById("sign-symbol").src="images/virgo.jpg";
    }
    else{
        result.innerHTML=re+" "+"Libra";
        document.getElementById("sign-symbol").src="images/libra.jpg";
    }

}

if(mnth=="Oct"){
    if(dy<=22){
       result.innerHTML=re+" "+"Libra";
       document.getElementById("sign-symbol").src="images/libra.jpg";
    }
    else{
        result.innerHTML=re+" "+"Scorpio";
        document.getElementById("sign-symbol").src="images/scorpio.jpg";
    }

}
if(mnth=="Nov"){
    if(dy<=22){
       result.innerHTML=re+" "+"Scorpio";
       document.getElementById("sign-symbol").src="images/scorpio.jpg";
    }
    else{
        result.innerHTML=re+" "+"Sagattarius";
        document.getElementById("sign-symbol").src="images/sagattarius.jpg";
    }

}
}



function FadeIn() {
    const element = document.getElementById("swipe");
element.style.transform = "opacity";
    let opacity = 0;
    const interval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.02;
        element.style.opacity = opacity;
      } else {
        clearInterval(interval);
      }
    }, 100);
  }


  
function swipeInleft() {
    const element = document.getElementById("left");
element.style.transform = "translateX(-100%)";

  let position = -100;
  const interval = setInterval(() => {
    if (position < 0) {
      position += 4;
      element.style.transform = `translateX(${position}%)`;
    } else {
      clearInterval(interval);
    }
  }, 15);
}
function swipeInright() {
    const element = document.getElementById("right");
element.style.transform = "translateX(-100%)";

  let position = 100;
  const interval = setInterval(() => {
    if (position > 0) {
      position -= 4;
      element.style.transform = `translateX(${position}%)`;
    } else {
      clearInterval(interval);
    }
  }, 15);
}

