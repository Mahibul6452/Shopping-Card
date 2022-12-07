function productUpdate(product, price, isAdd) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneInputTotal = phoneInput.value;

    if (isAdd == true) {
        phoneInputTotal = parseInt(phoneInputTotal) + 1;


    } else if (phoneInputTotal > 0) {
        phoneInputTotal = parseInt(phoneInputTotal) - 1;

    }

    phoneInput.value = phoneInputTotal;
    const updatePrice = document.getElementById(product + '-total');
    updatePrice.innerText = phoneInputTotal * price;


    phoneUpdatePrice()





}

function productQuantity(product) {
    const phoneUpdate = document.getElementById(product + '-number');
    const phoneUpdateText = phoneUpdate.value;
    const phoneUpdateTotal = parseInt(phoneUpdateText)
    return phoneUpdateTotal;
}


function phoneUpdatePrice() {
    const phonePrice = productQuantity('phone') * 1219;
    const casePrice = productQuantity('case') * 59;

    const allPrice = phonePrice + casePrice;
    const tax = allPrice / 10;
    const totalPrice = allPrice + tax;


    document.getElementById('sub-total').innerText = allPrice;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;



}




document.getElementById('phone-plus').addEventListener('click', function () {
    productUpdate('phone', 1219, true)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    productUpdate('phone', 1219, false)
})


// case Section


document.getElementById('case-plus').addEventListener('click', function () {
    productUpdate('case', 59, true)
})

document.getElementById('case-minus').addEventListener('click', function () {
    productUpdate('case', 59, false)
})


document.getElementById('check-out').addEventListener('click', function () {
    window.location.href = 'congress.html'

})