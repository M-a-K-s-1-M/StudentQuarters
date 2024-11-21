import { YMaps, Map, Placemark, GeolocationControl, RouteButton, ZoomControl } from '@pbe/react-yandex-maps';
import './MapMainSection.css'
import { cards } from '../../data/InfoDormitory';


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
          {cards.map(card =>
            <>
              <Placemark
                geometry={card.position}
                properties={{
                  balloonContentBody: `
                              <div class="mark-container" key=${card.id}>
                                <div class="title-wrapper">
                                  <h3 class="title">${card.title}</h3>
                                </div>
                                <img src="../../../public/dormitory${card.id}.jpg"/>
                                <p class="description">${card.descriptionPlacemark}</p>
                                <div class="contacts-container">
                                  <h4 class="title">Контакты</h4>
                                  <p>Сообщество в <a href=${card.vkUrl}>ВК</a></p>
                                </div>
                              </div>
                              `,
                }}
                modules={['geoObject.addon.balloon']}
              />
            </>)}

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
