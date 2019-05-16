import React from 'react';
import './Gallery.scss';
import img1 from '../../../img/gallery/gal_1832_1024_1024.jpg';
import img2 from '../../../img/gallery/gal_2524_640_960.jpg';
import img3 from '../../../img/gallery/gal_3153_640_960.jpg';
import img4 from '../../../img/gallery/gal_4983_640_480.jpg';
import img5 from '../../../img/gallery/gal_7950_960_544.jpg';
import img6 from '../../../img/gallery/gal_7996_1152_864.jpg';
import img7 from '../../../img/gallery/gal_8897_1280_720.jpg';
import img8 from '../../../img/gallery/gal_10171_640_480.jpg';
import img9 from '../../../img/gallery/gal_10451_1280_720.jpg';
import img10 from '../../../img/gallery/gal_10455_600_1024.jpg';
import img11 from '../../../img/gallery/gal_10532_640_480.jpg';
import img12 from '../../../img/gallery/gal_11126_640_960.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
];

const Gallery = () => {
  return (
    <article className='gallery'>
      <h2 className='gallery__title'>Gallery</h2>
      <div className='gallery__container'>
        {images.map((img, index) => (
          <div className='gallery__box' key={index}>
            <img src={img} alt={img} className='gallery__img' />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Gallery;
