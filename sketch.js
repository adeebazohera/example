var Anime,i,j,k;
function setup() {
  createCanvas(400, 400);
  Anime = new Ani();
}

function draw() {
  background("purple");
  fill("pink");
  i=random(10,400);
  j=random(20,380);
  k =random(30,100);
  Anime.dis(i,j,k);
 
}