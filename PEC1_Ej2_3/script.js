const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const currencySelect = document.getElementById("currency");
const currencySymbolEl = document.getElementById("currency-symbol");
const moviePricesInEUR = [5, 12, 5, 8, 15];

let currencyRate = 1;
let selectedCurrency = "EUR";

let ticketPrice = +movieSelect.value;

populateUI();

function fetchExchangeRate() {
  const currency = currencySelect.value;

  fetch(`https://open.er-api.com/v6/latest/EUR`)
    .then((res) => res.json())
    .then((data) => {
      currencyRate = data.rates[currency];
      selectedCurrency = currency;
      updateMoviePrices();
      updateSelectedCount();
    })
    .catch((err) => {
      console.error("Error fetching exchange rate:", err);
      alert("Failed to fetch exchange rate. Please try again.");
    });
}

function updateMoviePrices() {
  const movieOptions = movieSelect.options;

  moviePricesInEUR.forEach((price, index) => {
    const newPrice = (price * currencyRate).toFixed(2);
    movieOptions[index].textContent = `${
      movieOptions[index].text.split("(")[0]
    } (${newPrice} ${selectedCurrency})`;
  });

  ticketPrice = +movieSelect.value * currencyRate;
}

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    const totalPrice = (selectedSeatsCount * ticketPrice).toFixed(2);

    count.innerText = selectedSeatsCount;
    total.innerText = `${totalPrice} ${selectedCurrency}`;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value * currencyRate;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

currencySelect.addEventListener("change", fetchExchangeRate);

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});


updateSelectedCount();
