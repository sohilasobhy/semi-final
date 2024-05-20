let isLooged = false;
let user = "";
let loginName = document.querySelector(".loginName");
let loginPass = document.querySelector(".loginPass");
let signName = document.querySelector(".signName");
let signPass = document.querySelector(".signPass");
let logMessage = document.querySelector(".invalidName");
let passMess = document.querySelector(".passMess");
let userMess = document.querySelector(".userMess");
let loginRegister = document.querySelector(".loginRegister");
let userInfoCon = document.querySelector(".userInfoCon");
let userInfo = document.querySelector(".userInfo");
function saveToStorage() {
  let dataText = JSON.stringify(cartProducts);
  sessionStorage.setItem("cartProducts", dataText);
  localStorage.setItem("cartProducts", dataText);
}
let loginModule = document.querySelector(".loginModule");
let registerModule = document.querySelector(".registerModule");

function openLogin() {
  loginModule.classList.remove("d-none");
  closeRegister();
}
function openRegister() {
  registerModule.classList.remove("d-none");
  closeLogin();
}
function closeLogin() {
  loginModule.classList.add("d-none");
}
function closeRegister() {
  registerModule.classList.add("d-none");
}
let totalDiv = document.querySelector(".totalDiv");
function success() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "You added item to the cart",
  });
}
function success2() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "You added item to the wishlist",
  });
}
function success3() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "This item is already in your wishlist",
  });
}
function ani() {
  document.getElementById("circle").classList.add("fade");
  document.getElementById("slideH").classList.add("fade");
  document.getElementById("slideP").classList.add("fade");
}
function openModel() {
  let videoModel = document.querySelector(".videoModel");
  let videoPlay = document.querySelector(".videoPlay");
  videoModel.classList.remove("d-none");
  videoPlay.classList.add("d-none");
}
function closeModel() {
  let videoModel = document.querySelector(".videoModel");
  let videoPlay = document.querySelector(".videoPlay");
  videoPlay.classList.remove("d-none");
  videoModel.classList.add("d-none");
}
function openMenue() {
  let menue = document.querySelector(".sideMenue");
  menue.classList.remove("d-none");
}
function closeMenue() {
  let menue = document.querySelector(".sideMenue");
  menue.classList.add("d-none");
}

