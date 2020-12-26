import React, { FC } from 'react';
/* components */
import { Image } from 'components/Image';
/* modules */
import SwiperCore, { Autoplay, SwiperOptions } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
/* helpers */
import { fakeArrayGenerator } from 'helpers/fakeArrayGenerator';
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
/* assets */
/* types */
import { BookImageCarouselProps } from './BookImageCarousel.types';
import { $ElementProps } from 'types/global';
/* styles */
import s from './BookImageCarousel.module.scss';

SwiperCore.use([Autoplay]);

const swiperOptions: $ElementProps<typeof Swiper> & SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1.1,
    loop: true,
    autoplay: {
        delay: 2000,
    },
};
export const IMAGES_COUNT = 10;
export const BookImageCarousel: FC<BookImageCarouselProps> = ({
    className,
    ...restProps
}) => {
    return (
        <Swiper data-testid="swiper" {...swiperOptions}>
            {fakeArrayGenerator(10).map(renderSwiperSlide)}
        </Swiper>
    );
};

const renderSwiperSlide = (item: unknown, index: number) => (
    <SwiperSlide key={index}>
        <Image
            data-testid="carousel-image"
            src={generateFakeImageUrl()}
            className={s.imageSlide}
        />
    </SwiperSlide>
);
