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
        <div className={clsx(s.box, `shadow`)} data-testid="wrapper">
            <div className="d-flex align-items-center p-3">
                <Link permission="books.update" {...routeTo.updateBook(bookId)}>
                    <EditButton
                        data-testid="editButton"
                        className={s.editIcon}
                        permission="books.update"
                    />
                </Link>
                <Text data-testid="title" className={s.title}>
                    {title}
                </Text>
                <Text data-testid="author" className={s.author}>
                    {author}
                </Text>
            </div>
            <BookImageCarousel />
        </div>
    );
};
