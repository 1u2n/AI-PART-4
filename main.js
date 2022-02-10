song_1 = "";
song_2 = "";

rightWristX =0;
rightWristY =0;
leftWristX =0;
leftWristY =0;
scoreLeftWrist =0;

function preload(){
    song_1 = loadSound("money.mp3");
    song_2 = loadSound("dynamite.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length > 0){
     console.log(results);
     rightWristX= results[0].pose.rightWrist.x;
     rightWristY= results[0].pose.rightWrist.y;

     scoreLeftWrist = results.pose.keypoints[9].score;
     console.log(scoreLeftWrist);

     leftWristX= results[0].pose.leftWrist.x;
     leftWristY= results[0].pose.leftWrist.y;
}
}
function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
 
    song_1 = song_1.isPlaying()
    console.log(song_1);

    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song1 == false){
            song1.play();

        }
            
        }

        else{
            document.getElementById("song_id").innerHTML = "Song Name: Money By Lisa";
        }
        
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
