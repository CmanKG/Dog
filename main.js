status=""
function setup(){
canvas=createCanvas(640,420)
canvas.center()
object_detector=ml5.objectDetector("cocossd",modelloaded)
document.getElementById("status").innerHTML="starting detecting objects"
}
function preload(){
img=loadImage("dog_cat.jpg")
}
function draw(){
image(img,0,0,640,420)
}
function modelloaded(){
    console.log("modelisloaded")  
        status = true;  
        object_detector.detect(img,gotResult)
}
function gotResult(error,results){
  if (error) {
    console.log(error)
  } else {
    console.log(results)
  }
}