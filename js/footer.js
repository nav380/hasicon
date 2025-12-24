// Footer content configuration
const footerData = {
  conference: "HSICON 2026 – Hernia Society of India",
  year: new Date().getFullYear(),

  links: [
    { title: "Home", link: "index.html" },
    { title: "Committee", link: "committee.html" },
    { title: "Registration", link: "registration.html" },
    { title: "Contact", link: "contact.html" }
  ],

  contact: {
    email: "younghasicon2026@gmail.com",
    venue: "JW Marriott Hotel, Chandigarh"
  },

  social: [
    { title: "Twitter", link: "https://twitter.com", icon: "fa-brands fa-x-twitter" },
    { title: "Facebook", link: "https://facebook.com", icon: "fa-brands fa-facebook-f" },
    { title: "Instagram", link: "https://instagram.com", icon: "fa-brands fa-instagram" },
    { title: "LinkedIn", link: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" }
  ]
};


// Function to create footer
function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "bg-gray-800 text-gray-300 ";

  const linksHTML = footerData.links.map(link =>
    `<a href="${link.link}" class="hover:text-white transition">${link.title}</a>`
  ).join("");

  const socialHTML = footerData.social.map(s =>
    `<a href="${s.link}" target="_blank" aria-label="${s.title}"
       class="w-10 h-10 flex items-center justify-center rounded-full
              bg-gray-700 hover:bg-gray-600 transition">
       <i class="${s.icon} text-white"></i>
     </a>`
  ).join("");

  footer.innerHTML = `
  <div class=" width-full "> 
  <img src="images/footer.png" alt="Footer Background" class="w-full h-64  " />
    <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Conference Info -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-3">
          ${footerData.conference}
        </h3>
        <p class="text-sm leading-relaxed">
          National Chapter of Asia Pacific Hernia Society<br>
          Advancing hernia surgery through collaboration & innovation.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-white font-semibold mb-3">Quick Links</h4>
        <nav class="flex flex-col space-y-2">
          ${linksHTML}
        </nav>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-semibold mb-3">Contact</h4>
        <p class="text-sm">📍 ${footerData.contact.venue}</p>
        <p class="text-sm mt-2">
          ✉ <a href="mailto:${footerData.contact.email}" class="hover:text-white">
            ${footerData.contact.email}
          </a>
        </p>

        <div class="flex space-x-3 mt-5">
          ${socialHTML}
        </div>
      </div>
    </div>

    <div class="border-t border-gray-700 text-center py-4 text-sm">
      © ${footerData.year} ${footerData.conference}. All rights reserved.
    </div>
  </div>
  `;

  document.body.appendChild(footer);
}

// Initialize footer after DOM loads
document.addEventListener('DOMContentLoaded', createFooter);
