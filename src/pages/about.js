
// Load about page
export function loadAboutPage(container) {
  // Create about page container
  const aboutContainer = document.createElement('div');
  aboutContainer.className = 'container mx-auto px-4 py-12';
  
  // Create header
  const header = document.createElement('header');
  header.className = 'text-center mb-12';
  
  const title = document.createElement('h1');
  title.className = 'text-3xl md:text-4xl font-bold mb-4';
  title.textContent = 'אודות הפרויקט';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'text-xl text-gray-600 max-w-3xl mx-auto';
  subtitle.textContent = 'הכירו את הצוות והמטרה שמאחורי SeaMe';
  
  header.appendChild(title);
  header.appendChild(subtitle);
  
  // Create main content
  const mainContent = document.createElement('div');
  mainContent.className = 'grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto';
  
  // Mission section
  const missionSection = document.createElement('div');
  
  const missionTitle = document.createElement('h2');
  missionTitle.className = 'text-2xl font-bold mb-4 border-b border-primary pb-2';
  missionTitle.textContent = 'המטרה שלנו';
  
  const missionText = document.createElement('div');
  missionText.className = 'space-y-4 text-gray-700';
  missionText.innerHTML = `
    <p>פרויקט SeaMe נוצר במטרה לספק מידע נגיש על חופי ישראל לאנשים עם מוגבלויות, כדי לאפשר להם ליהנות מחוויית הים בצורה נוחה ובטוחה.</p>
    <p>אנו מאמינים שלכל אדם יש זכות ליהנות ממשאבי הטבע של מדינת ישראל, ובמיוחד מחופי הים המהווים חלק בלתי נפרד מהתרבות והפנאי הישראלי.</p>
    <p>המידע באתר מתעדכן באופן שוטף ומבוסס על נתונים רשמיים ועל משוב מהמשתמשים, כדי לוודא שהמידע מדויק ורלוונטי.</p>
  `;
  
  missionSection.appendChild(missionTitle);
  missionSection.appendChild(missionText);
  
  // Team section
  const teamSection = document.createElement('div');
  
  const teamTitle = document.createElement('h2');
  teamTitle.className = 'text-2xl font-bold mb-4 border-b border-primary pb-2';
  teamTitle.textContent = 'הצוות שלנו';
  
  const teamText = document.createElement('div');
  teamText.className = 'space-y-4 text-gray-700';
  teamText.innerHTML = `
    <p>הצוות שלנו מורכב ממפתחים, מעצבים ומומחי נגישות, הפועלים יחד כדי ליצור את המידע הטוב ביותר עבור המשתמשים שלנו.</p>
    <p>אנו עובדים בשיתוף פעולה עם ארגונים העוסקים בנגישות ועם רשויות מקומיות כדי לוודא שהמידע שלנו מעודכן ומדויק.</p>
    <p>אם ברצונך להצטרף לצוות שלנו או לתרום לפרויקט, אנא צור איתנו קשר באמצעות טופס יצירת הקשר.</p>
  `;
  
  teamSection.appendChild(teamTitle);
  teamSection.appendChild(teamText);
  
  // Add sections to main content
  mainContent.appendChild(missionSection);
  mainContent.appendChild(teamSection);
  
  // Call to action section
  const ctaSection = document.createElement('div');
  ctaSection.className = 'text-center mt-16 p-8 bg-blue-50 rounded-xl max-w-3xl mx-auto';
  
  const ctaTitle = document.createElement('h2');
  ctaTitle.className = 'text-2xl font-bold mb-4';
  ctaTitle.textContent = 'עזרו לנו להשתפר';
  
  const ctaText = document.createElement('p');
  ctaText.className = 'mb-6 text-gray-700';
  ctaText.textContent = 'המשוב שלכם חשוב לנו. אם יש לכם הצעות לשיפור או מידע חדש על חופים, נשמח לשמוע מכם';
  
  const ctaButton = document.createElement('a');
  ctaButton.href = '#/contact';
  ctaButton.className = 'bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 inline-block transition-colors';
  ctaButton.textContent = 'צור קשר';
  
  ctaSection.appendChild(ctaTitle);
  ctaSection.appendChild(ctaText);
  ctaSection.appendChild(ctaButton);
  
  // Append all sections to container
  aboutContainer.appendChild(header);
  aboutContainer.appendChild(mainContent);
  aboutContainer.appendChild(ctaSection);
  
  // Append to main container
  container.appendChild(aboutContainer);
}
