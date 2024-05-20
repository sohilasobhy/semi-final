let whishListModule = document.querySelector(".whishListModule");
let cartModule = document.querySelector(".cartModule");
let productInCart = document.querySelector(".productInCart");
let cartNum = document.querySelector(".cartNum");
let counter = 0;
let numSpan = document.querySelector(".numSpan");
let checkOutBtn = document.querySelector(".checkOut");
let totalDiv = document.querySelector(".totalDiv");
let cartProducts = [];
let wishArray = [];
let wishProducts = document.querySelector(".wishBottom");
checkLocalStorage();
checkWishStorage();
function checkWishStorage() {
  let data = localStorage.getItem("wishArray");
  if (data) {
    let arr = JSON.parse(data);
    wishArray = arr;
    renderWishlist();
    renderProducts();
  }
}
function renderWishlist() {
  wishProducts.innerHTML = "";
  wishArray.forEach((product, index) => {
    wishProducts.innerHTML += `
     <div class="mb-5 d-flex justify-content-between align-items-center">
              <div class="mainRight gap-3 d-flex align-items-center">
                <i class="fa-solid fa-trash" onclick="deleteWish(${index})"></i>
                <img
                  src=${product.imageUrl}
                  alt=""
                  width="80"
                  height="80" />
                <div>
                  <p>${product.proName}</p>
                  <p>${product.price}</p>
                </div>
              </div>
              <div class="mainLeft align-items-center">
                <button class="btn" onclick="addToCartFromWish(${product.id}),success()">Add To Cart</button>
              </div>
            </div>
    `;
  });
}
function openCart() {
  cartModule.classList.remove("d-none");
}
function closeCart() {
  cartModule.classList.add("d-none");
}
function render() {
  if (cartProducts.length == 0) {
    productInCart.innerHTML = `
    <p>No prodects</p>`;
    cartNum.innerHTML = `
  ${counter}
  `;
    numSpan.innerHTML = `
  (${counter})
    `;
    checkOutBtn.classList.add("d-none");
    checkOutBtn.classList.remove("d-flex");
  } else {
    productInCart.innerHTML = "";
    cartProducts.forEach((product, index) => {
      productInCart.innerHTML += `
    <div class="d-flex gap-2 mb-5 col-12 flex-wrap">
    <img
    src=${product.imageUrl}
    width="100"
    height="100"
    class="object-fit-cover"
    alt="" />
    <div class="d-flex flex-column gap-2 ps-3 col-9">
    <h4>${product.proName}</h4>
    <div class="d-flex gap-5">
    <div class="d-flex gap-3 counter px-1">
    <button class="dec" onclick="decreseQty(${index})">-</button>
    <p>${product.qty}</p>
    <button class="inc"  onclick="increseQty(${index})">+</button>
    </div>
    <p>${Math.round(product.price * product.qty)}</p>
    </div>
    <button class="btn btn-dark col-10" onclick="del(${index})">Remove</button>
    </div>
    </div>
    `;
      checkOutBtn.classList.remove("d-none");
      checkOutBtn.classList.add("d-flex");
      cartNum.innerHTML = `
  ${counter}
  `;
      numSpan.innerHTML = `
  (${counter})
  `;
    });
  }
  calcTotal();
}
render();
function checkOut() {
  let dataText = JSON.stringify(cartProducts);
  localStorage.setItem("cartProducts", dataText);
}
function goToCart() {
  window.location.href = "./cart.html";
  let text = JSON.stringify(cartProducts);
  localStorage.setItem("cartProducts", text);
}
function checkLocalStorage() {
  let data = localStorage.getItem("cartProducts");
  if (data) {
    let arr = JSON.parse(data);
    cartProducts = arr;
    calcCounter();
    render();
    renderProducts();
  }
}
function calcCounter() {
  cartProducts.forEach((product) => {
    counter += product.qty;
  });
}
function calcTotal() {
  let total = 0;
  cartProducts.forEach((item) => {
    itemTotal = item.qty * item.price;
    total += itemTotal;
  });

  totalDiv.innerHTML = `${Math.round(total)}`;
  let TotalORDER = JSON.stringify(total);
  localStorage.setItem("TotalORDER", TotalORDER);
}
function openWishList() {
  whishListModule.classList.remove("d-none");
}
function closeWishlist() {
  whishListModule.classList.add("d-none");
}
