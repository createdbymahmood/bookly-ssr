/* test modules */
import { RenderResult } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
/* helpers */
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
import { setupWrapper } from 'helpers/setupWrapper';
/* component */
import { BookBox } from './BookBox';
/* types */
import { $ElementProps } from 'types/global';

describe('<BookBox />', () => {
    const onDeleteBook = jest.fn();

    const props: $ElementProps<typeof BookBox> = {
        id: '1',
        author: 'Mahmood Bagheri',
        initialLikeState: true,
        title: 'جز از کل',
        imageSrc: generateFakeImageUrl(),
        onDeleteBook,
    };

    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = setupWrapper(BookBox, props);
    });

    it('Should render title', () => {
        const title = wrapper.getByText(props.title);
        expect(title).toBeInTheDocument();
    });

    it('Should render author', () => {
        const author = wrapper.getByText(props.author);
        expect(author).toBeInTheDocument();
    });

    it('Should render image', () => {
        const image = wrapper.getByTestId(/bookImage/i);
        expect(image).toBeInTheDocument();
    });

    it('Should render with the provided src', () => {
        const image = wrapper.queryByTestId(/bookImage/i) as HTMLImageElement;
        expect(image.src).toContain(props.imageSrc);
    });

    it('Testing useLikeBook execution', async () => {
        /*
        todo
        */
    });
    it('Testing useDeleteBook execution', async () => {
        /*
        todo
        */
    });
});
