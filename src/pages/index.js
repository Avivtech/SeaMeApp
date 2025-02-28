
import { createBeachCard } from '../components/beach-card.js';
import { createSearchBar } from '../components/search-bar.js';
import { createFilterPanel } from '../components/filter-panel.js';
import { fetchBeaches } from '../services/beach-service.js';

// Load home page
export function loadHomePage(container) {
  // Create hero section
  const heroSection = document.createElement('section');
  heroSection.className = 'bg-gradient-to-b from-blue-50 to-white py-16 px-4';
  
  const heroContainer = document.createElement('div');
  heroContainer.className = 'container mx-auto text-center';
  
  const heroTitle = document.createElement('h1');
  heroTitle.className = 'text-4xl md:text-5xl font-bold mb-6 text-gray-900';
  heroTitle.textContent = 'מצא את החוף המונגש המתאים לך';
  
  const heroSubtitle = document.createElement('p');
  heroSubtitle.className = 'text-xl text-gray-600 mb-8 max-w-3xl mx-auto';
  heroSubtitle.textContent = 'מידע נגיש על חופי הים בישראל עבור אנשים עם מוגבלויות';
  
  // Add search bar
  const searchBar = createSearchBar(handleSearch);
  
  // Append hero elements
  heroContainer.appendChild(heroTitle);
  heroContainer.appendChild(heroSubtitle);
  heroContainer.appendChild(searchBar);
  heroSection.appendChild(heroContainer);
  
  // Create main content section
  const mainContent = document.createElement('section');
  mainContent.className = 'py-12 px-4';
  
  const contentContainer = document.createElement('div');
  contentContainer.className = 'container mx-auto';
  
  // Create filters and results grid
  const resultsLayout = document.createElement('div');
  resultsLayout.className = 'grid grid-cols-1 lg:grid-cols-4 gap-8';
  
  // Create and add filter panel
  const filterPanel = createFilterPanel({
    title: 'סנן לפי',
    onFilterChange: handleFilterChange,
    onReset: handleFilterReset,
    onApply: handleApplyFilters
  });
  filterPanel.className = 'lg:col-span-1';
  
  // Create results container
  const resultsContainer = document.createElement('div');
  resultsContainer.className = 'lg:col-span-3';
  
  const resultsTitle = document.createElement('h2');
  resultsTitle.className = 'text-2xl font-bold mb-6';
  resultsTitle.textContent = 'חופים מונגשים';
  
  const beachesGrid = document.createElement('div');
  beachesGrid.id = 'beaches-grid';
  beachesGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
  
  // Load beaches data
  loadBeaches(beachesGrid);
  
  // Append results elements
  resultsContainer.appendChild(resultsTitle);
  resultsContainer.appendChild(beachesGrid);
  
  // Append filter and results to layout
  resultsLayout.appendChild(filterPanel);
  resultsLayout.appendChild(resultsContainer);
  
  // Append layout to content container
  contentContainer.appendChild(resultsLayout);
  mainContent.appendChild(contentContainer);
  
  // Append all sections to main container
  container.appendChild(heroSection);
  container.appendChild(mainContent);
}

// Load beaches data
async function loadBeaches(container) {
  try {
    const beaches = await fetchBeaches();
    
    if (beaches.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'col-span-full text-center py-8';
      noResults.textContent = 'לא נמצאו חופים';
      container.appendChild(noResults);
      return;
    }
    
    // Render beach cards
    beaches.forEach(beach => {
      const beachCard = createBeachCard(beach);
      container.appendChild(beachCard);
    });
  } catch (error) {
    console.error('Error loading beaches:', error);
    const errorMsg = document.createElement('div');
    errorMsg.className = 'col-span-full text-center py-8 text-red-500';
    errorMsg.textContent = 'שגיאה בטעינת נתוני החופים';
    container.appendChild(errorMsg);
  }
}

// Handle search
function handleSearch(query) {
  console.log('Searching for:', query);
  // Implement search functionality here
  const beachesGrid = document.getElementById('beaches-grid');
  if (beachesGrid) {
    beachesGrid.innerHTML = '';
    loadBeaches(beachesGrid);
  }
}

// Handle filter change
function handleFilterChange(categoryId, optionId) {
  console.log('Filter changed:', categoryId, optionId);
  // Implement filter change functionality here
}

// Handle filter reset
function handleFilterReset() {
  console.log('Filters reset');
  // Implement filter reset functionality here
}

// Handle apply filters
function handleApplyFilters() {
  console.log('Applying filters');
  // Implement apply filters functionality here
  const beachesGrid = document.getElementById('beaches-grid');
  if (beachesGrid) {
    beachesGrid.innerHTML = '';
    loadBeaches(beachesGrid);
  }
}
