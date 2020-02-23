var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
var hMax=canvas.height;
var wMax=canvas.width;
var wm=wMax/4+40;
var hm=hMax/4+40;
function bp(a, b, c, d, e){ctx.beginPath(); ctx.lineWidth=5;ctx.strokeStyle=e; ctx.moveTo(a,b); ctx.lineTo(c,d); ctx.stroke(); ctx.closePath();};

function drawContainers(){

bp(3,3,wm,3, "red");
bp(3,3,3,hm,"red");
bp(3,hm,wm,hm,"red");
bp(wm,hm,wm,3,"red")

bp(3, hMax-3,wm,hMax-3,"blue")
bp(3,hMax-3,3,hMax-hm,"blue")
bp(wm,hMax-3,wm,hMax-hm,"blue")
bp(wm,hMax-hm,3,hMax-hm,"blue")

bp(hMax-3,3,hMax-hm,3,"olive")
bp(hMax-3,3,hMax-3,hm,"olive")
bp(hMax-3,hm,hMax-hm,hm,"olive")
bp(hMax-hm,hm,hMax-hm,3,"olive")

bp(hMax-hm,hMax-hm,hMax-hm,hMax-3,"orange")
bp(hMax-hm,hMax-hm,hMax-3,hMax-hm,"orange")
bp(hMax-3,hMax-3,hMax-hm,hMax-3,"orange")
bp(hMax-3,hMax-3,hMax-3,hMax-hm,"orange")

ctx.beginPath()
ctx.fillStyle="blue";
ctx.fillRect(hm+(hm/4)+7,hMax-hm-7,hm/4,hm-15)
ctx.closePath()

ctx.beginPath()
ctx.fillStyle="olive";
ctx.fillRect(hm+(hm/4)+7,22,hm/4,hm+7)
ctx.closePath()

ctx.beginPath()
ctx.fillStyle="red";
ctx.fillRect(23, hm+(hm/4)+7,hm+7,hm/4)
ctx.closePath()

ctx.beginPath()
ctx.fillStyle="orange";
ctx.fillRect(hMax-hm-7,hm+(hm/4)+7,hMax-hm-hm+1,hm/4)
ctx.closePath()

ctx.beginPath()
ctx.fillStyle="red";
ctx.fillRect(hm/4-10,hm+8,24,34)

ctx.beginPath()
ctx.fillStyle="blue";
ctx.fillRect(hm+7, hMax-(hm/2)+(hm/4-10)-3,35,20)

ctx.beginPath()
ctx.fillStyle="orange";
ctx.fillRect(hMax-(hm/4+13),hMax-(hm+43),24,35)

ctx.beginPath()
ctx.fillStyle="olive";
ctx.fillRect(hm+77,hm/4-7,35,24)



/*vertical*/
bp(hMax/2+54,0,hMax/2+54,hMax,"green")
bp(hMax/2-54, 0,hMax/2-54,hMax,"green")
bp((hMax/2+54)-(hm/2),0,(hMax/2+54)-(hm/2),hMax,"green")
bp((hMax/2-54)+(hm/2),0,(hMax/2-54)+(hm/2),hMax,"green")



/*ends*/
/*horizontal*/
bp(0,hMax/2-54,hMax,hMax/2-54,"green")
bp(0, hMax/2+54,hMax,hMax/2+54,"green")
bp(0, (hMax/2-54)+(hm/2),hMax,(hMax/2-54)+(hm/2),"green")
bp(0, (hMax/2+54)-(hm/2),hMax,(hMax/2+54)-(hm/2),"green")
/*ends*/

for(i=1;i<=5;i++){
bp(hm+8, hMax-((hm/6)*i)-2, hMax-hm-8, hMax-((hm/6)*i)-2,"green")
bp(hm+8, ((hm/6)*i)+2, hMax-hm-8, ((hm/6)*i)+2,"green")
bp(hMax-((hm/6)*i),hm+8,hMax-((hm/6)*i),(hMax-hm)-8,"green")
bp(((hm/6)*i)+2,hm+8,((hm/6)*i)+2,(hMax-hm)-8,"green")

}

ctx.beginPath();
ctx.strokeStyle="lime";
ctx.fillStyle="violet";
ctx.rect(hm+8,hm+8,hm-35,hm-35)
ctx.fillRect(hm+8,hm+8,hm-35,hm-35)

ctx.stroke() 
ctx.fill();
ctx.beginPath(); 
ctx.strokeStyle="orange";
ctx.fillStyle="purple";
ctx.arc(hMax/2, hMax/2,hm/2-15, 0,Math.PI*2, true)
ctx.stroke()
ctx.fill() 

}
function getRand(a){  var ra=(Math.floor(Math.random()*a)+1); if(ra<=6&&ra>0){ return ra;} 
else {return ""}

}

