import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Engagement from "./Section/Engagement";
import Features from "./Section/Features";
import Hero from "./Section/Hero";
import Overview from "./Section/Overview";

const Home = () => {
  return (
    <div className="min-h-screen relative bg-primary overflow-hidden">
      <Navbar id={""}></Navbar>
      <Hero id="Hero"></Hero>
      <Features id="Features"></Features>
      <Overview id="Overview"></Overview>
      <Engagement id="Engagement"></Engagement>
      <Footer></Footer>
    </div>
  );
};

export default Home;
