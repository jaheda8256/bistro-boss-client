import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contacts from "../Contacts/Contacts";
import Featured from "../Featured/Featured";
import FoodCard from "../FoodCard/FoodCard";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <Contacts></Contacts>
      <FoodCard></FoodCard>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
