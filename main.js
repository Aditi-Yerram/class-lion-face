 noseX = 0
 noseY = 0
 leftEar_x = 0
 leftEar_y = 0
 rightEar_x = 0
 rightEar_y = 0

 function preload() {
     lion_nose = ("https://i.postimg.cc/kgSHbmbx/oie-9a-WDASHmykpk.jpg");
     lion_leftEar=("https://i.postimg.cc/nV5TYWZT/oie-p1o-DCAJKUZFI.jpg");
     lion_rightEar=("https://i.postimg.cc/cLWzwzM2/oie-i-FMXot6wt-O7-P.jpg");
 }

 function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
     console.log('PoseNet Is Initialized');
 }


 function gotPoses(results) {
     if (results.length > 0) {
         console.log(results);
         //nose x and y values
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
        //left ear x and y value
        leftEar_x = results[0].pose.leftEar.x;
        leftEar_y = results[0].pose.leftEar.y;
         //right ear x and y value
         rightEar_x = results[0].pose.rightEar.x;
         rightEar_y = results[0].pose.rightEar.y;

         console.log("leftEar x = " + results[0].pose.leftEar.x);
         console.log("LeftEar y = " + results[0].pose.leftEar.y);

         console.log("rightEar x = " + results[0].pose.rightEar.x);
         console.log("rightEar y = " + results[0].pose.rightEar.y);

         console.log("nose x = " + results[0].pose.nose.x);
         console.log("nose y = " + results[0].pose.nose.y);
     }
 }

 function draw() {
     image(video, 0, 0, 300, 300);
     fill(255, 0, 0);
     stroke(255, 0, 0);
     image(lion_nose,noseX,noseY,30,30);
     image(lion_leftEar,leftEar_x,leftEar_y,50,50);
     image(lion_rightEar,rightEar_x,rightEar_y,50,50);
    
 }

 function take_snapshot() {
     save('myFilterImage.png');
 }