import { Head } from 'components/Head';
import { Fragment } from 'react';
import { Col } from 'components/Col';
import { Row } from 'components/Row';
import { useSingleBook, readBook, useCreateComment } from 'hooks/operations';
import { GetServerSideProps } from 'next';
import { BookDetailsBox } from 'components/Book';
import { AclService } from 'services/rbac';
import { CommentInputBox, CommentsGrid } from 'components/Comment';
import { FormInstance } from 'antd/lib/form';
import { DescriptionBox } from 'components/DescriptionBox';
import { useDeleteComment } from 'hooks/operations/comment/useDeleteComment';
import { mock } from 'helpers/mock';
import { compose } from 'helpers/compose';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

const Book = ({ book, bookId }) => {
    const { data, isLoading } = useSingleBook(bookId, {
        initialData: book,
    });

    const {
        mutate: createComment,
        isLoading: createCommentLoading,
    } = useCreateComment();

    const handleSubmitComment = (comment: string, form: FormInstance) => {
        /* create comment api call */
        createComment(
            { bookId, comment },
            {
                onSuccess: () => {
                    /* reset fields after successful api call */
                    form.resetFields();
                },
            }
        );
    };
    const { mutate: deleteComment } = useDeleteComment();

    const handleDeleteComment = (commentId: string) => {
        /* delete comment api call */
        deleteComment({ commentId });
        console.log(`deleting comment with the commentId: ${commentId} `);
    };

    const description = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`;

    return (
        <Fragment>
            <Head title="صفحه کتاب">
                <meta name="description" content="صفحه توضیحات کتاب" />
            </Head>
            <Row>
                <Col xl={4}>
                    <BookDetailsBox
                        id={bookId}
                        title="کتاب جز از کل"
                        author="استیو تولتز"
                    />
                    <AclService permission="comments.create">
                        <CommentInputBox
                            loading={createCommentLoading}
                            onSubmit={handleSubmitComment}
                        />
                    </AclService>
                </Col>

                <Col xl={8} className="mt-3 mt-xl-0">
                    <DescriptionBox
                        title="مشخصات کتاب"
                        description={description}
                    />
                    <AclService permission="comments.read">
                        <CommentsGrid
                            onDelete={handleDeleteComment}
                            comments={mock('comments', 4)}
                        />
                    </AclService>
                </Col>
            </Row>
        </Fragment>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const book = await readBook(undefined, query.bookId as string);

    return {
        props: {
            book,
            bookId: query.bookId,
        },
    };
};

export default compose(injectLayoutConfig('book'))(Book);
