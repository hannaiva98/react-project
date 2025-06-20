import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchMenuItems, MenuItem } from "../../redux/menuSlice";
import PhoneTooltip from "./PhoneTooltip";
import { addToOrder } from "../../redux/orderSlice";
import { useTheme } from "../../pages/ThemeContext";
import "./MainMenu.css";

const ITEMS_INCREMENT = 6;

interface MainMenuProps {
  setCartCount?: (count: number) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ setCartCount }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useTheme();

  const { items, loading, error, cartCount } = useSelector(
    (state: RootState) => state.menu
  );

  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<string>("Dessert");

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  useEffect(() => {
    if (setCartCount) {
      setCartCount(cartCount);
    }
  }, [cartCount, setCartCount]);

  const handleSeeMore = () => {
    setVisibleItemsCount((prev) => prev + ITEMS_INCREMENT);
  };

  const handleAddToCart = (item: MenuItem) => {
    dispatch(
      addToOrder({
        id: item.id,
        name: item.meal,
        image: item.img,
        price: item.price,
      })
    );
  };

  const orderItems = useSelector((state: RootState) => state.orders);

  const getCountInOrder = (id: string) => {
    const found = orderItems.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  const visibleItems = filteredItems.slice(0, visibleItemsCount);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleItemsCount(6);
  };

  if (loading) {
    return (
      <div className="maininfmenu">
        <p>Загрузка меню...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="maininfmenu">
        <p>Ошибка: {error}</p>
      </div>
    );
  }

  return (
    <div className={`maininfmenu ${theme}`}>
      <div className="contentmenu">
        <div className={`main-text-menu ${theme}`}>
          <p className="main-text-menu-1">Browse our menu</p>
          <p className="main-text-menu-2">
            Use our menu to place an order online, or <PhoneTooltip theme={theme} /> our store
            to place a pickup order. Fast and fresh food.
          </p>
        </div>
        <div className="buttons-with-list">
          <div className="filter-buttons">
            {["Dessert", "Dinner", "Breakfast"].map((category) => (
              <button
                key={category}
                className={`main-button-menu ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                <p>{category}</p>
              </button>
            ))}
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
                      <button className="counter_order">{getCountInOrder(item.id)}</button>
                      <button
                        className="add-to-order"
                        onClick={() => handleAddToCart(item)}
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
