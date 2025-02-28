
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Beach } from '@/types/beaches';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Phone,
  Accessibility,
  Check,
  X,
  ArrowRight,
  Coffee,
  Droplets,
  Umbrella,
  Sun,
  Car
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const BeachDetail = () => {
  const { beachName } = useParams<{ beachName: string }>();
  const [beach, setBeach] = useState<Beach | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBeachDetail = async () => {
      try {
        const response = await fetch('/data/beaches.json');
        if (!response.ok) {
          throw new Error('Failed to fetch beaches data');
        }
        const beaches = await response.json();
        
        // Find the beach with the matching name
        const foundBeach = beaches.find((b: Beach) => 
          b.beach_name === decodeURIComponent(beachName || '')
        );
        
        if (foundBeach) {
          setBeach(foundBeach);
        } else {
          toast({
            title: 'חוף לא נמצא',
            description: 'לא נמצא חוף בשם זה',
            variant: 'destructive'
          });
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching beach details:', error);
        toast({
          title: 'שגיאה בטעינת הנתונים',
          description: 'אירעה שגיאה בטעינת פרטי החוף. אנא נסו שוב מאוחר יותר.',
          variant: 'destructive'
        });
        setIsLoading(false);
      }
    };

    fetchBeachDetail();
  }, [beachName, toast]);

  const AccessibilityItem = ({ 
    title, 
    value, 
    icon 
  }: { 
    title: string; 
    value: string;
    icon: React.ReactNode;
  }) => (
    <div className="flex items-center p-4 border rounded-lg bg-white shadow-sm">
      <div className="mr-4 text-primary">{icon}</div>
      <div>
        <h3 className="font-medium text-sm">{title}</h3>
        <div className="flex items-center mt-1">
          {value === 'כן' ? (
            <span className="text-green-600 flex items-center">
              <Check className="w-4 h-4 mr-1" />
              זמין
            </span>
          ) : value === 'לא' ? (
            <span className="text-red-500 flex items-center">
              <X className="w-4 h-4 mr-1" />
              לא זמין
            </span>
          ) : value === 'חלקית' ? (
            <span className="text-yellow-500 flex items-center">
              <span className="w-4 h-4 mr-1">⚠️</span>
              חלקי
            </span>
          ) : (
            <span className="text-gray-500">אין מידע</span>
          )}
        </div>
      </div>
    </div>
  );

  // Determine score color
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-green-500';
    if (score >= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded-lg w-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!beach) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto p-4 flex items-center justify-center">
          <div className="text-center p-8 bg-gray-50 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-3">חוף לא נמצא</h2>
            <p className="text-gray-600 mb-6">
              לא נמצא חוף בשם "{decodeURIComponent(beachName || '')}".
            </p>
            <Link to="/">
              <Button>חזרה לדף הבית</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Beach Hero Section */}
        <section className="relative bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-4">
              <Link to="/" className="text-primary flex items-center hover:underline">
                <ArrowRight className="h-4 w-4 ml-1" />
                חזרה
              </Link>
            </div>
            
            <div className="mb-6 slide-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{beach.beach_name}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 ml-1" />
                <span>{beach.address || beach.region}</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden scale-in">
              <div className="relative h-64 bg-gray-200">
                <img
                  src="/public/lovable-uploads/fbfbe9f4-95ad-4e62-8d19-388243e9e1fc.png"
                  alt={beach.beach_name}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-4 left-4">
                  <div className={cn(
                    "text-white font-semibold rounded-full w-14 h-14 flex items-center justify-center text-xl",
                    getScoreColor(beach.rating)
                  )}>
                    {beach.rating}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  {beach.phone_number && (
                    <div className="flex items-center text-primary">
                      <Phone className="h-5 w-5 ml-1" />
                      <span dir="ltr">{beach.phone_number}</span>
                    </div>
                  )}
                </div>
                
                <Separator className="my-6" />
                
                <h2 className="text-xl font-bold mb-4">אמצעי נגישות</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <AccessibilityItem 
                    title="חניית נכים" 
                    value={beach.accessible_parking.disabled_parking}
                    icon={<Car className="h-5 w-5" />} 
                  />
                  <AccessibilityItem 
                    title="גישה מסודרת למים" 
                    value={beach.beach_access.solid_path_to_water}
                    icon={<Droplets className="h-5 w-5" />} 
                  />
                  <AccessibilityItem 
                    title="שירותי נכים" 
                    value={beach.accessible_restrooms.disabled_restrooms}
                    icon={<Accessibility className="h-5 w-5" />} 
                  />
                  <AccessibilityItem 
                    title="מקלחות נגישות" 
                    value={beach.accessible_showers || 'אין מידע'}
                    icon={<Droplets className="h-5 w-5" />} 
                  />
                  <AccessibilityItem 
                    title="מלתחות נגישות" 
                    value={beach.accessible_changing_rooms}
                    icon={<Umbrella className="h-5 w-5" />} 
                  />
                  <AccessibilityItem 
                    title="סככות צל נגישות" 
                    value={beach.shade_shelter.accessible_shelter}
                    icon={<Sun className="h-5 w-5" />} 
                  />
                  <AccessibilityItem 
                    title="כסאות גלגלים למים" 
                    value={beach.special_wheelchairs.water_accessible_wheelchairs}
                    icon={<Accessibility className="h-5 w-5" />} 
                  />
                  <AccessibilityItem 
                    title="קפה/מסעדה" 
                    value={beach.cafe_restaurant.exists}
                    icon={<Coffee className="h-5 w-5" />} 
                  />
                </div>
                
                <Separator className="my-6" />
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">שעות פעילות</h3>
                  <p className="text-gray-600">
                    {beach.beach_season || 'עונת הרחצה: בהתאם להנחיות משרד הפנים'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BeachDetail;
