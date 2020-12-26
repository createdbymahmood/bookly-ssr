import React, { FC, Fragment } from 'react';
/* components */
import { SubmitBookForm } from 'components/SubmitBookForm';
import { useSubmitBook } from 'hooks';
import { GetServerSideProps, NextPage } from 'next';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

type Props = {
    bookId: string;
};
const SubmitBook: NextPage<Props> = ({ bookId }) => {
    const { mutate: submitBook, isLoading } = useSubmitBook();

    return (
        <Fragment>
            <Head title="صفحه ثبت کتاب">
                <meta name="description" content="صفحه اختصاصی دسته بندی" />
            </Head>
            <SubmitBookForm
                bookId={bookId}
                loading={isLoading}
                onSubmit={submitBook}
            />
        </Fragment>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    return { props: { bookId: params?.bookdId || null } };
};
export default injectLayoutConfig('submitBook')(SubmitBook);
