import { Fragment } from 'react';
/* components */
import { CommentsGrid } from 'components/Comment';
import { useDeleteComment } from 'hooks/operations';
import { mock } from 'helpers/mock';
import { GetServerSideProps, NextPage } from 'next';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

type Props = {
    userId: string;
};

const User: NextPage<Props> = ({ userId }) => {
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const userId = query.userId;
    return {
        props: { userId },
    };
};

export default injectLayoutConfig('user')(User);
