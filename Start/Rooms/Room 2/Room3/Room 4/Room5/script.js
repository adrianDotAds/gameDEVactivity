////////////////////////////////////////////////// LEVEL 5 //////////////////////////////////////////////////
var L1_hasKey = false;
var L1_doorLock = "locked";
var L1_gotChestHint = true;

function L1_tryLock() {
	console.log("clicked")
	if (L1_hasKey == true) {
		L1_doorLock = "unlocked";
		var L1_success = new Audio("L1-success.mp3");
		L1_success.play();	
		alert("You inserted the key. The door is unlocked.")
		var lock = document.getElementById('L1-lock');
		lock.style.visibility = "hidden";
		var portal1 = document.getElementById("L1-portal");
		portal1.style.visibility = "visible";
	} else {
		alert("The door is locked. Find the key first.")
	}
}

//click chest
function L1_tryCloseChest() {
	console.log("click close chest");
	var chestlock = document.getElementById('L1-chestlock');
	chestlock.style.visibility = "visible";
};

function L1_chestlockBack() {
	console.log("hide chest lock");
	var chestlock= document.getElementById('L1-chestlock');
	chestlock.style.visibility = "hidden";
};

function L1_chestlockEnter() {
	var L1_combA1 = document.getElementById('L1-combA1');
	var L1_combA2 = document.getElementById('L1-combA2');
	var L1_combA3 = document.getElementById('L1-combA3');
	var L1_combA4 = document.getElementById('L1-combA4');
	var L1_combB1 = document.getElementById('L1-combB1');
	var L1_combB2 = document.getElementById('L1-combB2');
	var L1_combB3 = document.getElementById('L1-combB3');
	var L1_combB4 = document.getElementById('L1-combB4');
	if (L1_combA3.checked) {
		if (L1_combB1.checked) {
			console.log("combination lock correct");
			var L1_success = new Audio("L1-success.mp3");
			L1_success.play();	
			alert("Unlocked. Check inside.");
			var chestlock = document.getElementById('L1-chestlock');
			chestlock.style.visibility = "hidden";
			var closechest = document.getElementById('L1-closechest');
			closechest.style.visibility = "hidden";
			var openchest = document.getElementById('L1-openchest');
			openchest.style.visibility = "visible";
			var key = document.getElementById('L1-key');
			key.style.visibility = "visible";
		}
	} else {
		console.log("incorrect");
		alert("Combination lock incorrect. Try again.");
	};
};

//play sound hint
function L1_tryGong() {
	console.log("gong played");
	var L1_audio = new Audio("L1-gong.mp3");
	L1_audio.play();	
};

//paper enter button
function L1_EnterPopUp() {
	var L1_input1 = document.getElementById("L1-0");
	var L1_input2 = document.getElementById("L1-1");
	var L1_answer1 = 0;
	var L1_answer2 = 9;
	if (L1_input1.value.match(L1_answer1)) {
		if (L1_input2.value.match(L1_answer2)) {
			console.log("correct number entered");
			var L1_success = new Audio("L1-success.mp3");
			L1_success.play();	
			alert("Unlocked. You got a hint.");
			var chesthint = document.getElementById('L1-chesthint');
			chesthint.style.visibility = "visible";
			var popUpNote = document.getElementById('L1-popUpNote');
			popUpNote.style.visibility = "hidden";
		};
	} else {
		console.log("wrong number entered");
		alert("Your answer is incorrect. Try again.");
	};
};

//paper back button
function L1_HidePopUp() {
	console.log("hide note");
	var popUpNote = document.getElementById('L1-popUpNote');
	popUpNote.style.visibility = "hidden";
};

//click crumpled paper
function L1_tryCrumpledPaper() {
	console.log("read note");
	var popUpNote = document.getElementById('L1-popUpNote');
	popUpNote.style.visibility = "visible";
};

//grab the key
function L1_getKey() {
	console.log("got the key")
	L1_hasKey = true;
	var key = document.getElementById('L1-key');
	key.style.visibility = "hidden";
	var L1_success = new Audio("L1-success.mp3");
	L1_success.play();	
	alert("You got a key! Open the door.");
};

////////////////////////////////////////////////// LEVEL 5 //////////////////////////////////////////////////
var L5_hasKey = false;
var L5_hasPearl = false;
var L5_doorLock = "locked";
var L5_gotChestHint = true;

//click the painting
function L5_showpuzzle() {
	console.log("open puzzle");
	var painting = document.getElementById('L5-painting');
	painting.style.filter = "blur(5px)";
	var puzzlecontainer = document.getElementById('L5-puzzlecontainer');
	puzzlecontainer.style.visibility = "visible";
};

//puzzle board back button
function L5_HidePuzzle() {
	console.log("hide puzzle");
	var painting = document.getElementById('L5-painting');
	painting.style.filter = "blur(0)";
	var puzzlecontainer = document.getElementById('L5-puzzlecontainer');
	puzzlecontainer.style.visibility = "hidden";
};



