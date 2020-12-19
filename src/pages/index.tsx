import { Fragment } from 'react';
import { BooksGrid } from 'components/Book';
import { Head } from 'components/Head';
import { mock } from 'helpers/mock';
import { useBooks } from 'hooks/operations';

export default function Home() {
    const { data, isFetched } = useBooks();

    return (
        <Fragment>
            <Head title="خانه">
                <meta
                    name="description"
                    content="لیست عکس های ثبت شده توسط کاربران"
                />
                <meta name="keywords" content="book, scientific books" />
            </Head>
            <BooksGrid
                books={mock<Book.Base>('books', 12)}
                loading={!isFetched}
            />
        </Fragment>
    );
}
