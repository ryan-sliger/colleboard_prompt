const btcdata = document.querySelectorAll("[data-Bitcoin]");
const ethdata = document.querySelectorAll("[data-Ethereum]");
const carddata = document.querySelectorAll("[data-Cardano]");
const poldata = document.querySelectorAll("[data-Polkadot]");
const mondata = document.querySelectorAll("[data-Monero]");
const steldata = document.querySelectorAll("[data-Stellar]");
const chaindata = document.querySelectorAll("[data-Chainlink]");
const tethdata = document.querySelectorAll("[data-Tether]");

const crypto = [
  { name: "Bitcoin", price: "47508.30", id: 0 },
  { name: "Etherium", price: "3385.38", id: 1 },
  { name: "Cardano", price: "2.24", id: 2 },
  { name: "Polkadot", price: "31.84", id: 3 },
  { name: "Monero", price: "254.91", id: 4 },
  { name: "Stellar", price: "0.316", id: 5 },
  { name: "Chainlink", price: "26.88", id: 6 },
  { name: "Tether", price: "1.00", id: 7 },
];

const grid = document.querySelector(".cryptogrid");
const display = document.querySelector(".dataresults");

grid.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const grid = event.target;
  const gridvalue = grid.textContent;

  display.textContent = gridvalue;

  const bit = crypto.filter(function (crypto) {
    if (
      (grid.textContent === "Bitcoin",
      "Etherium",
      "Cardano",
      "Polkadot",
      "Monero",
      "Stellar",
      "ChainLink",
      "Tether")
    ) {
      return crypto.price;
    }
  });

  console.log(grid.textContent);
});

const price = crypto.filter(function (crypto) {
  if (crypto.price < "0") {
    return true;
  }
  console.log(crypto.price);
});
