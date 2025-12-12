import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img01 from '../../../assets/banner01.png'
import img02 from '../../../assets/banner02.png'
import img03 from '../../../assets/banner03.png'

const Banner = () => {
    return (
        <Carousel infiniteLoop={true} showThumbs={false} autoPlay={true} className=''>
            <div>
                <img src={img01}/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src={img02}/>
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <img src={img03}/>
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    );
};

export default Banner;