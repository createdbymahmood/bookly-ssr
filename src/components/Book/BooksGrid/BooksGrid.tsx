import React, { FC } from 'react';
/* components */
import { BookBox } from 'components/Book';
import { GenericGrid } from 'components/GenericGrid';
import { Col } from 'components/Col';
/* helpers */
import { uniqueId } from 'helpers/uniqueId';
/* modules */
import { useRouter } from 'next/router';
import { checkInclusion } from 'helpers/checkInclusion';
import { filter } from 'lodash/fp';
/* types */
import { BooksGridProps } from './BooksGrid.types.d';
/* styles */

export const BooksGrid: FC<BooksGridProps> = ({ books, loading = false }) => {
    const { query } = useRouter();

    if (loading) {
        return <BookBox.ShimmerGrid />;
    }

    const filteredBooks = filter<Book.Base>(book =>
        checkInclusion(book.title, query.query)
    )(books);

    return (
        <GenericGrid withRow items={filteredBooks} renderItem={renderBooks} />
    );
};

const renderBooks = (book: Book.Base) => (
    <Col md={6} xl={4} className="mb-3" key={uniqueId()}>
        <BookBox.Component
            id={book.id}
            title={book.title}
            author={book.author}
            imageSrc={book.imageSrc}
            initialLikeState={book.initialLikeState}
            onDeleteBook={bookId => console.log(bookId)}
            data-testid="bookBox"
        />
    </Col>
);