drawContainers();

var diceCount1; var diceCount2; 
var countPan1=document.getElementById("countPan1"); var countPan2=document.getElementById("countPan2");
var countPanG=document.getElementById("countPanG"); var throwSw=1; var countedSw=1; 
function throwDice(){ try{
if(throwSw==1&&countedSw==1){
doSwitch();
diceCount=""; 
diceCount1=getRand(6);
diceCount2=getRand(6);
countPan1.value=diceCount1;
countPan2.value=diceCount2;
countPanG.value=eval(diceCount1+diceCount2);
drawDice(hm,wm);
switch(diceCount1){  
case 1:drawDice1(dH,dH); break;
case 2:drawDice2(dH,dH); break;
case 3:drawDice3(dH,dH);break;
case 4:drawDice4(dH,dH);break;
case 5:drawDice5(dH,dH);break;
case 6:drawDice6(dH,dH);break;
default:;
}
switch(diceCount2){  
case 1:drawDice1(dH+55,dH); break;
case 2:drawDice2(dH+55,dH); break;
case 3:drawDice3(dH+55,dH);break;
case 4:drawDice4(dH+55,dH);break;
case 5:drawDice5(dH+55,dH);break;
case 6:drawDice6(dH+55,dH);break;
default:;

}


throwSw=0; countedSw=0;}} catch(e) {alert(e)}
} 



var seAlp=/[A-Z]/gi;
function remvAlp(gt){

gt=gt.toString();
gt=eval(gt.replace(seAlp,"")); 
return gt}



