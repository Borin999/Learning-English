// เอฟเฟกต์ Fade-in หน้า Contact เมื่อโหลด
document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.querySelector(".contact-section");
    if (contactSection) {
      contactSection.style.opacity = 0;
      contactSection.style.transform = "translateY(30px)";
      setTimeout(() => {
        contactSection.style.transition = "all 1.5s ease";
        contactSection.style.opacity = 1;
        contactSection.style.transform = "translateY(0)";
      }, 200);
    }
  });
