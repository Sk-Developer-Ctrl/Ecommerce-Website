function header() {
  const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  });

// Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header')) {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }});

// Close menu when resizing to larger screen
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }});

};
header();

// Home Products Js

function homeProduct() {
  const product = document.querySelector('.pro-container');
const newArrival = document.querySelector('.pro-container2');

let innerHtml = ``;
 

item.forEach( item => {
  innerHtml += `
  <div class="pro">
        <img src="${item.image}">
        <div class="des">
          <spam>${item.brandName}</spam>
          <h5>${item.productName}</h5>
          <div class="star">
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            <i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>
          </div>
          <h4>$73</h4> 
          <button class="add-to-cart" onclick="addToCart(${item.id})" ><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>`
})

product.innerHTML = innerHtml;



};

homeProduct();

// Add to cart

let bagItems;
onLoad();
function onLoad() {
  let bagItemsStr = localStorage.getItem('BagItems')
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  cartItems();
}
function addToCart(itemId) {
  bagItems.push(itemId)
  localStorage.setItem('BagItems', JSON.stringify(bagItems));
  cartItems();
}

function cartItems() {
  const cartItemCount = document.querySelector('.cart-count');
  if(bagItems.length > 0){
    cartItemCount.style.visibility= 'visible';
    cartItemCount.innerText = bagItems.length;
  }
  else{
    cartItemCount.style.visibility= 'hidden';
  }
}


// Slider Js
function slider() {
  const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 25,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      786: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  
  
  });
  
};
slider();


