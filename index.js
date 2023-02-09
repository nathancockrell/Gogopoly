// House cost = 50,100,150,200
// Bippity Boppity My big gogoperties
const med = {name:"med", gogopoly:0,houses:0, bx:288,by:25 ,tx:288,ty:25 +17,owner:5,price:60,rent:[2,10,30,90,160,250]}
const bal = {name:"bal", gogopoly:0,houses:0, bx:288,by:50 ,tx:288,ty:50 +17,owner:5,price:60,rent:[4,20,60,180,320,450]}
const ver = {name:"ver", gogopoly:1,houses:0, bx:288,by:75 ,tx:288,ty:75 +17,owner:5,price:100,rent:[6,30,90,270,400,550]}
const ori = {name:"ori", gogopoly:1,houses:0, bx:288,by:100,tx:288,ty:100+17,owner:5,price:100,rent:[6,30,90,270,400,550]}
const con = {name:"con", gogopoly:1,houses:0, bx:288,by:125,tx:288,ty:125+17,owner:5,price:120,rent:[8,40,100,300,450,600]}
const sta = {name:"sta", gogopoly:2,houses:0, bx:288,by:150,tx:288,ty:150+17,owner:5,price:140,rent:[10,50,150,450,625,750]}
const cha = {name:"cha", gogopoly:2,houses:0, bx:288,by:175,tx:288,ty:175+17,owner:5,price:140,rent:[10,50,150,450,625,750]}
const vir = {name:"vir", gogopoly:2,houses:0, bx:288,by:200,tx:288,ty:200+17,owner:5,price:160,rent:[12,60,180,500,700,900]}
const ten = {name:"ten", gogopoly:3,houses:0, bx:288,by:225,tx:288,ty:225+17,owner:5,price:180,rent:[14,70,200,550,750,950]}
const jam = {name:"jam", gogopoly:3,houses:0, bx:288,by:250,tx:288,ty:250+17,owner:5,price:180,rent:[14,70,200,550,750,950]}
const nya = {name:"nya", gogopoly:3,houses:0, bx:288,by:275,tx:288,ty:275+17,owner:5,price:200,rent:[16,80,220,600,800,1000]}
const ken = {name:"ken", gogopoly:4,houses:0, bx:288,by:300,tx:288,ty:300+17,owner:5,price:220,rent:[18,90,250,700,875,1050]}
const ind = {name:"ind", gogopoly:4,houses:0, bx:288,by:325,tx:288,ty:325+17,owner:5,price:220,rent:[18,90,250,700,875,1050]}
const ill = {name:"ill", gogopoly:4,houses:0, bx:288,by:350,tx:288,ty:350+17,owner:5,price:240,rent:[20,100,300,750,925,1100]}
const atl = {name:"atl", gogopoly:5,houses:0, bx:288,by:375,tx:288,ty:375+17,owner:5,price:260,rent:[22,110,330,800,975,1150]}
const ven = {name:"ven", gogopoly:5,houses:0, bx:288,by:400,tx:288,ty:400+17,owner:5,price:260,rent:[22,110,330,800,975,1150]}
const mar = {name:"mar", gogopoly:5,houses:0, bx:288,by:425,tx:288,ty:425+17,owner:5,price:280,rent:[24,120,360,850,1025,1200]}
const pac = {name:"pac", gogopoly:6,houses:0, bx:288,by:450,tx:288,ty:450+17,owner:5,price:300,rent:[26,130,390,900,1100,1275]}
const nor = {name:"nor", gogopoly:6,houses:0, bx:288,by:475,tx:288,ty:475+17,owner:5,price:300,rent:[26,130,390,900,1100,1275]}
const pen = {name:"pen", gogopoly:6,houses:0, bx:288,by:500,tx:288,ty:500+17,owner:5,price:320,rent:[28,150,450,1000,1200,1400]}
const par = {name:"par", gogopoly:7,houses:0, bx:288,by:525,tx:288,ty:525+17,owner:5,price:350,rent:[35,175,500,1100,1300,1500]}
const boa = {name:"boa", gogopoly:7,houses:0, bx:288,by:550,tx:288,ty:550+17,owner:5,price:500,rent:[50,200,600,1400,1700,2000]}
// Railroads
const rrr = {name:"rrr", houses:0,owner:5,price:200,rent:[25,50,100,200]}
const prr = {name:"prr", houses:0,owner:5,price:200,rent:[25,50,100,200]}
const brr = {name:"brr", houses:0,owner:5,price:200,rent:[25,50,100,200]}
const srr = {name:"srr", houses:0,owner:5,price:200,rent:[25,50,100,200]}
// Utilities
const eco = {name:"eco", houses:0,owner:5,price:150, rent:[100,110]}
const wwo = {name:"wwo", houses:0,owner:5,price:150, rent:[100,110]}
// Mug Handle Replacements and Tumbler handle replacements
const mhr = {name:"mhr", houses:0,owner:4,rent:[40,50]}
const thr = {name:"thr", houses:0,owner:4,rent:[40,50]}
// fast food supplies and office supplies
const ffs = {name:"ffs", houses:0,owner:4,rent:[100]};
const ofs = {name:"ofs", houses:0,owner:4,rent:[100]};
// Corners
const go = {name:"go", houses:0, owner:4, rent:[-100]}
const fp = {name:"fp", houses:0, owner:4, rent:[0]}
const jail = {name:"jail", houses:0, owner:4, rent:[0]}
const gtj = {name:"gtj", houses:0, owner:4, rent:[0]}

