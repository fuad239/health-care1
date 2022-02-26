import React from 'react';
import './Banner.css';
import banner from '../../../image/banner.jpg'
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className='banner'>

            <Carousel style={{ maxHeight: '400px', width: '100%', overflow: 'hidden' }}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/sF7myg1/diana-polekhina-r6u-fhltch-E-unsplash.jpg"
                        alt="First slide"
                        style={{ height: '400px', objectPosition: 'center', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Best Medicines</h3>
                        <p>We prefer  less medicines,we prefer best service,best doctors,best treatments.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Gpb2vfg/nurse-measuring-patient-blood-pressure.jpg"
                        alt="Second slide"
                        style={{ height: '400px', objectPosition: 'center', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Best Treatment</h3>
                        <p>We provide best treatment,best medicines and also best doctors.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6P0pzzM/pexels-vidal-balielo-jr-3376799.jpg"
                        alt="Third slide"
                        style={{ height: '400px', objectPosition: 'center', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Best Surgery</h3>
                        <p>For surgery we have best doctors,ICU,operation Theater are available in here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;