import AppStore from "../components/AppStore";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Services from "../components/Services";
import Testimonial from "../components/Testimonial";




function Index() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    
    <Testimonial/>
    <AppStore/>
    {/* <Popular/> */}
    <Footer/>
    </>
  );
}

export default Index;