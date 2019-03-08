a = document.getElementById("ice1");
b = document.getElementById("ice2");
c = document.getElementById("ice3");
d = document.getElementById("sky");
e = document.getElementById("key");
f = document.getElementById("home");
var mySound = document.getElementById('cracking');
var mySound1 = document.getElementById('scrat');

function nextFirstImage(el){
	} if (c.src.match("image/ice.png")){ 
		c.src = "image/ice1.png";
		mySound.play();
	} else if (c.src.match("image/ice1.png")){ 
		c.src = "image/dirt.png";
		mySound.play();
	} else {
	}
}

function nextSecondImage(el){
	if (c.src.match("image/dirt.png")){
		b.src = "image/ice1.png";
		mySound.play();
	} else if (b.src.match("image/ice1.png")){ 
		b.src = "image/dirt.png";
		mySound.play();
	} else {
	}
}
function nextThirdImage(el){
	if (b.src.match("image/dirt.png") && c.src.match("image/dirt.png")){
		a.src = "image/ice1.png";
		mySound.play();
	} else if (a.src.match("image/ice1.png")){ 
		a.src = "image/dirt.png";
		mySound.play();
		f.src = "image/home1.png";
		d.src = "image/sky1.png"
		mySound1.play();
		e.src = "image/boss_key.gif";
		alert("Scrat has his acorn!");
	} else {
	}
}

function checkOrder(el){
		alert("Scrat wants his acorn!");
}
