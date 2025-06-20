import cartReducer, { addItem, removeItem, updateItemCount, clearCart } from './cartSlice';

const initialState = { items: [], count: 0 };

describe('cartSlice', () => {
  it('добавляет новый товар в корзину', () => {
    const item = { id: '1', meal: 'Pizza', price: 10, img: 'pizza.png' };
    const state = cartReducer(initialState, addItem(item));
    expect(state.items[0].id).toBe('1');
    expect(state.count).toBe(1);
  });

  it('увеличивает количество уже добавленного товара', () => {
    const stateWithItem = {
      items: [{ id: '1', meal: 'Pizza', price: 10, img: 'pizza.png', count: 1 }],
      count: 1,
    };
    const item = { id: '1', meal: 'Pizza', price: 10, img: 'pizza.png' };
    const state = cartReducer(stateWithItem, addItem(item));
    expect(state.items[0].count).toBe(2);
    expect(state.count).toBe(2);
  });

  it('удаляет товар из корзины', () => {
    const stateWithItem = {
      items: [{ id: '1', meal: 'Pizza', price: 10, img: 'pizza.png', count: 2 }],
      count: 2,
    };
    const state = cartReducer(stateWithItem, removeItem('1'));
    expect(state.items.length).toBe(0);
    expect(state.count).toBe(0);
  });

  it('обновляет количество товара', () => {
    const stateWithItem = {
      items: [{ id: '1', meal: 'Pizza', price: 10, img: 'pizza.png', count: 2 }],
      count: 2,
    };
    const state = cartReducer(stateWithItem, updateItemCount({ id: '1', count: 5 }));
    expect(state.items[0].count).toBe(5);
    expect(state.count).toBe(5);
  });

  it('очищает корзину', () => {
    const filledState = {
      items: [{ id: '1', meal: 'Pizza', price: 10, img: 'pizza.png', count: 3 }],
      count: 3,
    };
    const state = cartReducer(filledState, clearCart());
    expect(state.items).toEqual([]);
    expect(state.count).toBe(0);
  });
});
