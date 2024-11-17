import React, { useState } from "react";

import * as Location from "expo-location";
import { TEST_KEY } from "@env";

export const useGetWeather = () => {
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [location, setLocation] = useState(null);

  const fetchweaterDate = async () => {
    try {
      const res = await fetch(`http://`);
      const data = await Response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setError("Could not fetch" + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchweaterDate();
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};
