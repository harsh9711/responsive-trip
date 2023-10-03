import React from 'react'
import Tripdata from "../Component/Tripdata.js"
import Trip1 from "/Users/harshsahcdeva/Desktop/projected/src/assets/15.jpg"
import Trip2 from "/Users/harshsahcdeva/Desktop/projected/src/assets/14.jpg"
import Trip3 from "/Users/harshsahcdeva/Desktop/projected/src/assets/16.jpg"
import "../Styles/Trip.css"

const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trip</h1>
        <p>You can discover unique destinations using google maps</p>
    <div className="tripcard">
    <Tripdata
    image={Trip1}
    heading="Trip To China"
    text="China is located in eastern Asia along the western shore of the Pacific Ocean. It spreads over a vastly diverse geographical area of 9.6 million square kilometers (about the size of the USA or Europe), and is home to approaching 1.4 billion people (more than N. America and Europe combined)."
    />
     <Tripdata
    image={Trip2}
    heading="Trip To Malayasia"
    text="Malaysia is a country which is situated in the Southeast region of Asia. This country is multicultural and multi-ethnic. It is also one of the most visited to countries in Asia for tourist activities. Being near the equator, this coastal country has a tropical climate."/>
     <Tripdata
    image={Trip3}
    heading="Trip To Saudi Arabia"
    text="
    The Kingdom of Saudi Arabia is the largest Arab country of the Middle East. It is bordered by Jordan and Iraq on the north and northeast, Kuwait, Qatar, Bahrain and the United Arab Emirates on the east, Oman on the southeast, and Yemen on the south.."
    />
    </div>
    </div>
  );
}

export default Trip
