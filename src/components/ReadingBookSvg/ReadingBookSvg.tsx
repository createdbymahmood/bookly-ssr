import React, { FC } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { BookSvgProps } from './ReadingBookSvg.types';
/* styles */
import s from './ReadingBookSvg.module.scss';
import { Image } from 'components/Image';

export const ReadingBookSvg: FC<BookSvgProps> = ({
    className,
    ...restProps
}) => {
    return (
        <Image
            src={'/icons/reading-book.svg'}
            className={clsx(s.picture, className)}
            {...restProps}
        />
    );
};
