import { Fragment } from 'react';
/* components */
import { Publisher, PublishersGrid } from 'components/Publisher';
import { readPublishers, usePublishers } from 'hooks';
import { mock } from 'helpers/mock';
import { Head } from 'components/Head';
import { GetServerSideProps, NextPage } from 'next';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

type Props = {
    initialData: Publisher[];
};

const Publishers: NextPage<Props> = ({ initialData }) => {
    const { data } = usePublishers({ initialData });

    return (
        <Fragment>
            <Head title="لیست ناشران">
                <meta
                    name="description"
                    content="لیست ناشرانی که در وب سایت کتاب نشر کرده اند"
                />
            </Head>
            <PublishersGrid publishers={mock('publishers')} />
        </Fragment>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const publishers = await readPublishers();
    return {
        props: {
            initialData: publishers,
        },
    };
};

export default injectLayoutConfig('publishers')(Publishers);
