let bath,dofamin,sun,power,psHp,goodT,book,eat;


function d(text1,text2){
   localStorage.setItem(text1,document.getElementById(text2).value);
}
function d2(text1,text2){
    localStorage.setItem(text1,text2);
 }

let but = document.getElementById("calc");
onload = ()=>{
let date = new Date(localStorage.getItem("date"));
let curdate = new Date(2023,1,18);
let r = Math.floor((curdate-date)/(24*3600*1000));
if(r>7)r=7;
if(date.getFullYear()!=curdate.getFullYear()||date.getMonth()!=curdate.getMonth()||date.getDay()!=curdate.getDay()){
d2("bath",parseFloat(localStorage.getItem("bath"))+r*0.9);
d2("dofamin",parseFloat(localStorage.getItem("dofamin"))+r*0.9);
d2("sun",parseFloat(localStorage.getItem("sun"))+r*0.9);
d2("power",parseFloat(localStorage.getItem("power"))+r*0.9);
d2("psHp",parseFloat(localStorage.getItem("psHp"))+r*0.9);
d2("goodT",parseFloat(localStorage.getItem("goodT"))+r*0.9);
d2("book",parseFloat(localStorage.getItem("book"))+r*0.9);
d2("eat",parseFloat(localStorage.getItem("eat"))+r*0.9);}
localStorage.setItem("date",curdate)
calculate();
}
but.onclick = ()=>{setVal();calculate();}

function setVal(){




    d("bath","sBat");
    d("dofamin","sDof");
    d("sun","sSun");
    d("power","sPow");
    d("psHp","sPs");
    d("goodT","sGood");
    d("book","sBook");
    d("eat","sEat");
}

function calculate(){
bath = localStorage.getItem("bath");
dofamin = localStorage.getItem("dofamin");
sun = localStorage.getItem("sun");
power = localStorage.getItem("power");
psHp = localStorage.getItem("psHp");
goodT = localStorage.getItem("goodT");
book = localStorage.getItem("book");
eat = localStorage.getItem("eat");


let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
c.style.width = "100%";
c.width = 1400;
c.height = 3000;
ctx.textAlign = "center";
ctx.font = "100px  google";
ctx.lineWidth = 40;
ctx.lineCap = "round";

ctx.fillStyle = "whitesmoke";
ctx.fillText("чиcтота", 405, 300);


ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*(6.2-bath))}%`, 405, 530);

ctx.strokeStyle = "#4AAD52";
ctx.beginPath();
ctx.arc(405, 500, 150, 0, -bath-0.0001);
ctx.stroke();


ctx.font = "100px  google";
ctx.strokeStyle = "#fd1541";
ctx.fillText("детокс", 405, 800);

ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*dofamin)}%`, 405, 1030);

ctx.beginPath();
ctx.arc(405, 1000, 150, 0, dofamin);
ctx.stroke();



ctx.font = "100px  google";
ctx.strokeStyle = "#46afd9";
ctx.fillText("витамин D", 405, 1300);

ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*(6.2-sun))}%`, 405, 1530);
ctx.beginPath();
ctx.arc(405, 1500, 150, 0, -sun-0.0001);
ctx.stroke();



ctx.font = "100px  google";
ctx.strokeStyle = "orange";
ctx.fillText("силы", 405*2.5, 300);

ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*(6.2-power))}%`, 405*2.5, 530);
ctx.beginPath();
ctx.arc(405*2.5, 500, 150, 0, -power-0.0001);
ctx.stroke();


ctx.font = "100px  google";
ctx.strokeStyle = "#7d5bed";
ctx.fillText("отдых", 405*2.5, 800);

ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*(6.2-psHp))}%`, 405*2.5, 1030);
ctx.beginPath();
ctx.arc(405*2.5, 1000, 150, 0, -psHp-0.0001);
ctx.stroke();


ctx.font = "100px  google";
ctx.strokeStyle = "#f9d600";
ctx.fillText("доброта", 405*2.5, 1300);

ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*(6.2-goodT))}%`, 405*2.5, 1530);
ctx.beginPath();
ctx.arc(405*2.5, 1500, 150, 0, -goodT-0.0001);
ctx.stroke();


ctx.font = "100px  google";
ctx.strokeStyle = "#fd1492";
ctx.fillText("мозг", 405*2.5, 1800);

ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*(6.2-book))}%`, 405*2.5, 2030);
ctx.beginPath();
ctx.arc(405*2.5, 2000, 150, 0, -book-0.0001);
ctx.stroke();



ctx.font = "100px  google";
ctx.strokeStyle = "#b9c917";
ctx.fillText("сытость", 405, 1800);

ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*(6.2-eat))}%`, 405, 2030);
ctx.beginPath();
ctx.arc(405, 2000, 150, 0, -eat-0.0001);
ctx.stroke();
parseFloat


ctx.font = "100px  google";
let sum = 6.2 - (parseFloat(bath)-parseFloat(dofamin)+parseFloat(sun)+parseFloat(power)+parseFloat(psHp)+parseFloat(goodT)+parseFloat(book)+parseFloat(eat)+6.2)/8;
ctx.fillText("общая характеристика", 700, 2300);
console.log(sum)

//ctx.lineWidth = 1;
if(sum <=0.9)
ctx.fillStyle = "red";
else if(sum <=2.7)
ctx.fillStyle = "orange";
else if(sum <=4.5)
ctx.fillStyle = "gold";
else if(sum <=5.4)
ctx.fillStyle = "lime";
else 
ctx.fillStyle = "#0064ff";



ctx.beginPath();
ctx.arc(700, 2650, 250, 1.57-(sum/2), 1.57+(sum/2));
ctx.fill();

ctx.fillStyle = "white";
ctx.font = "80px  google";
ctx.fillText(`${Math.floor(100/6.2*(6.2-bath))}%`, 700, 2670);
}