function throwDs(pel){ try{
var leS=remvAlp(pel.style.left);
var tpS=remvAlp(pel.style.top); 

if(leS>=5){
pel.rM=1;}
if(leS>=386)
{pel.rM=0; }

if(tpS>5){ pel.tM=1}
if(tpS<=5){pel.tM=0; }

if(tpS<386){ pel.dM=1;}
if(tpS>=386){pel.dM=0}

if(leS>5){pel.lM=1}
if(leS<=5){pel.lM=0}

if(leS<128&&pel.rM==1&&tpS==164){ leS+=25;  pel.style.left=leS; }
else if(leS>=128&&tpS==164&&leS<264&&pel.rM==1){pel.style.top=128; pel.style.left=164}
else if(tpS<=164&&pel.tM==1&&leS==164&&leS<264){ tpS-=25; pel.style.top=tpS; }
else if(tpS>=3&&pel.rM==1&&tpS<=128&&leS==197&&pel.gId=="olive"){
var ab=pel.aboutToOut; if((pel.aboutToOut-diceCountX)>=0&&diceCountX<=6){
if((diceCountX-pel.aboutToOut)==0){carryHasWon(pel,pel.counterPan); }
else if(diceCountX<6&&!pel.aboutToOut<=0){
tpS+=25; pel.style.top=tpS; }
else{}
if(pel.aboutToOut>0&&diceCountX<=6&&(pel.aboutToOut-diceCountX)>=0){
pel.aboutToOut-=1;}
else{pel.aboutToOut=ab;}
}
else{ diceCountX=(diceCount*1)+1; pel.aboutToOut=ab;}
}
else if(tpS==3&&leS<=197&&pel.rM==1){leS+=33; pel.style.left=leS; }
else if(leS==230&&tpS>=3&&pel.dM==1&&tpS<128){ tpS+=25; pel.style.top=tpS}
else if(leS==230&&tpS==128&&pel.dM){pel.style.top=164; pel.style.left=264;}
else if(leS>=264&&tpS==164&&pel.rM==1&&leS<386){leS+=25;   pel.style.left=leS;}
else if(pel.lM==1&&tpS==197&&leS>=264&&tpS<=230&&leS<=389&&pel.gId=="orange"){
var ab=pel.aboutToOut; if((pel.aboutToOut-diceCountX)>=0&&diceCountX<=6){
if((diceCountX-pel.aboutToOut)==0){carryHasWon(pel,pel.counterPan); }
else if(diceCountX<6&&!pel.aboutToOut<=0){
leS-=25; pel.style.left=leS; }
else{}
if(pel.aboutToOut>0&&diceCountX<=6&&(pel.aboutToOut-diceCountX)>=0){
pel.aboutToOut-=1;}
else{pel.aboutToOut=ab;}
}
else{ diceCountX=(diceCount*1)+1; pel.aboutToOut=ab;}
}
else if(pel.dM==1&&tpS>=164&&leS==389&&tpS<=197){ tpS+=33; pel.style.top=tpS}
else if(pel.lM==1&&tpS==230&&leS>264&&leS<=389){leS-=25; pel.style.left=leS}
else if(pel.lM==1&&pel.dM==1&&tpS==230&&leS==264){ pel.style.left=230; pel.style.top=264}
else if(pel.dM==1&&tpS>=264&&leS==230){tpS+=25; pel.style.top=tpS}
else if(pel.tM==1&&tpS>=264&&tpS<=389&&leS==197&&leS<230&&pel.gId=="blue"){
var ab=pel.aboutToOut; if((pel.aboutToOut-diceCountX)>=0&&diceCountX<=6){
if((diceCountX-pel.aboutToOut)==0){carryHasWon(pel,pel.counterPan); }
else if(diceCountX<6&&!pel.aboutToOut<=0){
tpS-=25; pel.style.top=tpS; }
else{}
if(pel.aboutToOut>0&&diceCountX<=6&&(pel.aboutToOut-diceCountX)>=0){
pel.aboutToOut-=1;}
else{pel.aboutToOut=ab;}
}
else{ diceCountX=(diceCount*1)+1; pel.aboutToOut=ab;}
}
else if(pel.lM==1&&tpS==389&&leS>164&&leS<=230){leS-=33; pel.style.left=leS}
else if(pel.tM==1&&tpS>264&&tpS<=389&&leS==164){tpS-=25; pel.style.top=tpS}
else if(pel.tM==1&&pel.lM==1&&tpS==264&&tpS>222&&leS==164){pel.style.top=230; pel.style.left=128}
else if(pel.lM==1&&tpS==230&&leS<=164&&leS>=3){ leS-=25; pel.style.left=leS;}
else if(pel.gId=="red"&&tpS==197&&leS>=3&&leS<=128){
var ab=pel.aboutToOut; if((pel.aboutToOut-diceCountX)>=0&&diceCountX<=6){
if((diceCountX-pel.aboutToOut)==0){carryHasWon(pel,pel.counterPan); }
else if(diceCountX<6&&!pel.aboutToOut<=0){
leS+=25; pel.style.left=leS; }
else{}
if(pel.aboutToOut>0&&diceCountX<=6&&(pel.aboutToOut-diceCountX)>=0){
pel.aboutToOut-=1;}
else{pel.aboutToOut=ab;}
}
else{ diceCountX=(diceCount*1)+1; pel.aboutToOut=ab;}
}
else if(pel.tM==1&&tpS<=230&&leS==3&&tpS>164){tpS-=33; pel.style.top=tpS}
else{alert("Error!\n\n Sorry, No function was defined to handle this type of error") }

}
catch(e){alert(e)}


}
var diceCount="";
function loadCount(a){if(a.value!=""){
 diceCount=a.value; countPanG.value-=a.value; a.value=""; if(a==countPanG){countPan1.value=""; countPan2.value=""; countPanG.value=""}
if(countPanG.value==0){countPanG.value=""}
throwSw=1; countedSw=1; }
else{}}

