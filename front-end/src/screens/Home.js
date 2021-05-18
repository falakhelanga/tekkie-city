import react from "react";
import { Container } from "react-bootstrap";
import CopyRight from "../components/CopyRight";
import MonthlySpecials from "../components/MonthlySpecials";
import MyCarousel from "../components/MyCarousel";
import NewArrival from "../components/NewArrival";
import ShopByBrand from "../components/ShopByBrand";
import BottomNavigation from "../components/BottomNavigation";
import TopSellers from "../components/TopSellers";

const Home = () => {
  return (
    <Container
      fluid
      style={{
        height: "100%",
        paddingBottom: "5rem",
      }}
    >
      <MyCarousel />
      <MonthlySpecials />
      <NewArrival />
      <TopSellers />
      <ShopByBrand />
      <CopyRight />
      <BottomNavigation />
    </Container>
  );
};

export default Home;
