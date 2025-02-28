
import { createRouterLink } from '../router.js';

// Render footer component
export function renderFooter() {
  const footer = document.getElementById('main-footer');
  
  const container = document.createElement('div');
  container.className = 'container mx-auto px-4';
  
  // Create grid layout
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-3 gap-8';
  
  // Logo section
  const logoSection = document.createElement('div');
  logoSection.className = 'space-y-4';
  
  const logoContainer = document.createElement('a');
  logoContainer.href = '#/';
  logoContainer.className = 'flex items-center gap-2 logo-container text-white';
  logoContainer.innerHTML = `
    <div class="bg-primary rounded-md p-1 seashell-logo flex items-center justify-center h-10 w-10">
      <svg class="w-full h-full fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5,9.5c-1.5,0-1.5-0.5-3-0.5s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5v2c1.5,0,1.5-0.5,3-0.5
        s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5V9.5z"/>
        <path d="M3,14.5c1.5,0,1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5v-2c-1.5,0-1.5,0.5-3,0.5s-1.5-0.5-3-0.5
        s-1.5,0.5-3,0.5s-1.5-0.5-3-0.5s-1.5,0.5-3,0.5V14.5z"/>
        <path d="M21.5,17c-1.5,0-1.5-0.5-3-0.5S17,17,15.5,17s-1.5-0.5-3-0.5S11,17,9.5,17S8,16.5,6.5,16.5S5,17,3.5,17v2
        c1.5,0,1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5s1.5-0.5,3-0.5s1.5,0.5,3,0.5V17z"/>
        <path d="M21,3H3C1.9,3,1,3.9,1,5v14c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V5C23,3.9,22.1,3,21,3z M21,19H3V5h18V19z"/>
      </svg>
    </div>
    <div class="font-semibold text-white tracking-tight text-xl">
      <span>sea</span><span class="font-bold">me</span>
    </div>
  `;
  
  const logoDescription = document.createElement('p');
  logoDescription.className = 'text-sm opacity-80 max-w-xs';
  logoDescription.textContent = 'SeaMe - שירות המספק מידע נגיש על חופי ישראל, מיועד לסייע לאנשים עם מוגבלויות למצוא חופים המתאימים לצרכיהם';
  
  logoSection.appendChild(logoContainer);
  logoSection.appendChild(logoDescription);
  
  // Links section
  const linksSection = document.createElement('div');
  linksSection.className = 'space-y-4';
  
  const linksTitle = document.createElement('h3');
  linksTitle.className = 'font-bold text-lg mb-2';
  linksTitle.textContent = 'קישורים';
  
  const linksList = document.createElement('ul');
  linksList.className = 'space-y-2';
  
  const links = [
    { text: 'ראשי', path: '/' },
    { text: 'אודות הפרויקט', path: '/about' },
    { text: 'יצירת קשר', path: '/contact' },
    { text: 'רשימת חופים מלאה', path: '/beaches' }
  ];
  
  links.forEach(link => {
    const li = document.createElement('li');
    const a = createRouterLink(
      link.text, 
      link.path, 
      'text-sm opacity-80 hover:opacity-100 transition-opacity'
    );
    li.appendChild(a);
    linksList.appendChild(li);
  });
  
  linksSection.appendChild(linksTitle);
  linksSection.appendChild(linksList);
  
  // Contact section
  const contactSection = document.createElement('div');
  contactSection.className = 'space-y-4';
  
  const contactTitle = document.createElement('h3');
  contactTitle.className = 'font-bold text-lg mb-2';
  contactTitle.textContent = 'צור קשר';
  
  const contactInfo = document.createElement('address');
  contactInfo.className = 'not-italic text-sm opacity-80';
  contactInfo.innerHTML = `
    <p>דוא"ל: contact@seame.co.il</p>
    <p>טלפון: 03-123-4567</p>
    <p>כל הזכויות שמורות לקבוצת הפרויקט</p>
  `;
  
  contactSection.appendChild(contactTitle);
  contactSection.appendChild(contactInfo);
  
  // Add sections to grid
  grid.appendChild(logoSection);
  grid.appendChild(linksSection);
  grid.appendChild(contactSection);
  
  // Copyright section
  const copyrightSection = document.createElement('div');
  copyrightSection.className = 'border-t border-white/20 mt-8 pt-8 text-sm opacity-70 text-center';
  
  const copyrightText = document.createElement('p');
  copyrightText.textContent = `© ${new Date().getFullYear()} SeaMe. כל הזכויות שמורות.`;
  
  copyrightSection.appendChild(copyrightText);
  
  // Append all sections to container
  container.appendChild(grid);
  container.appendChild(copyrightSection);
  
  // Append container to footer
  footer.appendChild(container);
}
