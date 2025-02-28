
import { fallbackBeaches } from '../data/fallback-beaches.js';

// Fetch all beaches
export async function fetchBeaches() {
  try {
    // Try different paths to find the beaches.json file
    const paths = [
      './data/beaches.json',
      '../data/beaches.json',
      '/data/beaches.json',
      'data/beaches.json',
      './public/data/beaches.json'
    ];
    
    let response = null;
    let foundPath = '';
    
    // Try each path until we find one that works
    for (const path of paths) {
      try {
        console.log(`Trying to fetch beaches from: ${path}`);
        const tempResponse = await fetch(path);
        if (tempResponse.ok) {
          response = tempResponse;
          foundPath = path;
          console.log(`Successfully found beaches at: ${path}`);
          break;
        }
      } catch (pathError) {
        console.log(`Failed to fetch from ${path}: ${pathError.message}`);
      }
    }
    
    if (!response || !response.ok) {
      throw new Error('Could not fetch beaches from any known path');
    }
    
    // Get the response as text first
    const textData = await response.text();
    console.log(`Got text data from ${foundPath}, length: ${textData.length}`);
    
    // Check if the text starts with HTML
    if (textData.trim().startsWith('<!DOCTYPE html>') || textData.trim().startsWith('<html>')) {
      console.error('Received HTML instead of JSON');
      return fallbackBeaches;
    }
    
    // Then manually parse it as JSON
    try {
      const data = JSON.parse(textData);
      console.log(`Successfully parsed JSON data, found ${data.length} beaches`);
      return data;
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return fallbackBeaches;
    }
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
