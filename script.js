a = document.getElementById("ice1");
b = document.getElementById("ice2");
c = document.getElementById("ice3");
var mySound = document.getElementById('you-win');

function nextImage(el){
	if (el.src.match("image/ice.png")){ 
		el.src = "image/ice (1).jpg";
	} else if (el.src.match("image/ice(1).jpg")){ 
		el.src = "image/dirt.jpg";
	} else {
	}
}

function checkOrder(el){
	if (a.src.match("image/dirt.jpg") && b.src.match("image/ice.png") && c.src.match("image/ice.png")){
		alert("JACKPOT");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
	} else {
		alert("BETTER LUCK NEXT TIME");
	}
}
