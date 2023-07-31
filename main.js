Webcam.set({
    width : 350,
    height : 250,
    image_format : "png",
    png_quality : 100
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function clickk()
{
    Webcam.snap(function(data_uri){
    document.getElementById("answer").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/j4zUw22Hy/",modelloaded);
function modelloaded()
{
    console.log("model is loaded");
}

function check() 
{
    img = document.getElementById("captured_image");
    classifier.classify(img , gotresult);
}

function gotresult(error , results)
{
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}