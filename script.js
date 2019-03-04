a = document.getElementById("ice1");
b = document.getElementById("ice2");
c = document.getElementById("ice3");
var mySound = document.getElementById('cracking');

function nextImage(el){
	if (el.src.match("image/ice.png")){ 
		el.src = "image/ice (1).jpg";
	} else if (el.src.match("image/ice(1).jpg")){ 
		el.src = "image/dirt.jpg";
	} else if {el.src.math("image.dirt.jpg")){
		el.src = "image/ice.png";
	} else {
	}
}

function checkOrder(el){
	if (a.src.match("image/dirt.jpg") && b.src.match("image/dirt.jpg") && c.src.match("image/dirt.jpg")){
		alert("Scrat has his acorn!")
	} else {
	}
}
