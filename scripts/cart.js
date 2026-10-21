export function viewCart(){
    //innerhtml that will change the content inside <main>
    document.querySelector("main").innerHTML = 
    `
    <h2> Your cart <h2>
        <div id="cart-list">

        </div>
    `

}

function loadCart() {
    let items = JSON.parse(localStorage.getItem("cart")) || [];
    return items
}

function save(cart) {
    let cartJSON = JSON.stringify(cart);
    localStorage.setItem("cart", cartJSON);
}

export function addToCart(item) {
    let currentCart = loadCart()
    currentCart.push(item)
    save(currentCart)
}


