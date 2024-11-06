import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './SliderSection.css';

const cards = [
    {
        id: 1,
        imageUrl: '../../../public/dormitory1.jpg',
        title: 'Card Title 1',
        description: 'Description for Card 1'
    },
    {
        id: 2,
        imageUrl: '../../../public/dormitory2.jpg',
        title: 'Card Title 2',
        description: 'Description for Card 2'
    },
    {
        id: 3,
        imageUrl: '../../../public/dormitory3.jpg',
        title: 'Card Title 3',
        description: 'Description for Card 3'
    },
    {
        id: 4,
        imageUrl: '../../../public/dormitory4.jpg',
        title: 'Card Title 4',
        description: 'Description for Card 4'
    }
];


export default function SliderSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,

        accessibility: true,
        centerPadding: '30px'
    };

    return (
        <section className='sliders container'>
            <h2>Slider</h2>
            <Slider {...settings}>
                {cards.map(card => (
                    <section key={card.id} className='slider-container'>
                        <div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <a href="#">ссылка</a>
                        </div>
                        <img src={card.imageUrl} alt={card.title} />
                    </section>
                ))}
            </Slider>
        </section>
    );
}