
import { fetchBeachByName } from '../services/beach-service.js';

// Load beach details page
export function loadBeachDetails(container, beachName) {
  // Create container for beach details
  const detailsContainer = document.createElement('div');
  detailsContainer.className = 'container mx-auto px-4 py-8';
  
  // Add loading state
  const loadingElement = document.createElement('div');
  loadingElement.className = 'text-center py-16';
  loadingElement.textContent = 'טוען פרטי חוף...';
  detailsContainer.appendChild(loadingElement);
  
  // Append to main container
  container.appendChild(detailsContainer);
  
  // Fetch beach details
  fetchBeachDetails(beachName, detailsContainer);
}

// Fetch beach details from API
async function fetchBeachDetails(beachName, container) {
  try {
    const beach = await fetchBeachByName(beachName);
    
    if (!beach) {
      renderNotFound(container);
      return;
    }
    
    renderBeachDetails(beach, container);
  } catch (error) {
    console.error('Error fetching beach details:', error);
    renderError(container);
  }
}

// Render beach not found
function renderNotFound(container) {
  container.innerHTML = '';
  
  const notFoundElement = document.createElement('div');
  notFoundElement.className = 'text-center py-16';
  
  const notFoundTitle = document.createElement('h2');
  notFoundTitle.className = 'text-2xl font-bold mb-4';
  notFoundTitle.textContent = 'החוף לא נמצא';
  
  const notFoundText = document.createElement('p');
  notFoundText.className = 'text-gray-600 mb-6';
  notFoundText.textContent = 'לא הצלחנו למצוא את החוף המבוקש';
  
  const backLink = document.createElement('a');
  backLink.href = '#/';
  backLink.className = 'bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors';
  backLink.textContent = 'חזרה לעמוד הראשי';
  
  notFoundElement.appendChild(notFoundTitle);
  notFoundElement.appendChild(notFoundText);
  notFoundElement.appendChild(backLink);
  
  container.appendChild(notFoundElement);
}

// Render error message
function renderError(container) {
  container.innerHTML = '';
  
  const errorElement = document.createElement('div');
  errorElement.className = 'text-center py-16';
  
  const errorTitle = document.createElement('h2');
  errorTitle.className = 'text-2xl font-bold mb-4 text-red-600';
  errorTitle.textContent = 'שגיאה בטעינת פרטי החוף';
  
  const errorText = document.createElement('p');
  errorText.className = 'text-gray-600 mb-6';
  errorText.textContent = 'אירעה שגיאה בעת טעינת פרטי החוף, אנא נסה שנית מאוחר יותר';
  
  const backLink = document.createElement('a');
  backLink.href = '#/';
  backLink.className = 'bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors';
  backLink.textContent = 'חזרה לעמוד הראשי';
  
  errorElement.appendChild(errorTitle);
  errorElement.appendChild(errorText);
  errorElement.appendChild(backLink);
  
  container.appendChild(errorElement);
}

