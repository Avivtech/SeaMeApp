
export interface Beach {
  beach_name: string;
  region: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  phone_number: string;
  accessible_parking: {
    disabled_parking: string;
    elevator_parking: string;
    parking_distance: string;
  };
  beach_access: {
    obstacle_free_access: string;
    solid_path_to_water: string;
  };
  shade_shelter: {
    accessible_shelter: string;
    number_of_shelters: string;
  };
  special_wheelchairs: {
    water_accessible_wheelchairs: string;
    wheelchair_location: string;
    number_of_wheelchairs: string;
    contact_for_wheelchair: string;
  };
  accessible_restrooms: {
    disabled_restrooms: string;
  };
  accessible_showers: string;
  accessible_changing_rooms: string;
  cafe_restaurant: {
    exists: string;
    wheelchair_accessible: string;
  };
  blind_guidance: {
    blind_and_visually_impaired_assistance: string;
  };
  breakwater: string;
  additional_accessibility: {
    quiet_area: string;
    hearing_impaired_assistance: string;
    special_signage_for_lifeguard_towers: string;
    digital_navigation_system: string;
  };
  beach_season: string;
  accessible_public_transportation: string;
  rating: number;
}

export interface FilterOption {
  id: string;
  label: string;
  isActive: boolean;
}

export interface FilterCategory {
  id: string;
  title: string;
  icon: JSX.Element;
  options: FilterOption[];
}

export interface SearchParams {
  query: string;
  region: string;
  filters: {
    [key: string]: boolean;
  };
}