// property display
const p1text = {x:1300, y:60}
const p2text = {x:1300, y:260}
const p3text = {x:1300, y:460}
const p4text = {x:1300, y:660}

let canvas;
let ctx;
let roll;

let consoley = 10;
let consoleText = "";
let consoleTextColor = "";

let cText2 = "";
let cText2Color = "";
let cText3 = "";
let cText3Color = "";
let cText4 = "";
let cText4Color = "";

let gotabx = 0;
let gotaby = 5;
let gotabtx = gotabx + 17;
let gotabty = gotaby + 17;


let p = [
        {name:0,gamertag:"Player1",x:416,y:795,properties:0,listProperties:[],loc:go,bal:1500,gogo:[1,0,0,0,0,0,0,1],textx:1300,texty:60},
        {name:1,gamertag:"Player2",x:441,y:795,properties:0,listProperties:[],loc:go,bal:1500,gogo:[1,0,0,0,0,0,0,1],textx:1300,texty:260},
        {name:2,gamertag:"Player3",x:416,y:822,properties:0,listProperties:[],loc:go,bal:1500,gogo:[1,0,0,0,0,0,0,1],textx:1300,texty:460},
        {name:3,gamertag:"Player4",x:441,y:822,properties:0,listProperties:[],loc:go,bal:1500,gogo:[1,0,0,0,0,0,0,1],textx:1300,texty:660},
        {name:4,gamertag:"Bank", bal:250000}
        // {x:800,y:500,loc:go,bal:0},
        // {x:800,y:500,loc:go,bal:0},
        // {x:800,y:500,loc:go,bal:0}
    ]

let updateInterval;
let drawInterval;
// const stop = document.getElementById("stop");
const stp = document.querySelector(".stop");
const btn = document.querySelector(".strat");
btn.addEventListener("click", strt);
stp.addEventListener("click", sotp)
// strt.addEventListener("click", strt);


window.onload = function() {
    canvas =  document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    ctx.canvas.width=1605;
    ctx.canvas.height=905;
    
    draw();
    
    
    // window.setInterval(gameLoop, 4000);
    // window.setInterval(update, 4000);
    // window.setInterval(draw, 1000);
}

function strt() {
    console.log("Game Started")
    consoleText="Game Started"

    window.setInterval(draw, 1000);
    updateInterval = window.setInterval(update, 4000);
    
}
function sotp(){
    console.log("Game Stopping after turn cycle");
    window.clearInterval(updateInterval);
    window.clearInterval(drawInterval);
}





