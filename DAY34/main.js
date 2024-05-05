// const todosElem = document.querySelector(".todos");
// const searchInput = document.getElementById("searchInput")
// let globalData = []
// fetch("https://dummyjson.com/todos")
//     .then(res => { return res.json() })
//     .then(data => {
//         globalData = data.todos
//         domRender(data.todos)
//     })
//     .catch(err => console.log(err)).finally(() => { })

// searchInput.addEventListener("input", () => {
//     let filteredList = globalData.filter(item => item.todo.includes(searchInput.value))
//     domRender(filteredList)
// })

// function domRender(params) {
//     todosElem.innerHTML = ""
//     params.forEach(item => {
//         todosElem.innerHTML += `
//         <div class="${item.completed ? "todo completed" : "todo"}">
//             <p>${item.todo}</p>
//         </div>
//         `
//     });
// }



const todosElem = document.querySelector(".todos");
const searchInput = document.getElementById("searchInput");
let globalData = [];
let currentPage = 1;

fetch("https://dummyjson.com/todos")
    .then(res => res.json())
    .then(data => {
        globalData = data.todos;
        paginate(currentPage);
    })
    .catch(err => console.log(err));

function paginate(page) {
    currentPage = page;
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    const currentPageData = globalData.slice(startIndex, endIndex);
    domRender(currentPageData);
}

searchInput.addEventListener("input", () => {
    let filteredList = globalData.filter(item => item.todo.includes(searchInput.value));
    paginate(1);
});

function domRender(params) {
    todosElem.innerHTML = "";
    params.forEach(item => {
        todosElem.innerHTML += `
        <div class="${item.completed ? "todo completed" : "todo"}">
            <p>${item.todo}</p>
        </div>
        `;
    });
}