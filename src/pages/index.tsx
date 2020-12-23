import { Fragment } from 'react';
import { BooksGrid } from 'components/Book';
import { Head } from 'components/Head';
import { mock } from 'helpers/mock';
import { useBooks, readBooks } from 'hooks';
import { compose } from 'helpers/compose';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
    const books = await readBooks();
    return { props: { initialData: books } };
};

function Home({
    initialData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { data, isFetched } = useBooks({ initialData });
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

export default compose(injectLayoutConfig('home'))(Home);
