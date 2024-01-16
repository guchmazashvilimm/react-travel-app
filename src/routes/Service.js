import Hero from "../components/Hero";
import image1 from "../assets/travel22.jpg";
import Footer from "../components/Footer";
import ServiceTxt from "../components/ServiceTxt";

function Service (){


    return (
        <>
          <Hero 
          cName="hero-mid"
          img={image1}
          title="Our Service"
          btnClass="hide" />

          <>
          
          </>
          <ServiceTxt/>


          <Footer/>
        </>
        
        
    )

}
export default Service;