function update() {
    myLoop();
var i = 0;
function myLoop() {
  setTimeout(function() {
// for (let i = 0; i<=3; i++){


    // Roll
    roll = Math.floor(Math.random()*11+2);
    // Move
    for(let abs = 0; abs <roll; abs++){
        moveOneSpace(i);
    }
    // Where am I
        // Left
             if(p[i].x < 472 && p[i].y > 782.5) {p[i].loc=go}
        else if(p[i].x < 472 && p[i].y > 700  ) {p[i].loc=med}
        else if(p[i].x < 472 && p[i].y > 617.5) {p[i].loc=thr}
        else if(p[i].x < 472 && p[i].y > 535  ) {p[i].loc=bal}
        else if(p[i].x < 472 && p[i].y > 452.5) {p[i].loc=ofs}
        else if(p[i].x < 472 && p[i].y > 370  ) {p[i].loc=ver}
        else if(p[i].x < 472 && p[i].y > 287.5) {p[i].loc=rrr}
        else if(p[i].x < 472 && p[i].y > 205  ) {p[i].loc=ori}
        else if(p[i].x < 472 && p[i].y > 122.5) {p[i].loc=con}
        else if(p[i].x < 472 && p[i].y > 2.5  ) {p[i].loc=jail}
        // Right
        else if(p[i].x > 1107 && p[i].y > 782.5) {p[i].loc=gtj}
        else if(p[i].x > 1107 && p[i].y > 700  ) {p[i].loc=mar}
        else if(p[i].x > 1107 && p[i].y > 617.5) {p[i].loc=wwo}
        else if(p[i].x > 1107 && p[i].y > 535  ) {p[i].loc=ven}
        else if(p[i].x > 1107 && p[i].y > 452.5) {p[i].loc=atl}
        else if(p[i].x > 1107 && p[i].y > 370  ) {p[i].loc=ill}
        else if(p[i].x > 1107 && p[i].y > 287.5) {p[i].loc=brr}
        else if(p[i].x > 1107 && p[i].y > 205  ) {p[i].loc=ind}
        else if(p[i].x > 1107 && p[i].y > 122.5) {p[i].loc=ken}
        else if(p[i].x > 1107 && p[i].y > 2.5  ) {p[i].loc=fp}
        // Bottom
        else if(p[i].y > 782.5 && p[i].x > 1049.5) {p[i].loc=pac}
        else if(p[i].y > 782.5 && p[i].x > 967) {p[i].loc=nor}
        else if(p[i].y > 782.5 && p[i].x > 884.5) {p[i].loc=srr}
        else if(p[i].y > 782.5 && p[i].x > 802) {p[i].loc=pen}
        else if(p[i].y > 782.5 && p[i].x > 719.5) {p[i].loc=mhr}
        else if(p[i].y > 782.5 && p[i].x > 637) {p[i].loc=par}
        else if(p[i].y > 782.5 && p[i].x > 554.5) {p[i].loc=ffs}
        else if(p[i].y > 782.5 && p[i].x > 472) {p[i].loc=boa}
        // Top
        else if(p[i].y < 122.5 && p[i].x > 1049.5) {p[i].loc=nya}
        else if(p[i].y < 122.5 && p[i].x > 967) {p[i].loc=ten}
        else if(p[i].y < 122.5 && p[i].x > 884.5) {p[i].loc=prr}
        else if(p[i].y < 122.5 && p[i].x > 802) {p[i].loc=jam}
        else if(p[i].y < 122.5 && p[i].x > 719.5) {p[i].loc=vir}
        else if(p[i].y < 122.5 && p[i].x > 637) {p[i].loc=sta}
        else if(p[i].y < 122.5 && p[i].x > 554.5) {p[i].loc=eco}
        else if(p[i].y < 122.5 && p[i].x > 472) {p[i].loc=cha}

        // Action
        // If unowned
        if(p[i].loc.owner==5){
            // If cheap
            if(p[i].bal > p[i].loc.price){
                p[i].loc.owner=p[i].name
                p[i].bal=p[i].bal - p[i].loc.price;

                p[i].gogo[p[i].loc.gogopoly] = p[i].gogo[p[i].loc.gogopoly] +1;
                p[i].listProperties[p[i].properties] = p[i].loc.name;

                for(let aidsLoop = 0; aidsLoop<p[i].properties; aidsLoop++){
                    gotabx += 20;
                    gotaby += 22;
                }

                if(p[i].properties > 3){
                    gotaby -= 66;
                }
                if(p[i].properties > 6){
                    gotaby -= 66;
                }

                gotabtx = gotabx + 17;
                gotabty = gotaby + 17;

                    p[i].loc.bx = p[i].textx + gotabx;
                    p[i].loc.tx = p[i].textx + gotabtx;
                    p[i].loc.by = p[i].texty + gotaby;
                    p[i].loc.ty = p[i].texty + gotabty;
                
                
                p[i].properties = p[i].properties + 1;

                gotabx = 0;
                gotaby = 5;

                console.log(p[i].gamertag + " bought " + p[i].loc.name + " (-$" + p[i].loc.price + ")");
                consoleTextColor = "black"
                consoleText += p[i].gamertag + " bought " + p[i].loc.name + " (-$" + p[i].loc.price + ")\n";
                
                
            }
            else if(p[i].bal < p[i].loc.price){
                console.log(p[i].gamertag + "! you're POOR! You can't buy " + p[i].loc.name)
                consoleTextColor = "red";
                consoleText += p[i].gamertag + "! you're POOR! You can't buy " + p[i].loc.name + `<br>`;
            }
            // Auction
        }
            
        // If Owned
        else {
            // rent
            p[i].bal= p[i].bal - p[i].loc.rent[p[i].loc.houses];
            p[p[i].loc.owner].bal = p[p[i].loc.owner].bal + p[i].loc.rent[p[i].loc.houses];
            console.log(p[i].gamertag + " just payed " + p[p[i].loc.owner].gamertag + " $" + 
            p[i].loc.rent[p[i].loc.houses])
            // dont go bankrupt, sell properties and houses
        }
    // If own a monopoly
    for(let yebs = 0; yebs < 8; yebs++){
        if(p[i].gogo[yebs]>2){
            // Buy Houses
            
        }
    }
        

// }
    i++;
    if (i < 4) {
      myLoop();
    }
  }, 1000)
}


}

