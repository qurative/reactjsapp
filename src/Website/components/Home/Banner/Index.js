import React, { Component } from 'react'
import './style.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Banner extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                emulateTouch={true}
            >
                <div>
                    <img src="http://placeimg.com/1980/1080/nature" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://placeimg.com/1980/1080/arch" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://placeimg.com/1980/1080/tech" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
