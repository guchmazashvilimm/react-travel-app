import "./TripStyles.css";
import React from "react";
import TripData from "./TripData";
import indonesia from "../assets/indonesia.jpg";
import malaysia from "../assets/malaysia.jpg";
import france from "../assets/france.jpg";
import WeatherApi from "./WeatherApi";
import WeatherComponent from "./WeatherComponent";

function Trip() {

    return(
        <>
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique
             destinations using Google Maps.</p>
            <div className="tripCard">
            <TripData image={indonesia} tripHead="Trip in Indonesia" tripTxt="Indonesia, officially the Republic 
            of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.
             It consists of over 17,000 islands,
             including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. "/>

             <TripData tripTxt="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and 
             the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and 
             European cultural influences. The capital, Kuala Lumpur, is home to colonial buildings,
              busy shopping districts such as Bukit Bintang and skyscrapers such as the iconic, 451m-tall Petronas Twin Towers."
              image={malaysia} tripHead="Trip in Malaysia"/>
            
            <TripData tripTxt="France, in Western Europe, encompasses medieval cities,
             alpine villages and Mediterranean beaches. Paris, its capital, is famed
              for its fashion houses, classical art museums including the Louvre and monuments 
              like the Eiffel Tower." image={france} tripHead="Trip in France"/>
            </div>
            <WeatherComponent/>
        </div>
        </>
    )
}
export default Trip;