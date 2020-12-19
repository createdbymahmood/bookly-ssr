import React, { FC, useEffect } from 'react';
/* components */
import { Image } from 'components/Image';
/* modules */
import classnames from 'classnames';
import { useToggle } from 'react-use';
/* assets */
/* types */
import { BookmarkButtonComponentProps } from './BookmarkButton.types';
/* styles */
import s from './BookmarkButton.module.scss';

export const BookmarkButton: FC<BookmarkButtonComponentProps> = ({
    onBookmarkStateChange = defaultOnBookmarkStateChange,
    initialBookmarkState = false,
    ...restProps
}) => {
    const [bookmarkState, toggleBookmarkState] = useToggle(false);
    const svgColor = classnames(s.bookmark, { [s.black]: bookmarkState });
    useEffect(() => onBookmarkStateChange(bookmarkState), [bookmarkState]);

    return (
        <Image
            src={require('assets/icons/bookmark.svg')}
            onClick={toggleBookmarkState}
            className={svgColor}
            {...restProps}
        />
    );
};

const defaultOnBookmarkStateChange = () => {
    console.log('defaultOnBookmarkStateChange fired');
};
