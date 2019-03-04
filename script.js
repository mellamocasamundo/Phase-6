a = document.getElementById("ice1");
b = document.getElementById("ice2");
c = document.getElementById("ice3");
var mySound = document.getElementById('you-win');

function nextImage(el){
	if (el.src.match("images/ice.PNG")){ 
		el.src = "images/ice (1).PNG";
	} else if (el.src.match("images/ice(1).PNG")){ 
		el.src = "images/ice(2).PNG";
	} else {
	}
}

function checkColors(el){
	if (a.src.match("images/cherry_slot.PNG") && b.src.match("images/cherry_slot.PNG") && c.src.match("images/cherry_slot.PNG")){
		mySound.play();
		alert("JACKPOT");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
	} else {
		alert("BETTER LUCK NEXT TIME");
	}
}
