/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
import data from './data';

const CarouselCards = () => (
  <Carousel
    layout="default"
    layoutCardOffset={9}
    data={data}
    renderItem={CarouselCardItem}
    sliderWidth={SLIDER_WIDTH}
    itemWidth={ITEM_WIDTH}
    useScrollView={true}
    loop={true}
  />
);

export default CarouselCards;
