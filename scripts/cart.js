export function viewCart(){
    //innerhtml that will change the content inside <main>
    document.querySelector("main").innerHTML = 
    `
    <h2> Your cart <h2>
        <div id="cart-list">

        </div>
    `

}