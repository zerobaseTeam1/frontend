'use client';

import React, { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, IconButton, Text } from '@chakra-ui/react';

export default function Carousel() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const top = '50%';
  const side = '10px';

  const cards = [
    'https://via.placeholder.com/360x324.png?text=Slide+1',
    'https://via.placeholder.com/360x324.png?text=Slide+2',
    'https://via.placeholder.com/360x324.png?text=Slide+3',
  ];

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next + 1),
  };

  return (
    <Box position="relative" height="324px" width="360px" overflow="hidden">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

        {/* Left Arrow */}
        <IconButton
        aria-label="left-arrow"
        variant="ghost"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        _hover={{ bg: 'rgba(0, 0, 0, 0.1)', color: 'var(--gray100)' }}
        _active={{ bg: 'rgba(0, 0, 0, 0.4)' }}
      >
        <Text fontFamily="'SUIT'" fontSize="xl" color="white">
          {'<'}
        </Text>
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
        _hover={{ bg: 'rgba(0, 0, 0, 0.1)', color: 'var(--gray100)' }}
        _active={{ bg: 'rgba(0, 0, 0, 0.4)' }}
      >
        <Text fontFamily="'SUIT'" fontSize="xl" color="white">
          {'>'}
        </Text>
      </IconButton>

      <Slider
        dots={settings.dots}
        arrows={settings.arrows}
        fade={settings.fade}
        infinite={settings.infinite}
        autoplay={settings.autoplay}
        speed={settings.speed}
        autoplaySpeed={settings.autoplaySpeed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        beforeChange={settings.beforeChange}
        ref={(sliderRef) => setSlider(sliderRef)}
      >
        {cards.map((url) => (
          <Box
            key={url}
            height="324px"
            width="360px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>

      <Box
        position="absolute"
        bottom="10px"
        right="10px"
        height="30px"
        width="50px"
        background="rgba(0, 0, 0, 0.5)"
        borderRadius="var(--border-radius-lg)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <Text fontSize="var(--font-size-sm)" fontWeight="var(--font-regular)">
          {currentSlide}/{cards.length}
        </Text>
      </Box>
    </Box>
  );
}