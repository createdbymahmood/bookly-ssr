/* test modules */
import { RenderResult } from '@testing-library/react';
/* helpers */
import { setupWrapper } from 'helpers/setupWrapper';
import { uniqueId } from 'helpers/uniqueId';
/* component */
import { CategoryBox } from './CategoryBox';
/* types */
import { $ElementProps } from 'types/global';
import s from './CategoryBox.module.scss';
import { routeTo } from 'helpers/routeTo';

describe('<CategoryBox />', () => {
    const props: $ElementProps<typeof CategoryBox> = {
        categoryTitle: 'Scientific',
        id: uniqueId(),
        className: 'Extra ClassName',
    };

    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = setupWrapper(CategoryBox, props);
    });

    it('Should have a title', () => {
        const categoryTitle = wrapper.getByText(props.categoryTitle);
        expect(categoryTitle).toBeInTheDocument();
    });

    it('Should have an image', () => {
        const categoryImage = wrapper.getByTestId(
            /categoryImage/i
        ) as HTMLImageElement;
        expect(categoryImage).toBeInTheDocument();
    });

    it('Should only have one image', () => {
        const categoryImages = wrapper.getAllByTestId(
            /categoryImage/i
        ) as HTMLImageElement[];
        expect(categoryImages.length).toBe(1);
    });

    it('Should apply classname to picture tag correctly', () => {
        const pictureCover = wrapper.getByTestId(/pictureCover/i);
        expect(pictureCover.classList).toContain(s.picture);
    });

    it('Image should have an alt tag of categoryTitle', () => {
        const categoryImage = wrapper.getByTestId(
            /categoryImage/i
        ) as HTMLImageElement;
        expect(categoryImage.alt).toBe(props.categoryTitle);
    });

    it('Should have a link to category single page ', () => {
        const link = wrapper.getByTestId(/categoryLink/i) as HTMLAnchorElement;
        const createdLinkToCategoryPage = routeTo.category(props.id).as;
        expect(link.href).toContain(createdLinkToCategoryPage);
    });

    it('Should apply extra classname ', () => {
        const box = wrapper.getByTestId(/box/i) as HTMLDivElement;
        expect(box.classList).toContain(props.className);
    });
});
