a = document.getElementById("ice1");
b = document.getElementById("ice2");
c = document.getElementById("ice3");
d = document.getElementById("acorn");
e = document.getElementById("acorn1");
f = document.getElementById("key");
var mySound = document.getElementById('cracking');
var mySound1 = document.getElementById('scrat');

function nextFirstImage(el){
	if (el.src.match("image/ice.png")){ 
		el.src = "image/ice1.png";
		mySound.play();
	} else if (el.src.match("image/ice1.png")){ 
		el.src = "image/dirt.png";
		mySound.play();
	} else {
	}
}

function nextSecondImage(el){
	if (a.src.match("image/ice.png") && el.src.match("image/ice.png") && c.src.match("image/dirt.png")){
		el.src = "image/ice1.png";
		mySound.play();
	} else if (el.src.match("image/ice1.png")){ 
		el.src = "image/dirt.png";
		mySound.play();
	} else {
	}
}
function nextThirdImage(el){
	if (el.src.match("image/ice.png") && b.src.match("image/dirt.png") && c.src.match("image/dirt.png")){
		el.src = "image/ice1.png";
		mySound.play();
	} else if (el.src.match("image/ice1.png")){ 
		el.src = "image/dirt.png";
		mySound.play();
		d.src = "";
		e.src = "image/acorn.png"
		mySound1.play();
		f.src = "image/boss_key.gif";
		alert("Scrat has his acorn!");
	} else {
	}
}

function checkOrder(el){
		alert("Scrat wants his acorn!");
}
