import React, { useState } from "react";
import image1 from '../img/IMAGE (7).png';
import image2 from '../img/IMAGE (8).png';
import image3 from '../img/IMAGE (9).png';
import image4 from '../img/IMAGE (10).png';
import image5 from '../img/IMAGE (11).png';
import image6 from '../img/IMAGE (12).png';


const PhoneTooltip = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="hint_text">
      phone
      {isHovered && (
        <div className="hovered-text">
          Tel: 8 000 000 0000
        </div>
      )
      }
    </span>
  );
};


const MainMenu = () => {
        const menuItems = [
                { id: 1, name: "Burger Dreams", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "$ 9.20 USD", image: image1, counter: 1, button: "Add to card" },
                { id: 2, name: "Burger Waldo", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "$ 10.00 USD.00", image: image2, counter: 1, button: "Add to card" },
                { id: 3, name: "Burger Cali", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "$ 8.00 USD", image: image3, counter: 1, button: "Add to card" },
                { id: 4, name: "Burger Bacon Buddy", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "$ 9.99 USD", image: image4, counter: 1, button: "Add to card"},
                { id: 5, name: "Burger Spicy", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "$ 9.20 USD", image: image5, counter: 1, button: "Add to card"},
                { id: 6, name: "Burger Classic", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "$ 8.00 USD", image: image6, counter: 1, button: "Add to card"},
              ];
            
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
          {menuItems.map(item => (
                <li key={item.id}>
                <div class='order-card'>        
            <div className="menu-item">
                <img src={item.image} alt={item.name} />
                </div>
                <div className="information-order">
                <div className="name-price">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              </div>
              <div className="description">
              <p>{item.description}</p>
              </div>
              <div className="buttons-with-counter">
                <button className="counter_order">{item.counter}</button>
              <button className="add-to-order">{item.button}</button>
              </div>
              </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
        <button className="additional-order">See more</button>
            </div>
        </div>
);
};
export default MainMenu;