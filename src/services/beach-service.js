
import { fallbackBeaches } from '../data/fallback-beaches.js';

// Fetch all beaches
export async function fetchBeaches() {
  try {
    // Use the fetch API with text parsing first
    const response = await fetch('./data/beaches.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Get the response as text first
    const textData = await response.text();
    
    // Then manually parse it as JSON
    const data = JSON.parse(textData);
    return data;
  } catch (error) {
    console.error('Error fetching beaches:', error);
    console.log('Using fallback beach data...');
    return fallbackBeaches;
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
