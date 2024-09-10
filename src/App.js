import AppStore from "./components/AppStore";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";




function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <AppStore/>
    <Testimonial/>
    {/* <Popular/> */}
    <Footer/>
    </>
  );
}

export default App;
