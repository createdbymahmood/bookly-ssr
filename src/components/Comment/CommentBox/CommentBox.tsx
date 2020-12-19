import React, { FC } from 'react';
/* components */
import { DeleteButton } from 'components/DeleteButton';
import { Text } from 'components/Text';
import { Link } from 'components/Link';
/* modules */
import dayJs from 'dayjs';
/* helpers */
import { routeTo } from 'helpers/routeTo';
import { uniqueId } from 'helpers/uniqueId';
/* assets */
/* types */
import { CommentBoxProps } from './CommentBox.types';
/* styles */
import s from './CommentBox.module.scss';
import { Image } from 'components/Image';

export const CommentBox: FC<CommentBoxProps> = ({
    id: commentId,
    body,
    date,
    username,
    onDelete = defaultOnDelete,
}) => {
    const relativeFakeTime = dayJs().from(date, true);
    const userId = uniqueId();
    return (
        <div className={s.box}>
            {/* navigating to user profile page */}
            <Link
                permission="routes.profile.publicUser"
                {...routeTo.publicUserProfile(userId)}
            >
                <Image className={s.profileImage} src={'/images/book.jpg'} />
            </Link>

            <div className={s.header}>
                <p className={s.description}>
                    <Link
                        permission="routes.profile.publicUser"
                        {...routeTo.publicUserProfile(userId)}
                    >
                        {username}
                    </Link>
                    {'  '}
                    {relativeFakeTime} پیش گفته
                </p>

                <DeleteButton
                    permission="comments.delete"
                    onConfirm={() => onDelete(commentId)}
                    title="برای حذف کردن این نظر مطمئن هستید؟"
                />
            </div>

            <Text className={s.body}>{body}</Text>
        </div>
    );
};

const defaultOnDelete = () => {};
