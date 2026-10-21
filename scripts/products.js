import {products} from "/scripts/common.js"

export function viewProducts(){
    //innerhtml that will change the content inside <main>
    document.querySelector("main").innerHTML = 
    `
    <h2> My products <h2>
        <div id="product-list">

        </div>
    `

}