const productsElem = document.querySelector(".products");
let products = [];
let cartList = [];

let localCartList = JSON.parse(localStorage.getItem("cartList"));
if (localCartList) {
    cartList = localCartList;
}

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        products = data.products;
        data.products.forEach(element => {
            productsElem.innerHTML += `
                <div class="product">
                    <img src="${element.thumbnail}" alt="${element.title}">
                    <h4>${element.title}</h4>
                    <div>
                        <p>${element.price}</p>
                        <button onclick="addToCart(${element.id})">Add to Cart</button>
                    </div>
                </div>`;
        });
    });

function addToCart(id) {
    const foundProduct = products.find(item => item.id === id);
    const existingItem = cartList.find(item => item.id === id);

    if (existingItem) {
        existingItem.amount += 1;
    } else {
        cartList.push({ ...foundProduct, amount: 1 });
    }

    localStorage.setItem("cartList", JSON.stringify(cartList));
}
