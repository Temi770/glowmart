// ===== Floating Cart Counter =====
let cartCount = 0;
const cartDisplay = document.querySelector(".cart-icon #cart-count");
const productButtons = document.querySelectorAll(".product-card .btn");

productButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  successMsg.classList.add("show");
  this.reset();

  setTimeout(() => {
    successMsg.classList.remove("show");
  }, 3000);
});

// ===== Hamburger Menu Toggle =====
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
