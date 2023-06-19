const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


function addToCart(productName, price) {
    var cartItems = localStorage.getItem('cartItems');
    var cart = cartItems ? JSON.parse(cartItems) : [];
  
    var product = {
      name: productName,
      price: price,
      quantity: 1
    };
  
    cart.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cart));
  
    alert('Product added to cart!');
}
  