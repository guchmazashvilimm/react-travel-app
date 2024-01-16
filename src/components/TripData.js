import React from 'react'
import "./TripStyles.css";

function TripData(props){

    return (
        <>
        <div className="t-card">
            <div className='t-image'>
                <img alt="image" src={props.image}/>
            </div>
            <div className='t-text'>
                <h4>{props.tripHead}</h4>
                <p>{props.tripTxt}</p>
            </div>
        </div>
        </>
    )
}

export default TripData;