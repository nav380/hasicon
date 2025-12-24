// ==================================================
// STATIC IMAGE AND CONTENT
// ==================================================
const mainImage = "https://picsum.photos/1200/600";
const overlayContent = {
  title: "Welcome to Hasicon 2026",
  subtitle: "Join Us for an Unforgettable Experience",
  description: "Discover cutting-edge advancements, network with experts, and explore the vibrant culture of Chandigarh at HSICON 2026.",
  buttonText: "Learn More",
  buttonLink: "about.html"
};

// ==================================================
// INJECT HTML AT SCRIPT POSITION
// ==================================================
const scriptTag = document.currentScript;

if (scriptTag) {
  const wrapper = document.createElement("div");
  wrapper.className = "relative w-full";

  wrapper.innerHTML = `
    <!-- MAIN IMAGE -->
   <img src="${mainImage}" 
       class="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 ease-in-out hover:scale-105"
       alt="${overlayContent.title}">

  <!-- LEFT OVERLAY PANEL -->
  <div class="absolute top-1/4 left-4 md:left-16 w-11/12 md:w-1/3
              bg-gradient-to-r from-black/40 via-black/20 to-transparent
              backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl
              transform transition-all duration-500 hover:translate-x-1">
    <h2 class="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">${overlayContent.title}</h2>
    <p class="mt-3 text-white/90 text-base md:text-lg font-medium">${overlayContent.subtitle}</p>
    <p class="mt-4 text-white/80 text-sm md:text-base">${overlayContent.description}</p>
    <a href="${overlayContent.buttonLink}"
       class="inline-block mt-5 px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
      ${overlayContent.buttonText}
    </a>
  </div>

  <!-- OPTIONAL: Gradient Fade at Bottom -->
  <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>

  `;

  // Insert wrapper before the script tag
  scriptTag.parentNode.insertBefore(wrapper, scriptTag);
}