var posLeftArr=[];
var posTopArr=[]; 
var idArr=[]; var houseLeftArr=[]; var houseTopArr=[]; var fixGrpId=0; var searchForDot=/[\.]/gi;
var playerNum=prompt("How many players?","");
var diceCountX;
function throwD(a,numb, iden,x,y){
a.id=iden;
a.formerLeft=remvAlp(a.style.left);
a.formerTop=remvAlp(a.style.top);
posLeftArr[numb]=a.formerLeft;
posTopArr[numb]=a.formerTop;
idArr[numb]=a.id; 

if(fixGrpId==0){
if(playerNum==1||playerNum==2){
for(i=0;i<=houseA.split(searchForDot).length-1;i++){document.getElementById((houseA.split(searchForDot))[i]).grpId="redOlive"; 
document.getElementById((houseB.split(searchForDot))[i]).grpId="blueOrange"; }
}
else {}
fixGrpId=1; }

if(playerNum!=1&&playerNum!=2&&playerNum==4){a.grpId=a.id;}
if(playerNum==1||playerNum==2){
if(houseA.match(iden)){ for(i=0;i<=houseAArr.length-1;i++){ document.getElementById(houseAArr[i]).housePlayingYes=housePlaying; document.getElementById(houseBArr[i]).housePlayingYes=housePl;}}
else if(houseB.match(iden)){ 
 for(i=0;i<=houseBArr.length-1;i++){ document.getElementById(houseBArr[i]).housePlayingYes=housePl; document.getElementById(houseAArr[i]).housePlayingYes=housePlaying;} }
else{}
}
if(playerNum==4){ a.housePlayingYes=1; }

if(a.housePlayingYes==1){
if(redH.match(a.id)){ a.gId="red"; a.counterPan="redCount"; }
if(blueH.match(a.id)){a.gId="blue"; a.counterPan="blueCount";}
if(oliveH.match(a.id)){a.gId="olive"; a.counterPan="oliveCount"; }
if(orangeH.match(a.id)){a.gId="orange"; a.counterPan="orangeCount";}
 diceCountX=diceCount;

if(diceCount==6){if(diceCount1==6||diceCount2==6){ if(a.out==0||a.out==undefined){
a.houseLeft=x; a.houseTop=y;
houseLeftArr[numb]=a.houseLeft;
houseTopArr[numb]=a.houseTop;
carryOut(a, a.id); 
countedSw=1; a.newLeft=remvAlp(a.style.left); a.newTop=remvAlp(a.style.top);
posLeftArr[numb]=a.newLeft; posTopArr[numb]=a.newTop; 
}
else{for(i=1;i<=diceCount;i++){throwDs(a); diceCountX-=1; }
countedSw=1;
if((diceCount-diceCountX)==diceCount){
a.newLeft=remvAlp(a.style.left); a.newTop=remvAlp(a.style.top); 
posLeftArr[numb]=a.newLeft; posTopArr[numb]=a.newTop;}
else{a.style.top=posTopArr[numb]; a.style.left=posLeftArr[numb];}
} }
else if(diceCount<=6||diceCount>6){ if(a.out!=undefined&&a.out!=0){
for(i=1;i<=diceCount;i++){throwDs(a); diceCountX-=1;}

if((diceCount-diceCountX)==diceCount){
a.newLeft=remvAlp(a.style.left); a.newTop=remvAlp(a.style.top); 
posLeftArr[numb]=a.newLeft; posTopArr[numb]=a.newTop;}
else{a.style.top=posTopArr[numb]; a.style.left=posLeftArr[numb];}
} }
else{} }
else if(diceCount<=6||diceCount>6){ if(a.out!=undefined&&a.out!=0){
for(i=1;i<=diceCount;i++){throwDs(a); diceCountX-=1; } 
if((diceCount-diceCountX)==diceCount){
a.newLeft=remvAlp(a.style.left); a.newTop=remvAlp(a.style.top); 
posLeftArr[numb]=a.newLeft; posTopArr[numb]=a.newTop;}
else{a.style.top=posTopArr[numb]; a.style.left=posLeftArr[numb];}} }
else{}
var countedOut=[]; var countedOut2=[]; var countedOut3=[];
for(i=0;i<=posLeftArr.length-1;i++){
if((a.newLeft-posLeftArr[i])<=5&&(a.newTop-posTopArr[i])<=5&&a.id!=idArr[i]&&(a.newLeft-posLeftArr[i])>=-4&&(a.newTop-posTopArr[i])>=-4&&a.grpId!=(document.getElementById(idArr[i])).grpId){countedOut[i]=idArr[i]; countedOut2[i]=houseLeftArr[i]; countedOut3[i]=houseTopArr[i]; }
else{} }
countedOut=countedOut.filter(function(n){return n}); 
countedOut2=countedOut2.filter(function(n){return n}); 
countedOut3=countedOut3.filter(function(n){return n}); 


if(countedOut.length>0){
for(i=0;i<=countedOut.length-1;i++){
if(document.getElementById(countedOut[i]).activ==1&&document.getElementById(countedOut[i]).aboutToOut<=6){ carryBackHome(countedOut[i],countedOut2[i],countedOut3[i],numb); document.getElementById(countedOut[i]).activ=0; 


 carryHasWon(a,a.counterPan);
break;  }
} 

}

}
else{}   
 }