let wishArray = [];
let wishProducts = document.querySelector(".wishBottom");
let newArrivalsProducts = document.querySelector(".newArrivalsProducts");
let numSpan = document.querySelector(".numSpan");
let productInCart = document.querySelector(".productInCart");
let cartNum = document.querySelector(".cartNum");
let checkOutBtn = document.querySelector(".checkOut");
let counter = 0;
checkLoggingStat();
checkAllProducts();
checkLocalStorage();
checkWishStorage();
render();
function renderProducts() {
  newArrivalsProducts.innerHTML = "";
  organicProducts.forEach((el, index) => {
    if (index <= 7) {
      if (el.discounted == 1) {
        newArrivalsProducts.innerHTML += `
               <div
                        class="swiper-slide bg-white p-3 slide2 d-flex flex-column align-items-center gap-3 col-3">
                        <div class="main w-100 position-relative">
                        <div class="position-relative">
                        <img
                          src=${el.imageUrl}
                          alt=""
                          class="w-100 object-fit-contain firstImg" />
                        <img src=${el.hovImage} alt="" class="w-100 sec" />
                        </div>
                          <div class="disc">
                            <p class="text-center px-2">-20%</p>
                          </div>
                        </div>
                        <p class="proName">${el.proName}</p>
                        <p class="proPrice"><span>${
                          el.price
                        }</span> ${Math.round(
          el.price - el.price * (el.disc / 100)
        )}</p>
                        <div class="d-flex gap-3 align-items-center">
                          <button class="p-2 BTNCart" onclick="AddToCart(${index})" >Add To Cart</button>
                          <i class="fa-regular fa-heart heart p-2 ${
                            el.isWished == true ? "wished" : "regular"
                          }" onclick="addToWishlist(${index})"></i>
                        </div>
                      </div>
              `;
      } else {
        newArrivalsProducts.innerHTML += `
               <div
                        class="swiper-slide bg-white p-3 slide2 d-flex flex-column align-items-center gap-3 col-3">
                        <div class="main w-100 position-relative">
                           <div class="position-relative">
                        <img
                          src=${el.imageUrl}
                          alt=""
                          class="w-100 object-fit-contain firstImg" />
                        <img src=${el.hovImage} alt="" class="w-100 sec" />
                        </div>
                        </div>
                        <p class="proName">${el.proName}</p>
                        <p class="proPrice"><span>${
                          el.price
                        }</span> ${Math.round(
          el.price - el.price * (el.disc / 100)
        )}</p>
                        <div class="d-flex gap-3 align-items-center">
                          <button class="p-2 BTNCart" onclick="AddToCart(${index})" >Add To Cart</button>
                          <i class="fa-regular fa-heart heart p-2  ${
                            el.isWished == true ? "wished" : "regular"
                          }" onclick="addToWishlist(${index})"></i>
                        </div>
                      </div>
              `;
      }
    }
  });
}
renderProducts();
function emptyCart() {
  if (cartProducts.length == 0) {
    productInCart.innerHTML = `
    <p>no prodects</p>
    `;
  } else {
    render();
  }
}
function openCart() {
  cartModule.classList.remove("d-none");
}
function closeCart() {
  cartModule.classList.add("d-none");
}
function calcCounter() {
  cartProducts.forEach((product) => {
    counter += product.qty;
  });
}
function AddToCart(index) {
  if (isLooged == true) {
    let Obj = organicProducts[index];
    let x = cartProducts.findIndex((pro) => {
      return pro.id == Obj.id;
    });
    if (x === -1) {
      Obj.qty = 1;
      cartProducts.push(Obj);
    } else {
      cartProducts[x].qty++;
    }
    counter++;
    success();
    render();
    saveToStorage();
  } else {
    MustLogin();
    openLogin();
  }
}
function render() {
  if (cartProducts.length == 0) {
    productInCart.innerHTML = `
    <p>No products</p>`;
    cartNum.innerHTML = `
  ${counter}
  `;
    numSpan.innerHTML = `
  (${counter})
    `;
    console.log(checkOutBtn);
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
function increseQty(i) {
  cartProducts[i].qty++;
  counter++;
  saveToStorage();
  render();
}
function decreseQty(i) {
  if (cartProducts[i].qty > 1) {
    cartProducts[i].qty--;
    counter--;
  } else {
    cartProducts.splice(i, 1);
    counter--;
  }
  saveToStorage();
  render();
}
function del(i) {
  counter -= cartProducts[i].qty;
  console.log(cartProducts);
  cartProducts.splice(i, 1);
  console.log(cartProducts);
  console.log(counter);
  render();
  saveToStorage();
}
function checkOut() {
  let dataText = JSON.stringify(cartProducts);
  localStorage.setItem("cartProducts", dataText);
}
function checkStorage() {
  let data = sessionStorage.getItem("cartProducts");
  if (data) {
    let arr = JSON.parse(data);
    cartProducts = arr;
    calcCounter();
    render();
  }
}
function goToCart() {
  window.location.href = "./cart.html";
  let text = JSON.stringify(cartProducts);
  localStorage.setItem("cartProducts", text);
  sessionStorage.clear();
}
function checkLocalStorage() {
  let data = localStorage.getItem("cartProducts");
  if (data) {
    let arr = JSON.parse(data);
    cartProducts = arr;
    calcCounter();
    render();
  }
}
function calcTotal() {
  let total = 0;
  cartProducts.forEach((item) => {
    itemTotal = item.qty * item.price;
    total += itemTotal;
  });
  totalDiv.innerHTML = `${Math.round(total)}`;
}
function openWishList() {
  document.querySelector(".whishListModule").classList.remove("d-none");
}
function closeWishlist() {
  document.querySelector(".whishListModule").classList.add("d-none");
}
function addToWishlist(index) {
  if (isLooged == true) {
    let object = organicProducts[index];
    let x = wishArray.findIndex((pro) => {
      return object.id == pro.id;
    });
    if (x == -1) {
      wishArray.push(object);
      console.log();
      organicProducts[index].isWished = true;
      success2();
    } else {
      success3();
    }
    saveMain();
    renderWishlist();
    renderProducts();
    saveWish();
  } else {
    MustLogin();
    openLogin();
  }
}
function saveWish() {
  let dataText = JSON.stringify(wishArray);
  localStorage.setItem("wishArray", dataText);
}
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
                <button class="btn" onclick="addToCartFromWish(${product.id})">Add To Cart</button>
              </div>
            </div>
    `;
  });
}
function deleteWish(index) {
  wishArray[index].isWished = false;
  wishArray.splice(index, 1);
  saveMain();
  saveWish();
  renderProducts();
  renderWishlist();
}
function saveMain() {
  let mainDataText = JSON.stringify(organicProducts);
  localStorage.setItem("mainData", mainDataText);
}
function checkAllProducts() {
  let mainData = JSON.parse(localStorage.getItem("mainData"));
  if (mainData) {
    organicProducts = mainData;
    renderProducts();
  }
}
function saveRegisterData() {
  let x = JSON.stringify(signName.value);
  let y = JSON.stringify(signPass.value);
  let z = localStorage.getItem(`${signName.value}`, x);
  if (z) {
    logMessage.classList.remove("d-none");
    console.log("invalid username");
  } else {
    localStorage.setItem(`${signName.value}`, x);
    localStorage.setItem(`${signName.value}Pass`, y);
    logMessage.classList.add("d-none");
    openLogin();
  }
}
function loggingIn() {
  let x = loginName.value;
  let y = loginPass.value;
  let z = JSON.parse(localStorage.getItem(`${x}`));
  let pass = JSON.parse(localStorage.getItem(`${x}Pass`));
  if (z) {
    if (y == pass) {
      closeLogin();
      loggedIn();
      localStorage.setItem("name", JSON.stringify(x));
      console.log("you're logged in");
      isLooged = true;
      loginRegister.classList.add("d-none");
      userInfoCon.classList.remove("d-none");
      let z = x.split(" ");
      userInfo.innerHTML = `${z[0]}`;
      let loggingStat = JSON.stringify(isLooged);
      localStorage.setItem("loggingStat", loggingStat);
    } else {
      passMess.classList.remove("d-none");
      userMess.classList.add("d-none");
      console.log("incorrect password");
    }
  } else {
    userMess.classList.remove("d-none");
    passMess.classList.add("d-none");
    console.log("incorrect usrename");
  }
}
function addToCartFromWish(dd) {
  let x = organicProducts.findIndex((el) => {
    return el.id == dd;
  });
  AddToCart(x);
}
function checkLoggingStat() {
  let loggingStat = JSON.parse(localStorage.getItem("loggingStat"));
  isLooged = loggingStat;
  if (isLooged == true) {
    let name = JSON.parse(localStorage.getItem("name"));
    console.log(name);
    let z = name.split(" ");
    console.log(z);
    loginRegister.classList.add("d-none");
    userInfoCon.classList.remove("d-none");
    userInfo.innerHTML = `${z[0]}`;
  }
}
function openHome() {
  window.location.href = "./index.html";
}
function loggedIn() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "You are now logged in",
  });
}
function MustLogin() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "warning",
    title: "You must log in first",
  });
}
