var hr,mn,sc
var hrAngle,mnAngle,scAngle



function setup() {
  createCanvas(1000,1000);
 angleMode(DEGREES)
}

function draw() {
  
  background("green"); 
  translate(200,200)
  rotate(-90)
  hr = hour()
  mn = minute()
  sc = second()
 //To convert time into degrees
  scAngle=map(sc,0,60,0,360)
 mnAngle=map(mn,0,60,0,360)
 hrAngle=map(hr%12 ,0,12,0,360)
 //second hand
 push()
 rotate(scAngle)
 stroke("blue")
 strokeWeight(20)
 line(0,0,100,0)
pop()
//minute hand
push()
 rotate(mnAngle)
 stroke("red")
 strokeWeight(20)
 line(0,0,130,0)
pop()
 
//hour hand
push()
 rotate(hrAngle)
 stroke("pink")
 strokeWeight(20)
 line(0,0,70,0)
pop()

// sec arc

stroke("blue")

strokeWeight(20)
noFill()
arc(0,0,300,300,0,scAngle)

//min arc
stroke("red")
strokeWeight(20)
arc(0,0,280,280,0,mnAngle)

//hr arc


stroke("pink")
strokeWeight(20)
arc(0,0,260,260,0,hrAngle)
drawSprites();

}