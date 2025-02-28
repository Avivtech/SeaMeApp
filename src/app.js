
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { loadHomePage } from './pages/index.js';
import { navigateTo } from './router.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Render header and footer
  renderHeader();
  renderFooter();
  
  // Handle navigation
  window.addEventListener('hashchange', handleNavigation);
  
  // Initial navigation
  handleNavigation();
});

// Navigation handler
function handleNavigation() {
  const path = window.location.hash.slice(1) || '/';
  navigateTo(path);
}
