import Hero from "../components/Hero";
import image2 from "../assets/airplane.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact (){


    return (
        <>
         <Hero 
          cName="hero-mid"
          img={image2}
          title="Contact"
          btnClass="hide" />

          <ContactForm/>
          <Footer/>
        </>

        
    )

}
export default Contact;