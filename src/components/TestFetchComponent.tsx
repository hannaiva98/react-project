import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

interface Meal {
  id: string;
  name: string;
  price?: number;
  description?: string;
}

const TestFetchComponent: React.FC = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const { data, loading, error } = useFetch(
    'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals',
    shouldFetch,
    100
  );


  const meals = data as Meal[] | null;

  const handleFetch = () => {
    setShouldFetch(true);
    setTimeout(() => {
      setShouldFetch(false);
    }, 0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Тестовый компонент</h1>
      <div>
        <button onClick={handleFetch} disabled={loading}>
          Сделать запрос
        </button>
      </div>
      {loading && <p>Идет загрузка...</p>}
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
      {meals && (
        <div>
          <h2>Полученные данные</h2>
          <pre>{JSON.stringify(meals[0], null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TestFetchComponent;
