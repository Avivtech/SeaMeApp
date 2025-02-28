
// Create filter panel component
export function createFilterPanel({ title, onFilterChange, onReset, onApply, className = '' }) {
  // Create the main container
  const container = document.createElement('div');
  container.className = `bg-white rounded-3xl shadow-sm border border-gray-200 p-6 ${className}`;
  
  // Create title
  const titleElement = document.createElement('h2');
  titleElement.className = 'text-2xl font-bold mb-6 text-center';
  titleElement.textContent = title;
  
  // Define filter categories with icons
  const categories = [
    {
      id: 'mobility',
      title: 'ניידות',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="m17 16-2-4-3 1H8l2.5 5"></path>
          <circle cx="6" cy="18" r="2"></circle>
          <path d="M20 6.4a9 9 0 0 1 1 4.6"></path>
          <path d="M6 12v-1.5A1.5 1.5 0 0 1 7.5 9h5"></path>
          <path d="M7 7a5 5 0 0 0-4.2 3.5"></path>
        </svg>
      `,
      options: [
        { id: 'wheelchair', label: 'כסא גלגלים', isActive: false },
        { id: 'walking', label: 'הליכה', isActive: false },
        { id: 'crutches', label: 'קביים', isActive: false },
        { id: 'visual', label: 'לקויות ראייה', isActive: false }
      ]
    },
    {
      id: 'facilities',
      title: 'מתקנים',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 8h20M2 16h20"></path>
          <path d="M3 8v8h18V8z"></path>
        </svg>
      `,
      options: [
        { id: 'restrooms', label: 'שירותים נגישים', isActive: false },
        { id: 'showers', label: 'מקלחות נגישות', isActive: false },
        { id: 'changing', label: 'תאי הלבשה', isActive: false },
        { id: 'parking', label: 'חניית נכים', isActive: false }
      ]
    },
    {
      id: 'beach',
      title: 'חוף',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16.5 20.5L19 18l2 2"></path>
          <path d="M19.555 6.905C18.512 5.123 16.753 4 14.799 4c-3.725 0-6.751 3.026-6.751 6.751 0 1.954 1.123 3.713 2.905 4.756l-1.764 1.753C7.616 17.954 6 16.303 6 14.5 6 11.462 8.538 9 11.5 9c1.803 0 3.454 1.616 3.76 3.189l1.765-1.765"></path>
          <path d="M6 20.5l4-4"></path>
          <path d="M2 21v-8h8"></path>
        </svg>
      `,
      options: [
        { id: 'beach_path', label: 'גישה לחוף', isActive: false },
        { id: 'beach_chair', label: 'כסאות חוף מיוחדים', isActive: false },
        { id: 'water_access', label: 'גישה למים', isActive: false },
        { id: 'lifeguard', label: 'מציל בחוף', isActive: false }
      ]
    },
    {
      id: 'region',
      title: 'אזור',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      `,
      options: [
        { id: 'north', label: 'צפון', isActive: false },
        { id: 'center', label: 'מרכז', isActive: false },
        { id: 'tel_aviv', label: 'תל אביב', isActive: false },
        { id: 'south', label: 'דרום', isActive: false }
      ]
    }
  ];
  
  let activeCategory = null;
  
  // Create category buttons grid
  const categoryGrid = document.createElement('div');
  categoryGrid.className = 'grid grid-cols-2 md:grid-cols-3 gap-4 mb-8';
  
  // Create options container (initially hidden)
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'mt-6 hidden';
  optionsContainer.setAttribute('id', 'filter-options');
  
  // Create category filter items
  categories.forEach(category => {
    const filterItem = document.createElement('button');
    filterItem.className = 'filter-item flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-200 hover:bg-gray-100';
    filterItem.setAttribute('aria-pressed', 'false');
    filterItem.innerHTML = `
      <div class="text-primary w-6 h-6 flex items-center justify-center">
        ${category.icon}
      </div>
      <span class="text-sm font-medium">${category.title}</span>
    `;
    
    // Add event listener
    filterItem.addEventListener('click', () => {
      // Remove active class from all items
      document.querySelectorAll('.filter-item').forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      
      if (activeCategory === category.id) {
        // Hide options if clicking the same category
        optionsContainer.classList.add('hidden');
        activeCategory = null;
      } else {
        // Show options for the selected category
        filterItem.classList.add('active');
        filterItem.setAttribute('aria-pressed', 'true');
        activeCategory = category.id;
        
        // Update options container
        updateOptionsContainer(category);
        optionsContainer.classList.remove('hidden');
      }
    });
    
    categoryGrid.appendChild(filterItem);
  });
  
  // Create action buttons
  const actionButtons = document.createElement('div');
  actionButtons.className = 'grid grid-cols-2 gap-4 mt-8';
  
  const resetButton = document.createElement('button');
  resetButton.className = 'py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors';
  resetButton.textContent = 'ניקוי';
  resetButton.addEventListener('click', () => {
    // Reset all options
    categories.forEach(category => {
      category.options.forEach(option => {
        option.isActive = false;
      });
    });
    
    // Update UI if options are visible
    if (activeCategory) {
      const category = categories.find(cat => cat.id === activeCategory);
      if (category) {
        updateOptionsContainer(category);
      }
    }
    
    // Call onReset callback
    if (onReset) onReset();
  });
  
  const applyButton = document.createElement('button');
  applyButton.className = 'py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors';
  applyButton.textContent = 'חיפוש';
  applyButton.addEventListener('click', () => {
    // Call onApply callback
    if (onApply) onApply();
  });
  
  actionButtons.appendChild(resetButton);
  actionButtons.appendChild(applyButton);
  
  // Function to update options container
  function updateOptionsContainer(category) {
    optionsContainer.innerHTML = '';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'flex items-center justify-between mb-4';
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'font-medium';
    categoryTitle.textContent = category.title;
    
    const closeButton = document.createElement('button');
    closeButton.className = 'h-8 px-2 text-gray-500 hover:text-gray-700';
    closeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
        <path d="M18 6 6 18M6 6l12 12"></path>
      </svg>
      סגור
    `;
    closeButton.addEventListener('click', () => {
      optionsContainer.classList.add('hidden');
      
      // Remove active class from category buttons
      document.querySelectorAll('.filter-item').forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      
      activeCategory = null;
    });
    
    header.appendChild(categoryTitle);
    header.appendChild(closeButton);
    
    // Create options grid
    const optionsGrid = document.createElement('div');
    optionsGrid.className = 'grid grid-cols-2 gap-3';
    
    // Add option items
    category.options.forEach(option => {
      const optionItem = document.createElement('div');
      optionItem.className = `border rounded-lg p-3 cursor-pointer transition-all ${
        option.isActive ? 'bg-primary/10 border-primary' : 'border-gray-200 hover:border-gray-300'
      }`;
      
      const optionContent = document.createElement('div');
      optionContent.className = 'flex items-center';
      
      const radioButton = document.createElement('div');
      radioButton.className = `w-4 h-4 rounded-full mr-2 border ${
        option.isActive ? 'bg-primary border-primary' : 'border-gray-300'
      }`;
      
      if (option.isActive) {
        radioButton.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" class="w-4 h-4 text-white">
            <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        `;
      }
      
      const optionLabel = document.createElement('span');
      optionLabel.className = 'text-sm';
      optionLabel.textContent = option.label;
      
      optionContent.appendChild(radioButton);
      optionContent.appendChild(optionLabel);
      optionItem.appendChild(optionContent);
      
      // Add event listener
      optionItem.addEventListener('click', () => {
        option.isActive = !option.isActive;
        
        // Update UI
        updateOptionsContainer(category);
        
        // Call onFilterChange callback
        if (onFilterChange) onFilterChange(category.id, option.id);
      });
      
      optionsGrid.appendChild(optionItem);
    });
    
    // Append elements to options container
    optionsContainer.appendChild(header);
    optionsContainer.appendChild(optionsGrid);
  }
  
  // Append elements to container
  container.appendChild(titleElement);
  container.appendChild(categoryGrid);
  container.appendChild(optionsContainer);
  container.appendChild(actionButtons);
  
  // Add a simple style for active items
  const style = document.createElement('style');
  style.textContent = `
    .filter-item.active {
      background-color: rgba(59, 130, 246, 0.1);
      border: 1px solid rgb(59, 130, 246);
    }
  `;
  document.head.appendChild(style);
  
  return container;
}
