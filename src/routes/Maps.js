import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '800px', // Increase the width
  height: '600px', // Increase the height
};

const defaultCenter = {
  lat: 22.805618,
  lng: 86.203110,
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD5SApASJpEqmz_XCbHmcGnY1m_GJdP_Fs",
  });

  const [map, setMap] = React.useState(null);

  useEffect(() => {
    if (isLoaded) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            setMap((prevMap) => {
              if (prevMap) {
                prevMap.panTo(userLocation);
              }
              return prevMap;
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      }
    }
  }, [isLoaded]);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(defaultCenter);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : <></>;
}

export default React.memo(Maps);
