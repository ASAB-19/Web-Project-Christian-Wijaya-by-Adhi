// lagu ting tung tang
const music = document.getElementById('bg-music');
const toggleButton = document.getElementById('music-toggle');

let isPlaying = false;

toggleButton.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggleButton.textContent = '🔊 Play Music';
  } else {
    music.play();
    toggleButton.textContent = '🔇 Pause Music';
  }
  isPlaying = !isPlaying;
});

// add to cart
function addToCart() {
  alert("Your item has been added to your cart.");
}

function orderNow() {
  alert("Order placed successfully!");
}

// event page 
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const birthdate = new Date(document.getElementById("birthdate").value);
  const gender = document.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById("terms").checked;
  const message = document.getElementById("formMessage");

  const today = new Date();
  message.style.color = "red";

  if (name === "") {
    message.textContent = "Please enter your name.";
    return false;
  }

  if (!email.includes("@") || !email.includes(".com")) {
    message.textContent = "Please enter a valid email address.";
    return false;
  }

  if (birthdate > today || isNaN(birthdate)) {
    message.textContent = "Birthdate must be a valid date in the past.";
    return false;
  }

  if (!gender) {
    message.textContent = "Please select your gender.";
    return false;
  }

  if (!terms) {
    message.textContent = "You must agree to the terms and conditions.";
    return false;
  }

  message.style.color = "green";
  message.textContent = "Form submitted successfully!";
  return false; 
}
