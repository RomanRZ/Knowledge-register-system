import React, { Component } from 'react';

import './Slider.scss';
import img1 from '../../../../img/slider/img/1200/pexels-photo-287229.jpeg';
import img2 from '../../../../img/slider/img/1200/pexels-photo-456710.jpeg';
import img3 from '../../../../img/slider/img/1200/pexels-photo-775219.jpeg';
import img4 from '../../../../img/slider/img/1200/pexels-photo-1081111.jpeg';

export default class Slider extends Component {
  state = { images: [img1, img2, img3, img4], current: 0 };
  leftHandler = () => {
    this.setState(({ images, current }) => {
      if (current === 0) {
        return {
          current: images.length - 1
        };
      }
      if (current > 0) {
        return {
          current: current - 1
        };
      }
    });
  };
  rightHandler = () => {
    this.setState(({ images, current }) => {
      if (current < images.length - 1) {
        return {
          current: current + 1
        };
      }
      if (current === images.length - 1) {
        return {
          current: 0
        };
      }
    });
  };
  render() {
    const { images, current } = this.state;
    let cls = 'slider__box';
    switch (current) {
      case 0:
        cls = 'slider__box';
        break;
      case 1:
        cls += ' slider__box--second';
        break;
      case 2:
        cls += ' slider__box--third';
        break;
      case 3:
        cls += ' slider__box--fourth';
        break;
      default:
        break;
    }
    return (
      <div className='slider'>
        <div className='slider__prev' onClick={this.leftHandler}>
          Prev
        </div>
        <div className='slider__next' onClick={this.rightHandler}>
          Next
        </div>
        <div className={cls}>
          {images.map((img, index) => (
            <div className='slider__item' key={index}>
              <img src={img} alt={index} className='slider__img' />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
