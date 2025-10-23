document.addEventListener("DOMContentLoaded", () => {
  // LOGIN PAGE
  const registerLink = document.getElementById("registerLink");
  const loginBtn = document.querySelector(".login-btn");

  if (registerLink) {
    registerLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "register.html";
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  // REGISTER PAGE
  const registerBtn = document.querySelector(".register-btn");
  if (registerBtn) {
    registerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  // DASHBOARD PAGE
  const btnIndigency = document.getElementById("btnIndigency");
  const btnClearance = document.getElementById("btnClearance");
  const btnCedula = document.getElementById("btnCedula");
  const btnBusiness = document.getElementById("btnBusiness");

  if (btnIndigency) {
    btnIndigency.addEventListener("click", () => {
      window.location.href = "indigency-step1.html";
    });
  }

  if (btnClearance) {
    btnClearance.addEventListener("click", () => {
      window.location.href = "clearance-step1.html";
    });
  }

  if (btnCedula) {
    btnCedula.addEventListener("click", () => {
      window.location.href = "cedula_step1.html";
    });
  }

  if (btnBusiness) {
    btnBusiness.addEventListener("click", () => {
      window.location.href = "business-step1.html";
    });
  }

  // INDIGENCY PAGE
  const submitBtn = document.querySelector(".btn-submit");
  const cancelBtn = document.querySelector(".btn-cancel");
  const indigencyForm = document.querySelector(".indigency-form");

  // Prevent form refresh + redirect to payment.html
  if (indigencyForm) {
    indigencyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "payment.html";
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  // PAYMENT PAGE
  const backBtn = document.querySelector(".btn-back");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("upload");
  const previewImage = document.getElementById("preview-image");

  if (uploadInput) {
    uploadInput.addEventListener("change", () => {
      const file = uploadInput.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previewImage.src = e.target.result;
          previewImage.style.display = "block";
        };
        reader.readAsDataURL(file);
      } else {
        previewImage.style.display = "none";
      }
    });
  }
});

// === Mobile Navbar Toggle ===
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Close navbar when clicking any link
const navLinks = document.querySelectorAll('#navbar li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
