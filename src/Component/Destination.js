import React from 'react'
import "../Styles/Destination.css"
import image1 from '../assets/7.jpg';
import image2 from '../assets/8.jpg';
import image3 from '../assets/10.jpg';
import image4 from '../assets/11.jpg';
import image5 from '../assets/12.jpg';
import image6 from '../assets/13.jpg';
import Destinationdata from "./Destinationdata.js"
const Destination = () => {
    return (
           <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give ypu the opportunity to see a lot,within a time frame</p>
        <Destinationdata
        className="first-des"
        heading="Lord Howe Island,Australia"
        text="Experience the UNESCO World Heritage Listed Lord Howe Island!
        Transcend into pure simplicity
         beauty and luxury with this 6 night Lord Howe
          Island holiday package. Find paradise on this tiny 
          outcrop in the Pacific Ocean by staying in the luxurious
           Arajilla Retreat, which encapsulates the haven of tranquillity
            and peace that is Lord Howe Island. With an all inclusive breakfast,
             lunch and dinner for the duration of your stay, you will have more 
             time to discover this pocket of paradise"
        img1={image1}
        img2={image2}
        />
          <Destinationdata
        className="first-des-reverse"
        heading="Four Seasons resort bora bora"
        text="Experience a luxurious stay and outstanding service in the heart of French Polynesia at the 5-star Four Seasons Bora Bora!
        Revel in the beauty of French Polynesia with stays at the 5-star Four Seasons Bora Bora and InterContinental Tahiti Resort & Spa with this fabulous, 7-night package.  
        The Four Seasons Bora Bora welcomes you with its private beach, well-appointed overwater bungalows and beach villas overlooking the turquoise waters and views of Mount Otemanu. Toast sunsets from your private plunge pool, marvel at the Tahitian night sky, or simply lose yourself in our lagoon, where the waters teem with exotic reef fish and colourful corals."
        img1={image3}
        img2={image4}
        />
          <Destinationdata
        className="first-des"
        heading="Fiorland Cruise & Caves,America"
        text="Few destinations stir the imagination quite like New Zealand. Ancient, ice-carved fiords, rugged granite rocks, deep glacial lakes and pristine mountain to sea vistas are more beautiful than your imagination can conjure. Five days exploring the best of Fiordland National Park is a journey you won't want to miss.Begin your journey in Te Anau, the perfect base to explore the glacier-carved wilderness of the Southern Alps, marvel at the majestic mountain ranges and uncover the sparkling Lake Te Anau. Then, delve into the breathtaking scenery of Milford Sound as you explore its depths with an exciting cruise and uncover caves full of luminous glow worms, whirlpools and underground waterfalls and more!This incredible package includes four nights quality hotel accommodation, two day cruises, daily breakfast and more!"
        img1={image5}
        img2={image6}
        />
      </div>
      )
};

export default Destination
