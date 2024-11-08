import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './SliderSection.css';
import { YMaps, Map, Placemark, GeolocationControl, RouteButton, SearchControl, ZoomControl } from '@pbe/react-yandex-maps';
import { cards } from '../../data/InfoDormitory';


export default function SliderSection() {
    const settings = {
        draggable: false,
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,

        accessibility: true,
        centerMode: true,
    };

    return (
        <section className='sliders-container'>
            <h2>Slider</h2>
            <Slider {...settings}>
                {cards.map(card => (
                    <section key={card.id} className='slider-container'>
                        <div className="content">
                            <div className="left-side">
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <a href="#">ссылка</a>
                            </div>
                            <div className="right-side">

                            </div>
                        </div>
                    </section>
                ))}
            </Slider>
        </section>
    );
}