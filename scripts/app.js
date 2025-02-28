
const colorButton = document.querySelectorAll('.ring-button');
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
        productImg.src = '../images/' + colorId + '.png'

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
for(let qty of qtyButton){
    qty.addEventListener('click', function(event){
        const qtyShow = parseInt(document.getElementById('quantity').innerText);
        const qtyCalculate = event.target.innerText === '+' ? 1 : -1;
        const qtytotal = Math.max(0, qtyShow + qtyCalculate);
        document.getElementById('quantity').innerText = qtytotal;
    
    })
}

//