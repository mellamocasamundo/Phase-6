function nextFirstImage(el){
	if (el.src.match("images/ice.PNG")){ 
		el.src = "images/.PNG";
	} else if (el.src.match("images/lemon_slot.PNG")){ 
		el.src = "images/orange_slot.PNG";
	} else if (el.src.match("images/orange_slot.PNG")){ 
		el.src = "images/cherry_slot.PNG";
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
