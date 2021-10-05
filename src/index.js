var data = [
  { name: "Bitcoin", price: "47508.30" },
  { name: "Cardano", price: "2.24" },
  { name: "Polkadot", price: "31.84" },
  { name: "Monero", price: "254.91" },
  { name: "Stellar", price: "0.316" },
  { name: "Chainlink", price: "26.88" },
];

const grid = document.querySelector(".cryptogrid");
const display = document.querySelector(".dataresults");
const displayp = document.querySelector(".dataresults2");

grid.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const grid = event.target;
  const gridvalue = grid.textContent;

  display.textContent = gridvalue;

  const Bit = data.filter(function (cprice) {
    if (grid.textContent === cprice.name) {
      return cprice.price;
    }
  });

  console.log(Bit[0].price);
  displayp.innerHTML = `<h3 class="dataresults2">
  ${Bit[0].price}
</h3>`;
});
