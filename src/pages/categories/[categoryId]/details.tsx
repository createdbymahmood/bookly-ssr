import { Fragment } from 'react';
/* components */
import { BooksGrid } from 'components/Book';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { Head } from 'components/Head';
import { CategoryDetailsBox } from 'components/Category';
/* helpers */
import { mock } from 'helpers/mock';
/* types */
import { GetServerSideProps } from 'next';
/* modules */
import { readCategoryBooks, useCategoryBooks } from 'hooks/operations';
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

function Categories({ initialCategories, categoryId }) {
    const { isLoading, data } = useCategoryBooks(categoryId, {
        initialData: initialCategories,
    });

    return (
        <Fragment>
            <Head title="صفحه دسته بندی">
                <meta name="description" content="صفحه اختصاصی دسته بندی" />
            </Head>
            <Row>
                <Col lg={4}>
                    <CategoryDetailsBox
                        categoryTitle="رُمان"
                        description="توضیحات دسته بندی"
                        imageSrc={generateFakeImageUrl()}
                        loading={isLoading}
                    />
                </Col>
                <Col lg={8}>
                    <BooksGrid
                        books={mock<Book.Base>('books', 12)}
                        loading={isLoading}
                    />
                </Col>
            </Row>
        </Fragment>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const categoryId = query.categoryId;
    const categories = await readCategoryBooks(undefined, categoryId as string);
    return {
        props: {
            initialCategories: categories,
            categoryId,
        },
    };
};

export default injectLayoutConfig('category')(Categories);
// export default Login;
