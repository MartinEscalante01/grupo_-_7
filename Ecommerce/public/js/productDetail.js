const addToCart = document.querySelectorAll('.comprar');

addToCart.forEach(addToShoppingCart => {
    addToShoppingCart.addEventListener('click', addToCartClicked)
});

const shoppingCartConteiner = document.querySelector('.separador2')


function addToCartClicked(event) {
    const button = event.target
    const item = button.closest('.detail')
    

    const itemTitle = item.querySelector('.title').textContent;
    const itemPrice = item.querySelector('.price').textContent;
    const itemImg = item.querySelector('.imagen').src;
    addItemToShoppingCart(itemTitle,itemPrice,itemImg)
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImg) {
 
   const shoppingCartRow =  document.createElement('div');
   const shoppingCartContent = 
            `  <div class="descripcion">
            <div class="img">
                <img src=${itemImg} alt="">
            </div>
            <div class="info">
                <h1>${itemTitle}</h1>
                <p>Cantidad:1</p>
                <p>Color:Negro</p>
                <p>Tamaño: S</p>
                <p>$${itemPrice}</p>
                <button class="btn first">Eliminar</button>
            </div>
            </div>
            `;
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartConteiner.append(shoppingCartRow)
};

