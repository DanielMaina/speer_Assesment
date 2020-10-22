import React from 'react';
import Slider from '../components/Home/Carousel/Slider'
// import Banner from "../components/Home/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';

const images = [
    'https://public-v2links.adobecc.com/2fc0268c-c59f-4ac5-46f8-fe3c819f1e6f/component?params=component_id%3Ac2ea7f76-0124-4d10-bc03-bc2be67c5e12&params=version%3A0&token=1603427947_da39a3ee_a9d5057f089d4b22b75e90fe8c8f45a12568ab9b&api_key=CometServer1',
    'https://public-v2links.adobecc.com/2fc0268c-c59f-4ac5-46f8-fe3c819f1e6f/component?params=component_id%3A046e33d2-3f2f-4a90-9b25-f80265473230&params=version%3A0&token=1603427947_da39a3ee_a9d5057f089d4b22b75e90fe8c8f45a12568ab9b&api_key=CometServer1',
    'https://public-v2links.adobecc.com/2fc0268c-c59f-4ac5-46f8-fe3c819f1e6f/component?params=component_id%3A8dcf47fb-7b2e-465b-ac6e-266f0d72c0cd&params=version%3A0&token=1603427947_da39a3ee_a9d5057f089d4b22b75e90fe8c8f45a12568ab9b&api_key=CometServer1'
  ]

export default function Home() {
    return (
        <div className="landing">
             <Slider slides={images}
                    autoPlay={3}/>
            {/* <Banner /> */}
                
        </div>
    )
}

