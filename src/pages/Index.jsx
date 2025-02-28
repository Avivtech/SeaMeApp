
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SearchBar from '@/components/SearchBar.tsx';
import FilterItem from '@/components/FilterItem.jsx';
import BeachCard from '@/components/BeachCard.tsx';
import FilterPanel from '@/components/FilterPanel.jsx';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, 
  Accessibility, 
  Coffee, 
  Map, 
  Sparkles,
  X
} from 'lucide-react';

const Index = () => {
  const [beaches, setBeaches] = useState([]);
  const [filteredBeaches, setFilteredBeaches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [searchParams, setSearchParams] = useState({
    query: '',
    region: '',
    filters: {}
  });

  const { toast } = useToast();

  // Filter categories with their options - removing options that don't match JSON properties
  const [filterCategories, setFilterCategories] = useState([
    {
      id: 'accessibility',
      title: 'נגישות לחוף',
      icon: <Accessibility className="h-5 w-5" />,
      options: [
        { id: 'disabled_parking', label: 'חניית נכים', isActive: false },
        { id: 'solid_path_to_water', label: 'שביל מוצק למים', isActive: false },
        { id: 'accessible_restrooms', label: 'שירותים נגישים', isActive: false },
        { id: 'accessible_changing_rooms', label: 'חדרי הלבשה נגישים', isActive: false }
      ]
    },
    {
      id: 'services',
      title: 'שירותים',
      icon: <Coffee className="h-5 w-5" />,
      options: [
        { id: 'cafe_restaurant', label: 'מסעדה/קפה', isActive: false },
        { id: 'accessible_shelter', label: 'סככות צל נגישות', isActive: false },
        { id: 'water_accessible_wheelchairs', label: 'כסאות גלגלים למים', isActive: false }
      ]
    },
    {
      id: 'region',
      title: 'אזור',
      icon: <Map className="h-5 w-5" />,
      options: [
        { id: 'כינרת', label: 'כינרת', isActive: false }
        // Removed ים תיכון and אילת since they don't exist in the current dataset
      ]
    }
    // Removed the beach_features category as its options don't match JSON properties
  ]);

  // Fetch beaches data from JSON file
  useEffect(() => {
    const fetchBeaches = async () => {
      try {
        const response = await fetch('/data/beaches.json');
        if (!response.ok) {
          throw new Error('Failed to fetch beaches data');
        }
        const data = await response.json();
        
        // Convert "כן" values to "true" and "לא" values to "false"
        const processedData = data.map(beach => {
          return {
            ...beach,
            accessible_parking: {
              ...beach.accessible_parking,
              disabled_parking: beach.accessible_parking?.disabled_parking === 'כן' ? 'true' : beach.accessible_parking?.disabled_parking
            },
            beach_access: {
              ...beach.beach_access,
              solid_path_to_water: beach.beach_access?.solid_path_to_water === 'כן' ? 'true' : beach.beach_access?.solid_path_to_water,
              obstacle_free_access: beach.beach_access?.obstacle_free_access === 'כן' ? 'true' : beach.beach_access?.obstacle_free_access
            },
            shade_shelter: {
              ...beach.shade_shelter,
              accessible_shelter: beach.shade_shelter?.accessible_shelter === 'כן' ? 'true' : beach.shade_shelter?.accessible_shelter
            },
            special_wheelchairs: {
              ...beach.special_wheelchairs,
              water_accessible_wheelchairs: beach.special_wheelchairs?.water_accessible_wheelchairs === 'כן' ? 'true' : beach.special_wheelchairs?.water_accessible_wheelchairs
            },
            accessible_restrooms: {
              ...beach.accessible_restrooms,
              disabled_restrooms: beach.accessible_restrooms?.disabled_restrooms === 'כן' ? 'true' : beach.accessible_restrooms?.disabled_restrooms
            },
            cafe_restaurant: {
              ...beach.cafe_restaurant,
              exists: beach.cafe_restaurant?.exists === 'כן' ? 'true' : beach.cafe_restaurant?.exists,
              wheelchair_accessible: beach.cafe_restaurant?.wheelchair_accessible === 'כן' ? 'true' : beach.cafe_restaurant?.wheelchair_accessible
            },
            accessible_changing_rooms: beach.accessible_changing_rooms === 'כן' ? 'true' : beach.accessible_changing_rooms
          };
        });
        
        setBeaches(processedData);
        setFilteredBeaches(processedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching beaches:', error);
        toast({
          title: 'שגיאה בטעינת הנתונים',
          description: 'אירעה שגיאה בטעינת נתוני החופים. אנא נסו שוב מאוחר יותר.',
          variant: 'destructive'
        });
        setIsLoading(false);
      }
    };

    fetchBeaches();
  }, [toast]);

  // Apply filters to beaches using the current state
  const applyFilters = () => {
    setShowFilterPanel(false);
    
    let results = [...beaches];
    console.log("Starting filter with", results.length, "beaches");
    console.log("Search query:", searchParams.query);
    
    // Apply text search if any
    if (searchParams.query && searchParams.query.trim() !== '') {
      const searchTerms = searchParams.query.toLowerCase().trim();
      console.log("Searching for:", searchTerms);
      
      results = results.filter(beach => {
        // Convert each property value to string safely
        const getStringValue = (value) => {
          if (value === undefined || value === null) return '';
          if (typeof value === 'object') return JSON.stringify(value);
          return String(value);
        };

        // Basic properties
        const basicProps = [
          beach.beach_name,
          beach.region,
          beach.address,
          beach.phone_number
        ].filter(Boolean).map(v => getStringValue(v).toLowerCase()).join(' ');
        
        // Nested properties
        const nestedProps = [
          beach.accessible_parking?.disabled_parking,
          beach.beach_access?.solid_path_to_water,
          beach.shade_shelter?.accessible_shelter,
          beach.special_wheelchairs?.water_accessible_wheelchairs,
          beach.accessible_restrooms?.disabled_restrooms,
          beach.cafe_restaurant?.exists,
          beach.blind_guidance?.blind_and_visually_impaired_assistance,
          beach.breakwater,
          beach.accessible_changing_rooms
        ].filter(Boolean).map(v => getStringValue(v).toLowerCase()).join(' ');
        
        // Additional accessibility features
        const accessibilityProps = beach.additional_accessibility ? [
          beach.additional_accessibility.quiet_area,
          beach.additional_accessibility.hearing_impaired_assistance
        ].filter(Boolean).map(v => getStringValue(v).toLowerCase()).join(' ') : '';
        
        // Combine all searchable text
        const searchableText = `${basicProps} ${nestedProps} ${accessibilityProps}`;
        
        const result = searchableText.includes(searchTerms);
        return result;
      });
      
      console.log("After search filter:", results.length, "beaches found");
    }
    
    // Apply region filter if selected
    if (searchParams.region) {
      results = results.filter(beach => beach.region === searchParams.region);
      console.log("After region filter:", results.length, "beaches found");
    }
    
    // Apply accessibility filters
    const activeFilters = Object.entries(searchParams.filters).filter(([_, isActive]) => isActive);
    
    if (activeFilters.length > 0) {
      console.log("Active filters:", activeFilters);
      
      results = results.filter(beach => {
        return activeFilters.every(([filterId, _]) => {
          switch (filterId) {
            case 'disabled_parking':
              return beach.accessible_parking?.disabled_parking === 'true' || beach.accessible_parking?.disabled_parking === 'כן';
            case 'solid_path_to_water':
              return beach.beach_access?.solid_path_to_water === 'true' || beach.beach_access?.solid_path_to_water === 'כן';
            case 'accessible_restrooms':
              return beach.accessible_restrooms?.disabled_restrooms === 'true' || beach.accessible_restrooms?.disabled_restrooms === 'כן';
            case 'accessible_changing_rooms':
              return beach.accessible_changing_rooms === 'true' || beach.accessible_changing_rooms === 'כן';
            case 'cafe_restaurant':
              return beach.cafe_restaurant?.exists === 'true' || beach.cafe_restaurant?.exists === 'כן';
            case 'accessible_shelter':
              return beach.shade_shelter?.accessible_shelter === 'true' || beach.shade_shelter?.accessible_shelter === 'כן';
            case 'water_accessible_wheelchairs':
              return beach.special_wheelchairs?.water_accessible_wheelchairs === 'true' || beach.special_wheelchairs?.water_accessible_wheelchairs === 'כן';
            case 'כינרת':
              return beach.region === filterId;
            default:
              return true;
          }
        });
      });
      
      console.log("After accessibility filters:", results.length, "beaches found");
    }
    
    setFilteredBeaches(results);
    
    // Show toast with results count
    toast({
      title: `נמצאו ${results.length} חופים`,
      description: results.length > 0 
        ? 'המידע מסונן לפי הבחירות שלך'
        : 'לא נמצאו חופים תואמים לסינון. נסה להרחיב את החיפוש.',
      variant: results.length > 0 ? 'default' : 'destructive'
    });
  };

  // Handle search query changes
  const handleSearch = (query) => {
    console.log("Search query received:", query);
    // Update searchParams and then apply filters in one step
    setSearchParams(prev => {
      // Create the updated search parameters
      const updatedParams = { ...prev, query };
      
      // After state is set, use the updated value directly for filtering
      setTimeout(() => {
        // Apply filters with the new search parameters
        let results = [...beaches];
        
        if (query && query.trim() !== '') {
          const searchTerms = query.toLowerCase().trim();
          
          results = results.filter(beach => {
            // Convert each property value to string safely
            const getStringValue = (value) => {
              if (value === undefined || value === null) return '';
              if (typeof value === 'object') return JSON.stringify(value);
              return String(value);
            };

            // Basic properties
            const basicProps = [
              beach.beach_name,
              beach.region,
              beach.address,
              beach.phone_number
            ].filter(Boolean).map(v => getStringValue(v).toLowerCase()).join(' ');
            
            // Nested properties
            const nestedProps = [
              beach.accessible_parking?.disabled_parking,
              beach.beach_access?.solid_path_to_water,
              beach.shade_shelter?.accessible_shelter,
              beach.special_wheelchairs?.water_accessible_wheelchairs,
              beach.accessible_restrooms?.disabled_restrooms,
              beach.cafe_restaurant?.exists,
              beach.blind_guidance?.blind_and_visually_impaired_assistance,
              beach.breakwater,
              beach.accessible_changing_rooms
            ].filter(Boolean).map(v => getStringValue(v).toLowerCase()).join(' ');
            
            // Additional accessibility features
            const accessibilityProps = beach.additional_accessibility ? [
              beach.additional_accessibility.quiet_area,
              beach.additional_accessibility.hearing_impaired_assistance
            ].filter(Boolean).map(v => getStringValue(v).toLowerCase()).join(' ') : '';
            
            // Combine all searchable text
            const searchableText = `${basicProps} ${nestedProps} ${accessibilityProps}`;
            
            return searchableText.includes(searchTerms);
          });
        }
        
        // Apply other filters from current state
        if (updatedParams.region) {
          results = results.filter(beach => beach.region === updatedParams.region);
        }
        
        // Apply accessibility filters
        const activeFilters = Object.entries(updatedParams.filters).filter(([_, isActive]) => isActive);
        
        if (activeFilters.length > 0) {
          results = results.filter(beach => {
            return activeFilters.every(([filterId, _]) => {
              switch (filterId) {
                case 'disabled_parking':
                  return beach.accessible_parking?.disabled_parking === 'true' || beach.accessible_parking?.disabled_parking === 'כן';
                case 'solid_path_to_water':
                  return beach.beach_access?.solid_path_to_water === 'true' || beach.beach_access?.solid_path_to_water === 'כן';
                case 'accessible_restrooms':
                  return beach.accessible_restrooms?.disabled_restrooms === 'true' || beach.accessible_restrooms?.disabled_restrooms === 'כן';
                case 'accessible_changing_rooms':
                  return beach.accessible_changing_rooms === 'true' || beach.accessible_changing_rooms === 'כן';
                case 'cafe_restaurant':
                  return beach.cafe_restaurant?.exists === 'true' || beach.cafe_restaurant?.exists === 'כן';
                case 'accessible_shelter':
                  return beach.shade_shelter?.accessible_shelter === 'true' || beach.shade_shelter?.accessible_shelter === 'כן';
                case 'water_accessible_wheelchairs':
                  return beach.special_wheelchairs?.water_accessible_wheelchairs === 'true' || beach.special_wheelchairs?.water_accessible_wheelchairs === 'כן';
                case 'כינרת':
                  return beach.region === filterId;
                default:
                  return true;
              }
            });
          });
        }
        
        setFilteredBeaches(results);
        
        // Show toast with results count
        toast({
          title: `נמצאו ${results.length} חופים`,
          description: results.length > 0 
            ? 'המידע מסונן לפי הבחירות שלך'
            : 'לא נמצאו חופים תואמים לסינון. נסה להרחיב את החיפוש.',
          variant: results.length > 0 ? 'default' : 'destructive'
        });
      }, 0);
      
      return updatedParams;
    });
  };

  // Handle filter changes
  const handleFilterChange = (categoryId, optionId) => {
    // Update the filter categories UI state
    setFilterCategories(prevCategories => {
      return prevCategories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            options: category.options.map(option => {
              if (option.id === optionId) {
                return { ...option, isActive: !option.isActive };
              }
              return option;
            })
          };
        }
        return category;
      });
    });
    
    // Update search params for filtering
    setSearchParams(prev => {
      const newFilters = { ...prev.filters };
      
      // Handle region filter specially
      if (categoryId === 'region') {
        newFilters[optionId] = !newFilters[optionId];
      } else {
        // Handle all other filters
        newFilters[optionId] = !newFilters[optionId];
      }
      
      return { ...prev, filters: newFilters };
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilterCategories(prevCategories => {
      return prevCategories.map(category => ({
        ...category,
        options: category.options.map(option => ({
          ...option,
          isActive: false
        }))
      }));
    });
    
    setSearchParams({
      query: '',
      region: '',
      filters: {}
    });
    
    setFilteredBeaches(beaches);
    setShowFilterPanel(false);
    
    toast({
      title: 'הסינון אופס',
      description: 'כל הסינונים נוקו ומוצגים כל החופים',
    });
  };

  // Count active filters
  const activeFiltersCount = filterCategories.reduce(
    (count, category) => count + category.options.filter(option => option.isActive).length,
    0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/90 to-primary/70 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 slide-in">SeaMe</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 slide-in">שירות מידע נגיש על חופי ישראל</p>
            
            <div className="max-w-3xl mx-auto">
              <SearchBar 
                onSearch={handleSearch} 
                value={searchParams.query} 
              />
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <FilterItem
                icon={<Accessibility className="h-5 w-5" />}
                label="גישה עם כיסא"
                onClick={() => {
                  handleFilterChange('accessibility', 'solid_path_to_water');
                  applyFilters();
                }}
              />
              <FilterItem
                icon={<Coffee className="h-5 w-5" />}
                label="שירותים"
                onClick={() => {
                  handleFilterChange('services', 'cafe_restaurant');
                  applyFilters();
                }}
              />
              <FilterItem
                icon={<Map className="h-5 w-5" />}
                label="צל"
                onClick={() => {
                  handleFilterChange('services', 'accessible_shelter');
                  applyFilters();
                }}
              />
              <FilterItem
                icon={<Search className="h-5 w-5" />}
                label="חיפוש מתקדם"
                onClick={() => setShowFilterPanel(true)}
              />
            </div>
          </div>
        </section>
        
        {/* Beaches Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                {searchParams.query || activeFiltersCount > 0 
                  ? `תוצאות (${filteredBeaches.length})` 
                  : 'חופים מומלצים'}
              </h2>
              
              {(searchParams.query || activeFiltersCount > 0) && (
                <Button 
                  variant="ghost" 
                  className="text-gray-500"
                  onClick={resetFilters}
                >
                  <X className="h-4 w-4 ml-1" />
                  נקה סינון
                </Button>
              )}
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div 
                    key={index} 
                    className="h-64 bg-gray-200 rounded-lg animate-pulse"
                  />
                ))}
              </div>
            ) : filteredBeaches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBeaches.map((beach, index) => (
                  <BeachCard 
                    key={beach.beach_name} 
                    beach={beach} 
                    className="fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold mb-3">לא נמצאו חופים</h3>
                  <p className="text-gray-600 mb-6">
                    לא נמצאו חופים התואמים את הסינון שלך. נסה להרחיב את החיפוש או לנקות את הסינונים.
                  </p>
                  <Button onClick={resetFilters}>ראה את כל החופים</Button>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* About Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">אודות SeaMe</h2>
              <p className="text-gray-700 mb-8">
                SeaMe הוא פרויקט שנועד לעזור לאנשים עם מוגבלויות לגשת למידע מדויק על נגישות חופים בישראל.
                המטרה שלנו היא לאפשר לכל אדם ליהנות מהחופים היפים של ישראל, ללא קשר למוגבלות.
              </p>
              <Button variant="outline" className="mx-auto">
                קרא עוד על הפרויקט
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Filter Panel Modal */}
      {showFilterPanel && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div 
            className="w-full max-w-lg scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <FilterPanel
              title="חיפוש מתקדם"
              categories={filterCategories}
              onFilterChange={handleFilterChange}
              onReset={resetFilters}
              onApply={applyFilters}
            />
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
