

var btnNo=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];
var image=["guns.png","flag.png","pen.png","helmet.png","strawHat.png","grenade.png","sun.png","rizal.png"];
for(var i=0;i<8;i++){
    var choose1=Math.floor(Math.random()*(btnNo.length));
    document.getElementById(btnNo[choose1]).style.backgroundImage="url("+image[i]+")";
    btnNo.splice(choose1,1);
    var choose2=Math.floor(Math.random()*(btnNo.length));
    document.getElementById(btnNo[choose2]).style.backgroundImage="url("+image[i]+")";
    btnNo.splice(choose2,1);
}

var start=true;
var pre;
var preid;
var x=0;
function game(clicked_id){
    if(start==true){
       document.getElementById(clicked_id).style.transform="rotateY(180deg)";
       preid=clicked_id;
       document.getElementById(clicked_id).style.transition="transform 0.8s";
       var url = document.getElementById(document.getElementById(clicked_id).lastElementChild.id).style.backgroundImage;
       pre=url.substring(4, url.length-1);
       start=false;
    }
    else{
        document.getElementById(clicked_id).style.transform="rotateY(180deg)";
       document.getElementById(clicked_id).style.transition="transform 0.8s";
       setTimeout(() => {
        var url = document.getElementById(document.getElementById(clicked_id).lastElementChild.id).style.backgroundImage;
        if(url.substring(4, url.length-1)==pre){
            document.getElementById(preid).remove();
            document.getElementById(clicked_id).remove();
            x=x+2;
            if(x==16){
    
                document.getElementById("table").innerHTML="GAME COMLETED !!";
                document.getElementById("table").style.fontSize="xxx-large";
                document.getElementById("table").style.textAlign="Center";
                document.getElementById("table").style.color="deeppink";
                document.getElementById("table").style.fontWeight="bolder";
				var L4_success = new Audio("L1-success.mp3");
				L4_success.play();	
				window.location.href = "level4.html";
				alert("HINT => 2-x-x")
            }
            start=true;
        }
        else{
            document.getElementById(preid).style.transform="rotateY(360deg)";
            document.getElementById(clicked_id).style.transform="rotateY(360deg)";
            start=true;
        }
       }, 800);
       

    }
}