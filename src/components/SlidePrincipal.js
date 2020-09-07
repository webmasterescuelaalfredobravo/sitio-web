import React from 'react';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const SlidePrincipal = ({ slides }) => {
    const getSlide = (unSlide, index) => (<Slide index={index}>
        {unSlide.alineado === "izquierda" &&
            <div className={"columns slide-wrapper " + unSlide.alineado + (unSlide.alineado === "izquierda" ? " is-reverse-mobile" : "")}>

                <div className={"column caja-contenido "}>
                    <div className="textodet-slide">
                        {unSlide.texto && <div className="texto">{unSlide.texto}</div>}
                        {unSlide.link && <a className="leer-mas" href={unSlide.link} >
                            Leer más</a>}
                    </div>
                </div>
                <div className={"column imagen is-two-thirds"}>
                    <img src={unSlide.imagenfondo.publicURL} alt={unSlide.texto} />
                </div>
            </div>}
        {unSlide.alineado === "derecha" &&
            <div className={"columns slide-wrapper " + unSlide.alineado + (unSlide.alineado === "izquierda" ? " is-reverse-mobile" : "")}>
                <div className={"column imagen is-two-thirds"}>
                    <img src={unSlide.imagenfondo.publicURL} alt={unSlide.texto} />
                </div>
                <div className={"column caja-contenido "}>
                    <span>
                        {unSlide.texto && <div className="texto">{unSlide.texto} </div>}
                        {unSlide.link && <a className="leer-mas" href={unSlide.link} >
                            Leer más</a>}
                    </span>
                </div>
            </div>
        }

    </Slide>);

    // carousel__dot--selected
    return (
        <section className="slide-principal column section is-full">
            <CarouselProvider
                className={"no-mobile"}
                naturalSlideWidth={1000}
                naturalSlideHeight={468}
                totalSlides={slides.length}
                dots="true" infinite="true"
            >
                <Slider className={""}>
                    {slides.map((unSlide, index) => {
                        return getSlide(unSlide, index);
                    }
                    )}
                </Slider>
                <DotGroup className="puntos" />
                <ButtonBack className="navegador-slides slide-anterior"></ButtonBack>
                <ButtonNext className="navegador-slides slide-siguiente"></ButtonNext>
            </CarouselProvider>

            <CarouselProvider
                className={"solo-mobile"}
                naturalSlideWidth={370}
                naturalSlideHeight={780}
                totalSlides={slides.length}
                dots="true" infinite="true"
            >
                <Slider className={""}>
                    {slides.map((unSlide, index) => {
                        return getSlide(unSlide, index);
                    }
                    )}
                </Slider>
                <DotGroup className="puntos" />
                <ButtonBack className="navegador-slides slide-anterior"></ButtonBack>
                <ButtonNext className="navegador-slides slide-siguiente"></ButtonNext>
            </CarouselProvider>
            <div className="is-two-thirds"></div>
        </section >
    );
};
SlidePrincipal.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            imagenfondo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            texto: PropTypes.string,
            link: PropTypes.string,
            alineado: PropTypes.string,
        })
    ),
};

export default SlidePrincipal;
