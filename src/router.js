
import { loadHomePage } from './pages/index.js';
import { loadBeachDetails } from './pages/beach-detail.js';
import { loadAboutPage } from './pages/about.js';
import { loadNotFoundPage } from './pages/not-found.js';

// Application container
const appContainer = document.getElementById('app-container');

// Routes configuration
const routes = {
  '/': loadHomePage,
  '/about': loadAboutPage,
  '/not-found': loadNotFoundPage
};

// Regular expression to match beach detail pages
const beachDetailRegex = /^\/beach\/(.+)$/;

// Navigate to a specific path
export function navigateTo(path) {
  clearAppContainer();
  
  // Check for exact route match
  if (routes[path]) {
    routes[path](appContainer);
    return;
  }
  
  // Check for beach detail route
  const beachMatch = path.match(beachDetailRegex);
  if (beachMatch) {
    const beachName = decodeURIComponent(beachMatch[1]);
    loadBeachDetails(appContainer, beachName);
    return;
  }
  
  // Default to not found
  routes['/not-found'](appContainer);
}

// Clear the app container
function clearAppContainer() {
  while (appContainer.firstChild) {
    appContainer.removeChild(appContainer.firstChild);
  }
}

// Create a link with routing functionality
export function createRouterLink(text, path, className = '') {
  const link = document.createElement('a');
  link.textContent = text;
  link.href = `#${path}`;
  link.className = className;
  return link;
}
