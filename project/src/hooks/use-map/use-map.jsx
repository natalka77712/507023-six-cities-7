import {useEffect, useState} from 'react';
import L from 'leaflet';

function useMap(mapRef, initialPosition) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const {latitude, longitude, zoom} = initialPosition.location;

    if (mapRef.current !== null && map === null) {
      const instance = L.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
        .addTo(instance);

      setMap(instance);
    } else if (mapRef.current !== null && map !== null) {
      map.flyTo({
        lat: initialPosition.location.latitude,
        lng: initialPosition.location.longitude,
      }, initialPosition.location.zoom);
    }
  }, [mapRef, map, initialPosition]);

  return map;
}

export default useMap;

