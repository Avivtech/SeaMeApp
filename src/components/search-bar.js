
// Create search bar component
export function createSearchBar(onSearch, placeholder = 'נתחיל בחיפוש...') {
  const form = document.createElement('form');
  form.className = 'relative w-full max-w-3xl mx-auto scale-in';
  
  const container = document.createElement('div');
  container.className = 'relative flex w-full max-w-3xl items-center';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = placeholder;
  input.className = 'pr-10 pl-12 py-6 h-14 rounded-full border-2 border-gray-200 focus:border-primary focus:outline-none text-base transition-all duration-200 ease-in-out shadow-sm w-full';
  input.dir = 'rtl';
  
  const searchIcon = document.createElement('div');
  searchIcon.className = 'absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400';
  searchIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  `;
  
  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.className = 'absolute left-1 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center bg-primary text-white hover:bg-primary/90 transition-all duration-200';
  searchButton.setAttribute('aria-label', 'Search');
  searchButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
  `;
  
  // Add event listener for form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSearch(input.value);
  });
  
  // Append elements to container
  container.appendChild(input);
  container.appendChild(searchIcon);
  container.appendChild(searchButton);
  form.appendChild(container);
  
  return form;
}
