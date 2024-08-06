import { useState, useMemo } from 'react';

function Locations() {
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);


  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }

    function error() {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435
      });
    }
  }, [navigator.geolocation.getCurrentPosition]);

  return (
    location
  );
}

export default Locations;
