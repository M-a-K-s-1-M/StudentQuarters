import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function MapSection() {
    return (
        <YMaps>
            <section className='map-container'>
                <Map
                    state={{
                        center: [55.75, 37.57],
                        zoom: 9,
                    }} style={{ width: '1000px', height: '500px', margin: '0 auto', textAlign: 'center' }}
                >

                    <Placemark geometry={[55.75, 37.57]} />
                </Map>
            </section>
        </YMaps>
    )
}
