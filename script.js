a = document.getElementById("ice1");
b = document.getElementById("ice2");
c = document.getElementById("ice3");
d = document.getElementById("sky");
var mySound = document.getElementById('cracking');
var mySound1 = document.getElementById('scrat');

function nextImage(el){
	if (el.src.match("image/ice.png")){ 
		el.src = "image/ice1.png";
		mySound.play();
	} else if (el.src.match("image/ice1.png")){ 
		el.src = "image/dirt.png";
		mySound.play();
	} else {
	}
}

function checkOrder(el){
	if (a.src.match("image/dirt.png") && b.src.match("image/dirt.png") && c.src.match("image/dirt.png")){
		el.src = "home1.png";
		d.src = "sky1.png"
		mySound1.play();
		alert("Scrat has his acorn!");
	} else {
		mySound1.play();
		alert("Scrat wants his acorn!");
	}
}
