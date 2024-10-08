const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');



const loadingMessage = document.createElement('p')
loadingMessage.id = "loading";
loadingMessage.innerText = "Fetching rates... Please Wait.";
loadingMessage.style.display = 'none';
document.body.appendChild(loadingMessage);



amountEl_one.addEventListener('input', () => {
    if (amountEl_one.value < 0) {
        amountEl_one.value = 0;
        alert('Negative numbers are not allowed.');
    }
})

function calculate() {
 const currency_one = currencyEl_one.value;
 const currency_two = currencyEl_two.value;

 loadingMessage.style.display = 'block';
 rateEl.innerText = '';

fetch(`https://open.er-api.com/v6/latest/${currency_one}`)
    .then(res => {
        if (!res.ok) {
            throw new Error('Error fetching exchange rates');
         }
         return res.json();
        })
    .then(data => {
        const rate = data.rates[currency_two];

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
    .catch(error => {
        rateEl.innerText = `Error: ${error.message}`;
    })
    .finally(() => {
        loadingMessage.style.display = 'none';
    })
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();