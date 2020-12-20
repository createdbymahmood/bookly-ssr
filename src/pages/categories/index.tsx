import { Fragment } from 'react';
/* components */
import { CategoriesGrid } from 'components/Category';
import { readCategories, useCategories } from 'hooks/operations';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
/* helpers */
import { mock } from 'helpers/mock';
/* types */
import { GetServerSideProps } from 'next';
/* modules */

function Categories({ initialCategories }) {
    const { data } = useCategories({
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        initialData: initialCategories,
    });

    return (
        <Fragment>
            <Head title="دسته بندی ها">
                <meta name="description" content="لیست دسته بندی ها " />
            </Head>
            <CategoriesGrid categories={mock('categories', 12)} />
        </Fragment>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await readCategories();
    return {
        props: {
            initialCategories: categories,
        },
    };
};

export default injectLayoutConfig('categories')(Categories);
// export default Login;