function draw() {
    ctx.fillStyle="#FFFDD0";
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);

// BOARD
    // Corners
    ctx.fillStyle="white";
    ctx.fillRect(352,782.5,120,120)
    ctx.fillStyle="black";
    ctx.fillRect(352,2.5,120,120)
    ctx.fillStyle="purple";
    ctx.fillRect(1132,782.5,120,120)
    ctx.fillStyle="aqua";
    ctx.fillRect(1132,2.5,120,120)
    // Left Side
    ctx.fillStyle="#ADD8E6";
    ctx.fillRect(352,122.5,120,82.5)
    ctx.fillStyle="#ADD8E6";
    ctx.fillRect(352,205,120,82.5)
    ctx.fillStyle="grey";
    ctx.fillRect(352,287.5,120,82.5)
    ctx.fillStyle="#ADD8E6";
    ctx.fillRect(352,370,120,82.5)
    ctx.fillStyle="white";
    ctx.fillRect(352,452.5,120,82.5)
    ctx.fillStyle="brown";
    ctx.fillRect(352,535,120,82.5)
    ctx.fillStyle="white";
    ctx.fillRect(352,617.5,120,82.5)
    ctx.fillStyle="brown";
    ctx.fillRect(352,700,120,82.5)

    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(352,122.5,120,82.5)
    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(352,205,120,82.5)
    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(352,287.5,120,82.5)
    ctx.fillStyle="grey";
    ctx.strokeRect(352,370,120,82.5)
    ctx.fillStyle="white";
    ctx.strokeRect(352,452.5,120,82.5)
    ctx.fillStyle="brown";
    ctx.strokeRect(352,535,120,82.5)
    ctx.fillStyle="white";
    ctx.strokeRect(352,617.5,120,82.5)
    ctx.fillStyle="brown";
    ctx.strokeRect(352,700,120,82.5)
    // Top Side
    ctx.fillStyle="#b3248f";
    ctx.fillRect(472,2.5,82.5,120)
    ctx.fillStyle="white";
    ctx.fillRect(554.5,2.5,82.5,120)
    ctx.fillStyle="#b3248f";
    ctx.fillRect(637,2.5,82.5,120)
    ctx.fillStyle="#b3248f";
    ctx.fillRect(719.5,2.5,82.5,120)
    ctx.fillStyle="#ff9900";
    ctx.fillRect(802,2.5,82.5,120)
    ctx.fillStyle="grey";
    ctx.fillRect(884.5,2.5,82.5,120)
    ctx.fillStyle="#ff9900";
    ctx.fillRect(967,2.5,82.5,120)
    ctx.fillStyle="#ff9900";
    ctx.fillRect(1049.5,2.5,82.5,120)

    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(472,2.5,82.5,120)
    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(554.5,2.5,82.5,120)
    ctx.fillStyle="white";
    ctx.strokeRect(637,2.5,82.5,120)
    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(719.5,2.5,82.5,120)
    ctx.fillStyle="grey";
    ctx.strokeRect(802,2.5,82.5,120)
    ctx.fillStyle="brown";
    ctx.strokeRect(884.5,2.5,82.5,120)
    ctx.fillStyle="white";
    ctx.strokeRect(967,2.5,82.5,120)
    ctx.fillStyle="brown";
    ctx.strokeRect(1049.5,2.5,82.5,120)
    // Right Side
    ctx.fillStyle="red";
    ctx.fillRect(1132,122.5,120,82.5)
    ctx.fillStyle="red";
    ctx.fillRect(1132,205,120,82.5)
    ctx.fillStyle="grey";
    ctx.fillRect(1132,287.5,120,82.5)
    ctx.fillStyle="red";
    ctx.fillRect(1132,370,120,82.5)
    ctx.fillStyle="yellow";
    ctx.fillRect(1132,452.5,120,82.5)
    ctx.fillStyle="yellow";
    ctx.fillRect(1132,535,120,82.5)
    ctx.fillStyle="white";
    ctx.fillRect(1132,617.5,120,82.5)
    ctx.fillStyle="yellow";
    ctx.fillRect(1132,700,120,82.5)

    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(1132,122.5,120,82.5)
    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(1132,205,120,82.5)
    ctx.fillStyle="#ADD8E6";
    ctx.strokeRect(1132,287.5,120,82.5)
    ctx.fillStyle="grey";
    ctx.strokeRect(1132,370,120,82.5)
    ctx.fillStyle="white";
    ctx.strokeRect(1132,452.5,120,82.5)
    ctx.fillStyle="brown";
    ctx.strokeRect(1132,535,120,82.5)
    ctx.fillStyle="white";
    ctx.strokeRect(1132,617.5,120,82.5)
    ctx.fillStyle="brown";
    ctx.strokeRect(1132,700,120,82.5)
    // Bottom Side
    ctx.fillStyle="aqua";
    ctx.fillRect(472,782.5,82.5,120)
    ctx.fillStyle="white";
    ctx.fillRect(554.5,782.5,82.5,120)
    ctx.fillStyle="aqua";
    ctx.fillRect(637,782.5,82.5,120)
    ctx.fillStyle="white";
    ctx.fillRect(719.5,782.5,82.5,120)
    ctx.fillStyle="#3CCF4E";
    ctx.fillRect(802,782.5,82.5,120)
    ctx.fillStyle="grey";
    ctx.fillRect(884.5,782.5,82.5,120)
    ctx.fillStyle="#3CCF4E";
    ctx.fillRect(967,782.5,82.5,120)
    ctx.fillStyle="#3CCF4E";
    ctx.fillRect(1049.5,782.5,82.5,120)

    ctx.fillStyle="#b3248f";
    ctx.strokeRect(472,782.5,82.5,120)
    ctx.fillStyle="#b3248f";
    ctx.strokeRect(554.5,782.5,82.5,120)
    ctx.fillStyle="#b3248f";
    ctx.strokeRect(637,782.5,82.5,120)
    ctx.fillStyle="white";
    ctx.strokeRect(719.5,782.5,82.5,120)
    ctx.fillStyle="grey";
    ctx.strokeRect(802,782.5,82.5,120)
    ctx.fillStyle="brown";
    ctx.strokeRect(884.5,782.5,82.5,120)
    ctx.fillStyle="white";
    ctx.strokeRect(967,782.5,82.5,120)
    ctx.fillStyle="brown";
    ctx.strokeRect(1049.5,782.5,82.5,120)


    ctx.fillStyle="black";
    ctx.font = "48px serif";
    ctx.fillText("Gogopoly", 720, 476.5);


    ctx.fillStyle="black"
    ctx.strokeRect(352,2.5,900,900)
