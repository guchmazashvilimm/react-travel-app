import Hero from "../components/Hero";
import image1 from "../assets/travel22.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About (){


    return (
        <>
        <Hero 
          cName="hero-mid"
          img={image1}
          title="About"
          btnClass="hide" />

          <AboutUs/>

          <Footer/>
        </>
    )

}
export default About;