var rows = 3;
var columns = 3;
var currTile;
var otherTile; //blank tile
var turns = 0;
// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
var startingImgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];
const imgCorrectOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.png">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
			tile.name = imgOrder[0];
            tile.src = imgOrder.shift() + ".png";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("L5-board").append(tile);
			

        };
    };
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {
    if (!otherTile.src.includes("3.png")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
		let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
		
		let currImgNameIndex = startingImgOrder.indexOf(currTile.name);
		let otherImgNameIndex = startingImgOrder.indexOf(otherTile.name);
		
		startingImgOrder[currImgNameIndex] = otherTile.name;
		startingImgOrder[otherImgNameIndex] = currTile.name;

		if (startingImgOrder.every((val, index) => val === imgCorrectOrder[index])) {
			alert("You Won!")
		};
    };
}

function L5_EnterPuzzle() {
	var puzzlecontainer = document.getElementById('L5-puzzlecontainer');
	puzzlecontainer.style.visibility = "hidden";
	var painting = document.getElementById('L5-painting');
	painting.style.visibility = "hidden";
	var L5_success = new Audio("L1-success.mp3");
	L5_success.play();	
	alert("Solved. Check the painting for hint then try to unlocked the chest.")
}

//click chest
function L5_tryCloseChest() {
	console.log("click close chest");
	var chestlock5 = document.getElementById('L5-chestlock');
	chestlock5.style.visibility = "visible";
	
}

function L5_chestlockBack() {
	console.log("hide chest lock");
	var chestlock5= document.getElementById('L5-chestlock');
	chestlock5.style.visibility = "hidden";
};

function L5_chestlockEnter() {
	var L5_combA1 = document.getElementById('L5-combA1');
	var L5_combA2 = document.getElementById('L5-combA2');
	var L5_combA3 = document.getElementById('L5-combA3');
	var L5_combB1 = document.getElementById('L5-combB1');
	var L5_combB2 = document.getElementById('L5-combB2');
	var L5_combB3 = document.getElementById('L5-combB3');
	var L5_combC1 = document.getElementById('L5-combC1');
	var L5_combC2 = document.getElementById('L5-combC2');
	var L5_combC3 = document.getElementById('L5-combC3');
	if (L5_combA3.checked) {
		if (L5_combB1.checked) {
			if (L5_combC2.checked) {
				console.log("combination lock correct");
				var L5_success = new Audio("L1-success.mp3");
				L5_success.play();	
				alert("Unlocked. Check inside.");
				var chestlock5 = document.getElementById('L5-chestlock');
				chestlock5.style.visibility = "hidden";
				var closechest5 = document.getElementById('L5-closechest');
				closechest5.style.visibility = "hidden";
				var openchest5 = document.getElementById('L5-openchest');
				openchest5.style.visibility = "visible";
				var key5 = document.getElementById('L5-key');
				key5.style.visibility = "visible";
			}
		}
	} else {
		console.log("incorrect");
		alert("Combination lock incorrect. Try again.");
	};
};

//grab the key
function L5_getKey() {
	console.log("got the key")
	L5_hasKey = true;
	var key5 = document.getElementById('L5-key');
	key5.style.visibility = "hidden";
	var L5_success = new Audio("L1-success.mp3");
	L5_success.play();	
	alert("You got a key! Open the box.");
};

function L5_tryGlassBox() {
	console.log("clicked")
	if (L5_hasKey == true) {
		L5_GlassBox = "unlocked";
		var L5_success = new Audio("L1-success.mp3");
		L5_success.play();	
		alert("You inserted the key. The box is unlocked.")
		var glassbox5 = document.getElementById('L5-glassbox');
		glassbox5.style.visibility = "hidden";
		var pearl = document.getElementById("L5-pearl");
		pearl.style.visibility = "visible";
	} else {
		alert("The box is locked. Find the key first.")
	}
}

//grab the pearl
function L5_getPearl() {
	console.log("got the pearl")
	L5_hasPearl = true;
	var pearl5 = document.getElementById('L5-pearl');
	pearl5.style.visibility = "hidden";
	var L5_success = new Audio("L1-success.mp3");
	L5_success.play();	
	alert("You got the pearl! Open the door.");
};

function L5_tryDoor() {
	console.log("clicked")
	if (L5_hasPearl == true) {
		L5_doorLock = "unlocked";
		var L5_success = new Audio("L1-success.mp3");
		L5_success.play();	
		alert("You inserted the pearl. The door is unlocked.")
		var door5 = document.getElementById('L5-door');
		door5.style.visibility = "hidden";
		var portal5 = document.getElementById("L5-portal");
		portal5.style.visibility = "visible";
	} else {
		alert("The door is locked. Get the pearl first.")
	}
}

