import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromOrder, updateQuantity, clearOrders } from "../redux/orderSlice";
import styled from "styled-components";
import backgroundImage from "../components/MainMenu/img/BG Shape Content.png";
import Footer from "../components/Footer/Footer";

const OrderPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders);

  const handleRemove = (id: string) => {
    dispatch(removeFromOrder(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order submitted successfully!");
    dispatch(clearOrders());
  };

  const totalPrice = orders.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <OrderWrapper>
        <OrderContainer>
          <OrderTitle>Finish your order</OrderTitle>

          {orders.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {orders.map(item => (
                <OrderItem key={item.id}>
                  <OrderImage src={item.image} alt={item.name} />
                  <MealName>{item.name}</MealName>
                  <Price>${item.price.toFixed(2)} / шт</Price>
                  <CountInput
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  />
                  <RemoveButton onClick={() => handleRemove(item.id)}>X</RemoveButton>
                </OrderItem>
              ))}

              <TotalText>Total: ${totalPrice.toFixed(2)}</TotalText>

              <Form onSubmit={handleSubmit}>
                <LabelInputRow>
                  <Label htmlFor="street" style={{ width: "100px", marginBottom: 0 }}>Street</Label>
                  <Input id="street" type="text" required />
                </LabelInputRow>

                <LabelInputRow>
                  <Label htmlFor="house" style={{ width: "100px", marginBottom: 0 }}>House</Label>
                  <Input id="house" type="text" required />
                </LabelInputRow>

                <SubmitButton type="submit">Order</SubmitButton>
              </Form>
            </>
          )}
        </OrderContainer>
      </OrderWrapper>
      <Footer />
    </>
  );
};

export default OrderPage;

const OrderWrapper = styled.main`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 820px;
  opacity: 0.87;
  padding: 40px 20px;
  box-sizing: border-box;
  clip-path: polygon(
    0% 5%,
    100% 0%,
    100% 100%,
    0% 100%
  );
`;

const OrderContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  background-color: #f5fbfc;
  padding: 40px;
  border-radius: 12px;
  box-sizing: border-box;
`;

const OrderTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 50px;
  text-align: center;
  color: #35B8BE;
  margin-bottom: 46px;
`;

const OrderItem = styled.div`
  width: 1180px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 4px 12px rgba(53, 184, 190, 0.15);
  padding: 20px 30px;
  margin-bottom: 15px;
  box-sizing: border-box;
`;
const OrderImage = styled.img`
  width: 120px;
  height: 120px;
`;

const MealName = styled.span`
  flex: 1;
  margin-left: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: #08090A;
`;

const Price = styled.span`
  width: 86px;
  height: 20px;
  color: #35B8BE;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0%;
  margin-right: 57px;
  white-space: nowrap;
`;

const CountInput = styled.input`
  width: 60px;
  height: 45px;
  font-family: 'Inter', sans-serif;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.36px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-right: 34px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 45px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.36px;
  color: #FFFFFF;
  text-align: center;
  background-color: #35B8BE;
  border: none;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background-color: #2a969b;
  }
`;

const Form = styled.form`
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const LabelInputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: #08090A;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 430px;
  height: 45px;
  padding: 0 12px;
  border-radius: 6px;
  border: 1px solid #DDDDDD;
  background-color: #FAFAFA;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #35B8BE;
  border: none;
  color: white;
  padding: 12px 40px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  font-family: Inter;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #FFFFFF;
  &:hover {
    background-color: #2a969b;
  }
`;

const TotalText = styled.p`
  font-size: 17px;
  font-weight: 500;
  text-align: right;
  margin: 20px 0;
  color: #000;
`;
