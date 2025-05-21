// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1200,
  once: true
});

// Animate counters
function animateCounter(id, start, end, duration) {
  const obj = document.getElementById(id);
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));

  const timer = setInterval(() => {
    current += increment;
    obj.textContent = current.toLocaleString(); // Add commas
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Main DOMContentLoaded block
window.addEventListener("DOMContentLoaded", () => {
  // Start counter animations
  animateCounter("customers", 0, 2000, 2500);
  animateCounter("projects", 0, 1300, 1000);

  // Link click handler with loader
  const loader = document.getElementById("activate-premium-overlay");
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      const targetUrl = link.href;

      // Allow direct open for Telegram and WhatsApp links
      if (targetUrl.includes("t.me") || targetUrl.includes("chat.whatsapp.com")) {
        event.preventDefault();
        window.open(targetUrl, "_blank");
        return;
      }

      if (!targetUrl || targetUrl === "#") return;

      event.preventDefault();
      showLoader();
      setTimeout(() => {
        hideLoader();
        window.location.href = targetUrl;
      }, 2000);
    });
  });

  // Hide loader on back navigation
  window.addEventListener("popstate", hideLoader);

  // Premium activation logic
  const premiumLink = document.getElementById("premium-link");
  const activatePremiumLink = document.getElementById("activate-premium-link");

  const activationKey = localStorage.getItem("activationKey");
  const expirationDateStr = localStorage.getItem("activationExpiry");
  const expirationDate = expirationDateStr ? new Date(expirationDateStr) : null;

  if (activationKey && expirationDate && expirationDate > new Date()) {
    premiumLink.href = "activated.html";
  } else {
    localStorage.removeItem("activationKey");
    localStorage.removeItem("activationExpiry");
    premiumLink.href = "auth.html";
  }

  activatePremiumLink.addEventListener("click", (event) => {
    event.preventDefault();
    const expiryDateStr = localStorage.getItem("activationExpiry");
    const expiryDate = expiryDateStr ? new Date(expiryDateStr) : null;
    const currentDate = new Date();

    if (expiryDate && expiryDate > currentDate) {
      const daysLeft = Math.ceil((expiryDate - currentDate) / (1000 * 60 * 60 * 24));
      showLoader();
      setTimeout(() => {
        hideLoader();
        startCountdown(expiryDate, daysLeft);
      }, 2000);
    } else {
      localStorage.removeItem("activationExpiry");
      showLoader();
      setTimeout(() => {
        hideLoader();
        window.location.href = "auth.html";
      }, 2000);
    }
  });
});

// Show loader
function showLoader() {
  const loader = document.getElementById("activate-premium-overlay");
  if (loader) loader.style.display = "flex";
}

// Hide loader
function hideLoader() {
  const loader = document.getElementById("activate-premium-overlay");
  if (loader) loader.style.display = "none";
}

// Show countdown popup
function startCountdown(expiryDate, daysLeft) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");
  const popupHeader = document.getElementById("popup-header");
  const closeBtn = document.getElementById("popup-button");

  popupHeader.textContent = "Premium Active";

  // Prevent duplicate listeners
  const newCloseBtn = closeBtn.cloneNode(true);
  closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

  const interval = setInterval(() => {
    const currentDate = new Date();
    const remainingTime = expiryDate - currentDate;

    if (remainingTime <= 0) {
      clearInterval(interval);
      popupMessage.textContent = "Your subscription has expired.";
      return;
    }

    const hours = String(Math.floor((remainingTime / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((remainingTime / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((remainingTime / 1000) % 60)).padStart(2, '0');

    popupMessage.textContent = `Your subscription is active and will expire on ${expiryDate.toDateString()} (${daysLeft} days remaining). Time left: [${hours}:${minutes}:${seconds}]`;
  }, 1000);

  popup.style.display = "block";

  newCloseBtn.addEventListener("click", () => {
    popup.style.display = "none";
    clearInterval(interval);
  });
}

// One-time popup function
function showPopup(header, message) {
  const popup = document.getElementById("popup");
  const popupHeader = document.getElementById("popup-header");
  const popupMessage = document.getElementById("popup-message");
  const closeBtn = document.getElementById("popup-button");

  popupHeader.textContent = header;
  popupMessage.textContent = message;
  popup.style.display = "block";

  // Prevent duplicate listeners
  const newCloseBtn = closeBtn.cloneNode(true);
  closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);

  newCloseBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
}
