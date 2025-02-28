
import React, { useState } from 'react';
import { Beach } from '@/types/beaches';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Phone, MapPin, Accessibility } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BeachCardProps {
  beach: Beach;
  className?: string;
  style?: React.CSSProperties;
}

const BeachCard: React.FC<BeachCardProps> = ({ beach, className, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Determine accessibility score color
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-green-500';
    if (score >= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  // Generate a placeholder color based on beach name
  const generatePlaceholderColor = (name: string) => {
    const colors = [
      'bg-blue-100', 'bg-green-100', 'bg-purple-100', 
      'bg-yellow-100', 'bg-pink-100', 'bg-indigo-100'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Try multiple image sources
  const tryImages = [
    `https://avivtech.github.io/lovable-uploads/${beach.beach_name.replace(/\s/g, '-')}.jpg`,
    `https://avivtech.github.io/lovable-uploads/${beach.beach_name.replace(/\s/g, '-')}.png`,
    `https://avivtech.github.io/lovable-uploads/${beach.beach_name.replace(/\s/g, '_')}.jpg`,
    `https://avivtech.github.io/lovable-uploads/${beach.beach_name.replace(/\s/g, '_')}.png`,
    `https://avivtech.github.io/lovable-uploads/beach-${beach.beach_name.replace(/\s/g, '-')}.jpg`,
    `https://avivtech.github.io/lovable-uploads/beach-${beach.beach_name.replace(/\s/g, '-')}.png`,
    "https://avivtech.github.io/lovable-uploads/beach-generic.jpg",
    "https://avivtech.github.io/lovable-uploads/beach-generic.png",
    "https://avivtech.github.io/lovable-uploads/fbfbe9f4-95ad-4e62-8d19-388243e9e1fc.png",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Handle image error by trying the next image
  const handleImageError = () => {
    if (currentImageIndex < tryImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setImageError(true);
    }
  };

  return (
    <Link to={`/beach/${encodeURIComponent(beach.beach_name)}`}>
      <Card 
        className={cn(
          "overflow-hidden relative card-hover transition-all duration-300 border border-gray-200",
          className
        )}
        style={style}
      >
        <div 
          className={cn(
            "h-48 blur-load", 
            generatePlaceholderColor(beach.beach_name),
            isLoaded && !imageError ? "loaded" : ""
          )}
        >
          {!imageError ? (
            <img 
              src={tryImages[currentImageIndex]}
              alt={beach.beach_name} 
              className="w-full h-full object-cover"
              onLoad={() => setIsLoaded(true)}
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${generatePlaceholderColor(beach.beach_name)}`}>
              <span className="text-2xl font-bold text-gray-700">{beach.beach_name.charAt(0)}</span>
            </div>
          )}
        </div>
        
        <div className="absolute top-4 left-4">
          <div className={cn(
            "text-white font-semibold rounded-full w-10 h-10 flex items-center justify-center text-sm",
            getScoreColor(beach.rating)
          )}>
            {beach.rating}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{beach.beach_name}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4 ml-1" />
            <span>{beach.address || beach.region}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm mt-3">
            {beach.accessible_parking.disabled_parking === "כן" && (
              <div className="flex items-center text-green-600">
                <Accessibility className="w-4 h-4 ml-1" />
                <span>חניית נכים</span>
              </div>
            )}
            
            {beach.beach_access.solid_path_to_water === "כן" && (
              <div className="flex items-center text-green-600">
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 20h18M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>גישה למים</span>
              </div>
            )}
            
            {beach.special_wheelchairs.water_accessible_wheelchairs === "כן" && (
              <div className="flex items-center text-green-600">
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15a6 6 0 100-12 6 6 0 000 12z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15v6M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>כסאות גלגלים</span>
              </div>
            )}
            
            {beach.accessible_restrooms.disabled_restrooms === "כן" && (
              <div className="flex items-center text-green-600">
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8h12v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 6h16M12 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>שירותי נכים</span>
              </div>
            )}
          </div>
          
          {beach.phone_number && (
            <div className="mt-4 flex items-center text-sm text-primary">
              <Phone className="w-4 h-4 ml-1" />
              <span dir="ltr">{beach.phone_number}</span>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default BeachCard;
