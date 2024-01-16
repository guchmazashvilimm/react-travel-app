import React from 'react';
import taal from "../assets/taalVolcano.jpg";
import taal2 from "../assets/taalVolc2.jpg";
import mount1 from "../assets/mountain.jpg";
import mount2 from "../assets/mountain1.jpg";
import WeatherComponent from './WeatherComponent';
import "./DestinationStyle.css";
import DestinationData from './DestinationData';
function Destination (){

    return (
    <>
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>

        <DestinationData clsName="first-des"
        heading="Taal Volcano, Batangas"
        text = "Taal Volcano is a large caldera in Batangas that was formed by prehistoric eruptions.In the wake of the eruptions, it was eventually filled by Taal Lake. Throughouthistory it has erupted about 38 times, making it the secondmost active volcano in the Philippines."
       img1={taal} img2={taal2} />

       <DestinationData clsName="first-des-reverse"
        heading="Mt. Daguldul Mountain"
        text = "Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
       img1={mount1} img2={mount2} />
      


    </div>
    
    </>
    )
}
export default Destination;





