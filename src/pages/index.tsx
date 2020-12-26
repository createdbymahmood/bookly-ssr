import { Fragment } from 'react';
import { BooksGrid } from 'components/Book';
import { Head } from 'components/Head';
import { mock } from 'helpers/mock';
import { useBooks, readBooks } from 'hooks';
import { compose } from 'helpers/compose';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
import { GetServerSideProps, NextPage } from 'next';
import { injectAuthConfig } from 'components/hoc/injectAuthConfig';

type PageProps = {
    initialBooks: Book.Query.Result[];
};
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
    const books = await readBooks();
    return { props: { initialBooks: books } };
};

const Home: NextPage<PageProps> = ({ initialBooks }) => {
    const { data, isFetched } = useBooks({ initialData: initialBooks });
    return (
        <Fragment>
            <Head title="خانه">
                <meta
                    name="description"
                    content="لیست عکس های ثبت شده توسط کاربران"
                />
            </Head>
            <BooksGrid books={mock<Book.Base>('books', 12)} loading={false} />
        </Fragment>
    );
};

export default compose(
    injectLayoutConfig('home'),
    injectAuthConfig('home.read')
)(Home);
