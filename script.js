let projects = [
"Calculator", 
"Perlin vines", 
"Relative Bezier", 
"Forest", 
"Flower maker", 
"Raindrops",
"Circle waves"];

let links = [
"http://mogs-git.github.io/calculator/", 
"http://mogs-git.github.io/perlin_vine/", 
"http://mogs-git.github.io/bezier/", 
"http://mogs-git.github.io/garden_banner/",
"http://mogs-git.github.io/flower_maker/", 
"http://mogs-git.github.io/raindrops/",
""];

let background_colours = [
"hsl(216, 77%, 29%)", 
"hsl(0, 61%, 30%)", 
"hsl(25, 61%, 30%)", 
"hsl(101, 61%, 25%)", 
"hsl(312, 49%, 35%)", 
"hsl(197, 100%, 29%)",
"hsl(296, 100%, 26%)"];

let descriptions = [
"A simple calculator built using HTML, CSS and vanilla JS.",
"A generative art project built using p5.js.",
"A tool to find Bezier control point coordinates written in p5.js",
"An ongoing generative art project written in p5.js.",
"Make flowers by changing the petal shape and angle of rotation.",
"Another art project in p5.js.",
"Make waves using dots rotating on circles."
]

// Utility functions //

function brighten_hsl_string(s) {
	s = s.split("");
	let n = s[s.length-4];
	n = Number(n) + 3;
	s[s.length-4] = String(n);
	return s.join("");
} 

// DOM 

const welcome_container = document.getElementById("welcome_container");
let desc_node = document.createElement("p");
desc_node.classList.add("desc");
welcome_container.appendChild(desc_node);

n_projects = projects.length;
projects_per_sheet = 6;
n_project_subcontainers = Math.ceil(n_projects/projects_per_sheet);
const projects_container = document.getElementById("projects_container");

let next_button = document.createElement("button")
next_button.setAttribute("id", "next")
next_button.style.position="absolute";
next_button.style.bottom="5px";
next_button.style.right="5px";
next_button.textContent ="next";
next_button.style.zIndex=5;
projects_container.appendChild(next_button);

const projects_subcontainer_a = document.createElement("div");
const content_a = document.createElement("div");
content_a.classList.add("content");
projects_subcontainer_a.classList.add("slide", "open")
projects_container.appendChild(projects_subcontainer_a);
projects_subcontainer_a.appendChild(content_a)

const projects_subcontainer_b = document.createElement("div");
const content_b = document.createElement("div");
content_b.classList.add("content");
projects_subcontainer_b.classList.add("slide")
projects_container.appendChild(projects_subcontainer_b);
projects_subcontainer_b.appendChild(content_b)

let parentBounds = projects_container.getBoundingClientRect();
let carousel_position = 0;
let current_subcontainer = "a";


let i_start = projects_per_sheet * carousel_position;
let i_end = Math.min(i_start + projects_per_sheet, n_projects-1);
let item;
for (let i = i_start; i < i_end; i++) {
	item = document.createElement("div");
	item.textContent = projects[i];
	item.style.backgroundColor = background_colours[i];
	item.classList.add("project_item");
	content_a.appendChild(item);
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

i_start = projects_per_sheet * (carousel_position+1);
i_end = i_start + projects_per_sheet
console.log(i_start)
console.log(i_end)
for (let i = i_start; i < i_end; i++) {
	item = document.createElement("div");
	if (i < projects.length) {
		item.textContent = projects[i];
		item.style.backgroundColor = background_colours[i];
		item.classList.add("project_item");
		content_b.appendChild(item);
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
	} else {
		item.textContent = "";
		item.style.border = "thin dotted gray"
		item.classList.add("project_item");
		content_b.appendChild(item);
	}
}

projects_subcontainer_b.style.left = -projects_subcontainer_b.offsetWidth-parentBounds.left + "px"

next_button.addEventListener("click", () => {
console.log("OI")
	let project_aBounds = projects_subcontainer_a.getBoundingClientRect();
	let project_bBounds = projects_subcontainer_b.getBoundingClientRect();

	console.log(current_subcontainer)
	if (current_subcontainer == "a") {	
		let pos = 0;
		console.log(pos)
		let id = setInterval(frame, 2);
		function frame() {
			if (pos >= innerWidth) {
			  clearInterval(id);
			  projects_subcontainer_a.style.left = `-${projects_subcontainer_a.offsetWidth + parentBounds.left}px`;
			} else {
			  pos+=5; 
			  projects_subcontainer_a.style.left = pos + "px"; 
			}
		}
			let id2 = setInterval(frame2, 2);
			pos2 = 0;
			let start = -projects_subcontainer_b.offsetWidth - parentBounds.left*2 //project_bBounds.left
			function frame2() {
				if (project_bBounds.left + pos2  > parentBounds.left*2) {
					clearInterval(id2);
				}	else {
					pos2+=5
					projects_subcontainer_b.style.left = start + pos2 + "px";
				}
			}
		
	} else {
		let pos = 0;
		let id = setInterval(frame, 2);
		function frame() {
			if (pos > innerWidth) {
			  clearInterval(id);
			  projects_subcontainer_b.style.left = `-${projects_subcontainer_b.offsetWidth+ parentBounds.left}px`;
			} else {
			  pos+=5; 
			  projects_subcontainer_b.style.left = pos + "px"; 
			}
		}

		let id2 = setInterval(frame2, 2);
		pos2 = 0;
		let start = -projects_subcontainer_a.offsetWidth -parentBounds.left*2
		function frame2() {
			if (project_aBounds.left + pos2 > parentBounds.left*2) {
				clearInterval(id2);
			} else {
				pos2+=5
				projects_subcontainer_a.style.left = (start + pos2) + "px";
			}
		}
	}

  current_subcontainer == "a" ? (current_subcontainer = "b") : (current_subcontainer = "a")
  carousel_position > n_project_subcontainers-1 ? (carousel_position = 0) : (carousel_position += 1)
})

let tags = ["technical", "art", "game"];

let nav_links = ["home", "about", "writings"]
const navbar_top = document.getElementById("links");

nav_links.forEach((link) => {
	let el = document.createElement("li");
	el.textContent = link;
	navbar_top.appendChild(el);
	el.addEventListener("click", () => {
		if (link === "home") {
			window.open("http://mogs-git.github.io", "_self");
		} else {
			window.open("http://mogs-git.github.io/"+link);
		}
	})
	el.addEventListener("mouseover", (e) => {
		e.target.classList.add("link_hover");
	})
	el.addEventListener("mouseout", (e) => {
		e.target.classList.remove("link_hover");
	})

})

