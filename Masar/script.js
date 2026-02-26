// عند التمرير: تغيير شكل الهيدر
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
    header.classList.remove("header-initial");
  } else {
    header.classList.add("header-initial");
    header.classList.remove("header-scrolled");
  }
});

// زر الوضع الليلي
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = toggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// ** تأثير الكتابة بالحرف **
document.addEventListener("DOMContentLoaded", function() {
    const typingTextElement = document.getElementById('typing-text');
    const textToType = "انطلق نحو التميز";
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // سرعة الكتابة (أقل = أسرع)
    let deletingSpeed = 50; // سرعة الحذف
    let delayBetweenWords = 1500; // وقت الانتظار قبل الحذف أو التكرار

    function typeEffect() {
        if (!isDeleting && charIndex < textToType.length) {
            // الكتابة
            typingTextElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // الحذف
            typingTextElement.textContent = textToType.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else if (!isDeleting && charIndex === textToType.length) {
            // انتهى من الكتابة، انتظر ثم ابدأ الحذف
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            // انتهى من الحذف، انتظر ثم ابدأ الكتابة مجدداً
            isDeleting = false;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect(); // بدء التأثير عند تحميل الصفحة
});
let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
    if (window.scrollY > 250) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
