let magicWords = [];
let key=0;
function crumpledPaperShow(){
    if (['open', 'sesa', 'me'].every(item => magicWords.includes(item))){
        paper();
        }
    else{
        let showTextelement = document.getElementById("warning");
        showTextelement.style.display = "block";
    }
}

function addWordOpen(){
    magicWords.push("open");
}
function addWordSesa(){
    magicWords.push("sesa");
}
function addWordMe(){
    magicWords.push("me");
}

//sound
function playBell(){
    let audio = new Audio('soundEffects/bell.mp3')
    if (audio.paused) {
        // If it is paused, play the audio
        audio.play();
      } else {
        // If it is playing, pause the audio
        audio.pause();
      }
      showMona();
      removeCurse();
}

function obtainKey(){
    key=1;
    let val = document.getElementById('get');
    val.style.display = 'block';
}
function unlocked(){
    if (key==1){
        let door = document.getElementById('lockedDoor');
        door.style.display = 'none';
        showPortal();
    }
    else{
        alert('The Door is locked.');
    }
}
function transpar(){
    let val = document.getElementById('get');
    val.style.display = 'none';
}
function crumpPaperpop() {
    let element = document.getElementById("crumpPaper");
    let eks = document.getElementById("crumpPaper");
    element.style.display = "block";
    eks.style.display = 'block';
    let bellelement = document.getElementById("bell");
    bellelement.style.display = 'block';
}
function showMona() {
    let element = document.getElementById("mona");
    element.style.display = "block";
}
function removeCurse() {
    let element = document.getElementById("keyfall");
    element.style.display = "block";
}
function crumpPaperout() {
    let element = document.getElementById("crumpPaper");
    let eks = document.getElementById("crumpPaper");
    element.style.display = "none";
    eks.style.display = 'none';
}
function showText(){
    let showTextelement = document.getElementById("warning");
    showTextelement.style.display = "block";
}
function paper(){
    let paperelement = document.getElementById("paper");
    paperelement.style.display = "block";
}
function painting(){
    let paintingelement = document.getElementById("paintingpop");
    let paintingeks = document.getElementById("paintingpop");
    paintingelement.style.display = "block";
    paintingeks.style.display = 'block';
}
function paintingout(){
    let elementScroll = document.getElementById("paintingpop");
    let eksScroll = document.getElementById("paintingpop");
    let eksWarn = document.getElementById("warning");
    elementScroll.style.display = "none";
    eksScroll.style.display = 'none';
    eksWarn.style.display = 'none';
}
function popup() {
    let element = document.getElementById("pop1");
    let eks = document.getElementById("pop-up");
    element.style.display = "block";
    eks.style.display = 'block';
}
function popout() {
    let element = document.getElementById("pop1");
    let eks = document.getElementById("pop-up");
    element.style.display = "none";
    eks.style.display = 'none';
}
function scrollpop(){
    let elementScroll = document.getElementById("scrollpop");
    let eksScroll = document.getElementById("scrollpop");
    elementScroll.style.display = "block";
    eksScroll.style.display = 'block';
}
function scrollout(){
    let elementScroll = document.getElementById("scrollpop");
    let eksScroll = document.getElementById("scrollpop");
    elementScroll.style.display = "none";
    eksScroll.style.display = 'none';
}
function sesarpop() {
    let sesarelement = document.getElementById("sesarpop");
    let sesareks = document.getElementById("sesarpop");
    sesarelement.style.display = "block";
    sesareks.style.display = 'block';
}
function sesarout() {
    let elementsesar = document.getElementById("sesarpop");
    let ekssesar = document.getElementById("sesarpop");
    elementsesar.style.display = "none";
    ekssesar.style.display = 'none';
}
function barrelpop() {
    let barrelelement = document.getElementById("barrelpop");
    let barreleks = document.getElementById("barrelpop");
    barrelelement.style.display = "block";
    barreleks.style.display = 'block';
}
function barrelout() {
    let elementbarrel = document.getElementById("barrelpop");
    let eksbarrel = document.getElementById("barrelpop");
    elementbarrel.style.display = "none";
    eksbarrel.style.display = 'none';
}
function showPortal(){
    let portal = document.getElementById('portal');
    portal.style.display = 'block';
}