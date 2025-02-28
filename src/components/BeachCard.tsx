
import React from 'react';
import { Check, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BeachCardProps {
  beach: any;
  className?: string;
  style?: React.CSSProperties;
}

const BeachCard: React.FC<BeachCardProps> = ({ beach, className, style }) => {
  // Generate a placeholder color based on beach name
  const generatePlaceholderColor = (name: string) => {
    const colors = ['bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-yellow-100', 'bg-pink-100'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Accessibility features count
  const getAccessibilityCount = (beach: any) => {
    let count = 0;
    
    if (beach.accessible_parking?.disabled_parking === 'כן') count++;
    if (beach.beach_access?.solid_path_to_water === 'כן') count++;
    if (beach.accessible_restrooms?.disabled_restrooms === 'כן') count++;
    if (beach.accessible_changing_rooms === 'כן') count++;
    if (beach.shade_shelter?.accessible_shelter === 'כן') count++;
    if (beach.special_wheelchairs?.water_accessible_wheelchairs === 'כן') count++;
    
    return count;
  };

  const accessibilityCount = getAccessibilityCount(beach);

  // Get a score out of 10 based on accessibility features
  const getScore = (count: number) => {
    return Math.min(Math.round(count * 1.7) + 3, 10);
  };

  const score = getScore(accessibilityCount);

  // Determine score color
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-green-500';
    if (score >= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const truncateName = (name: string, maxLength = 30) => {
    return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
  };

  // Generate image path from beach name
  const getBeachImagePath = (beachName: string) => {
    // Extract the first word from beach name and convert to lowercase
    const firstWord = beachName.split(' ')[0].toLowerCase();
    return `/beach_images/${firstWord}.jfif`;
  };

  return (
    <Link
      to={`/beach/${encodeURIComponent(beach.beach_name)}`}
      className={cn(
        "beach-card-link block h-full transition-transform hover:-translate-y-1 duration-200",
        className
      )}
      style={style}
    >
      <div className="beach-card bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 h-full flex flex-col">
        {/* Beach Image */}
        <div className="relative h-48 bg-gray-200">
          <div className={`w-full h-full flex items-center justify-center ${generatePlaceholderColor(beach.beach_name)}`}>
            {/* Try to load the beach image with fallback */}
            <img 
              src={getBeachImagePath(beach.beach_name)} 
              alt={beach.beach_name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.style.display = 'none';
                const fallbackElement = e.currentTarget.parentElement;
                if (fallbackElement) {
                  fallbackElement.innerHTML = `<span class="text-6xl font-bold text-gray-500">${beach.beach_name.charAt(0)}</span>`;
                }
              }}
            />
          </div>
          
          <div className="absolute top-3 left-3">
            <div className={cn(
              "text-white font-semibold rounded-full w-10 h-10 flex items-center justify-center",
              getScoreColor(score)
            )}>
              {score}
            </div>
          </div>
        </div>
        
        {/* Beach Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-1" title={beach.beach_name}>
            {truncateName(beach.beach_name)}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 ml-1" />
            <span className="text-sm">{beach.region}</span>
          </div>
          
          <div className="mt-auto">
            <div className="text-sm font-medium mb-1">מאפייני נגישות</div>
            <div className="flex flex-wrap gap-2">
              {beach.beach_access?.solid_path_to_water === 'כן' && (
                <div className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded-full flex items-center">
                  <Check className="h-3 w-3 ml-1" />
                  דרך למים
                </div>
              )}
              
              {beach.accessible_restrooms?.disabled_restrooms === 'כן' && (
                <div className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded-full flex items-center">
                  <Check className="h-3 w-3 ml-1" />
                  שירותים נגישים
                </div>
              )}
              
              {beach.shade_shelter?.accessible_shelter === 'כן' && (
                <div className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded-full flex items-center">
                  <Check className="h-3 w-3 ml-1" />
                  צל
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BeachCard;
