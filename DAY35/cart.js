const productsElem = document.querySelector(".products");
let cartList = [];
let localCartList = JSON.parse(localStorage.getItem("cartList"));

if (localCartList) {
    cartList = localCartList;
}

function renderCart() {
    productsElem.innerHTML = "";

    cartList.forEach(element => {
        productsElem.innerHTML += `
            <div class="product">
                <img src="${element.thumbnail}" alt="${element.title}">
                <h4>${element.title}</h4>
                <div>
                    <p>${element.price}</p>
                    <p>Amount: <span class="amount">${element.amount}</span></p>
                    <button onclick="decreaseAmount(${element.id})">-</button>
                    <button onclick="increaseAmount(${element.id})">+</button>
                </div>
            </div>`;
    });

    if (cartList.length === 1) {
        productsElem.querySelector('.product').classList.add('single-item');
    } else {
        productsElem.querySelector('.product.single-item').classList.remove('single-item');
    }
}

renderCart();

function increaseAmount(id) {
    const item = cartList.find(item => item.id === id);
    if (item) {
        item.amount += 1;
        updateCart();
    }
}

function decreaseAmount(id) {
    const item = cartList.find(item => item.id === id);
    if (item && item.amount > 1) {
        item.amount -= 1;
        updateCart();
    } else if (item && item.amount === 1) {
        cartList = cartList.filter(item => item.id !== id);
        updateCart();
    }
}

function updateCart() {
    localStorage.setItem("cartList", JSON.stringify(cartList));
    renderCart();
}
