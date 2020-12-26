/* test modules */
import { RenderResult } from '@testing-library/react';
/* helpers */
import { setupWrapper } from 'helpers/setupWrapper';
/* component */
import { BooksGrid } from './BooksGrid';
/* types */
import { $ElementProps } from 'types/global';
import { mock } from 'helpers/mock';

describe('<BooksGrid />', () => {
    const BOOKS_COUNT = 10;
    const BOOKS_COUNT_ON_LOADING = 0;

    describe('With loading state of true', () => {
        const props: $ElementProps<typeof BooksGrid> = {
            books: mock('books', BOOKS_COUNT),
            loading: true,
        };
        let wrapper: RenderResult;

        beforeEach(() => {
            wrapper = setupWrapper(BooksGrid, props);
        });

        it(`Should NOT render ${BOOKS_COUNT} books`, () => {
            const BOOKBOX_TEST_ID = new RegExp(/bookBox/i);
            const books = wrapper.queryAllByTestId(BOOKBOX_TEST_ID);
            expect(books.length).not.toEqual(BOOKS_COUNT);
            expect(books.length).toEqual(BOOKS_COUNT_ON_LOADING);
        });
    });

    describe('With loading state of false', () => {
        const props: $ElementProps<typeof BooksGrid> = {
            books: mock('books', BOOKS_COUNT),
        };
        let wrapper: RenderResult;

        beforeEach(() => {
            wrapper = setupWrapper(BooksGrid, props);
        });

        it(`Should render ${BOOKS_COUNT} books correctly`, () => {
            const BOOKBOX_TEST_ID = new RegExp(/bookBox/i);
            const books = wrapper.getAllByTestId(BOOKBOX_TEST_ID);
            expect(books.length).toEqual(BOOKS_COUNT);
        });
    });
});
