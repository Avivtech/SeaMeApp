
// Create beach card component
export function createBeachCard(beach) {
  // Create card container
  const card = document.createElement('div');
  card.className = 'overflow-hidden relative card-hover transition-all duration-300 border border-gray-200 rounded-lg shadow-sm';
  
  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'h-48 blur-load bg-blue-100';
  imageContainer.style.backgroundImage = `url(/lovable-uploads/fbfbe9f4-95ad-4e62-8d19-388243e9e1fc.png)`;
  
  // Create image
  const image = document.createElement('img');
  image.src = '/lovable-uploads/fbfbe9f4-95ad-4e62-8d19-388243e9e1fc.png';
  image.alt = beach.beach_name;
  image.className = 'w-full h-full object-cover';
  image.addEventListener('load', () => {
    imageContainer.classList.add('loaded');
  });
  
  imageContainer.appendChild(image);
  
  // Create rating badge
  const ratingBadge = document.createElement('div');
  ratingBadge.className = `absolute top-4 left-4 text-white font-semibold rounded-full w-10 h-10 flex items-center justify-center text-sm ${getScoreColor(beach.rating)}`;
  ratingBadge.textContent = beach.rating;
  
  // Create content container
  const content = document.createElement('div');
  content.className = 'p-4';
  
  // Create title
  const title = document.createElement('h3');
  title.className = 'font-bold text-lg mb-1';
  title.textContent = beach.beach_name;
  
  // Create location
  const location = document.createElement('div');
  location.className = 'flex items-center text-sm text-gray-600 mb-3';
  location.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 w-4 h-4">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
    <span>${beach.address || beach.region}</span>
  `;
  
  // Create features grid
  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'grid grid-cols-2 gap-2 text-sm mt-3';
  
  // Add features
  if (beach.accessible_parking && beach.accessible_parking.disabled_parking === "כן") {
    const feature = document.createElement('div');
    feature.className = 'flex items-center text-green-600';
    feature.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 w-4 h-4">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m4.9 4.9 14.2 14.2"></path>
      </svg>
      <span>חניית נכים</span>
    `;
    featuresGrid.appendChild(feature);
  }
  
  if (beach.beach_access && beach.beach_access.solid_path_to_water === "כן") {
    const feature = document.createElement('div');
    feature.className = 'flex items-center text-green-600';
    feature.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 w-4 h-4">
        <path d="M3 20h18M12 4v16M4 12h16"></path>
      </svg>
      <span>גישה למים</span>
    `;
    featuresGrid.appendChild(feature);
  }
  
  if (beach.special_wheelchairs && beach.special_wheelchairs.water_accessible_wheelchairs === "כן") {
    const feature = document.createElement('div');
    feature.className = 'flex items-center text-green-600';
    feature.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 w-4 h-4">
        <circle cx="12" cy="8" r="5"></circle>
        <path d="M12 13v8M8 21h8"></path>
      </svg>
      <span>כסאות גלגלים</span>
    `;
    featuresGrid.appendChild(feature);
  }
  
  if (beach.accessible_restrooms && beach.accessible_restrooms.disabled_restrooms === "כן") {
    const feature = document.createElement('div');
    feature.className = 'flex items-center text-green-600';
    feature.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 w-4 h-4">
        <path d="M6 8h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"></path>
        <path d="M4 6h16M12 4v4"></path>
      </svg>
      <span>שירותי נכים</span>
    `;
    featuresGrid.appendChild(feature);
  }
  
  // Create phone info if available
  if (beach.phone_number) {
    const phone = document.createElement('div');
    phone.className = 'mt-4 flex items-center text-sm text-primary';
    phone.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 w-4 h-4">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
      <span dir="ltr">${beach.phone_number}</span>
    `;
    content.appendChild(phone);
  }
  
  // Add all elements to content container
  content.appendChild(title);
  content.appendChild(location);
  content.appendChild(featuresGrid);
  
  // Add all elements to card
  card.appendChild(imageContainer);
  card.appendChild(ratingBadge);
  card.appendChild(content);
  
  // Make the entire card clickable
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    window.location.hash = `#/beach/${encodeURIComponent(beach.beach_name)}`;
  });
  
  return card;
}

// Get score color based on rating
function getScoreColor(score) {
  if (score >= 8) return 'bg-green-500';
  if (score >= 6) return 'bg-yellow-500';
  return 'bg-red-500';
}
