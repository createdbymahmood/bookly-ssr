import { Fragment } from 'react';
/* components */
import { CategoriesGrid } from 'components/Category';
import { readCategories, useCategories } from 'hooks';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
/* helpers */
import { mock } from 'helpers/mock';
/* types */
import { GetServerSideProps, NextPage } from 'next';
/* modules */

type Props = {
    initialCategories: Category.Base[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const categories = await readCategories();
    return {
        props: {
            initialCategories: categories,
        },
    };
};

const Categories: NextPage<Props> = ({ initialCategories }) => {
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
};

export default injectLayoutConfig('categories')(Categories);
// export default Login;
