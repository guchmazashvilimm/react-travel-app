import Hero from "../components/Hero";
import image from "../assets/travel1.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home (){


    return (
        <>
        <Hero 
          cName="hero"
          img={image}
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          url="/"
          btntext = "Travel"
          btnClass="show" />

          <Destination/>
          <Trip/>
          <Footer/>

        </>
    )

}
export default Home;