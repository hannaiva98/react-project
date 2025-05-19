import React, { FC } from "react";
import MainMenu from "../components/MainMenu/MainMenu";
import Footer from "../components/Footer/Footer";

interface MenuProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const Menu: FC<MenuProps> = ({ setCartCount }) => {
  return (
    <>
      <MainMenu setCartCount={setCartCount} />
      <Footer />
    </>
  );
};

export default Menu;
