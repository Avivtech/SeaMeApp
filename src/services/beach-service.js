
// Fetch all beaches
export async function fetchBeaches() {
  try {
    const response = await fetch('./data/beaches.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching beaches:', error);
    return [];
  }
}

// Fetch a single beach by name
export async function fetchBeachByName(beachName) {
  try {
    const beaches = await fetchBeaches();
    return beaches.find(beach => beach.beach_name === beachName) || null;
  } catch (error) {
    console.error('Error fetching beach by name:', error);
    return null;
  }
}

// Filter beaches by criteria
export async function filterBeaches(filters = {}) {
  try {
    const beaches = await fetchBeaches();
    
    if (Object.keys(filters).length === 0) {
      return beaches;
    }
    
    return beaches.filter(beach => {
      // Implement filtering logic here based on the filters object
      // Example:
      // if (filters.region && beach.region !== filters.region) return false;
      // if (filters.accessibleParking && beach.accessible_parking.disabled_parking !== 'כן') return false;
      
      return true; // By default, include all beaches
    });
  } catch (error) {
    console.error('Error filtering beaches:', error);
    return [];
  }
}
