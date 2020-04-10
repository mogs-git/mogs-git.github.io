const mid_banner = document.getElementsByClassName("mid_banner")[0];
const bod = document.getElementsByTagName("body")[0];
let button = document.createElement("button");
let button_shield = document.createElement("div");
button_shield.style.width = "140px"
button_shield.style.height = "100px"
button_shield.style.display = "flex";
button_shield.style.justifyContent = "center"
bwidth = 100;
bheight = 60;
button.style.width = bwidth.toString() + "px";
button.style.height = bheight.toString() + "px";
button.textContent = "Click here for my skills";
button_shield.style.position="absolute";
button_shield_x = "50%";
button_shield_y = "60%";
button_shield.style.left=button_shield_x;
button_shield.style.top=button_shield_y;
button_shield.appendChild(button);
mid_banner.appendChild(button_shield);
button_shield.addEventListener("mousemove", (e) => {
	let rect = button_shield.getBoundingClientRect();
	button_center_y = rect.top + bheight/2;
	button_center_x = rect.left + bwidth/2; 
	if (e.clientX > button_center_x) {
		button_shield.style.left = (rect.left - 5)+"px";
	} else {
		button_shield.style.left = (e.clientX + 5)+"px";
	}
	if (e.clientY > button_center_y) {
		button_shield.style.top = (rect.top - 5)+"px";
	} else {
		button_shield.style.top = (e.clientY + 5)+"px";
	}
})



