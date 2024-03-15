import { data } from "./data.js"
const tbodyElem = document.querySelector("tbody")
const searchElem = document.querySelector("#search")

data.forEach(item => {
    tbodyElem.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.ticker}</td>
                <td>${item.value}</td>
                <td class ="${item.change[0] === "-" ? "red" : "green"}">${item.change}</td>
            </tr>
        `
})



searchElem.addEventListener("keyup", () => {
    let searchText = searchElem.value.toLowerCase();
    let filteredList = data.filter(item => item.name.toLowerCase().includes(searchText) || item.ticker.toLowerCase().includes(searchText));
    tbodyElem.innerHTML = "";
    filteredList.forEach((item) => {
        tbodyElem.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.ticker}</td>
                <td>${item.value}</td>
                <td class="${item.change[0] === "-" ? "red" : "green"}">${item.change}</td>
            </tr>
        `;
    });
});

const table = document.querySelector(".table");
const tableBody = table.querySelector("tbody")

let isAscending = true;

table.querySelector(".t-head th:first-child").addEventListener("click", () => {
    const sortedRows = Array.from(tableBody.querySelectorAll("tr")).sort((a, b) => isAscending ? a.textContent.localeCompare(b.textContent) : b.textContent.localeCompare(a.textContent));
    isAscending = !isAscending;
    sortedRows.forEach(row => tableBody.appendChild(row));
});

