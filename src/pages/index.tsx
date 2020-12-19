import { Fragment } from 'react';
import { BooksGrid } from 'components/Book';
import { Head } from 'components/Head';
import { mock } from 'helpers/mock';
import { useBooks, readBooks } from 'hooks/operations';
import apiService from 'services/api/apiService';

export default function Home(props) {
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

export const getServerSideProps = async () => {
    const books = await readBooks();

    return {
        props: {
            initialBooks: books,
        },
    };
};
