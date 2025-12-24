const headerData = [
  { title: "Home", link: "index.html", subHeaders: [] },
  {
    title: "Committe",
    link: "#",
    subHeaders: [
      { title: "Organizing committe", link: "organizing.html" },
      { title: "Executive committe", link: "executive.html" },
      { title: "Zonal committe", link: "zonal.html" },
    ]
  },
  { title: "About Hasicon", link: "#", subHeaders: [] },
  { title: "Registration", link: "#", subHeaders: [] },
  { title: "Policy", link: "#", subHeaders: [] },
  { title: "About", link: "about.html", subHeaders: [] },
  { title: "Contact Us", link: "contact.html", subHeaders: [] },
];

// Build menu items
function buildMenu(container, isMobile = false) {
  headerData.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = isMobile ? "border-b border-[#7dc4d9] " : "relative group";

    if (item.subHeaders.length > 0) {
      const parentLinkClass = isMobile
        ? 'flex justify-between items-center w-full p-4 font-medium text-white hover:bg-blue-600 rounded'
        : 'px-4 py-2 mt-2 cursor-pointer font-medium text-white hover:bg-blue-600 rounded';

      menuItem.innerHTML = `
        <a href="${isMobile ? '#' : item.link}" class="${parentLinkClass}">
          ${item.title}
          ${isMobile ? '<span class="ml-2 transition-transform duration-300">▶</span>' : ''}
        </a>

        <div class="${
          isMobile
            ? 'pl-4 hidden flex-col'
            : 'absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-md rounded min-w-[200px] pointer-events-none group-hover:pointer-events-auto'

        }">
          ${item.subHeaders.map(sub => `
            <a href="${sub.link}" class="${
              isMobile
                ? 'block p-2 text-[#333] hover:bg-blue-600 rounded'
                : 'block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white'
            }">
              ${sub.title}
            </a>
          `).join('')}
        </div>
      `;

      if (isMobile) {
        const parentLink = menuItem.querySelector('a');
        const subMenu = menuItem.querySelector('div');
        const arrow = parentLink.querySelector('span');

        parentLink.addEventListener('click', (e) => {
          e.preventDefault();
          subMenu.classList.toggle('hidden');
          arrow.style.transform = subMenu.classList.contains('hidden')
            ? 'rotate(0deg)'
            : 'rotate(90deg)';
        });
      }

    } else {
      menuItem.innerHTML = `
        <a href="${item.link}" class="${
          isMobile
            ? 'block p-4 font-medium text-white hover:bg-blue-600 rounded'
            : 'px-4 py-2 font-medium text-white hover:bg-blue-600 rounded'
        }">
          ${item.title}
        </a>`;
    }

    container.appendChild(menuItem);
  });
}


// Create header
function createHeader() {
  const header = document.createElement('header');
  header.className = "shadow-md bg-blue-500 sticky top-0 z-50";

  header.innerHTML = `
    <div class="w-full ">

      <!-- Mobile Logo -->
      <div class="flex justify-center mb-3 md:hidden">
        <img src="images/left_logo.png" alt="Logo" class="h-16 object-contain" />
      </div>

      <!-- Desktop / Mobile Top Row -->
      <div class="flex items-center justify-between">

        <!-- Left Logo -->
        <div class="hidden md:flex justify-start w-[10vw] pl-6">
          <img src="images/left_logo.png" alt="Left Logo" class="h-16 object-contain" />
        </div>

        <!-- Desktop Navbar -->
        <nav class="hidden md:flex justify-center space-x-6 w-[80vw]" id="desktop-menu"></nav>

        <!-- Right Logo / Mobile Toggle -->
        <div class="flex justify-end w-[10vw] items-center pr-6 gap-3">
          <img src="images/right_logo.png" alt="Right Logo" class="h-16 object-contain block" />

          <!-- Mobile Toggle -->
          
        </div>
        
      </div>
      <button id="mobile-toggle" class="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>

    <!-- Mobile Navbar (dropdown below logo) -->
    <div class="md:hidden hidden bg-blue-500" id="mobile-menu"></div>
  `;

  document.body.prepend(header);

  // Build menus
  buildMenu(document.getElementById('desktop-menu'));
  buildMenu(document.getElementById('mobile-menu'), true);

  // Mobile dropdown toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}


// Initialize header
document.addEventListener('DOMContentLoaded', createHeader);
