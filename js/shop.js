function showProductItem(thisElement) {
    localStorage.setItem('elementItem', thisElement.innerHTML);
    window.location = "./item.html";
}