document.querySelectorAll('.topico-nav').forEach(item => {
    item.addEventListener('click', event => {
        const dropdown = item.nextElementSibling;

        // Fecha todos os outros dropdowns
        document.querySelectorAll('.box-dropdown').forEach(box => {
            if (box !== dropdown) {
                box.style.display = 'none';
            }
        });

        // Alterna o dropdown clicado
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });
});

// Fechar o dropdown se clicar fora dele
document.addEventListener('click', event => {
    if (!event.target.closest('.container-dropdown')) {
        document.querySelectorAll('.box-dropdown').forEach(box => {
            box.style.display = 'none';
        });
    }
});

// troca de imagens
function changeImage(image) {
    document.getElementById('principal').src = image;
}

function changeColor(image) {
    document.getElementById('principal').src = image;
}

// quantidade
let quantity = 1;
const productPrice = 2475.00; // Preço unitário do produto
const taxRate = 0.05; // Taxa de imposto

function updateQuantity() {
    document.getElementById('quantity').innerText = quantity;
    updateTotals();
}

function increaseQuantity() {
    quantity++;
    updateQuantity();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
    }
}

function updateTotals() {
    const subtotal = productPrice * quantity;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.getElementById('subtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// telefine
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (e) {
    let input = e.target.value;
    input = input.replace(/\D/g, '');
    input = input.replace(/^(\d{2})(\d)/g, '($1) $2');
    input = input.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = input;
});

const postalCodeInput = document.getElementById('postalCode');

postalCodeInput.addEventListener('input', function (ee) {
    let input2 = ee.target.value;
    input2 = input2.replace(/\D/g, '');
    input2 = input2.replace(/(\d{5})(\d{0,3})$/, '$1-$2');
    ee.target.value = input2;
});

const cardNumberInput = document.getElementById('cardNumber');

cardNumberInput.addEventListener('input', function (ee) {
    let input3 = ee.target.value;
    input3 = input3.replace(/\D/g, '');
    input3 = input3.replace(/(.{4})/g, '$1 ');
    input3 = input3.trim();
    ee.target.value = input3;
});

document.getElementById('expiryDate').addEventListener('input', function (e) {
    let input4 = e.target.value;
    input4 = input4.replace(/\D/g, '');
    if (input4.length > 2) {
        input4 = input4.slice(0, 2) + '/' + input4.slice(2, 4);
    }
    e.target.value = input4;
});
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const containers = document.querySelectorAll(".tudo-ultimo");
    const totalContainers = containers.length;

    function showContainer(index) {
        containers.forEach((container, i) => {
            if (i === index) {
                container.classList.add("active");
            } else {
                container.classList.remove("active");
            }
        });
    }

    document.getElementById("left-button").addEventListener("click", function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalContainers - 1;
        showContainer(currentIndex);
    });

    document.getElementById("right-button").addEventListener("click", function() {
        currentIndex = (currentIndex < totalContainers - 1) ? currentIndex + 1 : 0;
        showContainer(currentIndex);
    });

    // Mostrar o primeiro container ao carregar a página
    showContainer(currentIndex);
});
