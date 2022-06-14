var index;

//event listeners
document.getElementById("image1").addEventListener("click",function(){index=1; expand();});
document.getElementById("image2").addEventListener("click",function(){index=2; expand();});
document.getElementById("image3").addEventListener("click",function(){index=3; expand();});
document.getElementById("image4").addEventListener("click",function(){index=4; expand();});
document.getElementById("image5").addEventListener("click",function(){index=5; expand();});
document.getElementById("image6").addEventListener("click",function(){index=6; expand();});
document.getElementById("image7").addEventListener("click",function(){index=7; expand();});
document.getElementById("image8").addEventListener("click",function(){index=8; expand();});
document.getElementById("image9").addEventListener("click",function(){index=9; expand();});
document.getElementById("image10").addEventListener("click",function(){index=10; expand()});
document.getElementById("image11").addEventListener("click",function(){index=11; expand();});
document.getElementById("image12").addEventListener("click",function(){index=12; expand();});
document.getElementById("image13").addEventListener("click",function(){index=13; expand();});
document.getElementById("image14").addEventListener("click",function(){index=14; expand();});
document.getElementById("image15").addEventListener("click",function(){index=15; expand();});
document.getElementById("image16").addEventListener("click",function(){index=16; expand();});
document.getElementById("image17").addEventListener("click",function(){index=17; expand();});
document.getElementById("image18").addEventListener("click",function(){index=18; expand();});
document.getElementById("image19").addEventListener("click",function(){index=19; expand();});
document.getElementById("image20").addEventListener("click",function(){index=20; expand();});
document.getElementById("image21").addEventListener("click",function(){index=21; expand();});
document.getElementById("image22").addEventListener("click",function(){index=22; expand();});
document.getElementById("image23").addEventListener("click",function(){index=23; expand();});
document.getElementById("image24").addEventListener("click",function(){index=24; expand();});
document.getElementById("image25").addEventListener("click",function(){index=25; expand();});
document.getElementById("image26").addEventListener("click",function(){index=26; expand()});
document.getElementById("image27").addEventListener("click",function(){index=27; expand();});
document.getElementById("image28").addEventListener("click",function(){index=28; expand();});
document.getElementById("image29").addEventListener("click",function(){index=29; expand();});
document.getElementById("image30").addEventListener("click",function(){index=30; expand();});
document.getElementById("image31").addEventListener("click",function(){index=31; expand();});
document.getElementById("image32").addEventListener("click",function(){index=32; expand();});

document.getElementById("closebtn").addEventListener("click",close);

//event listener for slideshow
document.getElementById("previous").addEventListener("click",previous);
document.getElementById("next").addEventListener("click", next);

//function for thumbnails
function expand(){
    document.getElementById("imagebox").style.display = "block";
    openimages(index);
}
function close(){
    document.getElementById("imagebox").style.display = "none";
}

//functions for carousel
function closeall(){
    document.getElementById("carimage1").style.display = "none";
    document.getElementById("carimage2").style.display = "none";
    document.getElementById("carimage3").style.display = "none";
    document.getElementById("carimage4").style.display = "none";
    document.getElementById("carimage5").style.display = "none";
    document.getElementById("carimage6").style.display = "none";
    document.getElementById("carimage7").style.display = "none";
    document.getElementById("carimage8").style.display = "none";
    document.getElementById("carimage9").style.display = "none";
    document.getElementById("carimage10").style.display = "none";
    document.getElementById("carimage11").style.display = "none";
    document.getElementById("carimage12").style.display = "none";
    document.getElementById("carimage13").style.display = "none";
    document.getElementById("carimage14").style.display = "none";
    document.getElementById("carimage15").style.display = "none";
    document.getElementById("carimage16").style.display = "none";
    document.getElementById("carimage17").style.display = "none";
    document.getElementById("carimage18").style.display = "none";
    document.getElementById("carimage19").style.display = "none";
    document.getElementById("carimage20").style.display = "none";
    document.getElementById("carimage21").style.display = "none";
    document.getElementById("carimage22").style.display = "none";
    document.getElementById("carimage23").style.display = "none";
    document.getElementById("carimage24").style.display = "none";
    document.getElementById("carimage25").style.display = "none";
    document.getElementById("carimage26").style.display = "none";
    document.getElementById("carimage27").style.display = "none";
    document.getElementById("carimage28").style.display = "none";
    document.getElementById("carimage29").style.display = "none";
    document.getElementById("carimage30").style.display = "none";
    document.getElementById("carimage31").style.display = "none";
    document.getElementById("carimage32").style.display = "none";
}
function openimages(index){

    closeall();

    if(index ==1){
        document.getElementById("carimage1").style.display = "block";
    }
    if(index==2){
        document.getElementById("carimage2").style.display = "block";
    }
    if(index ==3){
        document.getElementById("carimage3").style.display = "block";
    }
    if(index==4){
        document.getElementById("carimage4").style.display = "block";
    }
    if(index ==5){
        document.getElementById("carimage5").style.display = "block";
    }
    if(index==6){
        document.getElementById("carimage6").style.display = "block";
    }
    if(index ==7){
        document.getElementById("carimage7").style.display = "block";
    }
    if(index==8){
        document.getElementById("carimage8").style.display = "block";
    }
    if(index ==9){
        document.getElementById("carimage9").style.display = "block";
    }
    if(index==10){
        document.getElementById("carimage10").style.display = "block";
    }
    if(index ==11){
        document.getElementById("carimage11").style.display = "block";
    }
    if(index==12){
        document.getElementById("carimage12").style.display = "block";
    }
    if(index ==13){
        document.getElementById("carimage13").style.display = "block";
    }
    if(index==14){
        document.getElementById("carimage14").style.display = "block";
    }
    if(index ==15){
        document.getElementById("carimage15").style.display = "block";
    }
    if(index==16){
        document.getElementById("carimage16").style.display = "block";
    }
    if(index ==17){
        document.getElementById("carimage17").style.display = "block";
    }
    if(index==18){
        document.getElementById("carimage18").style.display = "block";
    }
    if(index ==19){
        document.getElementById("carimage19").style.display = "block";
    }
    if(index==20){
        document.getElementById("carimage20").style.display = "block";
    }
    if(index ==21){
        document.getElementById("carimage21").style.display = "block";
    }
    if(index==22){
        document.getElementById("carimage22").style.display = "block";
    }
    if(index ==23){
        document.getElementById("carimage23").style.display = "block";
    }
    if(index==24){
        document.getElementById("carimage24").style.display = "block";
    }
    if(index ==25){
        document.getElementById("carimage25").style.display = "block";
    }
    if(index==26){
        document.getElementById("carimage26").style.display = "block";
    }
    if(index ==27){
        document.getElementById("carimage27").style.display = "block";
    }
    if(index==28){
        document.getElementById("carimage28").style.display = "block";
    }
    if(index ==29){
        document.getElementById("carimage29").style.display = "block";
    }
    if(index==30){
        document.getElementById("carimage30").style.display = "block";
    }
    if(index ==31){
        document.getElementById("carimage31").style.display = "block";
    }
    if(index==32){
        document.getElementById("carimage32").style.display = "block";
    }
}


//functions for slideshow
function previous(){
    index = index -1;
    if(index==0){
        index=32;
        openimages(index); //open last image to wrap around
    }
    else{
        openimages(index);
    }
}
function next(){
    index = index + 1;
    if(index==33){
        index=1;
        openimages(index); //open first image to wrap around
    }
    else{
        openimages(index);
    }
}