// END BOARD

// Player Boxes
ctx.fillStyle="pink";
ctx.fillRect(1290,3,290,200);
ctx.fillStyle="#00ff5c";
ctx.fillRect(1290,203,290,200);
ctx.fillStyle="#00f7ff";
ctx.fillRect(1290,403,290,200);
ctx.fillStyle="#ff0000";
ctx.fillRect(1290,603,290,200);
// screen console
ctx.fillStyle="white"
ctx.fillRect(20, consoley, 250, 100);
ctx.font="13px arial";
ctx.fillStyle=consoleTextColor;
ctx.fillText(consoleText, 21, consoley+20);
ctx.fillStyle=cText2Color;
ctx.fillText(cText2, 21, consoley+40);
ctx.fillStyle=cText3Color;
ctx.fillText(cText3, 21, consoley+60);
ctx.fillStyle=cText4Color;
ctx.fillText(cText4, 21, consoley+80);

// Properties
    ctx.fillStyle="brown";
        ctx.fillRect(med.bx, med.by, 50, 20);
        ctx.fillRect(bal.bx, bal.by, 50, 20);
        ctx.strokeRect(med.bx, med.by, 50, 20);
        ctx.strokeRect(bal.bx, bal.by, 50, 20);
        ctx.fillStyle="black";
        ctx.font = "16px Arial"
        ctx.fillText("med",med.tx,med.ty)
        ctx.fillText("bal",bal.tx,bal.ty)
    ctx.fillStyle="#ADD8E6"
    ctx.fillRect(ver.bx,ver.by, 50, 20);
    ctx.fillRect(ori.bx,ori.by, 50, 20);
    ctx.fillRect(con.bx,con.by, 50, 20);
    ctx.strokeRect(ver.bx,ver.by, 50, 20);
    ctx.strokeRect(ori.bx,ori.by, 50, 20);
    ctx.strokeRect(con.bx,con.by, 50, 20);
    ctx.fillStyle="black";
        ctx.font = "16px Arial"
        ctx.fillText("ver",ver.tx,ver.ty)
        ctx.fillText("ori",ori.tx,ori.ty)
        ctx.fillText("con",con.tx,con.ty)
    ctx.fillStyle="#b3248f"
    ctx.fillRect(sta.bx,sta.by, 50, 20);
    ctx.fillRect(cha.bx,cha.by, 50, 20);
    ctx.fillRect(vir.bx,vir.by, 50, 20);
    ctx.strokeRect(sta.bx,sta.by, 50, 20);
    ctx.strokeRect(cha.bx,cha.by, 50, 20);
    ctx.strokeRect(vir.bx,vir.by, 50, 20);
    ctx.fillStyle="black";
        ctx.font = "16px Arial"
        ctx.fillText("sta",sta.tx,sta.ty)
        ctx.fillText("cha",cha.tx,cha.ty)
        ctx.fillText("vir",vir.tx,vir.ty)
    ctx.fillStyle="#ff9900"
    ctx.fillRect(ten.bx,ten.by, 50, 20);
    ctx.fillRect(jam.bx,jam.by, 50, 20);
    ctx.fillRect(nya.bx,nya.by, 50, 20);
    ctx.strokeRect(ten.bx,ten.by, 50, 20);
    ctx.strokeRect(jam.bx,jam.by, 50, 20);
    ctx.strokeRect(nya.bx,nya.by, 50, 20);
    ctx.fillStyle="black";
        ctx.font = "16px Arial"
        ctx.fillText("ten",ten.tx,ten.ty)
        ctx.fillText("jam",jam.tx,jam.ty)
        ctx.fillText("nya",nya.tx,nya.ty)
    ctx.fillStyle="red"
    ctx.fillRect(ken.bx, ken.by, 50, 20);
    ctx.fillRect(ind.bx, ind.by, 50, 20);
    ctx.fillRect(ill.bx, ill.by, 50, 20);
    ctx.strokeRect(ken.bx, ken.by, 50, 20);
    ctx.strokeRect(ind.bx, ind.by, 50, 20);
    ctx.strokeRect(ill.bx, ill.by, 50, 20);
    ctx.fillStyle="black";
        ctx.font = "16px Arial"
        ctx.fillText("ken",ken.tx, ken.ty)
        ctx.fillText("ind",ind.tx, ind.ty)
        ctx.fillText("ill",ill.tx, ill.ty)
    ctx.fillStyle="yellow"
    ctx.fillRect(atl.bx,atl.by, 50, 20);
    ctx.fillRect(ven.bx,ven.by, 50, 20);
    ctx.fillRect(mar.bx,mar.by, 50, 20);
    ctx.strokeRect(atl.bx,atl.by, 50, 20);
    ctx.strokeRect(ven.bx,ven.by, 50, 20);
    ctx.strokeRect(mar.bx,mar.by, 50, 20);
    ctx.fillStyle="black";
        ctx.font = "16px Arial"
        ctx.fillText("atl",atl.tx,atl.ty)
        ctx.fillText("ven",ven.tx,ven.ty)
        ctx.fillText("mar",mar.tx,mar.ty)
    ctx.fillStyle="#3CCF4E"
    ctx.fillRect(pac.bx,pac.by, 50, 20);
    ctx.fillRect(nor.bx,nor.by, 50, 20);
    ctx.fillRect(pen.bx,pen.by, 50, 20);
    ctx.strokeRect(pac.bx,pac.by, 50, 20);
    ctx.strokeRect(nor.bx,nor.by, 50, 20);
    ctx.strokeRect(pen.bx,pen.by, 50, 20);
    ctx.fillStyle="black";
        ctx.font = "16px Arial"
        ctx.fillText("pac",pac.tx,pac.ty)
        ctx.fillText("nor",nor.tx,nor.ty)
        ctx.fillText("pen",pen.tx,pen.ty)
    ctx.fillStyle="aqua"
    ctx.fillRect(par.bx,par.by, 50, 20);
    ctx.fillRect(boa.bx,boa.by, 50, 20);
    ctx.strokeRect(par.bx,par.by, 50, 20);
    ctx.strokeRect(boa.bx,boa.by, 50, 20);
    ctx.fillStyle="black";
        ctx.font = "16px Arial"
        ctx.fillText("par",par.tx,par.ty)
        ctx.fillText("boa",boa.tx,boa.ty)

