
import { createRouterLink } from '../router.js';

// Render header component
export function renderHeader() {
  const header = document.getElementById('main-header');
  
  // Create header container
  const container = document.createElement('div');
  container.className = 'container mx-auto px-4 py-3 flex justify-between items-center';
  
  // Create logo element
  const logo = createLogo();
  
  // Create navigation
  const nav = document.createElement('nav');
  nav.className = 'hidden lg:flex';
  
  const navList = document.createElement('ul');
  navList.className = 'flex flex-row gap-6 items-center';
  
  // Create nav items
  const navItems = [
    { text: 'ראשי', path: '/' },
    { text: 'אודות', path: '/about' },
    { text: 'צור קשר', path: '/contact' }
  ];
  
  navItems.forEach(item => {
    const li = document.createElement('li');
    const link = createRouterLink(
      item.text, 
      item.path, 
      'text-white hover:text-blue-100 transition-colors py-2 block'
    );
    li.appendChild(link);
    navList.appendChild(li);
  });
  
  nav.appendChild(navList);
  
  // Create mobile menu button
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'lg:hidden text-white hover:bg-primary/20';
  mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');
  mobileMenuBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
  `;
  
  // Add event listener for mobile menu toggle
  mobileMenuBtn.addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) {
      mobileNav.classList.toggle('hidden');
    } else {
      const newMobileNav = nav.cloneNode(true);
      newMobileNav.className = 'mobile-nav absolute top-full left-0 right-0 bg-primary shadow-lg p-4';
      container.appendChild(newMobileNav);
    }
  });
  
  // Append elements to container
  container.appendChild(logo);
  container.appendChild(nav);
  container.appendChild(mobileMenuBtn);
  
  // Append container to header
  header.appendChild(container);
}

// Create logo element
function createLogo() {
  const logoContainer = document.createElement('a');
  logoContainer.href = '#/';
  logoContainer.className = 'flex items-center gap-2 logo-container';
  logoContainer.setAttribute('aria-label', 'SeaMe Home');
  
  const logoIcon = document.createElement('div');
  logoIcon.className = 'bg-primary rounded-md p-1 seashell-logo flex items-center justify-center h-10 w-10';
  logoIcon.innerHTML = `
    <svg class="w-full h-full fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5,9.5c-1.5,0-1.5-0.5-3-0.5s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5v2c1.5,0,1.5-0.5,3-0.5
      s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5V9.5z"/>
      <path d="M3,14.5c1.5,0,1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5v-2c-1.5,0-1.5,0.5-3,0.5s-1.5-0.5-3-0.5
      s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5V14.5z"/>
      <path d="M21.5,17c-1.5,0-1.5-0.5-3-0.5S17,17,15.5,17s-1.5-0.5-3-0.5S11,17,9.5,17S8,16.5,6.5,16.5S5,17,3.5,17v2
      c1.5,0,1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5V17z"/>
      <path d="M21,3H3C1.9,3,1,3.9,1,5v14c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M21,19H3V5h18V19z"/>
      <path d="M21,5H3v14h18V5z M15.5,7c1.38,0,1.5,0.5,3,0.5v1c-1.38,0-1.5-0.5-3-0.5s-1.62,0.5-3,0.5S11,8,9.5,8S7.88,8.5,6.5,8.5
      S5,8,3.5,8V7c1.38,0,1.5,0.5,3,0.5S8.12,7,9.5,7s1.62,0.5,3,0.5S14.12,7,15.5,7z"/>
    </svg>
  `;
  
  const logoText = document.createElement('div');
  logoText.className = 'font-semibold text-primary tracking-tight text-xl';
  logoText.innerHTML = '<span>sea</span><span class="font-bold">me</span>';
  
  logoContainer.appendChild(logoIcon);
  logoContainer.appendChild(logoText);
  
  return logoContainer;
}
