import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import './Maps.scss';

// Kiev
// latitude: 50.45466,
// longitude: 30.5238,

const Maps = () => (
  <div className='maps'>
    <YMaps>
      <Map
        width='100%'
        defaultState={{ center: [50.45466, 30.5238], zoom: 15 }}
      />
    </YMaps>
  </div>
);

export default Maps;
