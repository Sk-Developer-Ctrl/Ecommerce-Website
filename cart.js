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

// On load 


let bagItems;
function onLoad() {
  let bagItemsStr = localStorage.getItem('BagItems')
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  loadBagItems()
  displayCartItems();
  displayBagSummary();
};

let bagItemsObject;
onLoad();


function loadBagItems(){
  console.log(bagItems);
  bagItemsObject = bagItems.map( itemId => {
    for (let i = 0; i < item.length; i++ ){
      if(itemId === item[i].id){
        return item[i];
        
      };
    };
  });
  console.log(bagItemsObject);
};


// Cart Display

function displayCartItems() {
  let containerElement = document.querySelector('.cart-items');
  let innerHTML = ``;
  bagItemsObject.forEach(bagItems => {
    innerHTML+= generateItemHtml(bagItems);
  });
 containerElement.innerHTML  = innerHTML;
}

function removeFromBag(itemId) {
 bagItems =  bagItems.filter(bagItemId => bagItemId != itemId );
 localStorage.setItem('BagItems', JSON.stringify(bagItems));
 loadBagItems();
 displayCartItems();
 displayBagSummary();
  
};
function generateItemHtml (item){
  return  `
  <div class="cart-item">
    <img src="${item.image}" alt="">
    <div class="items-right">
    <div class="company">${item.brandName}</div>
    <div class="item-name">${item.productName}</div>
    <div class="price-container">
      <span class="current-price">Price = ${item.price}</span>
      <span class="discount">5%Off</span>
    </div>
    <div class="return"><span class="return-period">14 Days</span> Return Available
    </div>
    <div class="delivery">Delivery Time: <span class="delivery-time">2 to 3 days</span>
    </div>
    <span><div class="remove-cart" onclick= "removeFromBag(${item.id})">Delete</div></span>
    <br>
  <hr>
  </div>
  
  </div>`
};

function displayBagSummary() {
  let bagSummary = document.querySelector('.cart-summery');

  let totalItems = bagItemsObject.length;
  let Total = 0;
  let Delivery = 1;

  bagItemsObject.forEach(bagItems => 
    Total += bagItems.price
  );

  let finalPrice = Total + Delivery;

  if (bagItemsObject.length > 0) {
    Delivery = 1;
  }
  else{
    Delivery = ""
  }

  bagSummary.innerHTML = `  
  <div class="cart-details-container">
        <div class="price-header">YOU HAVE <span>${totalItems}</span> ITEMS</div>
        <div class="price-item">
          <span class="price-item-tag">Total = </span>
          <span class="price-item-value">${Total}$</span>
          </div>
          <div class="price-item">
          <span class="price-item-tag">Delivery Charges = </span>
          <span class="price-item-value">${Delivery}$</span>
        </div>
        <hr>
    <div class="price-footer">
      <span class="price-item-tags">Final Amount = </span>
      <span class="price-item-values">${finalPrice}$</span>
    </div>
    <button class="btn-place-order"><div class="css-xjhrni">Place Order</div>
    </button>
      
    </div>`
}