// Render beach details
function renderBeachDetails(beach, container) {
  container.innerHTML = '';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'mb-8 border-b pb-6';
  
  // Back button
  const backButton = document.createElement('a');
  backButton.href = '#/';
  backButton.className = 'inline-flex items-center text-primary mb-4 hover:underline';
  backButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
      <path d="m15 18-6-6 6-6"></path>
    </svg>
    חזרה לעמוד החופים
  `;
  
  // Title
  const title = document.createElement('h1');
  title.className = 'text-3xl md:text-4xl font-bold mb-4';
  title.textContent = beach.beach_name;
  
  // Location info
  const location = document.createElement('div');
  location.className = 'flex items-center text-gray-600 mb-2';
  location.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
    ${beach.address || beach.region || 'מיקום לא זמין'}
  `;
  
  // Add elements to header
  header.appendChild(backButton);
  header.appendChild(title);
  header.appendChild(location);
  
  // Create main content in two columns
  const mainContent = document.createElement('div');
  mainContent.className = 'grid grid-cols-1 md:grid-cols-2 gap-8';
  
  // Left column - Beach image and basic info
  const leftColumn = document.createElement('div');
  
  // Beach image
  const imageContainer = document.createElement('div');
  imageContainer.className = 'mb-6 rounded-xl overflow-hidden h-64 bg-gray-100';
  
  const beachImage = document.createElement('img');
  beachImage.src = "/lovable-uploads/fbfbe9f4-95ad-4e62-8d19-388243e9e1fc.png";
  beachImage.alt = beach.beach_name;
  beachImage.className = 'w-full h-full object-cover';
  
  imageContainer.appendChild(beachImage);
  
  // Contact info
  const contactInfo = document.createElement('div');
  contactInfo.className = 'p-6 bg-gray-50 rounded-xl mb-6';
  
  const contactTitle = document.createElement('h3');
  contactTitle.className = 'text-lg font-semibold mb-4';
  contactTitle.textContent = 'פרטי התקשרות';
  
  const contactDetails = document.createElement('div');
  contactDetails.className = 'space-y-3';
  
  if (beach.phone_number) {
    const phone = document.createElement('div');
    phone.className = 'flex items-center';
    phone.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-3 text-primary">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      <span dir="ltr">${beach.phone_number}</span>
    `;
    contactDetails.appendChild(phone);
  }
  
  const location2 = document.createElement('div');
  location2.className = 'flex items-center';
  location2.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-3 text-primary">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
    ${beach.address || beach.region || 'מיקום לא זמין'}
  `;
  contactDetails.appendChild(location2);
  
  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(contactDetails);
  
  // Add elements to left column
  leftColumn.appendChild(imageContainer);
  leftColumn.appendChild(contactInfo);
  
  // Right column - Accessibility features
  const rightColumn = document.createElement('div');
  
  // Accessibility rating
  const ratingContainer = document.createElement('div');
  ratingContainer.className = 'mb-6';
  
  const ratingTitle = document.createElement('h3');
  ratingTitle.className = 'text-lg font-semibold mb-3';
  ratingTitle.textContent = 'דירוג נגישות';
  
  const ratingScore = document.createElement('div');
  ratingScore.className = `text-white font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center ${getScoreColor(beach.rating)}`;
  ratingScore.textContent = beach.rating;
  
  ratingContainer.appendChild(ratingTitle);
  ratingContainer.appendChild(ratingScore);
  
  // Accessibility features
  const featuresContainer = document.createElement('div');
  featuresContainer.className = 'bg-white rounded-xl border border-gray-200 overflow-hidden';
  
  const featuresTitle = document.createElement('div');
  featuresTitle.className = 'p-4 bg-gray-50 border-b border-gray-200';
  featuresTitle.innerHTML = '<h3 class="font-semibold">מאפייני נגישות</h3>';
  
  const featuresList = document.createElement('div');
  featuresList.className = 'p-4 space-y-4';
  
  // Add features
  const features = [
    {
      title: 'חניית נכים',
      value: beach.accessible_parking?.disabled_parking === 'כן',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>'
    },
    {
      title: 'גישה למים',
      value: beach.beach_access?.solid_path_to_water === 'כן',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18M12 4v16M4 12h16"/></svg>'
    },
    {
      title: 'כסאות גלגלים מיוחדים',
      value: beach.special_wheelchairs?.water_accessible_wheelchairs === 'כן',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M8 21h8"/></svg>'
    },
    {
      title: 'שירותי נכים',
      value: beach.accessible_restrooms?.disabled_restrooms === 'כן',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"/><path d="M4 6h16M12 4v4"/></svg>'
    }
  ];
  
  features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.className = 'flex items-center justify-between';
    
    const featureLabel = document.createElement('div');
    featureLabel.className = 'flex items-center';
    featureLabel.innerHTML = `
      <span class="ml-2">${feature.icon}</span>
      <span>${feature.title}</span>
    `;
    
    const featureValue = document.createElement('div');
    if (feature.value) {
      featureValue.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      `;
    } else {
      featureValue.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500">
          <path d="M18 6 6 18M6 6l12 12"></path>
        </svg>
      `;
    }
    
    featureItem.appendChild(featureLabel);
    featureItem.appendChild(featureValue);
    featuresList.appendChild(featureItem);
  });
  
  featuresContainer.appendChild(featuresTitle);
  featuresContainer.appendChild(featuresList);
  
  // Add elements to right column
  rightColumn.appendChild(ratingContainer);
  rightColumn.appendChild(featuresContainer);
  
  // Add columns to main content
  mainContent.appendChild(leftColumn);
  mainContent.appendChild(rightColumn);
  
  // Append all to container
  container.appendChild(header);
  container.appendChild(mainContent);
}

// Get color based on score
function getScoreColor(score) {
  if (score >= 8) return 'bg-green-500';
  if (score >= 6) return 'bg-yellow-500';
  return 'bg-red-500';
}
