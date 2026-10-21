## File structure 
Instead of having two different html files i made a view.js that easily switches the view depending on what "page" you are on. 
<br><br>Having two htmls can make the website slow, if you have a bad internet it always has to reload when you switch to your cart or the products. So instead, by switching the content, i make sure that its smooth on any computer.

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
