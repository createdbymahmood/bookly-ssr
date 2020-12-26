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
import { useStateCallback } from 'hooks/useStateWithCallback';

export const BookmarkButton: FC<BookmarkButtonComponentProps> = ({
    onBookmarkStateChange = defaultOnBookmarkStateChange,
    initialBookmarkState = false,
    ...restProps
}) => {
    const [bookmarkState, setBookmarkState] = useStateCallback(
        initialBookmarkState
    );
    const svgColor = classnames(s.bookmark, { [s.black]: bookmarkState });
    const toggleBookmarkState = () => {
        setBookmarkState(
            bs => !bs,
            () => {
                onBookmarkStateChange(bookmarkState);
            }
        );
    };
    return (
        <Image
            data-testid="bookmarkIcon"
            src={'/icons/bookmark.svg'}
            onClick={toggleBookmarkState}
            className={svgColor}
            {...restProps}
        />
    );
};

export const defaultOnBookmarkStateChange = () => {
    console.log('defaultOnBookmarkStateChange fired');
};
