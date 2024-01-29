window.onload = function(){
    let getElement = localStorage.getItem('elementItem');
    let itemElement = document.createElement('div');
    itemElement.innerHTML = getElement;
    
    var imgLink = itemElement.querySelector(".container__other__box__img").getAttribute("src");
    var titleItem = itemElement.querySelector(".container__other__box__title").innerHTML;
    var priceItem = itemElement.querySelector(".container__other__box__price").innerHTML;
    var countItem = itemElement.querySelector(".container__other__box__count").innerHTML;
    
    var imgElement = document.querySelector(".container__item__images__big");
    var titleElement = document.querySelector(".container__item__information__title");
    var priceElement = document.querySelector(".container__item__information__price");
    var countElement = document.querySelector(".container__item__information__buy__number");

    imgElement.setAttribute("src", imgLink),
    titleElement.innerText = titleItem
    priceItem.innerText = priceElement
    countItem.innerText = countElement
}

{/* <div  class="container__other__box" onclick="showProductItem(this)">
<img class="container__other__box__img" src="../Image/product/DCN/DC01.jpg" alt="">
<div class="container__other__box__star">
    <img src="../Image/icon/star.png" alt="">
    <img src="../Image/icon/star.png" alt="">
    <img src="../Image/icon/star.png" alt="">
    <img src="../Image/icon/star.png" alt="">
    <img src="../Image/icon/star.png" alt="">
</div>
<span class="container__other__box__title">Dây chuyền nữ đính đá hình trái tim</span>
<span class="container__other__box__price">500.000</span>
<span class="container__other__box__count">Đã bán 150</span>
</div> */}
let count = 1;
let numberItem = document.querySelector(".count-of-item");
function missAction(){
    count--;
    numberItem.innerText = count;
}
function plusAction(){
    count++;
    numberItem.innerText = count;
    
}