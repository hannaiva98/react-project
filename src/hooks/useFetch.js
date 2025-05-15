import { useState, useEffect } from 'react';

const useFetch = (url, shouldFetch, maxLogs = 100) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!shouldFetch) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Ошибка! Статус: ' + response.status);
        }
        const result = await response.json();
        setData(result);

        const log = {
          url: url,
          status: response.status,
          payload: Array.isArray(result) ? result[0] : result,
          timestamp: new Date().toISOString(),
        };

        try {
          const logKey = `api_log_${Date.now()}`;
          localStorage.setItem(logKey, JSON.stringify(log));

          const allLogs = Object.keys(localStorage)
            .filter(key => key.startsWith('api_log_'))
            .sort();

          if (allLogs.length > maxLogs) {
            const logsToDelete = allLogs.slice(0, allLogs.length - maxLogs);
            logsToDelete.forEach(key => localStorage.removeItem(key));
          }

          console.log('Лог API:', log);
        } catch (storageError) {
          console.error('Ошибка при сохранении лога:', storageError);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, shouldFetch, maxLogs]);

  return { data, loading, error };
};

export default useFetch;