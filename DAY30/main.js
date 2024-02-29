// const dom = document.querySelector("h1");
// dom.remove()
// dom.append("TITAN RTX")
// console.log(dom);

const li = document.createElement("li");
const liText = document.createTextNode("TITAN RTX")
li.appendChild(liText);
document.querySelector("ul").appendChild(li)
