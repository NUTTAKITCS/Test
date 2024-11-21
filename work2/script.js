let autoplay = true; // ตั้งค่าเริ่มต้นให้ Auto Play เป็นเปิดอยู่
let currentIndex = 0;

function startCarousel() {
    const items = document.querySelectorAll('#carousel .wat');
    setInterval(() => {
        if (autoplay) {
            items.forEach((item, index) => {
                item.style.display = index === currentIndex ? 'block' : 'none';
            });
            currentIndex = (currentIndex + 1) % items.length;
        }
    }, 1000); // สลับทุก 3 วินาที
}

function toggleAutoplay() {
    autoplay = !autoplay; // เปิด/ปิด Auto Play
}

// เรียกใช้งานฟังก์ชัน
startCarousel();
