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
