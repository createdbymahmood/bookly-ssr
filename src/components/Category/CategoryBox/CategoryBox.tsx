import React, { FC } from 'react';
/* components */
import { Text } from 'components/Text';
import { Link } from 'components/Link';
import { Image } from 'components/Image';
/* modules */
import clsx from 'classnames';
/* helpers */
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
import { routeTo } from 'helpers/routeTo';
/* types */
import { CategoryBoxProps } from './CategoryBox.types';
/* styles */
import s from './CategoryBox.module.scss';

export const CategoryBox: FC<CategoryBoxProps> = ({
    id: categoryId,
    categoryTitle,
    className,
}) => {
    return (
        <Link
            permission="category.readSingle"
            data-testid="categoryLink"
            {...routeTo.category(categoryId)}
        >
            <div data-testid="box" className={clsx(s.box, 'shadow', className)}>
                <picture data-testid="pictureCover" className={s.picture}>
                    <Image
                        data-testid="categoryImage"
                        alt={categoryTitle}
                        src={generateFakeImageUrl()}
                    />
                </picture>
                <Text className={s.title}>{categoryTitle}</Text>
            </div>
        </Link>
    );
};