function doSwitch(){ if(housePlaying==1&&countPanG.value==""){housePl=1; housePlaying=0; }
else if(housePlaying==0&&countPanG.value==""){housePl=0; housePlaying=1; }
else{}
}
function carryBackHome(k, l,m,c){
posTopArr[c]=""; posLeftArr[c]="";
k.formerTop=""; k.formerLeft="";
k.newLeft=""; k.newTop=""; k.aboutToOut=6;
document.getElementById(k).style.left=l+"px"; 
document.getElementById(k).style.top=m+"px";
document.getElementById(k).style.width=50+"px";
document.getElementById(k).style.height=50+"px"; 
document.getElementById(k).out=0;
document.getElementById(k).activ=0;

}
function carryHasWon(a,b){
if(a.activ==1){
var res=document.getElementById(b);
var result=eval((res.value*1)+1);
res.value=result;; 
a.activ=0; a.out=0;  a.style.display="none";}
else{}}

function carryOut(v, h){
v.out=1; v.activ=1;
diceCount=""; v.aboutToOut=6;

 v.style.width=20+"px";
v.style.height=20+"px";

var le; var ri;
if(redH.match(h)){ le=30; ri=164}
else if(oliveH.match(h)){le=230; ri=28}
else if(blueH.match(h)){le=164; ri=364;}
else if(orangeH.match(h)){le=364; ri=230} 
else{}
v.style.left=le+"px"; v.style.top=ri+"px";
}


var dH=hm+hm/2-2; var wH=wm+wm/4+5;

function drawDice(hm,wm){
ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="black";
ctx.fillStyle="white";
ctx.clearRect(hm+hm/2-2,wm+wm/4+5,40,40);
ctx.clearRect(hm+hm/2-58,wm+wm/4+5,40,40);

ctx.rect(hm+hm/2-2,wm+wm/4+5,40,40);
ctx.rect(hm+hm/2-58,wm+wm/4+5,40,40);
ctx.stroke();
ctx.fill();

}

function drawDice1(a, b){

ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(a-35,b-8,6,0,Math.PI*2,true);
ctx.fill();
}



function drawDice2(a,b){
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(a-45,b-10,6,0,Math.PI*2,true);
ctx.arc(a-25,b-10,6,0,Math.PI*2,true);
ctx.fill();
}

function drawDice3(a,b){
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(a+20-55,b-30+20,6,0,Math.PI*2,true);
ctx.arc(a+7-55,b-42+20,6,0,Math.PI*2,true);
ctx.arc(a+32-55,b-16+20,6,0,Math.PI*2,true);
ctx.fill();
}
function drawDice4(a,b){
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(a-45,b+3,6,0,Math.PI*2,true);
ctx.arc(a-45,b-15,6,0,Math.PI*2,true);
ctx.arc(a-25,b-15,6,0,Math.PI*2,true);
ctx.arc(a-25,b+3,6,0,Math.PI*2,true);
ctx.fill();
}

function drawDice5(a,b){
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(a-35,b+3-10,6,0,Math.PI*2,true);
ctx.arc(a-25,b+3-20,6,0,Math.PI*2,true);
ctx.arc(a-45,b+3-20,6,0,Math.PI*2,true);
ctx.arc(a-25,b+3,6,0,Math.PI*2,true);
ctx.arc(a-45,b+3,6,0,Math.PI*2,true);
ctx.fill();
}

function drawDice6(a,b){
ctx.beginPath();
ctx.fillStyle="black";
ctx.arc(a-42,b-21,6,0,Math.PI*2,true);
ctx.arc(a-42,b-8,6,0,Math.PI*2,true);
ctx.arc(a-42,b+5,6,6,0,Math.PI*2,true);
ctx.arc(a-27,b+5,6,0,Math.PI*2,true);
ctx.arc(a-27,b-21,6,0,Math.PI*2,true);
ctx.arc(a-27,b-8,6,0,Math.PI*2,true);
ctx.fill();
}

var housePlaying=1; var housePl=0;

var redH="r1.r2.r3.r4";
var oliveH="l1.l2.l3.l4";
var blueH="b1.b2.b3.b4";
var orangeH="o1.o2.o3.o4";

var houseA="r1.r2.r3.r4.l1.l2.l3.l4";
var houseB="b1.b2.b3.b4.o1.o2.o3.o4";
var houseAArr=houseA.split(searchForDot);
var houseBArr=houseB.split(searchForDot);
var robotMembers=houseA; 


