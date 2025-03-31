// เลือกรูปภาพทุกรูปในสไลด์โชว์
const slides = document.querySelectorAll(".slideshow .slide");
let currentIndex = 0;

function showNextSlide() {
  // ซ่อนรูปภาพปัจจุบัน
  slides[currentIndex].classList.remove("active");
  // คำนวณดัชนีของรูปภาพถัดไป (ถ้าเกินจำนวนรูปให้วนกลับไปรูปแรก)
  currentIndex = (currentIndex + 1) % slides.length;
  // แสดงรูปภาพถัดไป
  slides[currentIndex].classList.add("active");
}

// เปลี่ยนรูปภาพอัตโนมัติทุก 3 วินาที (2000 มิลลิวินาที)
setInterval(showNextSlide, 2000);
