// ==================================================
// CAPTURE SCRIPT POSITION (VERY IMPORTANT)
// ==================================================
const SLIDER_ANCHOR = document.currentScript;

// ===============================
// SLIDE DATA (EDIT ONLY THIS)
// ===============================
const slidesData = [
  {
    image: "https://picsum.photos/1200/500?random=1",
    title: "Welcome to Our Platform",
    subtitle: "Build modern web experiences"
  },
  {
    image: "https://picsum.photos/1200/500?random=2",
    title: "Fast & Responsive",
    subtitle: "Optimized for all devices"
  },
  {
    image: "https://picsum.photos/1200/500?random=3",
    title: "Scalable Solutions",
    subtitle: "Grow without limits"
  }
];

// ===============================
// SLIDER CLASS
// ===============================
class Slider {
  constructor(data) {
    this.data = data;
    this.current = 0;
    this.interval = 4000;
    this.timer = null;

    this.createSlider();
    this.update();
    this.startAuto();
  }

  createSlider() {
    const slider = document.createElement("section");
    slider.id = "js-slider";
    slider.className = `
      relative z-10 overflow-hidden w-full 
       shadow-lg bg-black
    `;

    slider.innerHTML = `
      <div class="slide-track flex transition-transform duration-500 ease-in-out">
        ${this.data.map(slide => `
          <div class="min-w-full relative">
            <img
              src="${slide.image}"
              class="w-full h-[300px] md:h-[450px] object-cover"
              alt="${slide.title}"
            />
            <div class="absolute inset-0 bg-black/40
              flex flex-col justify-center items-center
              text-center text-white px-4">
              <h2 class="text-2xl md:text-4xl font-bold">
                ${slide.title}
              </h2>
              <p class="mt-2 text-sm md:text-lg">
                ${slide.subtitle}
              </p>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- PREV -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2
        bg-black/60 text-white px-3 py-2 rounded-full
        hover:bg-black z-20"
        id="slide-prev"
      >❮</button>

      <!-- NEXT -->
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2
        bg-black/60 text-white px-3 py-2 rounded-full
        hover:bg-black z-20"
        id="slide-next"
      >❯</button>
    `;

    // 🎯 INSERT SLIDER EXACTLY WHERE SCRIPT TAG IS
    SLIDER_ANCHOR.insertAdjacentElement("afterend", slider);

    this.track = slider.querySelector(".slide-track");
    this.prevBtn = slider.querySelector("#slide-prev");
    this.nextBtn = slider.querySelector("#slide-next");

    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    slider.addEventListener("mouseenter", () => this.stopAuto());
    slider.addEventListener("mouseleave", () => this.startAuto());
  }

  update() {
    this.track.style.transform = `translateX(-${this.current * 100}%)`;
  }

  next() {
    this.current = (this.current + 1) % this.data.length;
    this.update();
  }

  prev() {
    this.current = (this.current - 1 + this.data.length) % this.data.length;
    this.update();
  }

  startAuto() {
    this.stopAuto();
    this.timer = setInterval(() => this.next(), this.interval);
  }

  stopAuto() {
    if (this.timer) clearInterval(this.timer);
  }
}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  new Slider(slidesData);
});
