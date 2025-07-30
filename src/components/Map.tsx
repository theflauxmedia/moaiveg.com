import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  address: string;
  coordinates?: [number, number]; // Optional coordinates for precise location
  className?: string;
}

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom restaurant marker icon
const createRestaurantIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        width: 40px; 
        height: 40px; 
        background: #8B5CF6; 
        border: 3px solid #ffffff; 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
          <path d="M6 8h8v4H6z"/>
          <path d="M7 9h6v2H7z"/>
          <circle cx="9" cy="10" r="0.5"/>
          <circle cx="11" cy="10" r="0.5"/>
        </svg>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
};

const Map = ({ address, coordinates, className = "" }: MapProps) => {
  const [coordinatesState, setCoordinatesState] = useState<[number, number] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        // Using Nominatim (OpenStreetMap's geocoding service) - free and no API key required
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
        );
        
        if (!response.ok) {
          throw new Error('Failed to geocode address');
        }

        const data = await response.json();
        
        if (data && data.length > 0) {
          const [lat, lon] = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
          setCoordinatesState([lat, lon]);
        } else {
          // Fallback coordinates for demo purposes (New York City area)
          setCoordinatesState([40.7128, -74.0060]);
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error('Geocoding error:', err);
        // Fallback coordinates for demo purposes
        setCoordinatesState([40.7128, -74.0060]);
        setIsLoading(false);
      }
    };

    if (coordinates) {
      setCoordinatesState(coordinates);
      setIsLoading(false);
    } else {
      geocodeAddress();
    }
  }, [address, coordinates]);

  if (isLoading) {
    return (
      <div className={`h-96 bg-muted flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`h-96 bg-muted flex items-center justify-center ${className}`}>
        <div className="text-center">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!coordinatesState) {
    return (
      <div className={`h-96 bg-muted flex items-center justify-center ${className}`}>
        <div className="text-center">
          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-muted-foreground">Map not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-96 w-full rounded-lg overflow-hidden ${className}`}>
      <MapContainer
        center={coordinatesState}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinatesState} icon={createRestaurantIcon()}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-primary mb-1">Moai Restaurant</h3>
              <p className="text-sm text-muted-foreground">{address}</p>
              <p className="text-xs text-muted-foreground mt-1">Artisanal Vegetarian Dining</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map; 