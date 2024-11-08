import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className='logo-container'>
                <h3>StudentQuarters</h3>
                <img className="logo" src='../../../public/logo2.png'></img>
            </div>

            <nav>
                <ul>
                    <li><a href='#'>В начало</a></li>
                    <li><a href='#'>Карта</a></li>
                    <li><a href='#'>Актуальная информация</a></li>
                </ul>
            </nav>
        </header>
    )
}