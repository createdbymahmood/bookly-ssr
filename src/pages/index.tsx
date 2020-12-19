import { Fragment } from 'react';
import { BooksGrid } from 'components/Book';
import { Head } from 'components/Head';
import { mock } from 'helpers/mock';
import { useBooks, readBooks } from 'hooks/operations';
import { compose } from 'helpers/compose';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
import { GetServerSideProps } from 'next';

function Home(props) {
    const { data, isFetched } = useBooks({ initialData: props.initialBooks });
    return (
        <Fragment>
            <Head title="خانه">
                <meta
                    name="description"
                    content="لیست عکس های ثبت شده توسط کاربران"
                />
                <meta name="keywords" content="book, scientific books" />
            </Head>
            <BooksGrid books={mock<Book.Base>('books', 12)} loading={false} />
        </Fragment>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const books = await readBooks();
    return {
        props: {
            initialBooks: books,
        },
    };
};

export default compose(injectLayoutConfig('home'))(Home);
