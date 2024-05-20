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
let loginRegister = document.querySelector(".loginRegister");
let userInfoCon = document.querySelector(".userInfoCon");
let userInfo = document.querySelector(".userInfo");
let logMessage = document.querySelector(".invalidName");
checkLoggingStat();
let table1 = document.querySelector(".table1");
let table2 = document.querySelector(".table2");
let arr = [];
function successAlert() {
  Swal.fire({
    title: "Your order has been placed",
    text: "",
    icon: "success",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "./shop.html";
      localStorage.removeItem("cartProducts");
      localStorage.removeItem("TotalORDER");
      // localStorage.clear();
    }
  });
}
// renderFatora();
function goTOShop() {
  window.location.href = "./shop.html";
}
let x = [];
let y = JSON.parse(localStorage.getItem("TotalORDER"));
renderFatora();
function renderFatora() {
  x = JSON.parse(localStorage.getItem("cartProducts"));
  if (x) {
    arr.push(x);
    table1.innerHTML = "";
    table2.innerHTML = "";
    x.forEach((product, index) => {
      if (product.discounted == 1) {
        table1.innerHTML += `
                <tr>
              <td class="d-flex gap-2 align-items-center">
                <img
                  src=${product.imageUrl}
                  alt=""
                  width="100"
                  height="100"
                  class="object-fit-contain" />
                <p>${product.proName}</p>
              </td>
              <td class="pricecol">${Math.round(
                product.price - product.price * (product.disc / 100)
              )}</td>
              <td>
                <div class="d-flex gap-3 counter justify-content-between">
                  <button class="dec" onclick="decreseQty(${index})">-</button>
                  <p>${product.qty}</p>
                  <button class="inc" onclick="increseQty(${index})">+</button>
                </div>
              </td>
              <td class="pricecol">${Math.round(
                product.price * product.qty
              )}</td>
              <td onclick="del(${index})"><i class="fa-solid fa-trash"></i></td>
            </tr>
    `;
        table2.innerHTML = `
                <tr>
              <th class="p-2">Subtotal</th>
              <th class="totalFatoraNumber">${Math.round(y)}$</th>
            </tr>
            <tr>
              <th class="p-2">Shipping</th>
              <th>50.00$</th>
            </tr>
            <tr>
              <th class="p-2 ">Total</th>
              <th class ="totalFatoraNumberShipping">${Math.round(
                y + 50.0
              )}$</th>
            </tr>
    `;
      } else {
        table1.innerHTML += `
                <tr>
              <td class="d-flex gap-2 align-items-center">
                <img
                  src=${product.imageUrl}
                  alt=""
                  width="100"
                  height="100"
                  class="object-fit-contain" />
                <p>${product.proName}</p>
              </td>
              <td class="pricecol">${Math.round(product.price)}</td>
              <td>
                <div class="d-flex gap-3 counter justify-content-between">
                  <button class="dec" onclick="decreseQty(${index})">-</button>
                  <p>${product.qty}</p>
                  <button class="inc" onclick="increseQty(${index})">+</button>
                </div>
              </td>
              <td class="pricecol">${Math.round(
                product.price * product.qty
              )}</td>
              <td onclick="del(${index})"><i class="fa-solid fa-trash"></i></td>
            </tr>
    `;
        table2.innerHTML = `
                <tr>
              <th class="p-2">Subtotal</th>
              <th class="totalFatoraNumber">${Math.round(y)}$</th>
            </tr>
            <tr>
              <th class="p-2">Shipping</th>
              <th>50.00$</th>
            </tr>
            <tr>
              <th class="p-2">Total</th>
              <th class="totalFatoraNumberShipping">${Math.round(y + 50)}$</th>
            </tr>
    `;
      }
    });
  } else {
    window.location.href = "./shop.html";
  }
}
function openWishList() {
  document.querySelector(".whishListModule").classList.remove("d-none");
}
function closeWishlist() {
  document.querySelector(".whishListModule").classList.add("d-none");
}
function increseQty(i) {
  x[i].qty++;
  let dataText = JSON.stringify(x);
  localStorage.setItem("cartProducts", dataText);
  renderFatora();
  calcTotal();
}
function decreseQty(i) {
  if (x[i].qty > 1) {
    x[i].qty--;
  } else {
    x.splice(i, 1);
  }
  let data = JSON.stringify(x);
  localStorage.setItem("cartProducts", data);
  renderFatora();
  calcTotal();
}
function del(i) {
  x.splice(i, 1);
  let data = JSON.stringify(x);
  localStorage.setItem("cartProducts", data);
  renderFatora();
  calcTotal();
}
function calcTotal() {
  let COST = 0;
  x.forEach((pro) => {
    totalRow = pro.price * pro.qty;
    COST += totalRow;
    console.log(COST);
  });
  document.querySelector(".totalFatoraNumber").innerHTML = `${Math.round(
    COST
  )}`;
  document.querySelector(
    ".totalFatoraNumberShipping"
  ).innerHTML = `${Math.round(COST + 50.0)}`;
}
function openHome() {
  window.location.href = "./index.html";
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
