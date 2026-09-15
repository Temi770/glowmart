let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".product-card .btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const successMsg = document.getElementById('form-success');

  // Validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Show success message
  successMsg.classList.add("show");

  // Reset form
  this.reset();

  // Fade out after 3 seconds
  setTimeout(() => {
    successMsg.classList.remove("show");
  }, 3000);
});
