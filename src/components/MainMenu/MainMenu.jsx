import React, { Component } from "react";
import "./MainMenu.css";
import PhoneTooltip from "./PhoneTooltip";



class MainMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuItems: [],
      isLoading: true,
      error: null,
      visibleItemsCount: 6,
      cartCount: 0,
    };
  }
  componentDidMount() {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then(response => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных с API");
        }
        return response.json();
      })
      .then(data => {
        const updatedData = data.map(item => ({ ...item, count: 0 }));
        this.setState({ menuItems: updatedData, isLoading: false });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });

  fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders")
    .then(res => res.json())
    .then(data => {
      console.log("Загрузка заказов:", data);
    })
    .catch(err => {
      console.error("Ошибка при загрузке заказов:", err);
    });
  }

  handleSeeMore = () => {
    this.setState(prevState => ({
      visibleItemsCount: prevState.visibleItemsCount + 6,
    }));
  };

  handleAddToCart = (id) => {
    this.setState(prevState => {
      const updatedMenuItems = prevState.menuItems.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      
      const newCartCount = updatedMenuItems.reduce((total, item) => total + item.count, 0);
  
      if (this.props.setCartCount) {
        this.props.setCartCount(newCartCount);
      }
  
      return { menuItems: updatedMenuItems };
    });
  };
  

  getTotalCartCount = () => {
  return this.state.menuItems.reduce((total, item) => total + item.count, 0);
};

  render() {
    const { menuItems, isLoading, error, visibleItemsCount } = this.state;


    if (isLoading) {
      return <div className="maininfmenu"><p>Загрузка меню...</p></div>;
    }

    if (error) {
      return <div className="maininfmenu"><p>Ошибка: {error.message}</p></div>;
    }

  const visibleItems = menuItems.slice(0, visibleItemsCount);  
            
  return (
        <div className='maininfmenu'>
            <div className='contentmenu'>
            <div className='main-text-menu'>
                    <p className='main-text-menu-1'>Browse our menu</p>
                    <p className='main-text-menu-2'>Use our menu to place an order online, or <PhoneTooltip /> our store to place a pickup order. Fast and fresh food.</p>
            </div>
            <div className="buttons-with-list">
            <div className="filter-buttons">
                <button className="main-button-menu-unique"><p>Desert</p></button>
                <button className="main-button-menu"><p>Dinner</p></button>
                <button className="main-button-menu"><p>Breakfast</p></button>
            </div>
            <ul className="menu-list">
          {visibleItems.map(item => (
                <li key={item.id}>
                <div className='order-card'>        
            <div className="menu-item">
                <img src={item.img} alt={item.meal} />
                </div>
                <div className="information-order">
                <div className="name-price">
              <h2>{item.meal}</h2>
              <p>$ {item.price} USD</p>
              </div>
              <div className="description">
              <p>{item.instructions.length > 90 ? item.instructions.slice(0, 90) + '...' : item.instructions}</p>
              </div>
              <div className="buttons-with-counter">
              <button className="counter_order">{item.count}</button>
                <button className="add-to-order" onClick={() => this.handleAddToCart(item.id)}>
                  Add to card
                </button>
              </div>
              </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
        {visibleItemsCount < menuItems.length && (
          <div className="see-more-wrapper">
            <button className="additional-order" onClick={this.handleSeeMore}>See more</button>
          </div>
      )}
            </div>
        </div>
);
}
}
export default MainMenu;