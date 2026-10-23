## File structure 
Instead of having two different html files i made a view.js that easily switches the view depending on what "page" you are on. 
<br><br>Having two htmls can make the website slow, the website will always reload when you switch from products to the cart and vice versa. If you have a bad internet connection this can be very annoying for you. So instead, by switching the content, i make sure that its smooth on any computer.

```
project
│   index.html
│   README.md
│
└───scripts
│   │   cart.js
│   │   common.js
│   │   products.js
│   │   view.js
│   │
│   └───style
│       │   style.css

```

<strong>cart.js & products.js</strong> - will be for the different views and code.
<br>
<strong>common.js</strong> - this file is used for shared code, like the product list.
<br>
<strong>view.js</strong> - works as the "router", the file that switches around the views.


## view.js
The view.js will import the main view functions from each js-file. Then display the correct one by listening to the nav-buttons "click" event. 

## product.js
product.js has the main view of all the products and also the functions to add in all the products.
<br><br>
<strong>
    createBoxes()
</strong> - this function will create all the boxes needed, depending on what products looks like.

## cart.js
cart.js will save and load the cart, but also display and add the items.
<br><br>
<strong>loadCart()</strong> - this function will load all items in localstorage
<br>
<strong>save(cart)</strong> - this item will save down the current cart 
<br>
<strong>addToCart()</strong> - a function that is used in products.js when you click the button "add to cart". This function is exported to products.js since the loop of all displayed boxes will be in there. Also added a way to check exsistingItem to be able to write out a quantity of the item. 