const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const tabs = document.querySelectorAll(".menu-tabs button");
const lists = document.querySelectorAll(".menu-list");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");

    lists.forEach(list => {
      list.classList.toggle("active-list", list.id === category);
    });
  });
});

let guests = 2;
const guestCount = document.getElementById("guestCount");

document.getElementById("minus").addEventListener("click", () => {
  guests = Math.max(1, guests - 1);
  guestCount.textContent = guests;
});

document.getElementById("plus").addEventListener("click", () => {
  guests = Math.min(12, guests + 1);
  guestCount.textContent = guests;
});

const dateInput = document.getElementById("date");
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
dateInput.min = localDate;

const reservationForm = document.getElementById("reservationForm");
const confirmation = document.getElementById("confirmation");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  reservationForm.style.display = "none";
  confirmation.classList.add("show");
});

document.getElementById("resetReservation").addEventListener("click", () => {
  reservationForm.reset();
  guests = 2;
  guestCount.textContent = guests;
  confirmation.classList.remove("show");
  reservationForm.style.display = "grid";
});

const cookie = document.getElementById("cookie");
const acceptCookies = document.getElementById("acceptCookies");

if (localStorage.getItem("casaLuciaCookies") === "accepted") {
  cookie.style.display = "none";
}

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("casaLuciaCookies", "accepted");
  cookie.style.display = "none";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", event => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
