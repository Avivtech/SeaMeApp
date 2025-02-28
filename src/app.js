
// Importing components and functionality
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { navigateTo } from './router.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  console.log('Application initializing...');
  
  try {
    // Render header and footer
    console.log('Rendering header...');
    renderHeader();
    
    console.log('Rendering footer...');
    renderFooter();
    
    // Handle navigation
    window.addEventListener('hashchange', handleNavigation);
    
    // Initial navigation
    console.log('Initial navigation...');
    handleNavigation();
  } catch (error) {
    console.error('Error initializing application:', error);
    document.getElementById('app-container').innerHTML = `
      <div class="container mx-auto px-4 py-16 text-center">
        <h1 class="text-3xl font-bold mb-4 text-red-600">שגיאה בטעינת האפליקציה</h1>
        <p class="mb-6">אירעה שגיאה בטעינת האפליקציה. אנא רענן את הדף או נסה שוב מאוחר יותר.</p>
        <button 
          onclick="window.location.reload()" 
          class="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90">
          רענן דף
        </button>
        <div class="mt-8 p-4 bg-gray-100 rounded text-left mx-auto max-w-2xl">
          <pre id="error-details" class="text-xs overflow-auto">${error.stack || error.message}</pre>
        </div>
      </div>
    `;
  }
});

// Navigation handler
function handleNavigation() {
  const path = window.location.hash.slice(1) || '/';
  console.log(`Navigating to: ${path}`);
  navigateTo(path);
}
