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
