import { Fragment } from 'react';
/* components */
import { CommentsGrid } from 'components/Comment';
import { useDeleteComment } from 'hooks';
import { mock } from 'helpers/mock';
import { GetServerSideProps, NextPage } from 'next';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

type PageProps = {
    userId: string;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
    query,
}) => {
    const userId = query.userId as string;
    return {
        props: { userId },
    };
};

const User: NextPage<PageProps> = ({ userId }) => {
    const { mutate: deleteComment } = useDeleteComment();

    return (
        <Fragment>
            <Head title="صفحه اختصاصی کاربر">
                <meta name="description" content="صفحه اختصاصی دسته بندی" />
            </Head>
            <CommentsGrid
                title={`نظرات داده شده توسط کاربر با آی دی ${userId}`}
                comments={mock<Comment.Base>('comments')}
                onDelete={commentId => {
                    deleteComment({ commentId });
                }}
            />
        </Fragment>
    );
};

export default injectLayoutConfig('user')(User);
