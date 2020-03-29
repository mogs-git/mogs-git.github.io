const table = document.getElementsByTagName("table")[0];

// DATES ARE FUN
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

class Post {
	constructor(title, year, month, day, desc, link) {
		this.title = title;
		this.year = year;
		this.month = month;
		this.day = day;
		this.date = new Date(this.year, this.month, this.day, 0,0,0,0);
		this.desc = desc;
		this.link = link;
	}
}


let posts = [];
let titles = ["test"];
let dates = [[2020, 2, 29]];
let descs = [""];
let links = ["/test.md"];

for (let i = 0; i < titles.length; i++) {
	posts.push(new Post(titles[i], dates[i][0], dates[i][1], dates[i][2], descs[i], links[i]))
}

for (let i = 0; i<posts.length; i++) {
	let r = document.createElement("tr");
	
	let d1 = document.createElement("td");
	let d2 = document.createElement("td");
	d1.textContent = posts[i].title;
	d2.textContent = posts[i].day + " " + months[posts[i].month] + " " + posts[i].year;

	r.appendChild(d1);
	r.appendChild(d2);

	table.appendChild(r);

	r.addEventListener("click", () => {
		window.open("http://mogs-git.github.io/writings"+posts[i].link);
	})
	r.addEventListener("mouseover", (e) => {
		console.log(e.target);
		r.classList.add("link_hover");
	})
	r.addEventListener("mouseout", (e) => {
		r.classList.remove("link_hover");
	})
}


