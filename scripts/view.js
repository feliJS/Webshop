import {viewProducts} from "/scripts/products.js"
import {viewCart} from "/scripts/cart.js"

function currentView(selectedView){
    //check the parameter
    switch (selectedView) {
        //if the button was "cart" show your cart
        case "showCart":
            viewCart()
            break;
        //if the button was "products" show the products
        case "showProducts":
            viewProducts()
            break;

        default: //always show the products if nothings selected
            viewProducts()
            break;
    }

}


//select each button from <nav> display different views.
document.querySelector("#shop-view").addEventListener("click", function(){
    currentView("showProducts")
})

document.querySelector("#cart-view").addEventListener("click", function(){
    currentView("showCart")
})

currentView("showProducts") //always start with products