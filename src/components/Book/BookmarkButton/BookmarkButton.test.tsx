/* test modules */
import { fireEvent, RenderResult, cleanup } from '@testing-library/react';
/* helpers */
import { setupWrapper } from 'helpers/setupWrapper';
/* component */
import { BookmarkButton, defaultOnBookmarkStateChange } from './BookmarkButton';
/* types */
import { $ElementProps } from 'types/global';
/* styles */
import s from './BookmarkButton.module.scss';

describe('<BookmarkButton />', () => {
    describe('Testing the component with initialBookmarkState of true', () => {
        const props = {
            onBookmarkStateChange: jest.fn(),
            initialBookmarkState: true,
        };

        let wrapper: RenderResult;

        beforeEach(() => {
            wrapper = setupWrapper(BookmarkButton, props);
        });
        afterAll(cleanup);

        it('Should fire onBookmarkStateChange in click of icon', () => {
            const bookmarkIcon = wrapper.getByTestId(
                /bookmarkIcon/i
            ) as HTMLImageElement;
            fireEvent.click(bookmarkIcon);
            expect(props.onBookmarkStateChange).toHaveBeenCalledTimes(1);
        });
        it('Should have correct src', () => {
            const iconSrc = '/icons/bookmark.svg';
            const bookmarkIcon = wrapper.getByTestId(
                /bookmarkIcon/i
            ) as HTMLImageElement;
            expect(bookmarkIcon.src).toContain(iconSrc);
        });

        it('Should have correct style based on the initial like state', () => {
            const bookmarkIcon = wrapper.getByTestId(
                /bookmarkIcon/i
            ) as HTMLImageElement;

            expect(bookmarkIcon.classList).toContain(s.black);
            expect(bookmarkIcon.classList).toContain(s.bookmark);
        });
    });

    describe('Testing the component with initialBookmarkState of false', () => {
        const props = {
            onBookmarkStateChange: jest.fn(),
            initialBookmarkState: false,
        };

        let wrapper: RenderResult;

        beforeEach(() => {
            wrapper = setupWrapper(BookmarkButton, props);
        });
        afterAll(cleanup);

        it('Should have correct classnames on initialState of false', () => {
            const bookmarkIcon = wrapper.getByTestId(
                /bookmarkIcon/i
            ) as HTMLImageElement;

            console.log(bookmarkIcon.classList.toString());
            expect(bookmarkIcon.classList).not.toContain(s.black);
            expect(bookmarkIcon.classList).toContain(s.bookmark);
        });
    });
});
