import react from 'react';
import About from '../component/About';
import FoodSlider from '../component/FoodSlider';
import Footer from '../component/Footer';
import HomeSlider from '../component/HomeSlider';
import Navbar from '../component/Navbar';
import Slider from '../component/Slider';
import Testimonial from '../component/Testimonial';

function HomePage() {
  return (
    <>
     <Navbar />
     <Slider />
     <HomeSlider />
     <About />
     <Testimonial />
     <Footer />
    </>
  );
}

export default HomePage;
