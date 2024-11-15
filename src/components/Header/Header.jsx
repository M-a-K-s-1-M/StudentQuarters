import './Header.css';
import { useEffect } from 'react';
import scrollIntoView from '../service/scrollIntoView';

export default function Header() {

    // Использование в компоненте
    useEffect(() => {
        scrollIntoView(window.location.hash.slice(1));
    }, []);


    return (
        <header className="header">
            <div className='logo-container' onClick={(evt) => {
                evt.preventDefault();
                scrollIntoView('hero');
            }}>
                <h3>StudentQuarters</h3>
                <img className="logo" src='../../../public/logo2.png'></img>
            </div>

            <nav>
                <ul>
                    <li href='#' onClick={(evt) => {
                        evt.preventDefault();
                        scrollIntoView('hero')
                    }}>В начало</li>
                    <li href='#' onClick={(evt) => {
                        evt.preventDefault();
                        scrollIntoView('map')
                    }}>Карта общежитий</li>
                    <li href='#' onClick={(evt) => {
                        evt.preventDefault();
                        scrollIntoView('slider')
                    }}>Информация об общежитиях</li>
                </ul>
            </nav>
        </header>
    )
}