/* test modules */
import { RenderResult } from '@testing-library/react';
/* helpers */
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
import { setupWrapper } from 'helpers/setupWrapper';
/* component */
import { BookDetailsBox } from './BookDetailsBox';
/* types */
import { $ElementProps } from 'types/global';
import s from './BookDetailsBox.module.scss';

describe('<BookDetailsBox />', () => {
    const props: $ElementProps<typeof BookDetailsBox> = {
        id: '1',
        author: 'Mahmood Bagheri',
        title: 'جز از کل',
        imageSrc: generateFakeImageUrl(),
    };

    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = setupWrapper(BookDetailsBox, props);
    });

    it('Box should have shadow', () => {
        const box = wrapper.queryByTestId(/wrapper/i) as HTMLDivElement;
        expect(box.classList).toContain(`shadow`);
    });
    it("Box should have it's css modueles class", () => {
        const box = wrapper.queryByTestId(/wrapper/i) as HTMLDivElement;
        expect(box.classList).toContain(s.box);
    });
    it('Box should be in the document', () => {
        const box = wrapper.queryByTestId(/wrapper/i) as HTMLDivElement;
        expect(box).toBeInTheDocument();
    });
    it("edit button should have it's classname", () => {
        const editButton = wrapper.queryByTestId(
            /editButton/i
        ) as HTMLDivElement;
        expect(editButton.classList).toContain(s.editIcon);
    });

    it('Should render title', () => {
        const title = wrapper.getByText(props.title);
        expect(title).toBeInTheDocument();
    });

    it('Should render author', () => {
        const author = wrapper.getByText(props.author);
        expect(author).toBeInTheDocument();
    });
});
