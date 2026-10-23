export function viewCart(){
    //innerhtml that will change the content inside <main>
    document.querySelector("main").innerHTML = 
    `
    <h2> Your cart </h2>
        <div id="cart-info">
            <ul id="cart-list">

            </ul>
            <aside id="cart-sum">
            </aside>
        </div>
    `
    currentCart()
    sumCart()
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
    let existingItem = currentCart.find((itemObj)=>{return itemObj.id == item.id}) //finds exsisting item by checking the loaded array
    if(existingItem){
        existingItem.quantity++;
    } else {
        item.quantity = 1;
        currentCart.push(item)
    }
    save(currentCart)
}


function currentCart() {
    let currentCart = loadCart()
    for (const item of currentCart) {

        let itemBox = document.createElement("li")
        document.querySelector("#cart-list").appendChild(itemBox)

        let itemName = document.createElement("h2")
        itemName.textContent = item.name
        itemBox.appendChild(itemName)

        let itemPrice = document.createElement("p")
        itemPrice.textContent = item.price + " kr each"
        itemBox.appendChild(itemPrice)

        let qtyElement = document.createElement("p")
        qtyElement.textContent = "Qty: " + item.quantity
        itemBox.appendChild(qtyElement)

        let qtyPrice = document.createElement("p")
        qtyPrice.textContent = item.quantity * item.price
        itemBox.appendChild(qtyPrice)

        
    }
}

function sumCart(){
    let totalSum = 0
    let currentCart = loadCart()
    for (const item of currentCart) {
        totalSum += item.price
    }
    let totalSumBox = document.querySelector("aside")
    let totalSumText = document.createElement("p")
    totalSumText.textContent = `Summary: ${totalSum}`
    totalSumBox.appendChild(totalSumText)
}