// 0
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// 1
const p = document.createElement('p');
p.style.color = "red";
p.textContent = "Hey I’m red!";

container.appendChild(p);

// 2
const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";

container.appendChild(h3);

// 3
const div = document.createElement("div");
div.setAttribute("style", "border: solid 0.3em; border-color: black; background: pink;");

const h1_in_div = document.createElement("h1");
h1_in_div.textContent = "I’m in a div!";

const p_in_div = document.createElement("p");
p_in_div.textContent = "ME TOO!";

div.appendChild(h1_in_div);
div.appendChild(p_in_div);

container.appendChild(div);