import React, { FunctionComponent } from 'react';
/* components */
import { Text } from 'components/Text';
import { BookImageCarousel } from 'components/Book';
import { EditButton } from 'components/EditButton';
import { Link } from 'components/Link';
/* assets */
/* modules */
import { routeTo } from 'helpers/routeTo';
import clsx from 'classnames';
/* types */
import { BookDetailsBoxComponentProps } from './BookDetailsBox.types';
/* styles */
import s from './BookDetailsBox.module.scss';

export const BookDetailsBox: FunctionComponent<BookDetailsBoxComponentProps> = ({
    title,
    author,
    id: bookId,
    imageSrc,
}) => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <div className="d-flex align-items-center p-3">
                <Link
                    permission="routes.book.update"
                    {...routeTo.updateBook(bookId)}
                >
                    <EditButton
                        className={s.editIcon}
                        permission="books.update"
                    />
                </Link>
                <Text className={s.title}>{title}</Text>
                <Text className={s.author}>{author}</Text>
            </div>
            <BookImageCarousel />
            {/* <Image className={s.image} src={imageSrc} /> */}
        </div>
    );
};
