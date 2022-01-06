function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uTn6S9IWH/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    
    }
    else{
        console.log(results);
        red= Math.floor(Math.random() * 255) + 1;
        green= Math.floor(Math.random() * 255) + 1;
        blue= Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML= 'I can hear- '+results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Accuracy- '+(results[0].confidence* 100).toFixed(2)+'%';
    
        document.getElementById("result_label").style.color="rgb("+red+","+green+","+blue+")";
        document.getElementById("result_confidence").style.color="rgb("+red+","+green+","+blue+")";
    
    
        img1=document.getElementById("cat.jpg");
        img2=document.getElementById("dog.jpg");
       
    
        if (results[0].label==",Meowing"){
            img1.src= "aliens-01.jpg";
            
        }
      else if (results[0].label=="Barking"){
            img1.src= "dog.png";
           
        }
       
}
}