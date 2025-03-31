// หากต้องการลูกเล่นเพิ่มเติมสามารถเพิ่มเอฟเฟกต์หรืออีเวนต์ได้ที่นี่
console.log("Present Simple loaded!");

// Animation เมื่อเลื่อนหน้าจอเข้ามา
const animateEls = document.querySelectorAll('.animate-fade');

const fadeInOnScroll = () => {
  animateEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
