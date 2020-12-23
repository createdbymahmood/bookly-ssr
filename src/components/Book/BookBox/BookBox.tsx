import React, { useRef } from 'react';
/* components */
import { LikeButton } from 'components/LikeButton';
import { Image } from 'components/Image';
import { DeleteButton } from 'components/DeleteButton';
import { Text } from 'components/Text';
/* modules */
import { Link } from 'components/Link';
import { useDeleteBook, useLikeBook, useOverflow } from 'hooks';
/* assets */
/* types */
import { BookProps } from './BookBox.types';
/* styles */
import s from './BookBox.module.scss';
import { routeTo } from 'helpers/routeTo';

export const BookBox: React.FC<BookProps> = ({
    initialLikeState,
    title,
    author,
    imageSrc,
    onDeleteBook,
    id: bookId,
    ...restProps
}) => {
    const { mutate: like, isLoading: likeIsLoading } = useLikeBook();
    const {
        mutate: deleteBook,
        isLoading: deleteBookIsLoading,
    } = useDeleteBook();

    const handleLikeChange = (likeState: boolean, bookId: string) => {
        like({ likeState, bookId });
    };

    const handleDeleteBook = (bookId: string) => {
        deleteBook({ bookId });
    };

    const titleRef = useRef<HTMLParagraphElement>(null!);
    const authorRef = useRef<HTMLParagraphElement>(null!);
    const authorSubtitleRef = useRef<HTMLParagraphElement>(null!);
    const [titleIsOverflowing] = useOverflow(titleRef);
    const [authorIsOverflowing] = useOverflow(authorRef);
    const [authorSubtitleIsOverflowing] = useOverflow(authorSubtitleRef);

    return (
        <div className={`${s.box} shadow`} {...restProps}>
            <div
                className={s.content}
                id="content"
                aria-details="contains the header of our bookbox"
            >
                <Text
                    ref={titleRef}
                    withTooltip={titleIsOverflowing}
                    className={`${s.title} truncate`}
                >
                    {title}
                </Text>
                <div className={s.authorWrap}>
                    <Text
                        ref={authorRef}
                        withTooltip={authorIsOverflowing}
                        className={`${s.author} truncate`}
                    >
                        {author}
                    </Text>
                    <Text
                        ref={authorSubtitleRef}
                        withTooltip={authorSubtitleIsOverflowing}
                        className={s.authorTitle}
                    >
                        نویسنده
                    </Text>
                </div>
            </div>
            <div className="p-1">
                <Link permission="routes.book.read" {...routeTo.book(bookId)}>
                    <Image className={s.image} src={imageSrc} />
                </Link>
            </div>

            <div
                className={s.actions}
                id="actions"
                aria-details="like and delete button of bookbox"
            >
                <LikeButton
                    permission="books.like"
                    data-testid="likeButton"
                    onChange={likeState => handleLikeChange(likeState, bookId)}
                    initialLikeState={initialLikeState}
                    loading={likeIsLoading}
                />
                <DeleteButton
                    permission="books.delete"
                    data-testid="deleteButton"
                    title="برای حذف کردن این کتاب مطمئن هستید ؟"
                    onConfirm={() => handleDeleteBook(bookId)}
                    className={s.deleteIcon}
                    loading={deleteBookIsLoading}
                />
            </div>
        </div>
    );
};
