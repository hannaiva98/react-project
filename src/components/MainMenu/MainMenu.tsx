import React, { useState, useEffect } from "react";
import "./MainMenu.css";
import PhoneTooltip from "./PhoneTooltip";

const ITEMS_INCREMENT = 6;

interface MenuItem {
  id: string;
  category: string;
  meal: string;
  price: number;
  img: string;
  instructions: string;
  count: number;
}

interface MainMenuProps {
  setCartCount?: (count: number) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ setCartCount }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<string>("Dessert");

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных с API");
        }
        return response.json();
      })
      .then((data: Omit<MenuItem, "count">[]) => {
        const updatedData = data.map((item) => ({ ...item, count: 0 }));
        setMenuItems(updatedData);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setIsLoading(false);
      });

    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log("Загрузка заказов:", data);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке заказов:", err);
      });
  }, []);

  const handleSeeMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + ITEMS_INCREMENT);
  };

  const handleAddToCart = (id: string) => {
    const updatedMenuItems = menuItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );

    const newCartCount = updatedMenuItems.reduce(
      (total, item) => total + item.count,
      0
    );

    if (setCartCount) {
      setCartCount(newCartCount);
    }

    setMenuItems(updatedMenuItems);
  };

  const filteredItems = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems;

  if (isLoading) {
    return (
      <div className="maininfmenu">
        <p>Загрузка меню...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="maininfmenu">
        <p>Ошибка: {error.message}</p>
      </div>
    );
  }

  const visibleItems = filteredItems.slice(0, visibleItemsCount);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleItemsCount(6);
  };

  return (
    <div className="maininfmenu">
      <div className="contentmenu">
        <div className="main-text-menu">
          <p className="main-text-menu-1">Browse our menu</p>
          <p className="main-text-menu-2">
            Use our menu to place an order online, or <PhoneTooltip /> our store
            to place a pickup order. Fast and fresh food.
          </p>
        </div>
        <div className="buttons-with-list">
          <div className="filter-buttons">
            <button
              className={`main-button-menu ${
                selectedCategory === "Dessert" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Dessert")}
            >
              <p>Dessert</p>
            </button>
            <button
              className={`main-button-menu ${
                selectedCategory === "Dinner" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Dinner")}
            >
              <p>Dinner</p>
            </button>
            <button
              className={`main-button-menu ${
                selectedCategory === "Breakfast" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Breakfast")}
            >
              <p>Breakfast</p>
            </button>
          </div>
          <ul className="menu-list">
            {visibleItems.map((item) => (
              <li key={item.id}>
                <div className="order-card">
                  <div className="menu-item">
                    <img src={item.img} alt={item.meal} />
                  </div>
                  <div className="information-order">
                    <div className="name-price">
                      <h2>{item.meal}</h2>
                      <p>$ {item.price} USD</p>
                    </div>
                    <div className="description">
                      <p className="ellipsis">{item.instructions}</p>
                    </div>
                    <div className="buttons-with-counter">
                      <button className="counter_order">{item.count}</button>
                      <button
                        className="add-to-order"
                        onClick={() => handleAddToCart(item.id)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {visibleItemsCount < filteredItems.length && (
          <div className="see-more-wrapper">
            <button className="additional-order" onClick={handleSeeMore}>
              See more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainMenu;
