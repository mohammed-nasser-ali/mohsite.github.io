var zar = document.getElementById("zar");
var info = document.getElementById("info");

zar.addEventListener('click',function(){
    var xReq = new XMLHttpRequest();
    xReq.open('GET' , 'datajson.json');
    xReq.onload = function(){
        var xData = JSON.parse(xReq.responseText);
        
        addHtml(xData);
    };
  
    xReq.send();
});

function addHtml(data){
    var htmlText = "";
    for (i = 0; i< data.length ; i++){
        htmlText += "<p>" + data[i].name +" is a " + data[i].model +"</p>" + "<hr>";
    }
    info.insertAdjacentHTML("beforeend",htmlText);
}