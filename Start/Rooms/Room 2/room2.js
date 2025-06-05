const GameDifficulty=[20];
class Game{
    cols=3;//how many columns
    rows=3;//how many rows
    count;//cols*rows
    blocks;//the html elements with className="puzzle_block"
    emptyBlockCoords=[2,2];//the coordinates of the empty block
    indexes=[];//keeps track of the order of the blocks

    constructor(difficultyLevel=1){
        this.difficulty=GameDifficulty[difficultyLevel-1];
        this.count=this.cols*this.rows;
        this.blocks=document.getElementsByClassName("puzzle_block");//grab the blocks
        this.init();
    }

    init(){//position each block in its proper position
        for(let y=0;y<this.rows;y++){
            for(let x=0;x<this.cols;x++){
                let blockIdx=x+y*this.cols;
                if(blockIdx+1>=this.count)break;
                let block=this.blocks[blockIdx];
                this.positionBlockAtCoord(blockIdx,x,y);
                block.addEventListener('click',(e)=>this.onClickOnBlock(blockIdx));
                this.indexes.push(blockIdx);
            }
        }
        this.indexes.push(this.count-1);
        this.randomize(this.difficulty);
    }

    randomize(iterationCount){//move a random block (x iterationCount)
        for(let i=0;i<iterationCount;i++){
            let randomBlockIdx=Math.floor(Math.random()*(this.count-1));
            let moved=this.moveBlock(randomBlockIdx);
            if(!moved)i--;
        }
    }

    moveBlock(blockIdx){//moves a block and return true if the block has moved
        let block=this.blocks[blockIdx];
        let blockCoords=this.canMoveBlock(block);
        if(blockCoords!=null){
            this.positionBlockAtCoord(blockIdx,this.emptyBlockCoords[0],this.emptyBlockCoords[1]);
            this.indexes[this.emptyBlockCoords[0]+this.emptyBlockCoords[1]*this.cols]=this.indexes[blockCoords[0]+blockCoords[1]*this.cols];
            this.emptyBlockCoords[0]=blockCoords[0];
            this.emptyBlockCoords[1]=blockCoords[1];
            return true;
        }
        return false;
    }
    canMoveBlock(block){//return the block coordinates if he can move else return null
        let blockPos=[parseInt(block.style.left),parseInt(block.style.top)];
        let blockWidth=block.clientWidth;
        let blockCoords=[blockPos[0]/blockWidth,blockPos[1]/blockWidth];
        let diff=[Math.abs(blockCoords[0]-this.emptyBlockCoords[0]),Math.abs(blockCoords[1]-this.emptyBlockCoords[1])];
        let canMove=(diff[0]==1&&diff[1]==0)||(diff[0]==0&&diff[1]==1);
        if(canMove)return blockCoords;
        else return null;
    }

    positionBlockAtCoord(blockIdx,x,y){//position the block at a certain coordinates
        let block=this.blocks[blockIdx];
        block.style.left=(x*block.clientWidth)+"px";
        block.style.top=(y*block.clientWidth)+"px";
    }

    onClickOnBlock(blockIdx){//try move block and check if puzzle was solved
        if(this.moveBlock(blockIdx)){
            if(this.checkPuzzleSolved()){
                setTimeout(()=>alert("There's something in the middle of the painting and the chair"),600);
            }
        }
    }


    checkPuzzleSolved(){//return if puzzle was solved
        for(let i=0;i<this.indexes.length;i++){
            //console.log(this.indexes[i],i);
            if(i==this.emptyBlockCoords[0]+this.emptyBlockCoords[1]*this.cols)continue;
            if(this.indexes[i]!=i)return false;
        }
        return true;
    }
}

var game=new Game(1);//instantiate a new Game

let isOn =true;

function turnOffShow(){
    let off = document.getElementById("turnOff");
    let on = document.getElementById("turnOn");
    off.style.display = "block";
    on.style.display = "none";

}
function turnOnShow(){
    let off = document.getElementById("turnOff");
    let on = document.getElementById("turnOn");
    off.style.display = "none";
    on.style.display = "block";
}
function offButton(){
    let on = document.getElementById('xtable');
    let table = document.getElementById('table')
    on.style.display = 'block';
    table.style.display = 'none';
    isOn = false;
}
function onButton(){
    let on = document.getElementById('xtable');
    let table = document.getElementById('table')
    on.style.display = 'none';
    table.style.display = 'block';
    isOn = true;
}
function hideOff(){
    let hide = document.getElementById('turnOff');
    hide.style.display = 'none'
}
function hideOn(){
    let hide = document.getElementById('turnOn');
    hide.style.display = 'none'
}
function detachShowButton(){
    let hide = document.getElementById('detach');
    hide.style.display = 'block';
}
function detachHideButton(){
    let hide = document.getElementById('detach');
    hide.style.display = 'none'
}
function detach(){
    if(isOn==true){
        alert("Something's not right");
    }
    else{
        let detach = document.getElementById('detachPaint');
        detach.style.display = 'block';
        let paint = document.getElementById('painting');
        paint.style.display = 'none';
    }
}
function hintWindow(){
    alert("This window seems a bit odd..")
}
function showHintWindow(){
    let hint = document.getElementById('hintWindow');
    let removeHint = document.getElementById('window');
    hint.style.display = 'block';
    removeHint.style.display = 'none';
}
let word = "manifestado una nota en este semestre";
let x;
function storeUserInput(){
    let userInput = window.prompt("Careful on putting chants, someone might hear you");
    if (userInput==word){
        alert('look at the chairs!😶')
        const audio = document.getElementById('myAudio');   // Get the audio element
        audio.play();
        x=word;
    }
    else{
        const audio = document.getElementById('myAudio2');   // Get the audio element
        audio.play();
    }
}
function nothing(){
    let hint = document.getElementById('chair1');
    if(x==word){
        alert("nothing's here")
    }
    else{
        alert("It's uncomfortable to sit here, I don't know why...")
    }
}
function key(){
    let hint = document.getElementById('chair2');
    if(x==word){
        alert('You found a key!')
        let key = document.getElementById('key');
        key.style.display = 'block';
    }
    else{
        alert("It's uncomfortable to sit here, I don't know why...")
    }
}
function removeLock(){
    let removeLock = document.getElementById('lock');
    removeLock.style.display = 'none';
}
function lock(){
    alert("Need key to unlock this doorlock")
}
function showPortal(){
    let portal = document.getElementById('portal');
    portal.style.display = 'block';
}