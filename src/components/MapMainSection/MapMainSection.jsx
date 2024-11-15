import { YMaps, Map, Placemark, GeolocationControl, RouteButton, ZoomControl } from '@pbe/react-yandex-maps';
import './MapMainSection.css'


export default function MapMainSection() {

  return (
    <YMaps query={{ apikey: '9f8f472c-08bd-4dbb-8ecb-aeb1629d15e7' }}>
      <section className='map-container' id='map'>
        <Map
          state={{
            center: [56.80902438957232, 60.66610291540516],
            zoom: 12,
          }} style={{ width: '100%', height: '700px', margin: '0 auto' }}
          modules={['multiRouter.MultiRoute']}
        >

          <Placemark
            geometry={[56.81749856789753, 60.61025750000001]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                                <h3>Общежитие №1</h3>
                                <img src="../../../../public/dormitory1.jpg" alt="Фото места"/>
                                <p>Студенческое общежитие №1 находится по адресу ул. Большакова, 79.</p>
                            </div>
                            `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.817591567897736, 60.61095800000002]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №2</h3>
                              <img src="../../../../public/dormitory2.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №2 находится по адресу ул. Большакова, 77.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.840237067865424, 60.65728449999998]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №3</h3>
                              <img src="../../../../public/dormitory3.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №3 находится по адресу ул. Малышева, 140.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.817882567898494, 60.61280849999994]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №4</h3>
                              <img src="../../../../public/dormitory4.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №4 находится по адресу ул. Большакова, д. 71.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.84041406786595, 60.65898199999999]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №5</h3>
                              <img src="../../../../public/dormitory5.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №5 находится по адресу ул. Малышева, д. 144.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.817286567896986, 60.611991499999995]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №6</h3>
                              <img src="../../../../public/dormitory6.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №6 находится по адресу ул. Чапаева, д. 16а.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.83853718735082, 60.65632499073791]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №7</h3>
                              <img src="../../../../public/dormitory7.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №7 находится по адресу ул. Комитерна, д. 3.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.83790415111557, 60.65996249339293]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №8</h3>
                              <img src="../../../../public/dormitory8.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №8 находится по адресу ул. Комсомольская, д. 70.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.837863015710695, 60.65905242330624]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №9</h3>
                              <img src="../../../../public/dormitory9.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №9 находится по адресу ул. Фонвизина, 8.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.842216067870574, 60.64132149999999]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №10</h3>
                              <img src="../../../../public/dormitory10.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №10 находится по адресу ул. Ленина, д. 66.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.83731206785796, 60.6567814999999]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №11</h3>
                              <img src="../../../../public/dormitory11.webp" alt="Фото места"/>
                              <p>Студенческое общежитие №11 находится по адресу ул. Коминтерна, д. 5.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.837651478346885, 60.65744564418028]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №12</h3>
                              <img src="../../../../public/dormitory12.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №12 находится по адресу ул. Фонвизина, д. 4.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.83953306786366, 60.65905399999992]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №13</h3>
                              <img src="../../../../public/dormitory13.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №13 находится по адресу ул. Комсомольская, 66а.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.839321067863125, 60.65590099999999]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №14</h3>
                              <img src="../../../../public/dormitory14.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №14 находится по адресу ул. Комитерна, д. 1а.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.8367655678867, 60.657948999999896]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №15</h3>
                              <img src="../../../../public/dormitory15.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №15 находится по адресу ул. Коминтерна, д.11.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.84159248324784, 60.658029057925745]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №16</h3>
                              <img src="../../../../public/dormitory16.jpg" alt="Фото места"/>
                              <p>Студенческое общежитие №16 находится по адресу ул. Малышева, д. 127а.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.774391067937536, 60.60801149999998]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие №17</h3>
                              <img src="../../../../public/dormitory17.jpg" alt="Фото места"/>
                              <p>Общежитие № 17 находится по адресу ул. Агрономическая, д. 37.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.77171806793063, 60.760617499999995]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие в НВК №1</h3>
                              <img src="../../../../public/dormitoryNVK1.jpg" alt="Фото места"/>
                              <p>Общежитие в НВК №1 находится по адресу ул. 100 летия Уральского университета, д. 6.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <Placemark
            geometry={[56.77163406793043, 60.762342499999974]}
            properties={{
              balloonContentBody: `
                            <div class="mark-container">
                              <h3>Общежитие в НВК №2</h3>
                              <img src="../../../../public/dormitoryNVK2.jpg" alt="Фото места"/>
                              <p>Общежитие в НВК №2 находится по адресу ул. 100 летия Уральского университета, д. 6/2.</p>
                            </div>
                              `,
            }}
            modules={['geoObject.addon.balloon']}
          />

          <GeolocationControl options={{ float: "left" }} />
          <RouteButton
            options={{ float: "right" }}
            referencePoints={[
              [56.81749856789753, 60.61025750000001],
              [56.77163406793043, 60.762342499999974]
            ]}
            params={{
              routingMode: 'masstransit', // Режим маршрутизации (можно выбрать другой режим, например, 'pedestrian')
            }} />
          {/* <SearchControl options={{ float: "right" }} /> */}
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </section>
    </YMaps >
  )
}
