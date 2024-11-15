import './Footer.css'
import scrollIntoView from '../service/scrollIntoView';

export default function Footer() {
    return (
        <footer className="footer">
            <div className='about-us'>
                <div className='logo-container' onClick={(evt) => {
                    evt.preventDefault();
                    scrollIntoView('hero');
                }}>
                    <h3>StudentQuarters</h3>
                    <img className="logo" src='../../../public/logo2.png'></img>
                </div>
                <p className='description'>Наш сайт – это интерактивный гид по миру общежитий УРФУ.</p>
            </div>

            <ul className='nav-footer'>
                <li onClick={(evt) => {
                    evt.preventDefault()
                    scrollIntoView('hero')
                }}>В начало</li>
                <li onClick={(evt) => {
                    evt.preventDefault()
                    scrollIntoView('map')
                }}>Карта общежитий</li>
                <li onClick={(evt) => {
                    evt.preventDefault()
                    scrollIntoView('slider')
                }}>Информация об общежитиях</li>
            </ul>

            <div className='social-container'>
                <h3>Социальные сети института</h3>
                <ul className='social-list'>
                    <li className='social-item'><a href='https://vk.com/ural.federal.university'><img src='../../../public/vk-icon.svg' /></a></li>
                    <li className='social-item'><a href='https://telegram.me/urfu_ru'><img src='../../../public/tg-icon.svg' /></a></li>
                    <li className='social-item'><a href='https://m.ok.ru/group/53080790335569'><img src='../../../public/ok-icon.png' /></a></li>
                </ul>
            </div>

        </footer>
    )
}