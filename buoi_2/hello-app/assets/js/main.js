//  th1 cach thong thuong js

// let elRoot = document.querySelector("#root");
// let elH1 =document.createElement("h1");
// elH1.innerHTML ="hello anh em ";
// elRoot.appendChild(elH1);

// console.log(elRoot);

// th2 su dung react (chua sd jsx)

let el = React.createElement("h1",{className:"title"},"hello react");
console.log(el)

// hien thi ra giao dien  

let root =ReactDOM.createRoot(document.querySelector("#root"));
root.render(el);
