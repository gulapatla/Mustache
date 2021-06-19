noseX=0;
noseY=0;
function preload(){
clown_nose = loadImage('https://i.postimg.cc/258bmJpd/moustache-clipart-free-clipart-images.png');
}
function setup(){
canvas = createCanvas(300, 300);
canvas.center;
video = createCapture("VIDEO");
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY,90,60);



}
function take_snapshot(){
    save('MyFilterImage.png');
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
    poseNet.on('pose', gotPoses);

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
        noseX = results[0].pose.nose.x - 45;
        noseY = results[0].pose.nose.y - 10;
    
        
    }
}