let projects = ["Calculator", "Perlin vines", "egg", "greg", "greg", "greg"];
let links = ["http://mogs-git.github.io//calculator/", "http://mogs-git.github.io//perlin_vine/"];
let background_colours = ["hsl(101, 61%, 25%)", "hsl(0, 61%, 30%)",  "rgb(73, 156, 74)","rgb(73, 156, 74)", "rgb(73, 156, 74)", "rgb(73, 156, 74)"];

const welcome_container = document.getElementById("welcome_container");
const projects_container = document.getElementById("projects_container");

let desc_node = document.createElement("p");
desc_node.classList.add("desc");
welcome_container.appendChild(desc_node);

function brighten_hsl_string(s) {
	s = s.split("");
	let n = s[s.length-4];
	n = Number(n) + 3;
	s[s.length-4] = String(n);
	return s.join("");
} 

for (let i = 0; i < projects.length; i++) {
	let item = document.createElement("div");
	item.textContent = projects[i];
	item.style.backgroundColor = background_colours[i];
	item.classList.add("project_item");
	projects_container.appendChild(item);
	item.addEventListener("mouseover", (e) => {
		e.target.style.backgroundColor = brighten_hsl_string(background_colours[i]);
		desc_node.textContent = descriptions[i];	

		desc_node.classList.toggle("fade");
	})
	item.addEventListener("mouseout", (e) => {
		e.target.style.backgroundColor = background_colours[i];	
		desc_node.classList.toggle("fade");
	})
	item.addEventListener("click", () => {
		window.open(links[i], '_blank');
	})

}

let descriptions = [
"A simple calculator built using HTML, CSS and vanilla JS.",
"A generative art project built using p5.js."
]

let tags = ["technical", "art", "game"];

let nav_links = ["home", "about", "writings"]
const navbar_top = document.getElementById("links");

nav_links.forEach((link) => {
	let el = document.createElement("li");
	el.textContent = link;
	navbar_top.appendChild(el);
	el.addEventListener("click", () => {
		if (link === "home") {
			window.open("http://mogs-git.github.io");
		} else {
			window.open("http://mogs-git.github.io/"+link+"/");
		}
	})
	el.addEventListener("mouseover", (e) => {
		e.target.classList.add("link_hover");
	})
	el.addEventListener("mouseout", (e) => {
		e.target.classList.remove("link_hover");
	})

})

