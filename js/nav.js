const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
      <div class="nav">
        <a href="index.html">
          <img src="img/brand-logo.png" class="brand-logo" alt="" />
        </a>
        <div class="nav-items">
          <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product"/>
            <button class="search-btn">search</button>
          </div>
          <a href="signup.html"><img src="img/user.png" alt="" /></a>
          <a href="cart.html"><img src="img/cart.png" alt="" /></a>
        </div>
      </div>
      <ul class="links-container">
        <li class="links-item"><a href="index.html" class="link">Home</a></li>
        <li class="links-item"><a href="womens.html" class="link">Women</a></li>
        <li class="links-item"><a href="mens.html" class="link">Men</a></li>
        <li class="links-item"><a href="#" class="link">Kids</a></li>
        <li class="links-item"><a href="accessories.html" class="link">Accessories</a></li>
      </ul>
    `;
}

createNav();