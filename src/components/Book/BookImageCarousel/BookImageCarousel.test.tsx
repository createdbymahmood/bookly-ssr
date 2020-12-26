/* test modules */
import { RenderResult } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
/* helpers */
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
import { setupWrapper } from 'helpers/setupWrapper';
/* component */
import { BookImageCarousel, IMAGES_COUNT } from './BookImageCarousel';
/* types */
import { $ElementProps } from 'types/global';

describe('<BookImageCarousel />', () => {
    const props: $ElementProps<typeof BookImageCarousel> = {};
    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = setupWrapper(BookImageCarousel, props);
    });

    it('Should render swiper in the DOM', () => {
        const SWIPER_TESTID = new RegExp(/swiper/i);
        const carousel = wrapper.getByTestId(SWIPER_TESTID);
        expect(carousel).toBeInTheDocument();
    });
    it('Should render only one swiper in the DOM', () => {
        const SWIPER_TESTID = new RegExp(/swiper/i);
        const carousel = wrapper.getAllByTestId(SWIPER_TESTID);
        expect(carousel.length).toEqual(1);
    });

    it('Should render images in the correct length', () => {
        const LOOP_EXTRA_SLIDES = 4;
        const RENDERED_IMAGES_COUNT = IMAGES_COUNT + LOOP_EXTRA_SLIDES;
        const IMAGE_TESTID_REGEX = new RegExp(/carousel-image/i);
        const images = wrapper.getAllByTestId(IMAGE_TESTID_REGEX);
        expect(images.length).toBe(RENDERED_IMAGES_COUNT);
    });
});
