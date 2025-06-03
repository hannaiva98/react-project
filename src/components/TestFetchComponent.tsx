import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMeals, Meal } from "../redux/mealsSlice";
import type { RootState, AppDispatch } from "../redux/store";

const TestFetchComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: meals, loading, error } = useSelector(
    (state: RootState) => state.meals
  );

  const handleFetch = () => {
    dispatch(fetchMeals());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Тестовый компонент</h1>
      <div>
        <button onClick={handleFetch} disabled={loading}>
          Сделать запрос
        </button>
      </div>
      {loading && <p>Идет загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
      {meals && meals.length > 0 && (
        <div>
          <h2>Полученные данные</h2>
          <pre>{JSON.stringify(meals[0], null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TestFetchComponent;
