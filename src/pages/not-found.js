
// Load not found page
export function loadNotFoundPage(container) {
  // Create not found container
  const notFoundContainer = document.createElement('div');
  notFoundContainer.className = 'container mx-auto px-4 py-16 text-center';
  
  // Create error code
  const errorCode = document.createElement('div');
  errorCode.className = 'text-6xl md:text-8xl font-bold text-primary mb-4';
  errorCode.textContent = '404';
  
  // Create title
  const title = document.createElement('h1');
  title.className = 'text-3xl md:text-4xl font-bold mb-4';
  title.textContent = 'הדף לא נמצא';
  
  // Create description
  const description = document.createElement('p');
  description.className = 'text-xl text-gray-600 mb-8 max-w-md mx-auto';
  description.textContent = 'העמוד שחיפשת אינו קיים או שהוסר';
  
  // Create back button
  const backButton = document.createElement('a');
  backButton.href = '#/';
  backButton.className = 'bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 inline-block transition-colors';
  backButton.textContent = 'חזרה לעמוד הראשי';
  
  // Append elements to container
  notFoundContainer.appendChild(errorCode);
  notFoundContainer.appendChild(title);
  notFoundContainer.appendChild(description);
  notFoundContainer.appendChild(backButton);
  
  // Append to main container
  container.appendChild(notFoundContainer);
}
