import MainMenu from "../components/MainMenu/MainMenu";
import Footer from "../components/Footer/Footer";



const Menu = ({ setCartCount }) => {
    return (
        <>
          <MainMenu setCartCount={setCartCount} />
            <Footer />
          </>
  );
};

export default Menu;
