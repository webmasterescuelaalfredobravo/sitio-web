import React from 'react';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import Img from 'gatsby-image';
import 'pure-react-carousel/dist/react-carousel.es.css';
const SlideInterno = ({ slides }) => {


    return (
        <section className="slide-interno column section is-full">
            <CarouselProvider
                naturalSlideWidth={1031}
                naturalSlideHeight={339}
                totalSlides={slides.length}
                dots="true" infinite="true"
                isIntrinsicHeight="true"
            >
                <Slider>
                    {slides.map((unSlide, index) => (
                        <Slide key={index}>
                            <div className={"columns slide-wrapper "}>
                                <div className="solo-mobile column">
                                    {unSlide.titulo && <p className="titulo">{unSlide.titulo} </p>}
                                    {unSlide.fecha && <p className="fecha">{unSlide.fecha}</p>}
                                </div>
                                <div className="column">

                                    <Img fixed={unSlide.imagenfondo.childImageSharp.fixed} />

                                </div>
                                <div className="column">

                                    {unSlide.titulo && <p className="titulo no-mobile">{unSlide.titulo} </p>}
                                    {unSlide.fecha && <p className="fecha no-mobile">{unSlide.fecha}</p>}
                                    <div className="textodet-slide">
                                        {unSlide.texto && <div className="texto">{unSlide.texto}</div>}
                                        {unSlide.link && <a className="leer-mas" href={unSlide.link} >
                                        Leer más</a>}
                                    </div>

                                </div>

                            </div>

                        </Slide>
                    ))}
                </Slider>
                <DotGroup className="puntos" />
                <ButtonBack className="navegador-slides slide-anterior">&lt;</ButtonBack>
                <ButtonNext className="navegador-slides slide-siguiente">&gt;</ButtonNext>
            </CarouselProvider>


        </section>
    );
};

SlideInterno.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            imagenfondo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            texto: PropTypes.string,
            titulo: PropTypes.string,
            fecha: PropTypes.string,
        })
    ),
};

export default SlideInterno;
