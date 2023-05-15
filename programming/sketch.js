let stars =[];
let numStars=400; 

function setup(){
  createCanvas(400,400);
 // stars[0]=creativeVector(10,10),(15,15);
 // stars[1]=creativeVector(10,10),(15,15);
  //stars[2]=creativeVector(10,10),(15,15);
  // stars[3]=creativeVector(10,10),(15,15);
   //stars[4]=creativeVector(10,10),(15,15);
  // stars[5]=creativeVector(10,10),(15,15);
  // stars[6]=creativeVector(10,10),(15,15);
   
  for( let i=0;i<numStars;i++){
    stars[i]=createVector(random(width),random(height),random(1,6));
     frameRate(20);
  }
} 
  
  function draw (){
    background("#003366");
    
    // ellipse(50,80,20,20);
    for(let i = 0; i < numStars; i++){
      // fill("#ADD8E6");
      fill(random(100,255));
      ellipse(stars[i].x, stars[i].y, stars[i].z)
    }
  }
    