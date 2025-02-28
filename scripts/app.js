
const colorButton = document.querySelectorAll('.ring-button');
let imageBase = '../images/';
for (let colorBtn of colorButton) {

    colorBtn.addEventListener('click', function (even) {
        //get color id
        const colorId = even.target.id.replace('-color', '');
        //remove border color when click
        for (let j of colorButton) {
            j.classList.remove('border-red-500');
        }
        //ad border coor
        even.target.classList.add('border-red-500');

        //add 
        const productImg = document.getElementById('product-image');
        productImg.src = imageBase + colorId + '.png'

    })

}


// selectWristSize
function selectWristSize(size) {
    const sizes = ["S", "M", "L", "XL"];
    for (let s of sizes) {
        const sizeBtn = document.getElementById('size-' + s);

        if (s === size) {
            sizeBtn.classList.add('border-red-500');
        }
        else {
            sizeBtn.classList.remove('border-red-500');
        }

    }
}


//quantity update
const qtyButton = document.querySelectorAll('.quantity-button');
for (let qty of qtyButton) {
    qty.addEventListener('click', function (event) {
        const qtyShow = parseInt(document.getElementById('quantity').innerText);
        const qtyCalculate = event.target.innerText === '+' ? 1 : -1;
        const qtytotal = Math.max(0, qtyShow + qtyCalculate);
        document.getElementById('quantity').innerText = qtytotal;

    })
}

//add to card working
let count = 0;
let items = [];
document.getElementById('add-to-cart').addEventListener('click', function () {
    let qtyShow = parseInt(document.getElementById('quantity').innerText);


    if (qtyShow > 0) {
        document.getElementById('checkout-container').classList.remove('hidden');
        count = count + qtyShow;
        document.getElementById('cart-count').innerText = count;
        document.getElementById('quantity').textContent = 1;

        // selected color
        const selectColorBtn = document.querySelector('.border-red-500.ring-button');
        const selectedColor = selectColorBtn.id.split('-')[0];

        // Selected size
        const selectSizeBtn = document.querySelector('.size.border-red-500')
        const selectedSize = selectSizeBtn.innerText.split(' ')[0]
        // selected price
        const selectedPrice = selectSizeBtn.innerText.split(' ')[1].split('$')[1];

        items.push({
            image: selectedColor + ".png",
            title: "Classy Modern Smart Watch",
            color: selectedColor,
            size: selectedSize,
            quantity: qtyShow,
            price: qtyShow * selectedPrice

        })



    }
    else {
        alert("Please select a quantity...")
    }

})


//  checkout container
document.getElementById('checkout-container').addEventListener('click', function () {
    document.getElementById('cart-modal').classList.remove('hidden')
    const cardContainer = document.getElementById('cart-items');



    for (let item of items) {

        const tableRow = document.createElement('tr');
        tableRow.classList.add('border-b')
        tableRow.innerHTML = `

  <td class"p-4">
    <div class="flex items-center space-x-2">
      <img class="w-12 h-12 object-cover rounded-md" src="${imageBase + item.image}" alt="" />
      <span class"font-semibold">${item.title}</span>
    </div>
  </td>
  <td class="py-2 px-4">${item.color}</td>
  <td class="py-2 px-4">${item.size}</td>
  <td class="py-2 px-4">${item.quantity}</td>
  <td class="py-2 px-4">$${item.price}</td>

        `;
        cardContainer.appendChild(tableRow);




    }

})

// continue-shopping button
document.getElementById('continue-shopping').addEventListener('click', function () {
    document.getElementById('cart-modal').classList.add('hidden');
})
// checkout button
document.getElementById('checkout').addEventListener('click', function () {
    alert("Processing to Checkout.....")
})