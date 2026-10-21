import {products} from "/scripts/common.js"

export function viewProducts(){
    //innerhtml that will change the content inside <main>
    document.querySelector("main").innerHTML = 
    `
    <h2> My products <h2>
        <div id="product-list">
        </div>
    `
    createBoxes()

}

function createBoxes() {
    const productDiv = document.querySelector("#product-list")
    for (const product of products) {
        let productBox = document.createElement("div")
        productBox.style.backgroundColor = "aqua"; 

        let productEmoji = document.createElement("p")
        productEmoji.textContent = product.emoji

        let productNameP = document.createElement("p")
        productNameP.textContent = product.name

        let productPrice = document.createElement("p")
        productPrice.textContent = product.price

        let addToCart = document.createElement("button")
        addToCart.textContent = "Add to cart"

        productDiv.appendChild(productBox)
        productBox.appendChild(productEmoji)
        productBox.appendChild(productNameP)
        productBox.appendChild(productPrice)
        productBox.appendChild(addToCart)
        
    }

}