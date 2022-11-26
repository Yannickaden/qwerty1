//https://teachablemachine.withgoogle.com/models/ZeIextnrR/
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QTqIHUnCX/model.json',modelReady)

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("aimbot_object").innerHTML=(results[0].confidence*100).toFixed(1)+"%";    
}

}