// Players
    // Player Pieces
    ctx.fillStyle="pink";
    ctx.fillRect(p[0].x,p[0].y,20,20)
    ctx.fillStyle="pink";
    ctx.strokeRect(p[0].x,p[0].y,20,20)

    ctx.fillStyle="#00ff5c";
    ctx.fillRect(p[1].x,p[1].y,20,20)
    ctx.fillStyle="#00ff5c";
    ctx.strokeRect(p[1].x,p[1].y,20,20)

    ctx.fillStyle="#00f7ff";
    ctx.fillRect(p[2].x,p[2].y,20,20)
    ctx.fillStyle="#00f7ff";
    ctx.strokeRect(p[2].x,p[2].y,20,20)

    ctx.fillStyle="#ff0000";
    ctx.fillRect(p[3].x,p[3].y,20,20)
    ctx.fillStyle="#ff0000";
    ctx.strokeRect(p[3].x,p[3].y,20,20)
    

    ctx.fillStyle="black"
    ctx.font = "30px Arial";
    // ctx.fillText(p[4].bal, 10, 50)
    ctx.fillText("Player1", 1300, 30);
    ctx.fillText(p[0].bal, 1300, 60);
    ctx.fillText("Player2", 1300, 230);
    ctx.fillText(p[1].bal, 1300, 260);
    ctx.fillText("Player3", 1300, 430);
    ctx.fillText(p[2].bal, 1300, 460);
    ctx.fillText("Player4", 1300, 630);
    ctx.fillText(p[3].bal, 1300, 660);

    
    ctx.fillStyle="black";
    ctx.strokeRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}

function gameLoop(){
    update();
    draw();
}

function moveOneSpace(i){
    // Bottom
    if(p[i].y > 782.5 && p[i].x > 447) {
        p[i].x = p[i].x -82.5;
    }
    // Right
    else if(p[i].x > 1107 && p[i].y < 782.5) {
        p[i].y = p[i].y + 82.5;
    }
    // Top
    else if(p[i].y < 122.5 && p[i].x < 1107) {
        p[i].x = p[i].x +82.5;
    }
    // Left
    else if(p[i].x < 447 && p[i].y > 120) {
        p[i].y = p[i].y - 82.5;
    }
    // passing go
    if(p[i].x < 472 && p[i].y > 782.5){
        p[i].bal = p[i].bal + 180;
        console.log(p[i].gamertag + " just earned $180 for passing Go!");
    }
}

function shiftConsole{
    cText4Color = cText3Color;
    cText4 = cText3;
    cText3 = cText2;
    cText2 = consoleText;
}

function moveConsoleUp() {
    if (consoley >100){
    consoley -= 999;
    }
}
function moveConsoleDown() {
    if (consoley < 9999){
    consoley += 999;
    }
}