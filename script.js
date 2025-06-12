const message = document.getElementById("message");
const totalBox = document.getElementById("totalBox");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const buttons = document.querySelectorAll(".add-to-cart-btn");

let total = 0;

radioButtons.forEach((radio) => {
  radio.addEventListener("click", () => {
    const price = parseFloat(radio.dataset.price);
    addToCart(radio.value, price);
  });
});

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const radio = radioButtons[index];
    const units = radio.value;
    const price = parseFloat(radio.dataset.price);
    addToCart(units, price);
  });
});
document.querySelector(".add-to-cart-btn").addEventListener("click", () => {
  const message = document.getElementById("message");
  const selectedUnit = document.querySelector('input[name="unit"]:checked');

  message.classList.remove("show");
  message.textContent = "";

  if (selectedUnit) {
    message.textContent = `${selectedUnit.value} successfully added to cart!`;
    message.style.backgroundColor = "#28a745";
  } else {
    message.textContent = `Please select a unit before adding to cart.`;
    message.style.backgroundColor = "#dc3545";
  }

  message.classList.add("show");

  setTimeout(() => {
    message.classList.remove("show");
    message.textContent = "";
  }, 3000);
});

function addToCart(units, price) {
  total += price;
  message.textContent = `${units} successfully added to cart!`;
  totalBox.textContent = `Total: $${total.toFixed(2)}`;
}
