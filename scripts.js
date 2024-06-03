document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const price = parseFloat(document.getElementById('price').value);
    const lowestPrice = parseFloat(document.getElementById('lowestPrice').textContent);
    const registrationMessage = document.getElementById('registrationMessage');

    if (price > lowestPrice) {
        registrationMessage.textContent = "Price is higher than the current lowest price. Registration not allowed.";
        registrationMessage.style.color = 'red';
    } else {
        registrationMessage.textContent = "Product registered successfully!";
        registrationMessage.style.color = 'green';
        // Here, you would typically send the form data to the server
    }
});

document.getElementById('buyButton').addEventListener('click', function() {
    alert('Product purchased successfully!');
});
