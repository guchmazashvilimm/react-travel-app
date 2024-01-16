import {Component} from 'react'
import taal from "../assets/taalVolcano.jpg";
import taal2 from "../assets/taalVolc2.jpg";
import "./DestinationStyle.css";

class DestinationData extends Component{

    render(){
        return (
            <>
            <div className={this.props.clsName}>
            <div className='des-text'>
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className='image'>
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>

            </div>
            </div>
            </>
        )
    }
}

export default DestinationData;

