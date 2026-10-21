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


## View.js
The view.js will import the main view functions from each js-file. Then display the correct one by listening to the nav-buttons "click" event. 