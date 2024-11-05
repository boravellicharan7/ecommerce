let div = document.getElementById("items-container");
div.style.border = "2px solid black";
div.style.borderRadius = "15px";
div.style.backgroundColor = "azure"
div.style.padding = "20px";
div.style.display = "inline-block";


let ImgTag = document.createElement('img');
ImgTag.setAttribute("src","https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg");
ImgTag.style.width = "250px"
ImgTag.style.borderRadius = "15px";

let items = document.createElement("p");
items.innerText = "AirPods 4";
items.style.fontSize = "20px";

let items1 = document.createElement("p");
items1.innerText = "Apple airpods provids you best sound qyality...";
items1.style.fontSize = "15px";
items1.style.width = "250px";

let div1 = document.getElementById("items")
div1.style.display = "flex";
div1.style.justifyContent = "space-between";
div1.style.alignItems = "center";

let buynow = document.createElement("p")
buynow.innerText = "$ 249.99";
buynow.style.fontSize = "20px"

let button = document.createElement("button")
button.innerText = "Buy Now";
button.style.fontSize = "18px";
button.style.border = "1px solid black";
button.style.borderRadius = "13px";
button.style.padding = "10px 20px";
button.style.backgroundColor = "#72BF78"
button.style.cursor = "pointer"

div.prepend(ImgTag, items, items1);
div1.append(buynow, button)