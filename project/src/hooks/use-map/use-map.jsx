import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, location) {
  const [map, setMap] = useState(null);
  const {latitude, longitude, zoom} = location;

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }

  }, [mapRef, map, latitude, longitude, zoom]);

  return map;
}

export default useMap;
