const container = document.getElementById("list_container");

let title = document.createElement("h3");
title.textContent = "Things I've worked on..."

class WorkItem {
	constructor(description, day, month, year, extended_description) {
		this.description = description;
		this.date = new Date(year, month, day);
		this.extended_description = extended_description;
	}
}

work_items = [
	new WorkItem("Text-mining British parliamentary transcripts",
		20, 2, 2019,
		`I wrote a number of reports and explanations about text-mining and analysing 
		British parliamentary Hansards using the R programming language.`.replace("/[\n\r]/g", "")),

	new WorkItem("Characterisation of genes in Arabidopsis thaliana involved in 2,4-dinitroanisole detoxification",
		13, 4, 2019,
		`For my undergraduate dissertation research project at the University of York I worked on a 
		phytoremediation project in Neil Bruce's lab group under supervision by Dr Liz Rylott. In the 
		project I used the model organism Arabidopsis thaliana (thale cress) to try and identify novel 
		genes or further characterise the role existing genes in detoxification of toxic nitroaromatic 
		explosive compounds which can be found contaminating soil.`.replace("/[\n\r]/g", ""))
]

work_items.sort((a,b) => {
	let out;
	a.date < b.date ? (out = 1) : (a.date == b.date) ? (out = 0) : (out = -1);
	return out;
})

container.appendChild(title);

for (let i = 0; i < work_items.length; i++) {
	let item = document.createElement("p");
	let subitem = document.createElement("div");
	item.textContent = work_items[i].description;
	subitem.textContent = "";
	subitem.classList.add("expandable")
	item.classList.add("list_item")
	subitem.classList.add("expandable")
	item.appendChild(subitem)
	container.appendChild(item);
	item.addEventListener("click", () => {
		subitem.textContent = work_items[i].extended_description;
		subitem.classList.toggle("expandable")
		subitem.classList.toggle("expandable_clicked")
	})
	item.addEventListener("mouseover", () => {
		if (!subitem.classList.contains("expandable_clicked")) {
			subitem.textContent = (work_items[i].extended_description).substr(0,20)+"... (click for more)"
			subitem.classList.remove("expandable")
			subitem.classList.add("expandable_hover")
		}
	})
	item.addEventListener("mouseout", () => {
		if (!subitem.classList.contains("expandable_clicked")) {
			(subitem.textContent != work_items[i].extended_description) ? (subitem.textContent = "") : null
			subitem.classList.add("expandable")
			subitem.classList.remove("expandable_hover")
		}
	})
}