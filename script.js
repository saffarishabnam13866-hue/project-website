// سال جاری در فوتر
document.getElementById("year").textContent = new Date().getFullYear();

// منوی موبایل
const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
toggle.addEventListener("click", () => navList.classList.toggle("open"));

// فرم تماس با اعتبارسنجی ساده
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "در حال ارسال...";
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = "لطفاً همه فیلدها را پر کنید.";
    return;
  }

  // شبیه‌سازی ارسال به سرور
  await new Promise(r => setTimeout(r, 1000));
  statusEl.textContent = "پیام شما با موفقیت ارسال شد!";
  form.reset();
});
