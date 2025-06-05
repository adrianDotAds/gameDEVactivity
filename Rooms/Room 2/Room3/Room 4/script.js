////////////////////////////////////////////////// LEVEL 4 //////////////////////////////////////////////////
var L4_hasKey = false;
var L4_doorLock = "locked";
var L4_gotChestHint = true;



function L4_matchgame() {
	window.location.href = "match.html";
}

//click chest
function L4_secretCompartment() {
	console.log("click torch");
	var chestlock4 = document.getElementById('L4-chestlock');
	chestlock4.style.visibility = "visible";
	
}

function L4_chestlockBack() {
	console.log("hide chest lock");
	var chestlock4 = document.getElementById('L4-chestlock');
	chestlock4.style.visibility = "hidden";
};

function L4_chestlockEnter() {
	var L4_combA1 = document.getElementById('L4-combA1');
	var L4_combA2 = document.getElementById('L4-combA2');
	var L4_combA3 = document.getElementById('L4-combA3');
	var L4_combB1 = document.getElementById('L4-combB1');
	var L4_combB2 = document.getElementById('L4-combB2');
	var L4_combB3 = document.getElementById('L4-combB3');
	var L4_combC1 = document.getElementById('L4-combC1');
	var L4_combC2 = document.getElementById('L4-combC2');
	var L4_combC3 = document.getElementById('L4-combC3');
	if (L4_combA2.checked) {
		if (L4_combB2.checked) {
			if (L4_combC1.checked) {
				console.log("combination lock correct");
				var L4_success = new Audio("L1-success.mp3");
				L4_success.play();	
				alert("Unlocked. Check inside.");
				var chestlock4 = document.getElementById('L4-chestlock');
				chestlock4.style.visibility = "hidden";
				var torch = document.getElementById('L4-torch');
				torch.style.visibility = "hidden";
				var innerbrick = document.getElementById('L4-innerbrick');
				innerbrick.style.visibility = "visible";
				var key4 = document.getElementById('L4-key');
				key4.style.visibility = "visible";
			}
		}
	} else {
		console.log("incorrect");
		alert("Combination lock incorrect. Try again.");
	};
};
	
//grab the key
function L4_getKey() {
	console.log("got the key")
	L4_hasKey = true;
	var key4 = document.getElementById('L4-key');
	key4.style.visibility = "hidden";
	var L4_success = new Audio("L1-success.mp3");
	L4_success.play();	
	alert("You got the key! Open the door.");
};

function L4_tryDoor() {
	console.log("clicked")
	if (L4_hasKey == true) {
		L4_doorLock = "unlocked";
		var L4_success = new Audio("L1-success.mp3");
		L4_success.play();	
		alert("You inserted the key. The door is unlocked.")
		var lock4 = document.getElementById('L4-lock');
		lock4.style.visibility = "hidden";
		var portal4 = document.getElementById("L4-portal");
		portal4.style.visibility = "visible";
	} else {
		alert("The door is locked. Find the key first.")
	}
}