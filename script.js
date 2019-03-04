a = document.getElementById("ice1");
b = document.getElementById("ice2");
c = document.getElementById("ice3");
d = document.getElementById("sky");
var mySound = document.getElementById('cracking');
var mySound1 = document.getElementById('scrat');

function nextImage(el){
	if (el.src.match("image/ice.png")){ 
		el.src = "image/ice (1).jpg";
		mySound.play();
	} else if (el.src.match("image/ice (1).jpg")){ 
		el.src = "image/dirt.jpg";
		mySound.play();
	} else if (el.src.match("image/dirt.jpg")){
		el.src = "image/ice.png";
		mySound.play();
	} else {
	}
}

function checkOrder(el){
	if (a.src.match("image/dirt.jpg") && b.src.match("image/dirt.jpg") && c.src.match("image/dirt.jpg")){
		el.src = "home (1).png";
		d.src = "sky(1).png"
		mySound1.play();
		alert("Scrat has his acorn!");
	} else {
		mySound1.play();
		alert("Scrat wants his acorn!");
	}
}
