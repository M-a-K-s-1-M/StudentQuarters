import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './SliderSection.css';
import { cards } from '../../data/InfoDormitory';
import { useState } from 'react';


export default function SliderSection() {
    const settings = {
        draggable: true,
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
        <section className='sliders-container' id='slider'>
            <div className='title-wrapper'>
                <h2>Информация об общежитиях</h2>
            </div>
            <Slider {...settings}>
                {cards.map(card => (
                    <section key={card.id} className='slider-container'>
                        <div className="content" >
                            <div className="left-side">
                                <ul className='dormitory-list'>
                                    <li>
                                        <h3>{card.title}</h3>
                                        <div className='text-block'>
                                            <p className='text-content'>{card.description}</p>
                                        </div>
                                    </li>

                                    {card.vkUrl !== '-' &&
                                        <li>
                                            <h3>Контакты</h3>
                                            <div>
                                                <span>Сообщество общежития в <a href={card.vkUrl}>ВК</a></span>
                                                {card.chairmanName != '-' && <span>Председатель ССК <a href={card.chairmanVkUrl}>{card.chairmanName}</a></span>}
                                            </div>
                                        </li>
                                    }
                                </ul>
                            </div>

                            <div className="right-side">
                                <img src={card.imageUrl} alt={card.title} />

                                {card.timeWork !== '-' &&
                                    <div>
                                        <h3>Режим работы</h3>
                                        <p>{card.timeWork}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                ))}
            </Slider>
        </section>
    );
}