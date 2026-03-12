
AOS.init();
let bars = document.querySelector('#bars');
let close = document.querySelector('#close');
let offCanvas = document.querySelector('.off-canvas');
bars.addEventListener('click' , click);
function click(){
    offCanvas.style.transform="translate(0)";
}
close.addEventListener('click' , clickx);
function clickx(){
    offCanvas.style.transform="translate(100%)";
}


gsap.registerPlugin(ScrollTrigger);

gsap.from("footer section",{
    scrollTrigger:{
        trigger:"footer",
        start:"top 85%"
    },
    y:80,
    opacity:0,
    duration:1,
    stagger:0.3
});

gsap.from(".box5-link a",{
    scrollTrigger:{
        trigger:".box5-link",
        start:"top 90%"
    },
    scale:0,
    opacity:0,
    duration:0.6,
    stagger:0.2
});

gsap.from(".axtaris2",{
    scrollTrigger:{
        trigger:".axtaris2",
        start:"top 90%"
    },
    x:-100,
    opacity:0,
    duration:1
});






// Carxi feley kodu



let wheel = document.getElementById("wheel");
let ctx = wheel.getContext("2d");

let options = [0,10,20,30,40,50];
let colors = ["#ff4d4d","#4d79ff","#33cc33","#ffcc00","#cc66ff","#ff884d"];

let startAngle = 0;
let arc = Math.PI / (options.length/2);

for(let i=0;i<options.length;i++){

ctx.beginPath();
ctx.fillStyle = colors[i];
ctx.moveTo(150,150);
ctx.arc(150,150,150,startAngle,startAngle+arc);
ctx.fill();

ctx.save();
ctx.fillStyle="white";
ctx.font="20px sans-serif";
ctx.translate(150,150);
ctx.rotate(startAngle+arc/2);
ctx.fillText(options[i]+"%",70,10);
ctx.restore();

startAngle += arc;

}

let deg = 0;

function spin(){

let random = Math.floor(Math.random()*options.length);
let rotate = 360*5 + random*(360/options.length);

deg += rotate;

wheel.style.transform = "rotate("+deg+"deg)";

let percent = options[random];

document.getElementById("progress").style.width = percent + "%";

setTimeout(()=>{

document.getElementById("result").innerText =
"Qazandığınız endirim: "+percent+"%";

},4000)

}







// Saat kodu




function saatIsle(){

let now = new Date();

let saat = now.getHours();
let deqiqe = now.getMinutes();
let saniye = now.getSeconds();

let gun = now.getDate();
let ay = now.getMonth() + 1;
let il = now.getFullYear();

if(saat < 10) saat = "0" + saat;
if(deqiqe < 10) deqiqe = "0" + deqiqe;
if(saniye < 10) saniye = "0" + saniye;

if(gun < 10) gun = "0" + gun;
if(ay < 10) ay = "0" + ay;

document.getElementById("time").innerHTML =
saat + ":" + deqiqe + ":" + saniye;

document.getElementById("date").innerHTML =
gun + "." + ay + "." + il;

}

setInterval(saatIsle,1000);

saatIsle();








// gemi yolar bolumu  


let total=0

function hesabla(){

let price = Number(document.getElementById("price").value)
let delivery = Number(document.getElementById("delivery").value)

if(price<=0){
document.getElementById("result").innerHTML="Məbləğ yazın"
return
}

let tax = price*0.18

let part1 = price/3
let part2 = price/3
let part3 = price/3

total = price + tax + delivery

document.getElementById("result").innerHTML=
"Məbləğ: "+price+" ₼ <br>"+
"Vergi (18%): "+tax.toFixed(2)+" ₼ <br>"+
"3 hissə: "+part1.toFixed(2)+" / "+part2.toFixed(2)+" / "+part3.toFixed(2)+" ₼ <br>"+
"Komissiya: "+delivery+" ₼ <br>"+
"<b>Ümumi: "+total.toFixed(2)+" ₼</b><br>"+
"Onaylayırsınız?"

}

function onayla(){

if(total==0){
alert("Əvvəl hesablayın")
return
}

document.getElementById("status").innerHTML="✅ Ödəniş uğurlu oldu"

}

function imtina(){

document.getElementById("price").value=0
document.getElementById("result").innerHTML=""
document.getElementById("status").innerHTML="❌ Ödəniş ləğv edildi"

total=0

}



// 13 






