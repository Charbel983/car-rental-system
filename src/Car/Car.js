import React, {useState} from 'react';
import './Car.css';
import rs3Back from './RS3/rs3-back.jpg';
import rs3Front from './RS3/rs3-front.jpg';
import rs3Interior from './RS3/rs3-interior.jpg';
import landCruiserBack from './LandCruiser/landCruiser-back.jpg';
import landCruiserFront from './LandCruiser/landCruiser-front.jpg';
import landCruiserInterior from './LandCruiser/landCruiser-interior.jpg';
import brzBack from './BRZ/brz-back.jpg';
import brzFront from './BRZ/brz-front.jpg';
import brzInterior from './BRZ/brz-interior.jpg';
import golfBack from './Golf/golf-back.JPG';
import golfFront from './Golf/golf-front.jpg';
import golfInterior from './Golf/golf-interior.jpg';
import mercedesBack from './Mercedes/mercedes-back.jpg';
import mercedesFront from './Mercedes/mercedes-front.jpg';
import mercedesInterior from './Mercedes/mercedes-interior.jpg';
import jaguarBack from './Jaguar/jaguar-back.jpg';
import jaguarFront from './Jaguar/jaguar-front.jpg';
import jaguarInterior from './Jaguar/jaguar-interior.jpg';
import giuliaBack from './Giulia/giulia-back.jpeg';
import giuliaFront from './Giulia/giulia-front.png';
import giuliaInterior from './Giulia/giulia-interior.jpg';
import z4Back from './Z4/z4-back.jpg';
import z4Front from './Z4/z4-front.jpg';
import z4Interior from './Z4/z4-interior.jpg';
import ghibliBack from './Ghibli/ghibli-back.jpg';
import ghibliFront from './Ghibli/ghibli-front.jpg';
import ghibliInterior from './Ghibli/ghibli-interior.jpg';
import corvetteBack from './Corvette/corvette-back.jpg';
import corvetteFront from './Corvette/corvette-front.jpg';
import corvetteInterior from './Corvette/corvette-interior.jpg';
import camaroBack from './Camaro/camaro-back.jpg';
import camaroFront from './Camaro/camaro-front.jpg';
import camaroInterior from './Camaro/camaro-interior.jpg';
import corollaBack from './Corolla/corolla-back.jpg';
import corollaFront from './Corolla/corolla-front.jpg';
import corollaInterior from './Corolla/corolla-interior.jpg';
import arrowL from '../arrowLeft.png';
import arrowR from '../arrowRight.png';

const arrows = [
    {src: arrowL},
    {src: arrowR}
]

const rs3Slides = [
    {src: rs3Back},
    {src: rs3Front},
    {src: rs3Interior}
]

const landCruiserSlides = [
    {src: landCruiserBack},
    {src: landCruiserFront},
    {src: landCruiserInterior}
]

const brzSlides = [
    {src: brzBack},
    {src: brzFront},
    {src: brzInterior}
]

const golfSlides = [
    {src: golfBack},
    {src: golfFront},
    {src: golfInterior}
]

const mercedesSlides = [
    {src: mercedesBack},
    {src: mercedesFront},
    {src: mercedesInterior}
]

const jaguarSlides = [
    {src: jaguarBack},
    {src: jaguarFront},
    {src: jaguarInterior}
]

const giuliaSlides = [
    {src: giuliaBack},
    {src: giuliaFront},
    {src: giuliaInterior}
]

const z4Slides = [
    {src: z4Back},
    {src: z4Front},
    {src: z4Interior}
]

const ghibliSlides = [
    {src: ghibliBack},
    {src: ghibliFront},
    {src: ghibliInterior}
]

const corvetteSlides = [
    {src: corvetteBack},
    {src: corvetteFront},
    {src: corvetteInterior}
]

const camaroSlides = [
    {src: camaroBack},
    {src: camaroFront},
    {src: camaroInterior}
]

const corollaSlides = [
    {src: corollaBack},
    {src: corollaFront},
    {src: corollaInterior}
]

const Car = (props) => {

    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    if(!Array.isArray(props.slides) || props.slides.length <= 0){
        return null;
    }

    return <div className="card">
            <div className="container">
            <div className="slider">
                {props.slides.map((slide,index) => {
                    return (
                        <div className={index===current ? 'slide action' : 'slide'} key={index}>
                            {index === current && (<img src={slide.src} alt='' className="image"/>)}
                        </div>
                    );
                })}
            </div>
            <img src={arrows[0].src} alt='' className="left" onClick={prevSlide} />   <img src={arrows[1].src} alt='' className="right" onClick={nextSlide} /> </div>
            <p><b>Car Name:  </b>{props.carName}</p>
            <p><b>Type:  </b><b className="tag">{props.type}</b></p>
            <p><b>Model:  </b>{props.model}</p>
            <p><b>Description:  </b> {props.description}</p>
            <p><b>Number of rentals:  </b> {props.rent}    <button style={props.styling} onClick={props.toggle}>{props.text} Rent</button></p>
    </div>
};

export default Car;
export {landCruiserSlides, rs3Slides, brzSlides, golfSlides, 
    mercedesSlides, jaguarSlides, giuliaSlides, z4Slides, ghibliSlides,
    corvetteSlides, camaroSlides, corollaSlides};