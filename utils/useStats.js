import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // console.log("Mounting or updating");
    async function fetchData() {
      setLoading(true);
      setError(null);
      // console.log("Fetching Data");
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      if (data.error) {
        window.alert(`${data.error.message}. Please select another country.`);
        setLoading(false);
        return false;
      } else {
        setStats(data);
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error
  };
}
