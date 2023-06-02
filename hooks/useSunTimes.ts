import { useState, useEffect } from 'react'

interface SunTimes {
  sunrise: Date,
  sunset: Date
}

const useSunTimes = (lat: number, lng: number): SunTimes | null => {
  const [sunTimes, setSunTimes] = useState<SunTimes | null>(null);

  useEffect(() => {
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`)
      .then(response => response.json())
      .then(data => {
        if (data.status === "OK") {
          setSunTimes({
            sunrise: new Date(data.results.sunrise),
            sunset: new Date(data.results.sunset)
          });
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, [lat, lng]);

  return sunTimes;
}

export default useSunTimes;
